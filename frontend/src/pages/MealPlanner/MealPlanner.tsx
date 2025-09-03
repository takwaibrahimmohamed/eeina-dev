import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Avatar } from "../../components/ui/avatar";
import {
   Calendar,
   ChevronLeft,
   ChevronRight,
   Plus,
   Clock,
   Users,
   Target,
   TrendingUp,
   Apple,
   Zap,
   Heart,
   Activity,
   BarChart3,
   CalendarDays,
   Utensils,
   Coffee,
   Sun,
   Moon,
   Search,
   X,
   Star,
   ChefHat,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export const MealPlanner = (): JSX.Element => {
   const { t, isRTL, language } = useLanguage();
   const [currentDate, setCurrentDate] = useState(new Date());
   const [selectedDate, setSelectedDate] = useState(new Date());
   const [viewMode, setViewMode] = useState<"week" | "day">("week");
   const [showAddRecipeModal, setShowAddRecipeModal] = useState(false);
   const [selectedMealType, setSelectedMealType] = useState<string>("");
   const [searchQuery, setSearchQuery] = useState("");
   const [activeTab, setActiveTab] = useState<"trending" | "saved" | "search">("trending");
   const [showCustomMealModal, setShowCustomMealModal] = useState(false);
   const [customMealName, setCustomMealName] = useState("");
   const [customMealTime, setCustomMealTime] = useState("");
   const [mealPlans, setMealPlans] = useState({
      "2024-01-15": {
         breakfast: [
            {
               id: 1,
               name: "Avocado Toast with Eggs",
               image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
               calories: 420,
               protein: 18,
               carbs: 32,
               fat: 24,
               time: "15 min",
            },
         ],
         lunch: [
            {
               id: 2,
               name: "Mediterranean Quinoa Bowl",
               image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
               calories: 520,
               protein: 22,
               carbs: 68,
               fat: 16,
               time: "20 min",
            },
         ],
         dinner: [
            {
               id: 3,
               name: "Grilled Salmon with Vegetables",
               image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
               calories: 680,
               protein: 45,
               carbs: 28,
               fat: 38,
               time: "30 min",
            },
         ],
         "11am-snack": [
            {
               id: 4,
               name: "Greek Yogurt with Berries",
               image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
               calories: 180,
               protein: 12,
               carbs: 24,
               fat: 4,
               time: "5 min",
            },
         ],
      },
      "2024-01-16": {
         breakfast: [
            {
               id: 5,
               name: "Greek Yogurt Parfait",
               image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
               calories: 350,
               protein: 20,
               carbs: 45,
               fat: 8,
               time: "5 min",
            },
         ],
         lunch: [
            {
               id: 6,
               name: "Chicken Caesar Salad",
               image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=200&h=150&fit=crop",
               calories: 480,
               protein: 35,
               carbs: 18,
               fat: 28,
               time: "15 min",
            },
         ],
      },
   });

   // Nutrition goals
   const nutritionGoals = {
      calories: 2000,
      protein: 150,
      carbs: 250,
      fat: 67,
   };

   // Trending recipes data
   const trendingRecipes = [
      {
         id: 1,
         title: "Spicy Thai Basil Chicken",
         image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
         calories: 520,
         protein: 35,
         carbs: 28,
         fat: 24,
         time: "25 min",
         rating: 4.8,
         category: "Asian",
      },
      {
         id: 2,
         title: "Mediterranean Quinoa Bowl",
         image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
         calories: 420,
         protein: 18,
         carbs: 52,
         fat: 16,
         time: "15 min",
         rating: 4.6,
         category: "Healthy",
      },
      {
         id: 3,
         title: "Classic Margherita Pizza",
         image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
         calories: 680,
         protein: 28,
         carbs: 72,
         fat: 32,
         time: "45 min",
         rating: 4.7,
         category: "Pizza",
      },
      {
         id: 4,
         title: "Fluffy Pancakes with Berries",
         image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
         calories: 380,
         protein: 12,
         carbs: 58,
         fat: 14,
         time: "20 min",
         rating: 4.5,
         category: "Breakfast",
      },
   ];

   // Saved recipes data
   const savedRecipes = [
      {
         id: 5,
         title: "Creamy Porcini Mushroom Polenta",
         image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
         calories: 450,
         protein: 16,
         carbs: 48,
         fat: 22,
         time: "30 min",
         rating: 4.9,
         category: "Pasta",
      },
      {
         id: 6,
         title: "Grilled Salmon with Vegetables",
         image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
         calories: 580,
         protein: 42,
         carbs: 18,
         fat: 36,
         time: "25 min",
         rating: 4.8,
         category: "Healthy",
      },
      {
         id: 7,
         title: "Chocolate Lava Cake",
         image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop",
         calories: 520,
         protein: 8,
         carbs: 64,
         fat: 28,
         time: "35 min",
         rating: 4.9,
         category: "Dessert",
      },
   ];

   // Search recipes (filtered from trending + saved)
   const allRecipes = [...trendingRecipes, ...savedRecipes];
   const searchResults = allRecipes.filter(
      (recipe) =>
         recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
         recipe.category.toLowerCase().includes(searchQuery.toLowerCase())
   );

   // Get current week dates
   const getWeekDates = (date: Date) => {
      const week = [];
      const startDate = new Date(date);
      const day = startDate.getDay();
      const diff = startDate.getDate() - day;
      startDate.setDate(diff);

      for (let i = 0; i < 7; i++) {
         const currentDate = new Date(startDate);
         currentDate.setDate(startDate.getDate() + i);
         week.push(currentDate);
      }
      return week;
   };

   const weekDates = getWeekDates(currentDate);
   const dayNames =
      language === "ar"
         ? ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"]
         : ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
   const monthNames =
      language === "ar"
         ? [
              "يناير",
              "فبراير",
              "مارس",
              "أبريل",
              "مايو",
              "يونيو",
              "يوليو",
              "أغسطس",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
           ]
         : [
              "January",
              "February",
              "March",
              "April",
              "May",
              "June",
              "July",
              "August",
              "September",
              "October",
              "November",
              "December",
           ];

   // Calculate daily nutrition
   const calculateDayNutrition = (dateStr: string) => {
      const meals = mealPlans[dateStr];
      if (!meals) return { calories: 0, protein: 0, carbs: 0, fat: 0 };

      let totals = { calories: 0, protein: 0, carbs: 0, fat: 0 };
      Object.values(meals).forEach((mealArray) => {
         if (Array.isArray(mealArray)) {
            mealArray.forEach((meal) => {
               totals.calories += meal.calories;
               totals.protein += meal.protein;
               totals.carbs += meal.carbs;
               totals.fat += meal.fat;
            });
         }
      });
      return totals;
   };

   // Format date for key
   const formatDateKey = (date: Date) => {
      return date.toISOString().split("T")[0];
   };

   const selectedDateKey = formatDateKey(selectedDate);
   const selectedDayMeals = mealPlans[selectedDateKey] || {};
   const selectedDayNutrition = calculateDayNutrition(selectedDateKey);

   // Get all meal types for the selected day (including custom ones)
   const getMealTypes = (dateKey: string) => {
      const dayMeals = mealPlans[dateKey] || {};
      const standardMeals =
         language === "ar"
         ? ["فطور", "غداء", "عشاء", "وجبة خفيفة"]
         : ["breakfast", "lunch", "dinner", "snack"];
      const customMeals = Object.keys(dayMeals).filter((key) => !standardMeals.includes(key));
      return [...standardMeals, ...customMeals];
   };

   const formatMealTypeName = (mealType: string) => {
      if (mealType.includes("-")) {
         // Custom meal like "11am-snack" -> "11 AM Snack"
         return mealType
            .split("-")
            .map((part) => {
               if (part.includes("am") || part.includes("pm")) {
                  return part.replace("am", " AM").replace("pm", " PM");
               }
               return part.charAt(0).toUpperCase() + part.slice(1);
            })
            .join(" ");
      }
      return mealType.charAt(0).toUpperCase() + mealType.slice(1);
   };

   const addRecipeToMeal = (recipe: any, mealType: string) => {
      const mealData = {
         id: recipe.id,
         name: recipe.title,
         image: recipe.image,
         calories: recipe.calories,
         protein: recipe.protein,
         carbs: recipe.carbs,
         fat: recipe.fat,
         time: recipe.time,
      };

      setMealPlans((prev) => ({
         ...prev,
         [selectedDateKey]: {
            ...prev[selectedDateKey],
            [mealType]: [...(prev[selectedDateKey]?.[mealType] || []), mealData],
         },
      }));

      setShowAddRecipeModal(false);
      setSelectedMealType("");
   };

   const removeMealFromPlan = (dateKey: string, mealType: string, mealId: number) => {
      setMealPlans((prev) => {
         const updated = { ...prev };
         if (updated[dateKey]) {
            const mealArray = updated[dateKey][mealType];
            if (Array.isArray(mealArray)) {
               updated[dateKey][mealType] = mealArray.filter((meal) => meal.id !== mealId);
               // Remove empty meal type arrays
               if (updated[dateKey][mealType].length === 0) {
                  delete updated[dateKey][mealType];
               }
            }
         }
         return updated;
      });
   };
   // Function to handle clicking on trending recipes
   const addCustomMealType = () => {
      if (customMealName.trim() && customMealTime.trim()) {
         const customKey = `${customMealTime.toLowerCase().replace(/\s+/g, "")}-${customMealName
            .toLowerCase()
            .replace(/\s+/g, "")}`;
         setSelectedMealType(customKey);
         setShowCustomMealModal(false);
         setShowAddRecipeModal(true);
         setCustomMealName("");
         setCustomMealTime("");
      }
   };
   const handleTrendingRecipeClick = (recipe: any) => {
      // If no meal type is selected, show modal to choose
      if (!selectedMealType) {
         setSelectedMealType("breakfast"); // Default to breakfast
         setShowAddRecipeModal(true);
         setActiveTab("trending");
      } else {
         // Add directly to the selected meal type
         addRecipeToMeal(recipe, selectedMealType);
      }
   };

   // Function to show meal selection for a recipe
   const showMealSelectionModal = (recipe: any) => {
      setSelectedMealType("");
      setShowAddRecipeModal(true);
      setActiveTab("trending");
      // Store the selected recipe for later use
      console.log("Selected recipe for meal planning:", recipe);
   };

   const MealCard = ({
      meal,
      mealType,
      onAdd,
      onRemove,
   }: {
      meal?: any;
      mealType: string;
      onAdd: () => void;
      onRemove?: () => void;
   }) => {
      const mealIcons = {
         breakfast: Coffee,
         lunch: Sun,
         dinner: Moon,
         snack: Apple,
         default: Utensils,
      };

      const MealIcon = mealIcons[mealType] || mealIcons.default;
      const meals = selectedDayMeals[mealType] || [];
      const isCustomMeal = !["breakfast", "lunch", "dinner", "snack"].includes(mealType);

      return (
         <Card className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
               <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                     <MealIcon className="w-5 h-5 text-[#22ae4b]" />
                     <h4 className="font-semibold capitalize text-gray-800 text-sm sm:text-base">
                        {formatMealTypeName(mealType)}
                     </h4>
                  </div>
                  <div className="flex items-center gap-2">
                     <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => {
                           setSelectedMealType(mealType);
                           setShowAddRecipeModal(true);
                        }}
                        className="w-6 h-6 text-[#22ae4b] hover:text-[#1c9a40] hover:bg-green-50"
                     >
                        <Plus className="w-4 h-4" />
                     </Button>
                     {isCustomMeal && meals.length === 0 && (
                        <Button
                           variant="ghost"
                           size="icon"
                           onClick={() => {
                              setMealPlans((prev) => {
                                 const updated = { ...prev };
                                 if (updated[selectedDateKey]) {
                                    delete updated[selectedDateKey][mealType];
                                 }
                                 return updated;
                              });
                           }}
                           className="w-6 h-6 text-red-500 hover:text-red-700 hover:bg-red-50"
                        >
                           <X className="w-4 h-4" />
                        </Button>
                     )}
                  </div>
               </div>

               {meals.length === 0 ? (
                  <div className="text-center py-4 border-2 border-dashed border-gray-300 rounded-lg">
                     <p className="text-sm text-gray-400">
                        {language === "ar" ? "لم يتم إضافة وجبات" : "No meals added"}
                     </p>
                  </div>
               ) : (
                  <div className="space-y-3">
                     {meals.map((meal, index) => (
                        <div
                           key={`${meal.id}-${index}`}
                           className="flex gap-2 sm:gap-3 p-2 bg-gray-50 rounded-lg group"
                        >
                           <img
                              src={meal.image}
                              alt={meal.name}
                              className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg object-cover flex-shrink-0"
                           />
                           <div className="flex-1">
                              <h5 className="font-medium text-gray-900 mb-1 text-sm sm:text-base line-clamp-2">
                                 {meal.name}
                              </h5>
                              <div className="flex items-center gap-2 text-sm text-gray-600 mb-1">
                                 <Clock className="w-3 h-3" />
                                 <span>{meal.time}</span>
                              </div>
                              <div className="flex gap-3 text-xs text-gray-500">
                                 <span>{meal.calories} cal</span>
                                 <span>{meal.protein}g protein</span>
                              </div>
                           </div>
                           <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => removeMealFromPlan(selectedDateKey, mealType, meal.id)}
                              className="opacity-0 group-hover:opacity-100 transition-opacity w-6 h-6 text-red-500 hover:text-red-700 hover:bg-red-50 flex-shrink-0"
                           >
                              <X className="w-4 h-4" />
                           </Button>
                        </div>
                     ))}
                  </div>
               )}
            </CardContent>
         </Card>
      );
   };

   const CustomMealModal = () => {
      if (!showCustomMealModal) return null;

      return (
         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white shadow-2xl">
               <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                     <h3 className="text-lg font-bold text-gray-900">
                        {language === "ar" ? "إضافة وقت وجبة مخصص" : "Add Custom Meal Time"}
                     </h3>
                     <Button variant="ghost" size="icon" onClick={() => setShowCustomMealModal(false)}>
                        <X className="w-4 h-4" />
                     </Button>
                  </div>

                  <div className="space-y-4">
                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                           {language === "ar" ? "وقت الوجبة" : "Meal Time"}
                        </label>
                        <Input
                           placeholder="e.g., 11 AM, 3 PM, 9 PM"
                           value={customMealTime}
                           onChange={(e) => setCustomMealTime(e.target.value)}
                           className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                        />
                     </div>

                     <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                           {language === "ar" ? "اسم الوجبة" : "Meal Name"}
                        </label>
                        <Input
                           placeholder="e.g., Snack, Pre-workout, Post-workout"
                           value={customMealName}
                           onChange={(e) => setCustomMealName(e.target.value)}
                           className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                        />
                     </div>

                     <div className="flex gap-3 pt-4">
                        <Button
                           onClick={addCustomMealType}
                           className="flex-1 bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
                           disabled={!customMealName.trim() || !customMealTime.trim()}
                        >
                           Add Meal Time
                        </Button>
                        <Button variant="outline" onClick={() => setShowCustomMealModal(false)} className="flex-1">
                           Cancel
                        </Button>
                     </div>
                  </div>
               </CardContent>
            </Card>
         </div>
      );
   };

   const EmptyMealCard = ({ onAdd }: { onAdd: () => void }) => {
      return (
         <Card
            className="border-2 border-dashed border-gray-300 hover:border-[#22ae4b] transition-colors cursor-pointer min-h-[120px] sm:min-h-[140px]"
            onClick={onAdd}
         >
            <CardContent className="p-4 text-center">
               <div className="flex flex-col items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center">
                     <Plus className="w-6 h-6 text-gray-400" />
                  </div>
                  <div>
                      <h4 className="font-semibold text-gray-600">
                        {language === "ar" ? "إضافة وجبة مخصصة" : "Add Custom Meal"}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {language === "ar" ? "أضف وقت الوجبة" : "Add meal time"}
                      </p>
                  </div>
               </div>
            </CardContent>
         </Card>
      );
   };

   const RecipeCard = ({ recipe, onAdd }: { recipe: any; onAdd: (recipe: any) => void }) => (
      <Card className="group hover:shadow-md transition-all duration-300 cursor-pointer">
         <CardContent className="p-0">
            <div className="relative">
               <img src={recipe.image} alt={recipe.title} className="w-full h-24 sm:h-32 object-cover rounded-t-lg" />
               <Badge className="absolute top-2 left-2 bg-[#22ae4b] text-white text-xs">{recipe.category}</Badge>
               <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span>{recipe.rating}</span>
               </div>
            </div>

            <div className="p-2 sm:p-3">
               <h4 className="font-semibold text-sm mb-2 line-clamp-2 group-hover:text-[#22ae4b] transition-colors">
                  {recipe.title}
               </h4>

               <div className="flex items-center gap-3 text-xs text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                     <Clock className="w-3 h-3" />
                     <span>{recipe.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                     <Zap className="w-3 h-3" />
                     <span>{recipe.calories} cal</span>
                  </div>
               </div>

               <div className="flex items-center justify-between">
                  <div className="text-xs text-gray-500">
                     {recipe.protein}g protein • {recipe.carbs}g carbs
                  </div>
                  <Button
                     size="sm"
                     className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white text-xs px-3 py-1 h-7"
                     onClick={() => onAdd(recipe)}
                  >
                     Add
                  </Button>
               </div>
            </div>
         </CardContent>
      </Card>
   );

   const AddRecipeModal = () => {
      if (!showAddRecipeModal) return null;

      const getCurrentRecipes = () => {
         switch (activeTab) {
            case "trending":
               return trendingRecipes;
            case "saved":
               return savedRecipes;
            case "search":
               return searchResults;
            default:
               return trendingRecipes;
         }
      };

      return (
         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4">
            <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden bg-white shadow-2xl">
               <CardContent className="p-0">
                  {/* Modal Header */}
                  <div className="p-6 border-b border-gray-200 bg-white">
                     <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">
                           {selectedMealType
                              ? `Add Recipe to ${selectedMealType.charAt(0).toUpperCase() + selectedMealType.slice(1)}`
                              : "Choose Meal Type"}
                        </h3>
                        <Button
                           variant="ghost"
                           size="icon"
                           className="hover:bg-gray-100"
                           onClick={() => {
                              setShowAddRecipeModal(false);
                              setSelectedMealType("");
                              setSearchQuery("");
                           }}
                        >
                           <X className="w-4 h-4" />
                        </Button>
                     </div>

                     {/* Meal Type Selection (if no meal type selected) */}
                     {!selectedMealType && (
                        <div className="mb-4 sm:mb-6 bg-white">
                           <p className="text-gray-600 mb-4">
                              {language === "ar"
                                 ? "اختر الوجبة التي تريد إضافة هذه الوصفة إليها:"
                                 : "Select which meal to add this recipe to:"}
                           </p>
                           <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3 mb-4">
                              {getMealTypes(selectedDateKey).map((mealType) => {
                                 const mealIcons = {
                                    breakfast: Coffee,
                                    lunch: Sun,
                                    dinner: Moon,
                                    snack: Apple,
                                    default: Utensils,
                                 };
                                 const MealIcon = mealIcons[mealType] || mealIcons.default;

                                 return (
                                    <Button
                                       key={mealType}
                                       variant="outline"
                                       className="flex flex-col items-center gap-1 sm:gap-2 h-16 sm:h-20 hover:border-[#22ae4b] hover:text-[#22ae4b] bg-white hover:bg-green-50"
                                       onClick={() => setSelectedMealType(mealType)}
                                    >
                                       <MealIcon className="w-5 h-5" />
                                       <span className="capitalize text-sm">{formatMealTypeName(mealType)}</span>
                                    </Button>
                                 );
                              })}
                           </div>

                              <Button
                                variant="outline"
                                className="w-full border-dashed border-[#22ae4b] text-[#22ae4b] hover:bg-green-50"
                                onClick={() => {
                                  setShowAddRecipeModal(false);
                                  setShowCustomMealModal(true);
                                }}
                              >
                                <Plus className="w-4 h-4 mr-2" />
                                {language === "ar" ? "إضافة وقت وجبة مخصص" : "Add Custom Meal Time"}
                              </Button>
                        </div>
                     )}

                     {/* Tabs */}
                     {selectedMealType && (
                        <div className="flex gap-2 sm:gap-4 mb-4 bg-white overflow-x-auto">
                           <Button
                              variant={activeTab === "trending" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setActiveTab("trending")}
                              className={
                                 activeTab === "trending"
                                    ? "bg-[#22ae4b] hover:bg-[#1c9a40]"
                                    : "bg-white hover:bg-gray-50"
                              }
                           >
                              <TrendingUp className="w-4 h-4 mr-2" />
                              Trending
                           </Button>
                           <Button
                              variant={activeTab === "saved" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setActiveTab("saved")}
                              className={
                                 activeTab === "saved" ? "bg-[#22ae4b] hover:bg-[#1c9a40]" : "bg-white hover:bg-gray-50"
                              }
                           >
                              <Heart className="w-4 h-4 mr-2" />
                              Saved
                           </Button>
                           <Button
                              variant={activeTab === "search" ? "default" : "outline"}
                              size="sm"
                              onClick={() => setActiveTab("search")}
                              className={
                                 activeTab === "search"
                                    ? "bg-[#22ae4b] hover:bg-[#1c9a40]"
                                    : "bg-white hover:bg-gray-50"
                              }
                           >
                              <Search className="w-4 h-4 mr-2" />
                              Search
                           </Button>
                        </div>
                     )}

                     {/* Search Input */}
                     {activeTab === "search" && selectedMealType && (
                        <div className="relative bg-white">
                           <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                           <Input
                              placeholder="Search recipes..."
                              value={searchQuery}
                              onChange={(e) => setSearchQuery(e.target.value)}
                              className="pl-10 bg-white border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                           />
                        </div>
                     )}
                  </div>

                  {/* Modal Content */}
                  {selectedMealType && (
                     <div className="p-6 max-h-96 overflow-y-auto bg-white">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                           {getCurrentRecipes().map((recipe) => (
                              <RecipeCard
                                 key={recipe.id}
                                 recipe={recipe}
                                 onAdd={(recipe) => addRecipeToMeal(recipe, selectedMealType)}
                              />
                           ))}
                        </div>

                        {getCurrentRecipes().length === 0 && (
                           <div className="text-center py-6 sm:py-8 bg-white">
                              <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                                <p className="text-gray-500"></p>
                           </div>
                        )}
                     </div>
                  )}
               </CardContent>
            </Card>
         </div>
      );
   };

   const NutritionProgress = ({
      label,
      current,
      goal,
      unit,
      color,
   }: {
      label: string;
      current: number;
      goal: number;
      unit: string;
      color: string;
   }) => {
      const percentage = Math.min((current / goal) * 100, 100);

      return (
         <div className="space-y-2">
            <div className="flex justify-between items-center">
               <span className="text-sm font-medium text-gray-700">{label}</span>
               <span className="text-sm text-gray-600">
                  {current}/{goal}
                  {unit}
               </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
               <div
                  className={`h-2 rounded-full transition-all duration-300 ${color}`}
                  style={{ width: `${percentage}%` }}
               />
            </div>
            <div className="text-xs text-gray-500 text-right">{percentage.toFixed(0)}% of goal</div>
         </div>
      );
   };

   return (
      <div className="bg-gray-50 min-h-screen">
         <Header />

         <div className="max-w-7xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="mb-6 sm:mb-8">
               <div className="flex items-center gap-2 sm:gap-3 mb-4">
                  <CalendarDays className="w-8 h-8 text-[#22ae4b]" />
                  <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">{t.meal_planner.title}</h1>
               </div>
               <p className="text-sm sm:text-base text-gray-600">{t.meal_planner.plan_meals}</p>
            </div>

            {/* Calendar Navigation */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8 shadow-sm">
               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
                  <div className="flex items-center gap-2 sm:gap-4">
                     <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                           const newDate = new Date(currentDate);
                           newDate.setDate(currentDate.getDate() - 7);
                           setCurrentDate(newDate);
                        }}
                     >
                        <ChevronLeft className="w-4 h-4" />
                     </Button>

                     <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                        {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
                     </h2>

                     <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                           const newDate = new Date(currentDate);
                           newDate.setDate(currentDate.getDate() + 7);
                           setCurrentDate(newDate);
                        }}
                     >
                        <ChevronRight className="w-4 h-4" />
                     </Button>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2 bg-gray-100 rounded-lg p-1">
                     <Button
                        variant={viewMode === "week" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("week")}
                        className={viewMode === "week" ? "bg-white shadow-sm" : "hover:bg-white/50"}
                     >
                        Week
                     </Button>
                     <Button
                        variant={viewMode === "day" ? "default" : "ghost"}
                        size="sm"
                        onClick={() => setViewMode("day")}
                        className={viewMode === "day" ? "bg-white shadow-sm" : "hover:bg-white/50"}
                     >
                        Day
                     </Button>
                  </div>
               </div>

               {/* Week Calendar */}
               <div className="grid grid-cols-7 gap-2 sm:gap-4">
                  {weekDates.map((date, index) => {
                     const dateKey = formatDateKey(date);
                     const dayNutrition = calculateDayNutrition(dateKey);
                     const isSelected = formatDateKey(date) === formatDateKey(selectedDate);
                     const isToday = formatDateKey(date) === formatDateKey(new Date());

                     return (
                        <div
                           key={index}
                           className={`p-2 sm:p-4 rounded-lg cursor-pointer transition-all ${
                              isSelected
                                 ? "bg-[#22ae4b] text-white"
                                 : isToday
                                 ? "bg-blue-50 border-2 border-blue-200"
                                 : "bg-gray-50 hover:bg-gray-100"
                           }`}
                           onClick={() => setSelectedDate(date)}
                        >
                           <div className="text-center">
                              <div className="text-[.5rem] sm:text-sm font-medium mb-1">{dayNames[date.getDay()]}</div>
                              <div className="text-xs sm:text-2xl font-bold mb-1 sm:mb-2">{date.getDate()}</div>
                              {dayNutrition.calories > 0 && viewMode === "week" && (
                                 <div className={`text-xs ${isSelected ? "text-white/80" : "text-gray-600"}`}>
                                    {dayNutrition.calories} cal
                                 </div>
                              )}
                           </div>
                        </div>
                     );
                  })}
               </div>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
               {/* Left - Daily Meals */}
               <div className="lg:col-span-8">
                  <div className="mb-4 sm:mb-6">
                     <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {selectedDate.toLocaleDateString("en-US", {
                           weekday: "long",
                           month: "long",
                           day: "numeric",
                        })}
                     </h3>
                     <p className="text-sm sm:text-base text-gray-600">
                        {language === "ar" ? "خطط وجباتك لهذا اليوم" : "Plan your meals for the day"}
                     </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                     {getMealTypes(selectedDateKey).map((mealType) => (
                        <MealCard
                           key={mealType}
                           mealType={mealType}
                           onAdd={() => {
                              setSelectedMealType(mealType);
                              setShowAddRecipeModal(true);
                           }}
                        />
                     ))}

                     <EmptyMealCard onAdd={() => setShowCustomMealModal(true)} />
                  </div>

                  {/* Trending Recipes Section */}
                  <Card className="mt-8">
                     <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-6">
                           <div className="flex items-center gap-2 sm:gap-3">
                              <TrendingUp className="w-5 h-5 text-[#22ae4b]" />
                              <h4 className="text-base sm:text-lg font-bold text-gray-900">{t.meal_planner.trending_recipes}</h4>
                           </div>
                           <Link to={language === "ar" ? "/ar/explore" : "/explore"}>
                              <Button variant="outline" size="sm">
                                 {t.common.view_all}
                              </Button>
                           </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
                           {trendingRecipes.slice(0, 4).map((recipe) => (
                              <div
                                 key={recipe.id}
                                 className="group cursor-pointer"
                                 onClick={() => showMealSelectionModal(recipe)}
                              >
                                 <div className="relative mb-2">
                                    <img
                                       src={recipe.image}
                                       alt={recipe.title}
                                       className="w-full h-16 sm:h-20 rounded-lg object-cover group-hover:scale-105 transition-transform"
                                    />
                                    <div className="absolute inset-0 bg-black/40 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                       <Button
                                          size="sm"
                                          className="bg-white text-gray-900 hover:bg-gray-100"
                                          onClick={(e) => {
                                             e.stopPropagation();
                                             showMealSelectionModal(recipe);
                                          }}
                                       >
                                          <Plus className="w-3 h-3 mr-1" />
                                          Add
                                       </Button>
                                    </div>
                                 </div>
                                 <div className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2 group-hover:text-[#22ae4b] transition-colors">
                                    {recipe.title}
                                 </div>
                                 <div className="text-xs text-gray-500">
                                    {recipe.calories} cal • {recipe.time}
                                 </div>
                              </div>
                           ))}
                        </div>
                     </CardContent>
                  </Card>
               </div>

               {/* Right Sidebar - Nutrition Tracking */}
               <div className="lg:col-span-4">
                  <div className="sticky top-24 space-y-6">
                     {/* Daily Nutrition - Recipe Page Style */}
                     <Card>
                        <CardContent className="p-6">
                           <div className="flex items-center gap-3 mb-6">
                              <Target className="w-5 h-5 text-[#22ae4b]" />
                              <h3 className="text-lg font-bold text-gray-900">{t.meal_planner.daily_nutrition}</h3>
                           </div>

                           {/* Main Nutrition Bar - Recipe Page Style */}
                           <div className="bg-[#22ae4b] text-white rounded-2xl p-6 mb-6">
                              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center">
                                 <div>
                                    <div className="text-2xl font-bold">{selectedDayNutrition.calories}</div>
                                    <div className="text-sm opacity-90">{t.recipe.calories}</div>
                                    <div className="text-xs opacity-75">of {nutritionGoals.calories}</div>
                                 </div>
                                 <div>
                                    <div className="text-2xl font-bold">{selectedDayNutrition.protein}g</div>
                                    <div className="text-sm opacity-90">{t.recipe.protein}</div>
                                    <div className="text-xs opacity-75">of {nutritionGoals.protein}g</div>
                                 </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4 sm:gap-6 text-center mt-4">
                                 <div>
                                    <div className="text-2xl font-bold">{selectedDayNutrition.carbs}g</div>
                                    <div className="text-sm opacity-90">{t.recipe.carbs}</div>
                                    <div className="text-xs opacity-75">of {nutritionGoals.carbs}g</div>
                                 </div>
                                 <div>
                                    <div className="text-2xl font-bold">{selectedDayNutrition.fat}g</div>
                                    <div className="text-sm opacity-90">{t.recipe.fat}</div>
                                    <div className="text-xs opacity-75">of {nutritionGoals.fat}g</div>
                                 </div>
                              </div>
                           </div>

                           {/* Detailed Progress Bars */}
                           <div className="space-y-4">
                              <div className="space-y-3">
                                 <div className="flex justify-between items-center">
                                    <span className="text-sm font-medium text-gray-700">Daily Progress</span>
                                    <span className="text-sm text-gray-600">
                                       {Math.round((selectedDayNutrition.calories / nutritionGoals.calories) * 100)}%
                                       Complete
                                    </span>
                                 </div>
                                 <div className="w-full bg-gray-200 rounded-full h-3">
                                    <div
                                       className="h-3 rounded-full bg-[#22ae4b] transition-all duration-300"
                                       style={{
                                          width: `${Math.min(
                                             (selectedDayNutrition.calories / nutritionGoals.calories) * 100,
                                             100
                                          )}%`,
                                       }}
                                    />
                                 </div>
                              </div>

                              <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center text-sm mt-6">
                                 <div>
                                    <div className="bg-red-50 rounded-lg p-3">
                                       <div className="text-red-600 font-bold text-lg">
                                          {selectedDayNutrition.protein}g
                                       </div>
                                       <div className="text-red-500 text-xs font-medium">Protein</div>
                                       <div className="w-full bg-red-200 rounded-full h-1 mt-2">
                                          <div
                                             className="h-1 rounded-full bg-red-500 transition-all duration-300"
                                             style={{
                                                width: `${Math.min(
                                                   (selectedDayNutrition.protein / nutritionGoals.protein) * 100,
                                                   100
                                                )}%`,
                                             }}
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div>
                                    <div className="bg-yellow-50 rounded-lg p-3">
                                       <div className="text-yellow-600 font-bold text-lg">
                                          {selectedDayNutrition.carbs}g
                                       </div>
                                       <div className="text-yellow-500 text-xs font-medium">Carbs</div>
                                       <div className="w-full bg-yellow-200 rounded-full h-1 mt-2">
                                          <div
                                             className="h-1 rounded-full bg-yellow-500 transition-all duration-300"
                                             style={{
                                                width: `${Math.min(
                                                   (selectedDayNutrition.carbs / nutritionGoals.carbs) * 100,
                                                   100
                                                )}%`,
                                             }}
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div>
                                    <div className="bg-blue-50 rounded-lg p-3">
                                       <div className="text-blue-600 font-bold text-lg">
                                          {selectedDayNutrition.fat}g
                                       </div>
                                       <div className="text-blue-500 text-xs font-medium">Fat</div>
                                       <div className="w-full bg-blue-200 rounded-full h-1 mt-2">
                                          <div
                                             className="h-1 rounded-full bg-blue-500 transition-all duration-300"
                                             style={{
                                                width: `${Math.min(
                                                   (selectedDayNutrition.fat / nutritionGoals.fat) * 100,
                                                   100
                                                )}%`,
                                             }}
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </CardContent>
                     </Card>

                     {/* Weekly Summary */}
                     <Card>
                        <CardContent className="p-6">
                           <div className="flex items-center gap-3 mb-6">
                              <BarChart3 className="w-5 h-5 text-[#22ae4b]" />
                              <h3 className="text-lg font-bold text-gray-900">{t.meal_planner.weekly_summary}</h3>
                           </div>

                           <div className="space-y-4">
                              <div className="flex justify-between items-center">
                                 <span className="text-gray-600">{t.meal_planner.avg_daily_calories}</span>
                                 <span className="font-semibold text-sm sm:text-base">1,850</span>
                              </div>
                              <div className="flex justify-between items-center">
                                 <span className="text-gray-600">{t.meal_planner.days_on_track}</span>
                                 <span className="font-semibold text-[#22ae4b]">5/7</span>
                              </div>
                              <div className="flex justify-between items-center">
                                 <span className="text-gray-600">{t.meal_planner.meals_planned}</span>
                                 <span className="font-semibold text-sm sm:text-base">18/21</span>
                              </div>
                           </div>

                           <Button className="w-full mt-6 bg-[#22ae4b] hover:bg-[#1c9a40] text-white">
                              {language === "ar" ? "عرض التقرير المفصل" : "View Detailed Report"}
                           </Button>
                        </CardContent>
                     </Card>

                     {/* Nutrition Tips */}
                     <Card>
                        <CardContent className="p-6">
                           <div className="flex items-center gap-3 mb-4">
                              <Heart className="w-5 h-5 text-red-500" />
                              <h3 className="text-lg font-bold text-gray-900">
                                 {language === "ar" ? "نصيحة اليوم" : "Today's Tip"}
                              </h3>
                           </div>
                           <p className="text-gray-600 text-sm leading-relaxed">
                              {language === "ar"
                                 ? "حاول تضمين الخضروات الملونة في وجباتك للحصول على تغذية أفضل وفوائد صحية."
                                 : "Try to include colorful vegetables in your meals for better nutrition and health benefits."}
                           </p>
                        </CardContent>
                     </Card>
                  </div>
               </div>
            </div>
         </div>

         {/* Add Recipe Modal */}
         <AddRecipeModal />

         {/* Custom Meal Modal */}
         <CustomMealModal />

         <AdSection />
      </div>
   );
};
