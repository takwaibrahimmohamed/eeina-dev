import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Badge } from "../../components/ui/badge";
import { Avatar } from "../../components/ui/avatar";
import {
     ArrowLeft,
     Heart,
     Bookmark,
     ShoppingCart,
     Info,
     Clock,
     Users,
     ChefHat,
     Star,
     TrendingUp,
     Filter,
     Grid3X3,
     List,
     X,
} from "lucide-react";
import { Header } from "../../components/Header";

export const IngredientDetails = (): JSX.Element => {
     const { ingredientName } = useParams<{ ingredientName: string }>();
     const { t, isRTL, language } = useLanguage();
     const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
     const [sortBy, setSortBy] = useState("top-rated");
     const [showAllNutrients, setShowAllNutrients] = useState(false);

     // Sample ingredient data - in real app, this would come from API
     const ingredientData = {
          name: ingredientName || "Salsa",
          image: "https://images.pexels.com/photos/5737241/pexels-photo-5737241.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
          category: "Condiments & Sauces",
          storage: "Fridge",
          description:
               "A fresh and flavorful sauce made with tomatoes, onions, peppers, and herbs. Perfect for adding zest to your dishes.",
          nutritionPer100g: {
               calories: { value: 28.92, unit: "kcal", percentage: 1 },
               totalFat: { value: 0.17, unit: "g", percentage: 0 },
               carbs: { value: 6.64, unit: "g", percentage: 3 },
               sugars: { value: 4.01, unit: "g", percentage: 4 },
               protein: { value: 1.52, unit: "g", percentage: 3 },
               sodium: { value: 711, unit: "mg", percentage: 36 },
               fiber: { value: 1.9, unit: "g", percentage: 7 },
          },
          glycemicIndex: {
               value: 45,
               level: "Low",
               color: "green",
          },
          dailyValueNote: "Percent Daily Values based on a 2,000 calorie diet.",
          allNutrients: {
               vitamins: [
                    { name: "Vitamin A", value: "10.58", unit: "μg", percentage: 1 },
                    { name: "Vitamin C", value: "0.02", unit: "mg", percentage: 0 },
                    { name: "Vitamin E", value: "0.54", unit: "mg", percentage: 4 },
                    { name: "Vitamin K", value: "2.5", unit: "μg", percentage: 2 },
                    { name: "Thiamin (B1)", value: "0.057", unit: "mg", percentage: 5 },
                    { name: "Riboflavin (B2)", value: "0.086", unit: "mg", percentage: 7 },
                    { name: "Niacin (B3)", value: "1.594", unit: "mg", percentage: 10 },
                    { name: "Vitamin B6", value: "0.220", unit: "mg", percentage: 13 },
                    { name: "Folate", value: "27", unit: "μg", percentage: 7 },
                    { name: "Vitamin B12", value: "0", unit: "μg", percentage: 0 },
               ],
               minerals: [
                    { name: "Calcium", value: "18", unit: "mg", percentage: 2 },
                    { name: "Iron", value: "0.51", unit: "mg", percentage: 3 },
                    { name: "Magnesium", value: "11", unit: "mg", percentage: 3 },
                    { name: "Phosphorus", value: "24", unit: "mg", percentage: 2 },
                    { name: "Potassium", value: "218", unit: "mg", percentage: 5 },
                    { name: "Sodium", value: "711", unit: "mg", percentage: 31 },
                    { name: "Zinc", value: "0.17", unit: "mg", percentage: 2 },
                    { name: "Copper", value: "0.027", unit: "mg", percentage: 3 },
                    { name: "Manganese", value: "0.079", unit: "mg", percentage: 3 },
                    { name: "Selenium", value: "0.4", unit: "μg", percentage: 1 },
               ],
               otherNutrients: [
                    { name: "Water", value: "89.11", unit: "g", percentage: null },
                    { name: "Ash", value: "1.37", unit: "g", percentage: null },
                    { name: "Caffeine", value: "0", unit: "mg", percentage: null },
                    { name: "Theobromine", value: "0", unit: "mg", percentage: null },
                    { name: "Energy (kJ)", value: "121", unit: "kJ", percentage: null },
                    { name: "Alcohol", value: "0", unit: "g", percentage: null },
               ],
          },
          recipeCount: 2710,
     };

     // Sample recipes that use this ingredient
     const relatedRecipes = [
          {
               id: 1,
               title: "Mexican Street Tacos",
               image: "https://images.pexels.com/photos/4958792/pexels-photo-4958792.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
               rating: 4.8,
               reviews: 324,
               cookingTime: "20 min",
               difficulty: "Easy",
               author: {
                    name: "Chef Maria",
                    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               },
               likes: 97,
               category: "Mexican",
          },
          {
               id: 2,
               title: "Fresh Guacamole Bowl",
               image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
               rating: 4.9,
               reviews: 156,
               cookingTime: "10 min",
               difficulty: "Easy",
               author: {
                    name: "Chef Carlos",
                    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               },
               likes: 96,
               category: "Appetizers",
          },
          {
               id: 3,
               title: "Spicy Chicken Quesadillas",
               image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
               rating: 4.7,
               reviews: 289,
               cookingTime: "25 min",
               difficulty: "Medium",
               author: {
                    name: "Chef Ana",
                    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               },
               likes: 96,
               category: "Mexican",
          },
          {
               id: 4,
               title: "Loaded Nachos Supreme",
               image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
               rating: 4.6,
               reviews: 198,
               cookingTime: "15 min",
               difficulty: "Easy",
               author: {
                    name: "Chef Diego",
                    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               },
               likes: 94,
               category: "Snacks",
          },
          {
               id: 5,
               title: "Breakfast Burrito Bowl",
               image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
               rating: 4.5,
               reviews: 142,
               cookingTime: "30 min",
               difficulty: "Medium",
               author: {
                    name: "Chef Sofia",
                    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               },
               likes: 92,
               category: "Breakfast",
          },
          {
               id: 6,
               title: "Veggie Fajita Wraps",
               image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
               rating: 4.4,
               reviews: 87,
               cookingTime: "35 min",
               difficulty: "Medium",
               author: {
                    name: "Chef Luis",
                    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
               },
               likes: 89,
               category: "Vegetarian",
          },
     ];

     const sortOptions = [
          { value: "top-rated", label: language === "ar" ? "الأعلى تقييماً" : "Top Rated" },
          { value: "most-popular", label: language === "ar" ? "الأكثر شعبية" : "Most Popular" },
          { value: "newest", label: language === "ar" ? "الأحدث" : "Newest" },
          { value: "quickest", label: language === "ar" ? "الأسرع" : "Quickest" },
     ];

     const getNutritionColor = (percentage: number) => {
          if (percentage <= 5) return "text-green-600";
          if (percentage <= 15) return "text-yellow-600";
          if (percentage <= 25) return "text-orange-600";
          return "text-red-600";
     };

     const getNutritionBgColor = (percentage: number) => {
          if (percentage <= 5) return "bg-green-100";
          if (percentage <= 15) return "bg-yellow-100";
          if (percentage <= 25) return "bg-orange-100";
          return "bg-red-100";
     };

     const RecipeCard = ({ recipe }: { recipe: any }) => (
          <Link to={`/recipe/${recipe.id}`}>
               <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                    <CardContent className="p-0">
                         <div className="relative">
                              <img
                                   src={recipe.image}
                                   alt={recipe.title}
                                   className="w-full h-48 object-cover rounded-t-lg"
                              />
                              <div className="absolute top-3 left-3 flex gap-2">
                                   <Badge className="bg-[#22ae4b] text-white text-xs">
                                        {recipe.category}
                                   </Badge>
                              </div>
                              <div className="absolute top-3 right-3 flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                   <Heart className="w-3 h-3" />
                                   <span>{recipe.likes}%</span>
                              </div>
                         </div>

                         <div className="p-4">
                              <h3 className="font-bold text-lg mb-2 group-hover:text-[#22ae4b] transition-colors line-clamp-2">
                                   {recipe.title}
                              </h3>

                              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                                   <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4" />
                                        <span>{recipe.cookingTime}</span>
                                   </div>
                                   <div className="flex items-center gap-1">
                                        <ChefHat className="w-4 h-4" />
                                        <span>{recipe.difficulty}</span>
                                   </div>
                              </div>

                              <div className="flex items-center justify-between">
                                   <div className="flex items-center gap-2">
                                        <Avatar className="w-6 h-6">
                                             <img
                                                  src={recipe.author.avatar}
                                                  alt={recipe.author.name}
                                             />
                                        </Avatar>
                                        <span className="text-sm text-gray-600">
                                             {recipe.author.name}
                                        </span>
                                   </div>
                                   <div className="flex items-center gap-1 text-sm">
                                        <div className="flex text-yellow-400">★★★★★</div>
                                        <span className="text-gray-600">({recipe.reviews})</span>
                                   </div>
                              </div>
                         </div>
                    </CardContent>
               </Card>
          </Link>
     );

     const ListView = () => (
          <div className="space-y-4">
               {relatedRecipes.map((recipe) => (
                    <Link key={recipe.id} to={`/recipe/${recipe.id}`} className="block">
                         <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                              <CardContent className="p-0">
                                   <div className="flex">
                                        <div className="relative w-48 h-32">
                                             <img
                                                  src={recipe.image}
                                                  alt={recipe.title}
                                                  className="w-full h-full object-cover rounded-l-lg"
                                             />
                                             <div className="absolute top-2 left-2">
                                                  <Badge className="bg-[#22ae4b] text-white text-xs">
                                                       {recipe.category}
                                                  </Badge>
                                             </div>
                                        </div>

                                        <div className="flex-1 p-4 flex justify-between">
                                             <div className="flex-1">
                                                  <h3 className="font-bold text-lg mb-2 group-hover:text-[#22ae4b] transition-colors">
                                                       {recipe.title}
                                                  </h3>

                                                  <div className="flex items-center gap-6 text-sm text-gray-600 mb-3">
                                                       <div className="flex items-center gap-1">
                                                            <Clock className="w-4 h-4" />
                                                            <span>{recipe.cookingTime}</span>
                                                       </div>
                                                       <div className="flex items-center gap-1">
                                                            <ChefHat className="w-4 h-4" />
                                                            <span>{recipe.difficulty}</span>
                                                       </div>
                                                  </div>

                                                  <div className="flex items-center gap-2">
                                                       <Avatar className="w-6 h-6">
                                                            <img
                                                                 src={recipe.author.avatar}
                                                                 alt={recipe.author.name}
                                                            />
                                                       </Avatar>
                                                       <span className="text-sm text-gray-600">
                                                            {recipe.author.name}
                                                       </span>
                                                  </div>
                                             </div>

                                             <div className="flex flex-col items-end justify-between">
                                                  <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded text-xs">
                                                       <Heart className="w-3 h-3" />
                                                       <span>{recipe.likes}%</span>
                                                  </div>
                                                  <div className="flex items-center gap-1 text-sm">
                                                       <div className="flex text-yellow-400">
                                                            ★★★★★
                                                       </div>
                                                       <span className="text-gray-600">
                                                            ({recipe.reviews})
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </CardContent>
                         </Card>
                    </Link>
               ))}
          </div>
     );

     return (
          <div className="bg-gray-50 min-h-screen">
               <Header />

               <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Back Button */}
                    <div className="mb-6">
                         <Button
                              variant="ghost"
                              className="text-gray-600 hover:text-gray-900 p-0"
                              onClick={() => window.history.back()}>
                              <ArrowLeft className="w-4 h-4 mr-2" />
                              {language === "ar" ? "رجوع" : "Back"}
                         </Button>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                         {/* Left - Ingredient Details */}
                         <div className="lg:col-span-4">
                              <Card className="sticky top-24">
                                   <CardContent className="p-6">
                                        {/* Ingredient Image and Basic Info */}
                                        <div className="text-center mb-6">
                                             <div className="relative inline-block mb-4">
                                                  <img
                                                       src={ingredientData.image}
                                                       alt={ingredientData.name}
                                                       className="w-32 h-32 rounded-2xl object-cover mx-auto shadow-lg"
                                                  />
                                                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-2 shadow-lg">
                                                       <Badge className="bg-gray-100 text-gray-700 text-xs">
                                                            {ingredientData.storage}
                                                       </Badge>
                                                  </div>
                                             </div>

                                             <h1 className="text-2xl font-bold text-gray-900 mb-2">
                                                  {ingredientData.name}
                                             </h1>

                                             <Badge className="bg-[#22ae4b] text-white mb-4">
                                                  {ingredientData.category}
                                             </Badge>

                                             <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                                  {ingredientData.description}
                                             </p>
                                        </div>

                                        {/* Nutrition Header */}
                                        <div className="mb-6">
                                             <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                  {language === "ar"
                                                       ? "التغذية لكل 100 جرام"
                                                       : "Nutrition per 100g"}
                                             </h3>
                                        </div>

                                        {/* Nutrition Facts */}
                                        <div className="space-y-3 mb-6">
                                             {Object.entries(ingredientData.nutritionPer100g).map(
                                                  ([key, data]) => (
                                                       <div
                                                            key={key}
                                                            className="flex items-center justify-between py-2 border-b border-gray-100">
                                                            <span className="font-medium text-gray-700 capitalize">
                                                                 {key === "totalFat"
                                                                      ? "Total Fat"
                                                                      : key}
                                                            </span>
                                                            <div className="flex items-center gap-3">
                                                                 <span className="font-semibold text-gray-900">
                                                                      {data.value}
                                                                      {data.unit}
                                                                 </span>
                                                                 <div
                                                                      className={`px-2 py-1 rounded text-xs font-medium ${getNutritionBgColor(
                                                                           data.percentage
                                                                      )} ${getNutritionColor(
                                                                           data.percentage
                                                                      )}`}>
                                                                      {data.percentage}%
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  )
                                             )}
                                        </div>

                                        {/* Glycemic Index */}
                                        <div className="mb-6 p-4 bg-green-50 rounded-lg">
                                             <div className="flex items-center justify-between">
                                                  <div className="flex items-center gap-2">
                                                       <span className="font-medium text-gray-700">
                                                            Glycemic Index
                                                       </span>
                                                       <Info className="w-4 h-4 text-gray-400" />
                                                  </div>
                                                  <div className="flex items-center gap-2">
                                                       <span className="text-2xl font-bold text-green-600">
                                                            {ingredientData.glycemicIndex.value}
                                                       </span>
                                                       <Badge className="bg-green-500 text-white">
                                                            {ingredientData.glycemicIndex.level}
                                                       </Badge>
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Daily Value Note */}
                                        <p className="text-xs text-gray-500 mb-6">
                                             {ingredientData.dailyValueNote}
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="space-y-3">
                                             <Button className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white">
                                                  <ShoppingCart className="w-4 h-4 mr-2" />
                                                  {language === "ar"
                                                       ? "أضف إلى قائمة التسوق"
                                                       : "Add to shopping list"}
                                             </Button>

                                             <div className="grid grid-cols-2 gap-3">
                                                  <Button variant="outline" className="flex-1">
                                                       <Heart className="w-4 h-4 mr-2" />
                                                       {language === "ar" ? "حفظ" : "Save"}
                                                  </Button>
                                                  <Button variant="outline" className="flex-1">
                                                       <Bookmark className="w-4 h-4 mr-2" />
                                                       {language === "ar" ? "مفضلة" : "Favorite"}
                                                  </Button>
                                             </div>
                                        </div>

                                        {/* View All Nutrients Link */}
                                        <div className="mt-6 text-center">
                                             <Button
                                                  variant="ghost"
                                                  className="text-[#22ae4b] hover:text-[#1c9a40]"
                                                  onClick={() => setShowAllNutrients(true)}>
                                                  {language === "ar"
                                                       ? "عرض جميع العناصر الغذائية"
                                                       : "View all nutrients"}
                                             </Button>
                                        </div>
                                   </CardContent>
                              </Card>
                         </div>

                         {/* Right - Related Recipes */}
                         <div className="lg:col-span-8">
                              {/* Recipes Header */}
                              <div className="mb-6">
                                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 items-center justify-between mb-4">
                                        <div>
                                             <h2 className="text-2xl font-bold text-gray-900">
                                                  {language === "ar"
                                                       ? `في ${ingredientData.recipeCount.toLocaleString()} وصفة`
                                                       : `In ${ingredientData.recipeCount.toLocaleString()} Recipes`}
                                             </h2>
                                             <p className="text-gray-600">
                                                  {language === "ar"
                                                       ? "وصفات تستخدم هذا المكون"
                                                       : "Recipes that use this ingredient"}
                                             </p>
                                        </div>

                                        <div className="flex items-center gap-2">
                                             {/* Sort Dropdown */}
                                             <select
                                                  value={sortBy}
                                                  onChange={(e) => setSortBy(e.target.value)}
                                                  className="px-3 py-2 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] text-sm">
                                                  {sortOptions.map((option) => (
                                                       <option
                                                            key={option.value}
                                                            value={option.value}>
                                                            {language === "ar"
                                                                 ? "ترتيب حسب: "
                                                                 : "Sort by: "}
                                                            {option.label}
                                                       </option>
                                                  ))}
                                             </select>

                                             {/* View Toggle */}
                                             <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                                                  <Button
                                                       variant={
                                                            viewMode === "grid"
                                                                 ? "default"
                                                                 : "ghost"
                                                       }
                                                       size="sm"
                                                       onClick={() => setViewMode("grid")}
                                                       className={
                                                            viewMode === "grid"
                                                                 ? "bg-white shadow-sm"
                                                                 : "hover:bg-white/50"
                                                       }>
                                                       <Grid3X3 className="w-4 h-4" />
                                                  </Button>
                                                  <Button
                                                       variant={
                                                            viewMode === "list"
                                                                 ? "default"
                                                                 : "ghost"
                                                       }
                                                       size="sm"
                                                       onClick={() => setViewMode("list")}
                                                       className={
                                                            viewMode === "list"
                                                                 ? "bg-white shadow-sm"
                                                                 : "hover:bg-white/50"
                                                       }>
                                                       <List className="w-4 h-4" />
                                                  </Button>
                                             </div>
                                        </div>
                                   </div>
                              </div>

                              {/* Recipes Grid/List */}
                                 <>
                                   <div className="block md:hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedRecipes.map((recipe) => (
                                             <RecipeCard key={recipe.id} recipe={recipe} />
                                        ))}
                                   </div>
                                   </div>

                              <div className="hidden md:block">
                                   {viewMode === 'grid' ?( <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {relatedRecipes.map((recipe) => (
                                             <RecipeCard key={recipe.id} recipe={recipe} />
                                        ))}
                                   </div>) : (<ListView />)}
                              </div>
                                   </>
                           

                              {/* Load More Button */}
                              <div className="text-center mt-8">
                                   <Button variant="outline" className="px-8">
                                        {language === "ar"
                                             ? "تحميل المزيد من الوصفات"
                                             : "Load More Recipes"}
                                   </Button>
                              </div>
                         </div>
                    </div>
               </div>

               {/* All Nutrients Modal */}
               {showAllNutrients && (
                    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
                         <Card className="w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white shadow-2xl">
                              <CardContent className="p-0">
                                   {/* Modal Header */}
                                   <div className="p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
                                        <div className="flex items-center justify-between">
                                             <div className="flex items-center gap-3">
                                                  <img
                                                       src={ingredientData.image}
                                                       alt={ingredientData.name}
                                                       className="w-12 h-12 rounded-lg object-cover"
                                                  />
                                                  <div>
                                                       <h3 className="text-xl font-bold text-gray-900">
                                                            {ingredientData.name} -{" "}
                                                            {language === "ar"
                                                                 ? "جميع العناصر الغذائية"
                                                                 : "All Nutrients"}
                                                       </h3>
                                                       <p className="text-sm text-gray-600">
                                                            {language === "ar"
                                                                 ? "لكل 100 جرام"
                                                                 : "Per 100g serving"}
                                                       </p>
                                                  </div>
                                             </div>
                                             <Button
                                                  variant="ghost"
                                                  size="icon"
                                                  onClick={() => setShowAllNutrients(false)}
                                                  className="hover:bg-gray-100">
                                                  <X className="w-5 h-5" />
                                             </Button>
                                        </div>
                                   </div>

                                   {/* Modal Content */}
                                   <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
                                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                             {/* Vitamins */}
                                             <div>
                                                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                       <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                                                       {language === "ar"
                                                            ? "الفيتامينات"
                                                            : "Vitamins"}
                                                  </h4>
                                                  <div className="space-y-3">
                                                       {ingredientData.allNutrients.vitamins.map(
                                                            (nutrient, index) => (
                                                                 <div
                                                                      key={index}
                                                                      className="flex items-center justify-between py-2 border-b border-gray-100">
                                                                      <span className="text-sm font-medium text-gray-700">
                                                                           {nutrient.name}
                                                                      </span>
                                                                      <div className="flex items-center gap-3">
                                                                           <span className="text-sm font-semibold text-gray-900">
                                                                                {nutrient.value}
                                                                                {nutrient.unit}
                                                                           </span>
                                                                           {nutrient.percentage !==
                                                                                null && (
                                                                                <div
                                                                                     className={`px-2 py-1 rounded text-xs font-medium ${getNutritionBgColor(
                                                                                          nutrient.percentage
                                                                                     )} ${getNutritionColor(
                                                                                          nutrient.percentage
                                                                                     )}`}>
                                                                                     {
                                                                                          nutrient.percentage
                                                                                     }
                                                                                     %
                                                                                </div>
                                                                           )}
                                                                      </div>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             {/* Minerals */}
                                             <div>
                                                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                       <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                                       {language === "ar" ? "المعادن" : "Minerals"}
                                                  </h4>
                                                  <div className="space-y-3">
                                                       {ingredientData.allNutrients.minerals.map(
                                                            (nutrient, index) => (
                                                                 <div
                                                                      key={index}
                                                                      className="flex items-center justify-between py-2 border-b border-gray-100">
                                                                      <span className="text-sm font-medium text-gray-700">
                                                                           {nutrient.name}
                                                                      </span>
                                                                      <div className="flex items-center gap-3">
                                                                           <span className="text-sm font-semibold text-gray-900">
                                                                                {nutrient.value}
                                                                                {nutrient.unit}
                                                                           </span>
                                                                           {nutrient.percentage !==
                                                                                null && (
                                                                                <div
                                                                                     className={`px-2 py-1 rounded text-xs font-medium ${getNutritionBgColor(
                                                                                          nutrient.percentage
                                                                                     )} ${getNutritionColor(
                                                                                          nutrient.percentage
                                                                                     )}`}>
                                                                                     {
                                                                                          nutrient.percentage
                                                                                     }
                                                                                     %
                                                                                </div>
                                                                           )}
                                                                      </div>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>

                                             {/* Other Nutrients */}
                                             <div>
                                                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                                       <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                                       {language === "ar"
                                                            ? "عناصر أخرى"
                                                            : "Other Nutrients"}
                                                  </h4>
                                                  <div className="space-y-3">
                                                       {ingredientData.allNutrients.otherNutrients.map(
                                                            (nutrient, index) => (
                                                                 <div
                                                                      key={index}
                                                                      className="flex items-center justify-between py-2 border-b border-gray-100">
                                                                      <span className="text-sm font-medium text-gray-700">
                                                                           {nutrient.name}
                                                                      </span>
                                                                      <div className="flex items-center gap-3">
                                                                           <span className="text-sm font-semibold text-gray-900">
                                                                                {nutrient.value}
                                                                                {nutrient.unit}
                                                                           </span>
                                                                      </div>
                                                                 </div>
                                                            )
                                                       )}
                                                  </div>
                                             </div>
                                        </div>

                                        {/* Footer Note */}
                                        <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                                             <p className="text-xs text-gray-600 text-center">
                                                  {ingredientData.dailyValueNote}
                                             </p>
                                             <p className="text-xs text-gray-500 text-center mt-2">
                                                  {language === "ar"
                                                       ? "المصدر: قاعدة بيانات التغذية الأمريكية"
                                                       : "Source: USDA National Nutrient Database"}
                                             </p>
                                        </div>
                                   </div>
                              </CardContent>
                         </Card>
                    </div>
               )}

               <AdSection />
          </div>
     );
};
