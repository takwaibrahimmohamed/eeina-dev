import React, { useState } from "react";
import Cropper from 'react-easy-crop';
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import { 
  ChefHat,
  Plus,
  X,
  Upload,
  Clock,
  Users,
  Camera,
  Video,
  FileText,
  Trash2,
  ChevronDown,
  RotateCw,
  ZoomIn,
  ZoomOut,
  Move,
  Check
} from "lucide-react";

interface Ingredient {
  id: number;
  quantity: string;
  weight: string;
  name: string;
}

interface Step {
  id: number;
  image: string | null;
  instructions: string;
}

interface AdditionalImage {
  id: number;
  image: string | null;
}

interface CropModalState {
  isOpen: boolean;
  imageType: 'thumbnail' | 'additional' | 'step';
  imageId?: number;
  originalImage: string | null;
}

export const CreateRecipe = (): JSX.Element => {
  const { t, isRTL, language } = useLanguage();
  const [recipeTitle, setRecipeTitle] = useState('');
  const [ingredientName, setIngredientName] = useState('');
  const [preparationTime, setPreparationTime] = useState('');
  const [servings, setServings] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [description, setDescription] = useState('');
  const [thumbnailImage, setThumbnailImage] = useState<string | null>(null);
  const [additionalImages, setAdditionalImages] = useState<AdditionalImage[]>([
    { id: 1, image: null }
  ]);
  
  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: 1, quantity: '', weight: '', name: '' }
  ]);
  
  const [steps, setSteps] = useState<Step[]>([
    { id: 1, image: null, instructions: '' }
  ]);

  // Image cropping states
  const [cropModal, setCropModal] = useState<CropModalState>({
    isOpen: false,
    imageType: 'thumbnail',
    imageId: undefined,
    originalImage: null
  });
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const [isUploading, setIsUploading] = useState(false);

  // Temporary image storage before cropping
  const [tempImages, setTempImages] = useState<{[key: string]: string}>({});

  const quantityOptions = [
    "1", "2", "3", "4", "5", "1/2", "1/3", "1/4", "2/3", "3/4"
  ];

  const weightOptions = [
    "g", "kg", "ml", "l", "cup", "tbsp", "tsp", "oz", "lb", "piece"
  ];

  const addIngredient = () => {
    const newIngredient: Ingredient = {
      id: ingredients.length + 1,
      quantity: '',
      weight: '',
      name: ''
    };
    setIngredients([...ingredients, newIngredient]);
  };

  const removeIngredient = (id: number) => {
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter(ingredient => ingredient.id !== id));
    }
  };

  const updateIngredient = (id: number, field: keyof Ingredient, value: string) => {
    setIngredients(ingredients.map(ingredient => 
      ingredient.id === id ? { ...ingredient, [field]: value } : ingredient
    ));
  };

  const addStep = () => {
    const newStep: Step = {
      id: steps.length + 1,
      image: null,
      instructions: ''
    };
    setSteps([...steps, newStep]);
  };

  const addAdditionalImage = () => {
    const newImage: AdditionalImage = {
      id: additionalImages.length + 1,
      image: null
    };
    setAdditionalImages([...additionalImages, newImage]);
  };

  const removeAdditionalImage = (id: number) => {
    if (additionalImages.length > 1) {
      setAdditionalImages(additionalImages.filter(img => img.id !== id));
    }
  };

  const updateAdditionalImage = (id: number, imageUrl: string) => {
    setAdditionalImages(additionalImages.map(img => 
      img.id === id ? { ...img, image: imageUrl } : img
    ));
  };

  const removeStep = (id: number) => {
    if (steps.length > 1) {
      setSteps(steps.filter(step => step.id !== id));
    }
  };

  const updateStep = (id: number, field: keyof Step, value: string) => {
    setSteps(steps.map(step => 
      step.id === id ? { ...step, [field]: value } : step
    ));
  };

  const handleImageUpload = (type: 'thumbnail' | 'additional' | 'step', id?: number) => {
    // Create file input
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        setIsUploading(true);
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result as string;
          const tempKey = `${type}-${id || 'main'}`;
          
          // Store the uploaded image temporarily
          setTempImages(prev => ({
            ...prev,
            [tempKey]: imageUrl
          }));
          
          // Set the image directly for now (user can crop later)
          if (type === 'thumbnail') {
            setThumbnailImage(imageUrl);
          } else if (type === 'additional' && id) {
            updateAdditionalImage(id, imageUrl);
          } else if (type === 'step' && id) {
            updateStep(id, 'image', imageUrl);
          }
          
          setIsUploading(false);
        };
        reader.onerror = () => {
          setIsUploading(false);
        };
        reader.readAsDataURL(file);
      }
    };
    input.click();
  };

  const handleCropImage = (type: 'thumbnail' | 'additional' | 'step', id?: number) => {
    const tempKey = `${type}-${id || 'main'}`;
    const originalImage = tempImages[tempKey] || 
      (type === 'thumbnail' ? thumbnailImage : 
       type === 'additional' ? additionalImages.find(img => img.id === id)?.image :
       steps.find(step => step.id === id)?.image);
    
    if (originalImage) {
      setCropModal({
        isOpen: true,
        imageType: type,
        imageId: id,
        originalImage
      });
    }
  };

  // Create image from canvas
  const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.addEventListener('load', () => resolve(image));
      image.addEventListener('error', error => reject(error));
      image.setAttribute('crossOrigin', 'anonymous');
      image.src = url;
    });

  // Get cropped image
  const getCroppedImg = async (
    imageSrc: string,
    pixelCrop: any,
    rotation = 0
  ): Promise<string> => {
    const image = await createImage(imageSrc);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('No 2d context');
    }

    const maxSize = Math.max(image.width, image.height);
    const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

    canvas.width = safeArea;
    canvas.height = safeArea;

    ctx.translate(safeArea / 2, safeArea / 2);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.translate(-safeArea / 2, -safeArea / 2);

    ctx.drawImage(
      image,
      safeArea / 2 - image.width * 0.5,
      safeArea / 2 - image.height * 0.5
    );

    const data = ctx.getImageData(0, 0, safeArea, safeArea);

    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;

    ctx.putImageData(
      data,
      Math.round(0 - safeArea / 2 + image.width * 0.5 - (pixelCrop.x || 0)),
      Math.round(0 - safeArea / 2 + image.height * 0.5 - (pixelCrop.y || 0))
    );

    // Compress image to under 900KB
    return new Promise((resolve) => {
      const compressImage = (quality: number) => {
        canvas.toBlob((blob) => {
          if (blob && blob.size <= 900 * 1024) {
            // Under 900KB, use this quality
            resolve(canvas.toDataURL('image/jpeg', quality));
          } else if (quality > 0.1) {
            // Try lower quality
            compressImage(quality - 0.1);
          } else {
            // Use minimum quality
            resolve(canvas.toDataURL('image/jpeg', 0.1));
          }
        }, 'image/jpeg', quality);
      };
      compressImage(0.9); // Start with 90% quality
    });
  };

  const onCropComplete = (croppedArea: any, croppedAreaPixels: any) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };

  const handleCropSave = async () => {
    if (!cropModal.originalImage || !croppedAreaPixels) return;

    try {
      setIsUploading(true);
      const croppedImage = await getCroppedImg(
        cropModal.originalImage,
        croppedAreaPixels,
        rotation
      );

      // Apply the cropped image based on type
      if (cropModal.imageType === 'thumbnail') {
        setThumbnailImage(croppedImage);
      } else if (cropModal.imageType === 'additional' && cropModal.imageId) {
        updateAdditionalImage(cropModal.imageId, croppedImage);
      } else if (cropModal.imageType === 'step' && cropModal.imageId) {
        updateStep(cropModal.imageId, 'image', croppedImage);
      }

      // Close modal
      setCropModal({
        isOpen: false,
        imageType: 'thumbnail',
        imageId: undefined,
        originalImage: null
      });
      setCrop({ x: 0, y: 0 });
      setZoom(1);
      setRotation(0);
      setCroppedAreaPixels(null);
      setIsUploading(false);
    } catch (error) {
      console.error('Error cropping image:', error);
      setIsUploading(false);
      alert('Error cropping image. Please try again.');
    }
  };

  const handleCropCancel = () => {
    setCropModal({
      isOpen: false,
      imageType: 'thumbnail',
      imageId: undefined,
      originalImage: null
    });
    setCrop({ x: 0, y: 0 });
    setZoom(1);
    setRotation(0);
    setCroppedAreaPixels(null);
  };

  const handleImportRecipe = () => {
    // Simulate importing recipe from URL
    console.log('Importing recipe from URL...');
  };

  const handleCreateRecipe = () => {
    const recipeData = {
      title: recipeTitle,
      ingredientName,
      preparationTime,
      servings,
      videoUrl,
      description,
      ingredients,
      steps,
      thumbnailImage,
      additionalImages
    };
    
    console.log('Creating recipe:', recipeData);
    // Here you would send the data to your backend
  };

  return (
    <>
      <div className="bg-gray-50 min-h-screen">
        <TopCreatorsSection />
        
        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ChefHat className="w-8 h-8 text-[#22ae4b]" />
              <div>
              <div className="text-sm text-[#22ae4b] font-medium">{language === 'ar' ? 'الوصفات' : 'Recipes'}</div>
              <h1 className="text-3xl font-bold text-gray-900">{t.create_recipe.create_new_recipe}</h1>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-12 gap-8">
            {/* Main Form */}
            <div className="col-span-12 lg:col-span-8">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-gray-900">{t.create_recipe.create_new_recipe}</h2>
                  </div>

                  <div className="space-y-8">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.create_recipe.recipe_title}
                        </label>
                        <Input
                          placeholder={t.create_recipe.recipe_title}
                          value={recipeTitle}
                          onChange={(e) => setRecipeTitle(e.target.value)}
                          className={`border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] h-12 ${isRTL ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.create_recipe.ingredient_name}
                        </label>
                        <Input
                          placeholder={t.create_recipe.ingredient_name}
                          value={ingredientName}
                          onChange={(e) => setIngredientName(e.target.value)}
                          className={`border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] h-12 ${isRTL ? 'text-right' : 'text-left'}`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Preparation Time
                        </label>
                        <Input
                          placeholder="e.g 45 minutes"
                          value={preparationTime}
                          onChange={(e) => setPreparationTime(e.target.value)}
                          className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Servings
                        </label>
                        <Input
                          placeholder="10"
                          value={servings}
                          onChange={(e) => setServings(e.target.value)}
                          className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] h-12"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Video Url
                        </label>
                        <Input
                          placeholder="www.youtube.com"
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                          className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] h-12"
                        />
                      </div>
                    </div>

                    {/* Images Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Thumbnail Image
                        </label>
                        <div 
                          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-[#22ae4b] transition-colors h-48"
                          onClick={() => handleImageUpload('thumbnail')}
                        >
                          {thumbnailImage ? (
                            <div className="relative w-full h-full">
                              <img src={thumbnailImage} alt="Thumbnail" className="w-full h-full object-cover rounded" />
                              <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                                <Button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleCropImage('thumbnail');
                                  }}
                                  className="bg-white text-gray-900 hover:bg-gray-100"
                                  size="sm"
                                >
                                  Crop Image
                                </Button>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full">
                              <div className="w-12 h-12 bg-[#22ae4b] rounded-full flex items-center justify-center mb-3">
                                <Camera className="w-6 h-6 text-white" />
                              </div>
                              <span className="text-gray-600 font-medium">Click to upload thumbnail</span>
                              <span className="text-sm text-gray-500 mt-1">Then crop to perfect size</span>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Additional Images
                        </label>
                        <div className="space-y-4">
                          {additionalImages.map((imageItem) => (
                            <div key={imageItem.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                              <div 
                                className="flex-1 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#22ae4b] transition-colors h-32"
                                onClick={() => handleImageUpload('additional', imageItem.id)}
                              >
                                {imageItem.image ? (
                                  <div className="relative w-full h-full">
                                    <img src={imageItem.image} alt={`Additional ${imageItem.id}`} className="w-full h-full object-cover rounded" />
                                    <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                                      <Button
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          handleCropImage('additional', imageItem.id);
                                        }}
                                        className="bg-white text-gray-900 hover:bg-gray-100"
                                        size="sm"
                                      >
                                        Crop
                                      </Button>
                                    </div>
                                  </div>
                                ) : (
                                  <div className="flex flex-col items-center justify-center h-full">
                                    <div className="w-8 h-8 bg-[#22ae4b] rounded-full flex items-center justify-center mb-2">
                                      <Camera className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-600">Click to upload</span>
                                  </div>
                                )}
                              </div>
                              {additionalImages.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeAdditionalImage(imageItem.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50 h-12 w-12"
                                >
                                  <X className="w-5 h-5" />
                                </Button>
                              )}
                            </div>
                          ))}
                          <Button
                            variant="outline"
                            onClick={addAdditionalImage}
                            className="w-full border-[#22ae4b] text-[#22ae4b] hover:bg-[#22ae4b] hover:text-white h-12"
                          >
                            <Plus className="w-4 h-4 mr-2" />
                            Add Image
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t.create_recipe.description}
                      </label>
                      <textarea
                        placeholder={language === 'ar' ? 'اوصف وصفتك بالتفصيل...' : 'Describe your recipe in detail...'}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        rows={6}
                        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] resize-none text-base ${isRTL ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                    </div>

                    {/* Add Ingredients */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">{t.create_recipe.add_ingredients}</h3>
                      <div className="space-y-4">
                        {ingredients.map((ingredient) => (
                          <div key={ingredient.id} className="grid grid-cols-12 gap-4 items-end p-4 bg-gray-50 rounded-lg">
                            <div className="col-span-12 md:col-span-3">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Quantity
                              </label>
                              <div className="relative">
                                <select
                                  value={ingredient.quantity}
                                  onChange={(e) => updateIngredient(ingredient.id, 'quantity', e.target.value)}
                                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] appearance-none bg-white h-12"
                                >
                                  <option value="">e.g 5</option>
                                  {quantityOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                  ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                              </div>
                            </div>
                            <div className="col-span-12 md:col-span-3">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Choose weight
                              </label>
                              <div className="relative">
                                <select
                                  value={ingredient.weight}
                                  onChange={(e) => updateIngredient(ingredient.id, 'weight', e.target.value)}
                                  className="w-full px-3 py-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] appearance-none bg-white h-12"
                                >
                                  <option value="">Weight</option>
                                  {weightOptions.map((option) => (
                                    <option key={option} value={option}>{option}</option>
                                  ))}
                                </select>
                                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                              </div>
                            </div>
                            <div className="col-span-12 md:col-span-5">
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                Ingredient name
                              </label>
                              <Input
                                placeholder="Name"
                                value={ingredient.name}
                                onChange={(e) => updateIngredient(ingredient.id, 'name', e.target.value)}
                                className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] h-12"
                              />
                            </div>
                            <div className="col-span-12 md:col-span-1">
                              {ingredients.length > 1 && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => removeIngredient(ingredient.id)}
                                  className="text-red-500 hover:text-red-700 hover:bg-red-50 h-12 w-12"
                                >
                                  <X className="w-5 h-5" />
                                </Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        variant="outline"
                        onClick={addIngredient}
                        className="mt-4 border-[#22ae4b] text-[#22ae4b] hover:bg-[#22ae4b] hover:text-white h-12 px-6"
                      >
                        <Plus className="w-4 h-4 mr-2" />
                        Add ingredients
                      </Button>
                    </div>

                    {/* Instructions */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Instructions</h3>
                      <div className="space-y-6">
                        {steps.map((step) => (
                          <Card key={step.id} className="border-2 border-gray-200">
                            <CardContent className="p-6">
                              <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-3">
                                  <div className="w-8 h-8 bg-[#22ae4b] rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">{step.id}</span>
                                  </div>
                                  <span className="text-lg font-semibold text-gray-900">Step {step.id}</span>
                                </div>
                                {steps.length > 1 && (
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    onClick={() => removeStep(step.id)}
                                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                  >
                                    <Trash2 className="w-4 h-4" />
                                  </Button>
                                )}
                              </div>
                              
                              <div className="space-y-6">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">Step Image (Optional)</label>
                                  <div 
                                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-[#22ae4b] transition-colors h-40"
                                    onClick={() => handleImageUpload('step', step.id)}
                                  >
                                    {step.image ? (
                                      <div className="relative w-full h-full">
                                        <img src={step.image} alt={`Step ${step.id}`} className="w-full h-full object-cover rounded" />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 hover:opacity-100 transition-opacity rounded flex items-center justify-center">
                                          <Button
                                            onClick={(e) => {
                                              e.stopPropagation();
                                              handleCropImage('step', step.id);
                                            }}
                                            className="bg-white text-gray-900 hover:bg-gray-100"
                                            size="sm"
                                          >
                                            Crop Image
                                          </Button>
                                        </div>
                                      </div>
                                    ) : (
                                      <div className="flex flex-col items-center justify-center h-full">
                                        <div className="w-10 h-10 bg-[#22ae4b] rounded-full flex items-center justify-center mb-2">
                                          <Plus className="w-5 h-5 text-white" />
                                        </div>
                                        <span className="text-sm text-gray-500">Add Step Image</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">Instructions</label>
                                  <textarea
                                    placeholder="Describe the cooking steps in detail..."
                                    value={step.instructions}
                                    onChange={(e) => updateStep(step.id, 'instructions', e.target.value)}
                                    rows={8}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] resize-none text-base"
                                  />
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                        
                        <Button
                          variant="outline"
                          onClick={addStep}
                          className="w-full border-[#22ae4b] text-[#22ae4b] hover:bg-[#22ae4b] hover:text-white h-12"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Add Step
                        </Button>
                      </div>
                    </div>

                    <div className="pt-6">
                      <Button 
                        onClick={handleCreateRecipe}
                        className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white py-4 text-lg font-semibold rounded-xl h-14"
                      >
                        {t.create_recipe.create_recipe}
                      </Button>
                    </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-12 lg:col-span-4">
              <div className="sticky top-24 space-y-6">
                {/* Import Recipe */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-[#22ae4b] rounded-full flex items-center justify-center">
                        <Plus className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900">Import new recipe</h3>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">
                      Import a recipe from a URL to automatically fill in the details
                    </p>
                    <Input
                      placeholder="Enter recipe URL..."
                      className="mb-4 border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] h-12"
                    />
                    <Button 
                      onClick={handleImportRecipe}
                      className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white h-12"
                    >
                      Import Recipe
                    </Button>
                  </CardContent>
                </Card>

                {/* Recipe Tips */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4">Recipe Tips</h3>
                    <div className="space-y-3 text-sm text-gray-600">
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                        <p>Use high-quality images to make your recipe more appealing</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                        <p>Be specific with measurements and cooking times</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                        <p>Include step-by-step photos for complex techniques</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                        <p>Add personal notes and variations to make it unique</p>
                      </div>
                      <div className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                        <p>Test your recipe multiple times before publishing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Advertisement */}
                <Card className="bg-gradient-to-br from-[#22ae4b] to-[#1c9a40] rounded-2xl border-0 h-80 overflow-hidden">
                  <CardContent className="p-0 h-full relative">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
                      <div className="text-white text-6xl font-extrabold mb-4 opacity-90">
                        AD
                      </div>
                      <div className="text-white text-lg font-semibold mb-2">
                        Your Brand Here
                      </div>
                      <div className="text-white/80 text-sm">
                        Reach thousands of food enthusiasts
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Image Crop Modal */}
        {cropModal.isOpen && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-2 sm:p-4">
            <div className="bg-white rounded-lg sm:rounded-2xl w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-hidden flex flex-col">
              {/* Modal Header */}
              <div className="p-4 sm:p-6 border-b border-gray-200 flex-shrink-0">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">Crop & Compress Image</h3>
                  <Button variant="ghost" size="icon" onClick={handleCropCancel}>
                    <X className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mt-2">
                  Adjust the crop area, zoom, and rotation as needed
                </p>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col min-h-0">
                {/* Crop Area */}
                <div className="relative bg-gray-100 w-full h-64 sm:h-80 lg:h-96">
                  <Cropper
                    image={cropModal.originalImage}
                    crop={crop}
                    zoom={zoom}
                    rotation={rotation}
                    aspect={cropModal.imageType === 'thumbnail' ? 4/3 : 16/9}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                    onRotationChange={setRotation}
                  />
                </div>

                {/* Controls */}
                <div className="p-4 sm:p-6 border-t border-gray-200 flex-shrink-0">
                  <div className="space-y-4">
                    {/* Zoom Control */}
                    <div className="flex items-center gap-4">
                      <ZoomOut className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <input
                        type="range"
                        value={zoom}
                        min={1}
                        max={3}
                        step={0.1}
                        onChange={(e) => {
                          setZoom(Number(e.target.value));
                        }}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <ZoomIn className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600 w-10 sm:w-12 text-right">{zoom.toFixed(1)}x</span>
                    </div>

                    {/* Rotation Control */}
                    <div className="flex items-center gap-4">
                      <RotateCw className="w-4 h-4 text-gray-500 flex-shrink-0" />
                      <input
                        type="range"
                        value={rotation}
                        min={-180}
                        max={180}
                        step={1}
                        onChange={(e) => {
                          setRotation(Number(e.target.value));
                        }}
                        className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                      />
                      <span className="text-xs sm:text-sm text-gray-600 w-10 sm:w-12 text-right">{rotation}°</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-600">
                        <span className="hidden sm:inline">Drag to move • Scroll to zoom</span>
                        <span className="sm:hidden">Drag • Scroll</span>
                      </div>
                      <div className="flex gap-2 sm:gap-3 w-full sm:w-auto">
                        <Button 
                          variant="outline" 
                          onClick={handleCropCancel} 
                          size="sm"
                          className="flex-1 sm:flex-none"
                        >
                          Cancel
                        </Button>
                        <Button 
                          onClick={handleCropSave}
                          disabled={!croppedAreaPixels}
                          className="flex-1 sm:flex-none bg-[#22ae4b] hover:bg-[#1c9a40] text-white disabled:opacity-50 disabled:cursor-not-allowed"
                          size="sm"
                        >
                          <Check className="w-4 h-4 mr-2" />
                          <span className="hidden sm:inline">Save Cropped Image</span>
                          <span className="sm:hidden">Save Image</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Upload Loading Modal */}
        {isUploading && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl p-8 max-w-sm w-full mx-4 text-center">
              <div className="w-16 h-16 border-4 border-[#22ae4b] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing Image</h3>
              <p className="text-gray-600 text-sm">Please wait while we process and save your image...</p>
            </div>
          </div>
        )}

        <AdSection />
      </div>
    </>
  );
};