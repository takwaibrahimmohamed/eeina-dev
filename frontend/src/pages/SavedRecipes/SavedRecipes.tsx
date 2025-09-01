import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Avatar } from "../../components/ui/avatar";
import { Heart, Clock, Users, ChefHat, Search, Filter, Grid3X3, List, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

export const SavedRecipes = (): JSX.Element => {
  const { t, isRTL, language } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample saved recipes data
  const savedRecipes = [
    {
      id: 1,
      title: "Creamy Porcini Mushroom Polenta",
      category: "Pasta",
      cookingTime: "25 min",
      servings: 4,
      difficulty: "Beginner",
      cuisine: "Italian",
      rating: 4.8,
      reviews: 124,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Marco",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      savedDate: "2 days ago"
    },
    {
      id: 2,
      title: "Spicy Thai Basil Chicken",
      category: "Asian",
      cookingTime: "30 min",
      servings: 3,
      difficulty: "Intermediate",
      cuisine: "Thai",
      rating: 4.9,
      reviews: 89,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Sarah",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      savedDate: "1 week ago"
    },
    {
      id: 3,
      title: "Classic Margherita Pizza",
      category: "Pizza",
      cookingTime: "45 min",
      servings: 2,
      difficulty: "Beginner",
      cuisine: "Italian",
      rating: 4.7,
      reviews: 156,
      image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Antonio",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      savedDate: "2 weeks ago"
    },
    {
      id: 4,
      title: "Fluffy Pancakes with Berries",
      category: "Breakfast",
      cookingTime: "20 min",
      servings: 4,
      difficulty: "Beginner",
      cuisine: "American",
      rating: 4.6,
      reviews: 203,
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Emma",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      savedDate: "3 weeks ago"
    },
    {
      id: 5,
      title: "Mediterranean Quinoa Bowl",
      category: "Healthy",
      cookingTime: "15 min",
      servings: 2,
      difficulty: "Beginner",
      cuisine: "Mediterranean",
      rating: 4.5,
      reviews: 78,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Olivia",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      savedDate: "1 month ago"
    },
    {
      id: 6,
      title: "Chocolate Lava Cake",
      category: "Dessert",
      cookingTime: "35 min",
      servings: 6,
      difficulty: "Advanced",
      cuisine: "French",
      rating: 4.9,
      reviews: 267,
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Pierre",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      savedDate: "1 month ago"
    }
  ];

  const categories = ["All", "Pasta", "Asian", "Pizza", "Breakfast", "Healthy", "Dessert"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = savedRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || recipe.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredRecipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
          <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-3 left-3">
                  <Badge className="bg-[#22ae4b] text-white">
                    {recipe.category}
                  </Badge>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/90 hover:bg-white text-red-500 rounded-full"
                >
                  <Heart className="w-4 h-4 fill-current" />
                </Button>
                <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-sm">
                  {recipe.savedDate}
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-[#22ae4b] transition-colors">
                  {recipe.title}
                </h3>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{recipe.cookingTime}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{recipe.servings}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <ChefHat className="w-4 h-4" />
                    <span>{recipe.difficulty}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <img src={recipe.author.avatar} alt={recipe.author.name} />
                    </Avatar>
                    <span className="text-sm text-gray-600">{recipe.author.name}</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm">
                    <div className="flex text-yellow-400">
                      ★★★★★
                    </div>
                    <span className="text-gray-600">({recipe.reviews})</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );

  const ListView = () => (
    <div className="space-y-4">
      {filteredRecipes.map((recipe) => (
        <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
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
                        <Users className="w-4 h-4" />
                        <span>{recipe.servings} {t.saved.servings}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <ChefHat className="w-4 h-4" />
                        <span>{recipe.difficulty}</span>
                      </div>
                      <span className="text-[#22ae4b] font-medium">{recipe.cuisine}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Avatar className="w-6 h-6">
                        <img src={recipe.author.avatar} alt={recipe.author.name} />
                      </Avatar>
                      <span className="text-sm text-gray-600">{recipe.author.name}</span>
                      <span className="text-sm text-gray-400">• {t.saved.saved_date} {recipe.savedDate}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-red-500 hover:bg-red-50"
                    >
                      <Heart className="w-4 h-4 fill-current" />
                    </Button>
                    <div className="flex items-center gap-1 text-sm">
                      <div className="flex text-yellow-400">
                        ★★★★★
                      </div>
                      <span className="text-gray-600">({recipe.reviews})</span>
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
      <TopCreatorsSection />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Bookmark className="w-8 h-8 text-[#22ae4b]" />
            <h1 className="text-3xl font-bold text-gray-900">{t.saved.title}</h1>
          </div>
          <p className="text-gray-600">{t.saved.your_collection} ({savedRecipes.length} {t.saved.recipes_saved})</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={t.saved.search_saved}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${isRTL ? 'pr-10 text-right' : 'pl-10 text-left'} border-gray-200 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category 
                    ? "bg-[#22ae4b] hover:bg-[#1c9a40] text-white" 
                    : "border-gray-200 hover:border-[#22ae4b] hover:text-[#22ae4b]"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* View Toggle */}
            <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' 
                  ? "bg-white shadow-sm" 
                  : "hover:bg-white/50"
                }
              >
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' 
                  ? "bg-white shadow-sm" 
                  : "hover:bg-white/50"
                }
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-4">
          <p className="text-gray-600">
            {t.explore.showing_results} {filteredRecipes.length} {language === 'ar' ? 'من' : 'of'} {savedRecipes.length} {language === 'ar' ? 'وصفة محفوظة' : 'saved recipes'}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
        </div>

        {/* Recipes Grid/List */}
        {filteredRecipes.length > 0 ? (
          viewMode === 'grid' ? <GridView /> : <ListView />
        ) : (
          <div className="text-center py-12">
            <Bookmark className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{t.explore.no_recipes_found}</h3>
            <p className="text-gray-500">
              {searchQuery || selectedCategory !== "All" 
                ? t.explore.adjust_filters
                : t.saved.start_saving
              }
            </p>
          </div>
        )}
      </div>

      <AdSection />
    </div>
  );
};