import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import {
     ChevronLeft,
     ChevronRight,
     Clock,
     Users,
     ChefHat,
     Star,
     Plus,
     Minus,
     Send,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "../../components/Header";

export const RecipeDetails = (): JSX.Element => {
     const { t, isRTL, language } = useLanguage();
     const [servings, setServings] = useState(2);
     const [checkedIngredients, setCheckedIngredients] = useState<number[]>([]);
     const [completedSteps, setCompletedSteps] = useState<number[]>([]);
     const [currentImageIndex, setCurrentImageIndex] = useState(0);

     const recipeImages = [
          "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
          "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
          "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
          "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop",
     ];

     const ingredients = [
          { id: 1, item: "2 pieces Chicken Breasts" },
          { id: 2, item: "300g Ground Beef" },
          { id: 3, item: "4 Eggs hatches free eggs" },
          { id: 4, item: "1 tsp paprika and chopped golden raisins" },
          { id: 5, item: "0.5 cup chopped walnuts or pecans" },
          { id: 6, item: "fresh herbs, such as chopped" },
     ];

     const cookingSteps = [
          {
               id: 1,
               title: "Make the egg cream (or substitute 3/4 to 1 cup bottled sauce):",
               description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
               images: [
                    "https://images.pexels.com/photos/4253302/pexels-photo-4253302.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
                    "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
                    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
                    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
               ],
          },
          {
               id: 2,
               title: "Make the egg cream (or substitute 3/4 to 1 cup bottled sauce):",
               description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
               hasTimer: true,
               time: "3 min",
          },
          {
               id: 3,
               title: "Make the egg cream (or substitute 3/4 to 1 cup bottled sauce):",
               description:
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
               images: [
                    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
                    "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=150&h=100&fit=crop",
               ],
          },
     ];

     const nutritionData = [
          { label: "Saturated Fat", value: "0.65 g" },
          { label: "Net Carbohydrates", value: "0.00 g" },
          { label: "Cholesterol", value: "44.53 mg" },
          { label: "Calcium", value: "254.4 mg" },
          { label: "Magnesium", value: "23.6 mg" },
          { label: "Potassium", value: "184.20 mg" },
          { label: "Iron", value: "0.57 mg" },
          { label: "Zinc", value: "0.92 mg" },
          { label: "Phosphorus", value: "227.38 mg" },
          { label: "Vitamin A", value: "10.58 μg" },
          { label: "Vitamin C", value: "0.02 mg" },
     ];

     const comments = [
          {
               id: 1,
               user: "Emily Carter",
               avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               date: "December 14, 2023",
               rating: 5,
               comment: "This recipe was a hit at our weekend barbecue! The chicken was so tender and flavorful, and the marinade had just the right amount of spice. The bell peppers and onions added a nice crunch. Everyone loved it, and I'll definitely be making this again!",
          },
          {
               id: 2,
               user: "Emily Carter",
               avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               date: "December 14, 2023",
               rating: 5,
               comment: "This recipe was a hit at our weekend barbecue! The chicken was so tender and flavorful, and the marinade had just the right amount of spice. The bell peppers and onions added a nice crunch. Everyone loved it, and I'll definitely be making this again!",
          },
     ];

     const toggleIngredient = (id: number) => {
          setCheckedIngredients((prev) =>
               prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
          );
     };

     const toggleStep = (id: number) => {
          setCompletedSteps((prev) =>
               prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
          );
     };

     return (
          <div className="bg-gray-50 min-h-screen">
               <Header />

               <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Top Section - Recipe Image and Details */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-8 lg:mb-12">
                         {/* Left - Recipe Image - Made taller */}
                         <div className="lg:col-span-7">
                              <div className="relative h-[400px] sm:h-[500px] lg:h-[600px] p-2 sm:p-4">
                                   {/* Main recipe image container */}
                                   <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden bg-white shadow-lg mb-4">
                                        <img
                                             src={recipeImages[currentImageIndex]}
                                             alt="Creamy Porcini Mushroom Polenta"
                                             className="w-full h-full object-cover"
                                        />

                                        {/* Navigation arrows */}
                                        <Button
                                             variant="ghost"
                                             size="icon"
                                             className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-8 h-8 sm:w-12 sm:h-12 shadow-md"
                                             onClick={() =>
                                                  setCurrentImageIndex((prev) =>
                                                       prev === 0
                                                            ? recipeImages.length - 1
                                                            : prev - 1
                                                  )
                                             }>
                                             <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                                        </Button>
                                        <Button
                                             variant="ghost"
                                             size="icon"
                                             className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full w-8 h-8 sm:w-12 sm:h-12 shadow-md"
                                             onClick={() =>
                                                  setCurrentImageIndex((prev) =>
                                                       prev === recipeImages.length - 1
                                                            ? 0
                                                            : prev + 1
                                                  )
                                             }>
                                             <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
                                        </Button>
                                   </div>

                                   {/* Image slider at bottom */}
                                   <div className="flex justify-center">
                                        <div className="flex gap-2 sm:gap-3 bg-white rounded-2xl p-2 sm:p-3 shadow-lg">
                                             {recipeImages.map((image, index) => (
                                                  <button
                                                       key={index}
                                                       onClick={() => setCurrentImageIndex(index)}
                                                       className={`w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                                            currentImageIndex === index
                                                                 ? "border-[#22ae4b] scale-110"
                                                                 : "border-gray-200 hover:border-gray-300"
                                                       }`}>
                                                       <img
                                                            src={image}
                                                            alt={`Recipe view ${index + 1}`}
                                                            className="w-full h-full object-cover"
                                                       />
                                                  </button>
                                             ))}
                                        </div>
                                   </div>
                              </div>
                         </div>

                         {/* Right - Recipe Details and Ingredients */}
                         <div className="lg:col-span-5">
                              <div>
                                   <Badge className="bg-[#22ae4b] text-white mb-3 sm:mb-4 px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium">
                                        Pasta
                                   </Badge>

                                   <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                                        {language === "ar"
                                             ? "بولينتا الفطر البورسيني الكريمية"
                                             : "Creamy Porcini Mushroom Polenta"}
                                   </h1>

                                   <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8">
                                        <div className="text-center">
                                             <div className="flex items-center justify-center mb-2">
                                                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-1 sm:mr-2" />
                                             </div>
                                             <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                                  5 min
                                             </div>
                                             <div className="text-xs sm:text-sm text-gray-500">
                                                  {t.recipe.cooking_time}
                                             </div>
                                        </div>
                                        <div className="text-center">
                                             <div className="flex items-center justify-center mb-2">
                                                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-1 sm:mr-2" />
                                             </div>
                                             <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                                  {language === "ar" ? "لبناني" : "Lebanese"}
                                             </div>
                                             <div className="text-xs sm:text-sm text-gray-500">
                                                  {t.recipe.cuisine}
                                             </div>
                                        </div>
                                        <div className="text-center">
                                             <div className="flex items-center justify-center mb-2">
                                                  <ChefHat className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-1 sm:mr-2" />
                                             </div>
                                             <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                                  {language === "ar" ? "يكفي لـ 4" : "Serves 4"}
                                             </div>
                                             <div className="text-xs sm:text-sm text-gray-500">
                                                  {language === "ar" ? "الحصة" : "Serving"}
                                             </div>
                                        </div>
                                        <div className="text-center">
                                             <div className="flex items-center justify-center mb-2">
                                                  <Star className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 mr-1 sm:mr-2" />
                                             </div>
                                             <div className="font-semibold text-gray-900 text-sm sm:text-base">
                                                  {t.recipe.beginner}
                                             </div>
                                             <div className="text-xs sm:text-sm text-gray-500">
                                                  {language === "ar"
                                                       ? "درجة الصعوبة"
                                                       : "Degree of Difficulty"}
                                             </div>
                                        </div>
                                   </div>

                                   {/* Nutrition Information Bar */}
                                   <Card className="bg-[#22ae4b] text-white rounded-2xl mb-6 sm:mb-8">
                                        <CardContent className="p-4 sm:p-6">
                                             <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
                                                  {t.recipe.nutritional_info}
                                             </h3>
                                             <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-4 text-center">
                                                  <div>
                                                       <div className="text-lg sm:text-xl font-bold">
                                                            200g
                                                       </div>
                                                       <div className="text-xs sm:text-sm opacity-90">
                                                            {t.recipe.fat}
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="text-lg sm:text-xl font-bold">
                                                            900g
                                                       </div>
                                                       <div className="text-xs sm:text-sm opacity-90">
                                                            {t.recipe.protein}
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="text-lg sm:text-xl font-bold">
                                                            140g
                                                       </div>
                                                       <div className="text-xs sm:text-sm opacity-90">
                                                            Sugars
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="text-lg sm:text-xl font-bold">
                                                            435g
                                                       </div>
                                                       <div className="text-xs sm:text-sm opacity-90">
                                                            {t.recipe.calories}
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="text-lg sm:text-xl font-bold">
                                                            24g
                                                       </div>
                                                       <div className="text-xs sm:text-sm opacity-90">
                                                            {t.recipe.carbs}
                                                       </div>
                                                  </div>
                                                  <div>
                                                       <div className="text-lg sm:text-xl font-bold">
                                                            137g
                                                       </div>
                                                       <div className="text-xs sm:text-sm opacity-90">
                                                            Trans fat
                                                       </div>
                                                  </div>
                                             </div>
                                        </CardContent>
                                   </Card>

                                   {/* Ingredients Section - Now on the right */}
                                   <div className="mb-6 sm:mb-8">
                                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3">
                                             <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                                                  {t.recipe.ingredients}
                                             </h3>
                                             <div className="flex items-center gap-2 sm:gap-4">
                                                  <span className="text-sm sm:text-base text-gray-600">
                                                       {servings} {t.recipe.servings}
                                                  </span>
                                                  <div className="flex items-center gap-2">
                                                       <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-gray-300"
                                                            onClick={() =>
                                                                 setServings(
                                                                      Math.max(1, servings - 1)
                                                                 )
                                                            }>
                                                            <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                                                       </Button>
                                                       <Button
                                                            variant="outline"
                                                            size="icon"
                                                            className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border-gray-300"
                                                            onClick={() =>
                                                                 setServings(servings + 1)
                                                            }>
                                                            <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                                       </Button>
                                                  </div>
                                                  <Button className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white rounded-full px-3 sm:px-6 text-sm">
                                                       {t.recipe.add_to_list}
                                                  </Button>
                                             </div>
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                             {/* Left column ingredients */}
                                             <div className="space-y-3 sm:space-y-4">
                                                  {ingredients
                                                       .slice(0, Math.ceil(ingredients.length / 2))
                                                       .map((ingredient) => (
                                                            <div
                                                                 key={ingredient.id}
                                                                 className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                                                                 onClick={(e) => {
                                                                      e.preventDefault();
                                                                      toggleIngredient(
                                                                           ingredient.id
                                                                      );
                                                                 }}>
                                                                 <div
                                                                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center ${
                                                                           checkedIngredients.includes(
                                                                                ingredient.id
                                                                           )
                                                                                ? "bg-[#22ae4b] border-[#22ae4b]"
                                                                                : "border-gray-300"
                                                                      }`}>
                                                                      {checkedIngredients.includes(
                                                                           ingredient.id
                                                                      ) && (
                                                                           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                                                                      )}
                                                                 </div>
                                                                 <Link
                                                                      to={`/ingredient/${ingredient.item
                                                                           .split(" ")
                                                                           .slice(-1)[0]
                                                                           .toLowerCase()}`}
                                                                      className={`flex-1 text-sm sm:text-base hover:text-[#22ae4b] transition-colors ${
                                                                           checkedIngredients.includes(
                                                                                ingredient.id
                                                                           )
                                                                                ? "line-through text-gray-500"
                                                                                : "text-gray-900"
                                                                      }`}
                                                                      onClick={(e) =>
                                                                           e.stopPropagation()
                                                                      }>
                                                                      {ingredient.item}
                                                                 </Link>
                                                            </div>
                                                       ))}
                                             </div>

                                             {/* Right column ingredients */}
                                             <div className="space-y-3 sm:space-y-4">
                                                  {ingredients
                                                       .slice(Math.ceil(ingredients.length / 2))
                                                       .map((ingredient) => (
                                                            <div
                                                                 key={ingredient.id}
                                                                 className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg hover:bg-gray-50 cursor-pointer"
                                                                 onClick={(e) => {
                                                                      e.preventDefault();
                                                                      toggleIngredient(
                                                                           ingredient.id
                                                                      );
                                                                 }}>
                                                                 <div
                                                                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded border-2 flex items-center justify-center ${
                                                                           checkedIngredients.includes(
                                                                                ingredient.id
                                                                           )
                                                                                ? "bg-[#22ae4b] border-[#22ae4b]"
                                                                                : "border-gray-300"
                                                                      }`}>
                                                                      {checkedIngredients.includes(
                                                                           ingredient.id
                                                                      ) && (
                                                                           <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full" />
                                                                      )}
                                                                 </div>
                                                                 <Link
                                                                      to={`/ingredient/${ingredient.item
                                                                           .split(" ")
                                                                           .slice(-1)[0]
                                                                           .toLowerCase()}`}
                                                                      className={`flex-1 text-sm sm:text-base hover:text-[#22ae4b] transition-colors ${
                                                                           checkedIngredients.includes(
                                                                                ingredient.id
                                                                           )
                                                                                ? "line-through text-gray-500"
                                                                                : "text-gray-900"
                                                                      }`}
                                                                      onClick={(e) =>
                                                                           e.stopPropagation()
                                                                      }>
                                                                      {ingredient.item}
                                                                 </Link>
                                                            </div>
                                                       ))}
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
                         {/* Left - Instructions */}
                         <div className="lg:col-span-8">
                              <div className="mb-6 sm:mb-8">
                                   <h3 className="text-lg sm:text-xl font-bold text-[#22ae4b] mb-2">
                                        Instructions
                                   </h3>
                                   <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                                        {language === "ar"
                                             ? "تعليمات الطبخ"
                                             : "Cooking Instructions"}
                                   </h4>

                                   <div className="space-y-8 sm:space-y-12">
                                        {cookingSteps.map((step) => (
                                             <div key={step.id} className="flex gap-3 sm:gap-6">
                                                  <div className="flex-shrink-0">
                                                       <div
                                                            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center cursor-pointer ${
                                                                 completedSteps.includes(step.id)
                                                                      ? "bg-[#22ae4b] text-white"
                                                                      : "bg-[#22ae4b] text-white"
                                                            }`}
                                                            onClick={() => toggleStep(step.id)}>
                                                            <span className="font-bold text-sm sm:text-lg">
                                                                 {step.id}
                                                            </span>
                                                       </div>
                                                  </div>

                                                  <div className="flex-1">
                                                       <h5 className="font-bold text-lg sm:text-xl mb-3 sm:mb-4 text-gray-900">
                                                            {step.title}
                                                       </h5>
                                                       <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                                                            {step.description}
                                                       </p>

                                                       {step.images && step.images.length > 0 && (
                                                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4 mb-4 sm:mb-6">
                                                                 {step.images.map(
                                                                      (image, index) => (
                                                                           <img
                                                                                key={index}
                                                                                src={image}
                                                                                alt={`Step ${
                                                                                     step.id
                                                                                } - ${index + 1}`}
                                                                                className="w-full h-16 sm:h-20 object-cover rounded-lg"
                                                                           />
                                                                      )
                                                                 )}
                                                            </div>
                                                       )}

                                                       {step.hasTimer && (
                                                            <div className="flex items-center gap-3 sm:gap-6 mb-4 sm:mb-6">
                                                                 <div className="flex items-center gap-2 sm:gap-4">
                                                                      {/* Cooking icons */}
                                                                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                                                                           <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded" />
                                                                      </div>
                                                                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                                                                           <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full" />
                                                                      </div>
                                                                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                                                                           <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300" />
                                                                      </div>
                                                                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                                                                           <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" />
                                                                      </div>
                                                                      <span className="font-bold text-sm sm:text-lg">
                                                                           {step.time}
                                                                      </span>
                                                                      <div className="w-6 h-6 sm:w-8 sm:h-8 border-2 border-gray-300 rounded-lg flex items-center justify-center">
                                                                           <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-300 rounded-full" />
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       )}

                                                       <div className="flex items-center gap-2 sm:gap-3">
                                                            <input
                                                                 type="checkbox"
                                                                 checked={completedSteps.includes(
                                                                      step.id
                                                                 )}
                                                                 onChange={() =>
                                                                      toggleStep(step.id)
                                                                 }
                                                                 className="w-3 h-3 sm:w-4 sm:h-4 text-[#22ae4b] rounded"
                                                            />
                                                            <span className="text-gray-600 text-sm sm:text-base">
                                                                 {t.recipe.mark_complete}
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Comments Section */}
                              <div className="mb-6 sm:mb-8">
                                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                                        {t.recipe.comments}
                                   </h3>

                                   <div className="space-y-6 sm:space-y-8 mb-6 sm:mb-8">
                                        {comments.map((comment) => (
                                             <div key={comment.id} className="flex gap-3 sm:gap-4">
                                                  <Avatar className="w-10 h-10 sm:w-12 sm:h-12 flex-shrink-0">
                                                       <img
                                                            src={comment.avatar}
                                                            alt={comment.user}
                                                            className="w-full h-full object-cover"
                                                       />
                                                  </Avatar>

                                                  <div className="flex-1">
                                                       <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
                                                            <span className="font-bold text-gray-900 text-sm sm:text-base">
                                                                 {comment.user}
                                                            </span>
                                                            <span className="text-gray-500 text-xs sm:text-sm">
                                                                 {comment.date}
                                                            </span>
                                                       </div>

                                                       <p className="text-gray-700 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                                                            {comment.comment}
                                                       </p>

                                                       <div className="flex items-center gap-2 sm:gap-3">
                                                            <div className="flex items-center">
                                                                 {[...Array(5)].map((_, i) => (
                                                                      <Star
                                                                           key={i}
                                                                           className={`w-3 h-3 sm:w-4 sm:h-4 ${
                                                                                i < comment.rating
                                                                                     ? "fill-yellow-400 text-yellow-400"
                                                                                     : "text-gray-300"
                                                                           }`}
                                                                      />
                                                                 ))}
                                                            </div>
                                                            <span className="text-xs sm:text-sm text-gray-500">
                                                                 5.00 of 5
                                                            </span>
                                                       </div>
                                                  </div>
                                             </div>
                                        ))}
                                   </div>

                                   <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-gray-50 rounded-2xl">
                                        <Avatar className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                                             <img
                                                  src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
                                                  alt="Your avatar"
                                                  className="w-full h-full object-cover"
                                             />
                                        </Avatar>
                                        <Input
                                             placeholder={t.recipe.leave_comment}
                                             className={`flex-1 border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-gray-700 text-sm sm:text-base ${
                                                  isRTL ? "text-right" : "text-left"
                                             }`}
                                        />
                                        <Button className="bg-black hover:bg-gray-800 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 p-0 flex-shrink-0">
                                             <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                                        </Button>
                                   </div>
                              </div>
                         </div>

                         {/* Right Sidebar */}
                         <div className="lg:col-span-4">
                              <div className="sticky top-24 space-y-6">
                                   {/* Nutrition Totals */}
                                   <Card className="rounded-2xl">
                                        <CardContent className="p-4 sm:p-6">
                                             <div className="flex items-center justify-between mb-4 sm:mb-6">
                                                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                                       {language === "ar"
                                                            ? "إجمالي التغذية"
                                                            : "Nutrition Totals"}
                                                  </h3>
                                                  <div className="flex gap-2">
                                                       <div className="w-3 h-3 bg-[#22ae4b] rounded-full"></div>
                                                       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                  </div>
                                             </div>

                                             <div className="space-y-2 sm:space-y-3">
                                                  {nutritionData.map((item, index) => (
                                                       <div
                                                            key={index}
                                                            className="flex justify-between items-center">
                                                            <span className="text-gray-700 text-xs sm:text-sm">
                                                                 {item.label}
                                                            </span>
                                                            <span className="font-semibold text-[#22ae4b] text-xs sm:text-sm">
                                                                 {item.value}
                                                            </span>
                                                       </div>
                                                  ))}
                                             </div>

                                             <Button className="w-full mt-4 sm:mt-6 bg-[#22ae4b] hover:bg-[#1c9a40] text-white rounded-full text-sm">
                                                  {t.recipe.view_all_ingredients}
                                             </Button>
                                        </CardContent>
                                   </Card>

                                   {/* Advertisement */}
                                   <Card className="rounded-2xl border-0 h-60 sm:h-80 overflow-hidden">
                                        <CardContent className="p-0 h-full relative">
                                             <div
                                                  className="h-full bg-cover bg-center relative"
                                                  style={{
                                                       backgroundImage: `url(https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop)`,
                                                  }}>
                                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 sm:p-8">
                                                       <div className="text-white text-4xl sm:text-6xl font-extrabold mb-2 sm:mb-4 opacity-90">
                                                            AD
                                                       </div>
                                                  </div>
                                             </div>
                                        </CardContent>
                                   </Card>
                              </div>
                         </div>
                    </div>
               </div>

               <AdSection />
          </div>
     );
};
