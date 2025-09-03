import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { AdSection } from "./sections/AdSection";
import { RecipeCardSection } from "./sections/RecipeCardSection/RecipeCardSection";
import { Avatar } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import {
   Plus,
   TrendingUp,
   Clock,
   Users,
   Star,
   ChefHat,
   Heart,
   Bookmark,
   Play,
   Award,
   Siren as Fire,
   Globe,
   MessageCircle,
   Share2,
   Calendar,
} from "lucide-react";
import { Header } from "../../components/Header";

export const Home = (): JSX.Element => {
   const { t, isRTL, language } = useLanguage();
   const [likedRecipes, setLikedRecipes] = useState<number[]>([]);
   const [savedRecipes, setSavedRecipes] = useState<number[]>([]);
   const [followedCreators, setFollowedCreators] = useState<string[]>([]);
   const [newComment, setNewComment] = useState("");
   const [showAllCreators, setShowAllCreators] = useState(false);

   // Generate localized path
   const getLocalizedPath = (path: string) => {
      return language === "ar" ? `/ar${path === "/" ? "" : path}` : path;
   };

   // User profile data
   const userProfile = {
      name: "Adam Ahmed",
      avatar:
         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      followers: 7,
      following: 10,
      recipesCreated: 12,
      totalLikes: 1247,
   };

   // Featured recipes data
   const featuredRecipes = [
      {
         id: 1,
         title: "Creamy Porcini Mushroom Polenta",
         category: "Italian",
         cookingTime: "25 min",
         difficulty: "Beginner",
         rating: 4.8,
         reviews: 124,
         image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
         author: {
            name: "Chef Marco",
            avatar:
               "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
         },
         trending: true,
         featured: true,
      },
      {
         id: 2,
         title: "Spicy Thai Basil Chicken",
         category: "Asian",
         cookingTime: "30 min",
         difficulty: "Intermediate",
         rating: 4.9,
         reviews: 89,
         image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
         author: {
            name: "Chef Sarah",
            avatar:
               "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
         },
         trending: true,
      },
      {
         id: 3,
         title: "Classic Margherita Pizza",
         category: "Italian",
         cookingTime: "45 min",
         difficulty: "Beginner",
         rating: 4.7,
         reviews: 156,
         image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
         author: {
            name: "Chef Antonio",
            avatar:
               "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
         },
      },
      {
         id: 4,
         title: "Fluffy Pancakes with Berries",
         category: "Breakfast",
         cookingTime: "20 min",
         difficulty: "Beginner",
         rating: 4.6,
         reviews: 203,
         image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
         author: {
            name: "Chef Emma",
            avatar:
               "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop",
         },
      },
   ];

   // Top creators data
   const creators = [
      {
         name: "Sarah Johnson",
         avatar:
            "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
         followers: 1200,
         following: 45,
         specialty: "Italian Cuisine",
         verified: true,
      },
      {
         name: "Mike Chen",
         avatar:
            "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
         followers: 890,
         following: 32,
         specialty: "Asian Fusion",
         verified: false,
      },
      {
         name: "Emma Davis",
         avatar:
            "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
         followers: 2100,
         following: 78,
         specialty: "Healthy Meals",
         verified: true,
      },
   ];

   const toggleLike = (recipeId: number) => {
      setLikedRecipes((prev) => (prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]));
   };

   const toggleSave = (recipeId: number) => {
      setSavedRecipes((prev) => (prev.includes(recipeId) ? prev.filter((id) => id !== recipeId) : [...prev, recipeId]));
   };

   const toggleFollow = (creatorName: string) => {
      setFollowedCreators((prev) =>
         prev.includes(creatorName) ? prev.filter((name) => name !== creatorName) : [...prev, creatorName]
      );
   };

   const handleComment = (e: React.FormEvent) => {
      e.preventDefault();
      if (newComment.trim()) {
         console.log("New comment:", newComment);
         setNewComment("");
      }
   };

   // Quick stats data
   const quickStats = [
      { label: "Recipes", value: "50K+", icon: ChefHat, color: "bg-blue-500" },
      { label: "Chefs", value: "12K+", icon: Users, color: "bg-purple-500" },
      { label: "Countries", value: "150+", icon: Globe, color: "bg-green-500" },
      { label: "Reviews", value: "1M+", icon: Star, color: "bg-yellow-500" },
   ];

   return (
      <div className="bg-gradient-to-br from-gray-50
       to-white min-h-screen">
         {/* Header */}
         <Header />

         <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 
            gap-4 sm:gap-6 lg:gap-8">
               {/* Left Column - User Profile & Quick Actions */}
               <div className="lg:col-span-3 order-2 lg:order-1">
                  {/* Enhanced User Profile Card */}
                  <Card className="mb-6 overflow-hidden">
                     <div className="h-20 bg-gradient-to-r from-[#22ae4b] to-[#1c9a40] relative">
                        <div className={`absolute -bottom-8 ${isRTL?"right-6":"left-6"}`}>
                           <Link to="/profile" className="block">
                              <Avatar className="w-16 h-16 border-4 border-white shadow-lg hover:scale-105 transition-transform">
                                 <img
                                    className="w-full h-full object-cover"
                                    alt="User avatar"
                                    src={userProfile.avatar}
                                 />
                              </Avatar>
                           </Link>
                        </div>
                     </div>
                     <CardContent className="pt-12 pb-6 px-4 sm:px-6">
                        <Link to="/profile" >
                           <h3 className="font-bold text-lg text-gray-900 hover:text-[#22ae4b] transition-colors mb-2">
                              {userProfile.name}
                           </h3>
                        </Link>
                        <p className="text-gray-600 text-sm mb-4">Food enthusiast & home chef</p>

                        <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-4">
                           <div className="text-center">
                              <div className="font-bold text-[#22ae4b] text-lg">{userProfile.recipesCreated}</div>
                              <div className="text-xs text-gray-600">Recipes</div>
                           </div>
                           <div className="text-center">
                              <div className="font-bold text-[#22ae4b] text-lg">{userProfile.totalLikes}</div>
                              <div className="text-xs text-gray-600">Likes</div>
                           </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-2">
                           <Link to="/profile" className="flex-1">
                              <Button variant="outline" size="sm" className="w-full text-xs">
                                  {t.profile.view_profile}
                              </Button>
                           </Link>
                           <Link to="/edit-profile" className="flex-1">
                              <Button size="sm" className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-xs">
                                  {t.profile.edit_profile}
                              </Button>
                           </Link>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Quick Actions */}
                  <Card className="mb-6">
                     <CardContent className="p-4 sm:p-6">
                        <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                           <Plus className="w-5 h-5 text-[#22ae4b]" />
                          {t.home.quick_actions}
                        </h3>
                        <div className="space-y-3">
                           <Link to="/create-recipe" className="block">
                              <Button className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white justify-start">
                                 <Plus className="w-4 h-4 mr-2" />
                                  {t.home.create_recipe}
                              </Button>
                           </Link>
                           <Link to="/planner" className="block">
                              <Button variant="outline" className="w-full justify-start">
                                 <Calendar className="w-4 h-4 mr-2" />
                                    {t.home.meal_planner}
                              </Button>
                           </Link>
                           <Link to="/lists" className="block">
                              <Button variant="outline" className="w-full justify-start">
                                 <Bookmark className="w-4 h-4 mr-2" />
                                 {t.home.shopping_list}
                              </Button>
                           </Link>
                        </div>
                     </CardContent>
                  </Card>

                  {/* Import Recipe */}
                  <Card className="hidden lg:block">
                     <CardContent className="p-4 sm:p-6">
                        <h3 className="font-bold text-gray-900 mb-4">{t.home.import_recipe}</h3>
                        <div className="space-y-3">
                           <Input
                              placeholder={t.home.Paste_recipe_URL}
                              className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                           />
                           <Button className="w-full bg-[#22ae4b]
                            hover:bg-[#1c9a40] text-white">{t.home.import_recipe}</Button>
                        </div>
                     </CardContent>
                  </Card>
               </div>

               {/* Center Column - Featured Content */}
               <div className="lg:col-span-6 order-1 lg:order-2">
                  {/* Featured Recipe Hero */}
                  <Card className="mb-8 overflow-hidden">
                     <div className="relative h-60 sm:h-80">
                        <img
                           src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
                           alt="Featured recipe"
                           className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute top-4 left-4">
                           <Badge className="bg-red-500 text-white">
                              <Fire className="w-3 h-3 mr-1" />
                              Trending
                           </Badge>
                        </div>
                        <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                           <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
                              Recipe of the Day: Spicy Thai Basil Chicken
                           </h2>
                           <div className="flex items-center gap-2 sm:gap-4 text-white/90 text-xs sm:text-sm mb-4">
                              <div className="flex items-center gap-1">
                                 <Clock className="w-4 h-4" />
                                 <span>30 min</span>
                              </div>
                              <div className="flex items-center gap-1">
                                 <Users className="w-4 h-4" />
                                 <span>4 servings</span>
                              </div>
                              <div className="flex items-center gap-1">
                                 <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                 <span>4.9</span>
                              </div>
                           </div>
                           <Link to="/recipe/2">
                              <Button className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white text-sm">
                                 <Play className="w-4 h-4 mr-2" />
                                  {t.recipe.View_Recipe}
                              </Button>
                           </Link>
                        </div>
                     </div>
                  </Card>

                  {/* Popular Recipes Grid */}
                  <div className="mb-8">
                     <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t.home.popular_this_week}</h2>
                        <Link to={getLocalizedPath("/explore")}>
                           <Button variant="outline" size="sm">
                              {t.common.view_all}
                           </Button>
                        </Link>
                     </div>
                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        {featuredRecipes.slice(0, 4).map((recipe) => (
                           <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
                              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                 <CardContent className="p-0">
                                    <div className="relative">
                                       <img
                                          src={recipe.image}
                                          alt={recipe.title}
                                          className="w-full h-32 sm:h-40 object-cover rounded-t-lg"
                                       />
                                       <div className="absolute top-3 left-3 flex gap-2">
                                          <Badge className="bg-[#22ae4b] text-white text-xs">{recipe.category}</Badge>
                                          {recipe.trending && (
                                             <Badge className="bg-red-500 text-white text-xs">
                                                <TrendingUp className="w-3 h-3 mr-1" />
                                                Hot
                                             </Badge>
                                          )}
                                       </div>
                                       <Button
                                          variant="ghost"
                                          size="icon"
                                          className="absolute top-3 right-3 bg-white/90 hover:bg-white text-gray-600 hover:text-red-500 rounded-full"
                                       >
                                          <Heart className="w-4 h-4" />
                                       </Button>
                                    </div>

                                    <div className="p-3 sm:p-4">
                                       <h3 className="font-bold text-sm sm:text-base mb-2 group-hover:text-[#22ae4b] transition-colors line-clamp-2">
                                          {recipe.title}
                                       </h3>

                                       <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600 mb-3">
                                          <div className="flex items-center gap-1">
                                             <Clock className="w-3 h-3" />
                                             <span>{recipe.cookingTime}</span>
                                          </div>
                                          <div className="flex items-center gap-1">
                                             <ChefHat className="w-3 h-3" />
                                             <span>{recipe.difficulty}</span>
                                          </div>
                                       </div>

                                       <div className="flex items-center justify-between">
                                          <div className="flex items-center gap-2">
                                             <Avatar className="w-5 h-5">
                                                <img src={recipe.author.avatar} alt={recipe.author.name} />
                                             </Avatar>
                                             <span className="text-xs text-gray-600">{recipe.author.name}</span>
                                          </div>
                                          <div className="flex items-center gap-1">
                                             <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(e) => {
                                                   e.preventDefault();
                                                   e.stopPropagation();
                                                   toggleLike(recipe.id);
                                                }}
                                                className={`w-6 h-6 ${
                                                   likedRecipes.includes(recipe.id)
                                                      ? "text-red-500"
                                                      : "text-gray-400 hover:text-red-500"
                                                }`}
                                             >
                                                <Heart
                                                   className={`w-3 h-3 ${
                                                      likedRecipes.includes(recipe.id) ? "fill-current" : ""
                                                   }`}
                                                />
                                             </Button>
                                             <Button
                                                variant="ghost"
                                                size="icon"
                                                onClick={(e) => {
                                                   e.preventDefault();
                                                   e.stopPropagation();
                                                   toggleSave(recipe.id);
                                                }}
                                                className={`w-6 h-6 ${
                                                   savedRecipes.includes(recipe.id)
                                                      ? "text-yellow-500"
                                                      : "text-gray-400 hover:text-yellow-500"
                                                }`}
                                             >
                                                <Bookmark
                                                   className={`w-3 h-3 ${
                                                      savedRecipes.includes(recipe.id) ? "fill-current" : ""
                                                   }`}
                                                />
                                             </Button>
                                          </div>
                                       </div>
                                    </div>
                                 </CardContent>
                              </Card>
                           </Link>
                        ))}
                     </div>
                  </div>

                  {/* Recent Activity Feed */}
                  <div className="space-y-6">
                     <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{t.home.recent_activity}</h2>

                     {/* Interactive Post Card */}
                     <Card className="bg-white rounded-3xl border-0 shadow-sm">
                        <CardContent className="p-4 sm:p-6">
                           {/* Post Header */}
                           <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                              <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                                 <Link to={getLocalizedPath("/profile")}>
                                    <img
                                       src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                                       alt="Adam Ahmed"
                                       className="w-full h-full object-cover"
                                    />
                                 </Link>
                              </Avatar>
                              <div className="flex-1">
                                 <Link
                                    to={getLocalizedPath("/profile")}
                                    className="font-semibold text-sm sm:text-base text-black hover:text-[#22ae4b] transition-colors"
                                 >
                                    Adam Ahmed
                                 </Link>
                                 <div className="font-medium text-[#7a7a7a] text-xs sm:text-sm">30 mins ago</div>
                              </div>
                              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-gray-600">
                                 <div className="flex items-center gap-1">
                                    <div className="w-1 h-1 bg-current rounded-full" />
                                    <div className="w-1 h-1 bg-current rounded-full" />
                                    <div className="w-1 h-1 bg-current rounded-full" />
                                 </div>
                              </Button>
                           </div>

                           {/* Post Content */}
                           <div className="mb-4 sm:mb-6">
                              <p className="font-semibold text-black text-base sm:text-lg mb-3 sm:mb-4">
                                 {language === "ar"
                                    ? "لقد صنعت هذه المعكرونة المنزلية الرائعة! السر في الأعشاب الطازجة 🌿"
                                    : "Just made this incredible homemade pasta! The secret is in the fresh herbs 🌿"}
                              </p>
                              <Link
                                 to={getLocalizedPath("/recipe/1")}
                                 className="block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                              >
                                 <img
                                    className="w-full h-60 sm:h-80 object-cover"
                                    alt="Delicious homemade pasta"
                                    src="https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                 />
                              </Link>
                           </div>

                           {/* Interactive Actions */}
                           <div className="flex items-center gap-4 sm:gap-6 mb-4">
                              <Button
                                 variant="ghost"
                                 size="sm"
                                 className={`flex items-center gap-2 ${
                                    likedRecipes.includes(1) ? "text-red-500" : "text-gray-600 hover:text-red-500"
                                 }`}
                                 onClick={() => toggleLike(1)}
                              >
                                 <Heart className={`w-5 h-5 ${likedRecipes.includes(1) ? "fill-current" : ""}`} />
                                 <span>{likedRecipes.includes(1) ? 25 : 24}</span>
                              </Button>
                              <Button
                                 variant="ghost"
                                 size="sm"
                                 className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                              >
                                 <MessageCircle className="w-5 h-5" />
                                 <span>8</span>
                              </Button>
                              <Button
                                 variant="ghost"
                                 size="sm"
                                 className="flex items-center gap-2 text-gray-600 hover:text-green-500"
                              >
                                 <Share2 className="w-5 h-5" />
                              </Button>
                              <Button
                                 variant="ghost"
                                 size="sm"
                                 className={`ml-auto ${
                                    savedRecipes.includes(1) ? "text-yellow-500" : "text-gray-600 hover:text-yellow-500"
                                 }`}
                                 onClick={() => toggleSave(1)}
                              >
                                 <Bookmark className={`w-5 h-5 ${savedRecipes.includes(1) ? "fill-current" : ""}`} />
                              </Button>
                           </div>

                           {/* Comment Input */}
                           <form
                              onSubmit={handleComment}
                              className="flex items-center gap-3 p-3 rounded-full border border-gray-300 bg-gray-50"
                           >
                              <Avatar className="w-8 h-8">
                                 <img
                                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                                    alt="Your avatar"
                                    className="w-full h-full object-cover"
                                 />
                              </Avatar>
                              <Input
                                 placeholder={language === "ar" ? "أضف تعليقاً..." : "Add a comment..."}
                                 value={newComment}
                                 onChange={(e) => setNewComment(e.target.value)}
                                 className={`flex-1 border-0 bg-transparent text-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 ${
                                    isRTL ? "text-right" : "text-left"
                                 }`}
                              />
                              {newComment.trim() && (
                                 <Button
                                    type="submit"
                                    size="sm"
                                    className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white rounded-full px-4"
                                 >
                                    {language === "ar" ? "نشر" : "Post"}
                                 </Button>
                              )}
                           </form>
                        </CardContent>
                     </Card>

                     <RecipeCardSection />
                  </div>
               </div>

               {/* Right Column - Top Creators & Trending */}
               <div className="lg:col-span-3 order-3">
                  {/* Top Creators */}
                  <Card className="mb-6">
                     <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-2 mb-6">
                           <Award className="w-5 h-5 text-[#22ae4b]" />
                           <h3 className="font-bold text-gray-900">{t.home.top_creators}</h3>
                        </div>

                        <div className="space-y-4">
                           {creators.slice(0, showAllCreators ? creators.length : 3).map((creator, index) => (
                              <div key={index} className="flex items-center gap-3">
                                 <div className="relative">
                                    <Avatar className="w-12 h-12">
                                       <img
                                          className="w-full h-full object-cover"
                                          alt="Creator avatar"
                                          src={creator.avatar}
                                       />
                                    </Avatar>
                                    {creator.verified && (
                                       <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                          <div className="w-2 h-2 bg-white rounded-full" />
                                       </div>
                                    )}
                                 </div>
                                 <div className="flex-1">
                                    <div className="font-semibold text-sm text-gray-900">{creator.name}</div>
                                    <div className="text-xs text-gray-600">{creator.specialty}</div>
                                    <div className="text-xs text-[#22ae4b] font-medium">
                                       {creator.followers} followers
                                    </div>
                                 </div>
                                 <Button
                                    size="sm"
                                    variant={followedCreators.includes(creator.name) ? "default" : "outline"}
                                    className={`text-xs px-3 py-1 h-7 ${
                                       followedCreators.includes(creator.name)
                                          ? "bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
                                          : "hover:border-[#22ae4b] hover:text-[#22ae4b]"
                                    }`}
                                    onClick={() => toggleFollow(creator.name)}
                                 >
                                    {followedCreators.includes(creator.name)
                                       ? language === "ar" ? "متابع" : "Following"
                                       : language === "ar" ? "متابعة" : "Follow"}
                                 </Button>
                              </div>
                           ))}
                        </div>

                        <Button
                           variant="outline"
                           className="w-full mt-4"
                           size="sm"
                           onClick={() => setShowAllCreators(!showAllCreators)}
                        >
                           {showAllCreators
                              ? language === "ar"
                                 ? "عرض أقل"
                                 : "Show Less"
                              : language === "ar"
                              ? "عرض المزيد من الطهاة"
                              : "Show More Creators"}
                        </Button>
                     </CardContent>
                  </Card>

                  {/* Trending Categories */}
                  <Card className="mb-6">
                     <CardContent className="p-4 sm:p-6">
                        <div className="flex items-center gap-2 mb-6">
                           <TrendingUp className="w-5 h-5 text-[#22ae4b]" />
                           <Link to={getLocalizedPath("/trending")}>
                              <h3 className="font-bold text-gray-900 hover:text-[#22ae4b] transition-colors cursor-pointer">
                                 {t.home.trending_now}
                              </h3>
                           </Link>
                        </div>

                        <div className="space-y-3">
                           {[
                              {
                                 name: "Asian Fusion",
                                 count: "2.4k recipes",
                                 trend: "+12%",
                                 link: "/category/asian",
                              },
                              {
                                 name: "Healthy Bowls",
                                 count: "1.8k recipes",
                                 trend: "+8%",
                                 link: "/category/healthy",
                              },
                              {
                                 name: "Quick Meals",
                                 count: "3.2k recipes",
                                 trend: "+15%",
                                 link: "/trending",
                              },
                              {
                                 name: "Desserts",
                                 count: "1.5k recipes",
                                 trend: "+5%",
                                 link: "/category/dessert",
                              },
                           ].map((category, index) => (
                              <Link key={index} to={getLocalizedPath(category.link)}>
                                 <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                                    <div>
                                       <div className="font-medium text-gray-900 text-sm">{category.name}</div>
                                       <div className="text-xs text-gray-600">{category.count}</div>
                                    </div>
                                    <div className="text-xs text-green-600 font-medium">{category.trend}</div>
                                 </div>
                              </Link>
                           ))}
                        </div>
                     </CardContent>
                  </Card>

                  {/* Advertisement */}
                  <Card className="bg-gradient-to-br from-[#22ae4b] to-[#1c9a40] rounded-2xl border-0 h-60 sm:h-80 overflow-hidden">
                     <CardContent className="p-0 h-full relative">
                        <div className="absolute inset-0 bg-black/20" />
                        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-4 sm:p-8">
                           <div className="text-white text-4xl sm:text-6xl font-extrabold mb-2 sm:mb-4 opacity-90">
                              AD
                           </div>
                           <div className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                              {t.home.premium_recipes}
                           </div>
                           <div className="text-white/80 text-xs sm:text-sm mb-2 sm:mb-4">
                              {language === "ar" ? "افتح وصفات الطهاة الحصرية" : "Unlock exclusive chef recipes"}
                           </div>
                           <Button
                              variant="outline"
                             className="border-white text-[#22ae4b] hover:bg-[#1d9541]
                               hover:text-white transition-colors text-sm"
                           >
                              {t.home.upgrade_now}
                           </Button>
                        </div>
                     </CardContent>
                  </Card>
               </div>
            </div>
         </div>

         {/* Footer */}
         <AdSection />
      </div>
   );
};
