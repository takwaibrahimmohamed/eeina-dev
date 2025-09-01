import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Avatar } from "../../components/ui/avatar";
import { 
  ArrowLeft,
  Heart,
  Clock,
  Users,
  ChefHat,
  Star,
  Search,
  Filter,
  Grid3X3,
  List,
  TrendingUp,
  Award,
  BookOpen,
  Utensils
} from "lucide-react";

export const Category = (): JSX.Element => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const { t, isRTL, language } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('top-rated');
  const [difficultyFilter, setDifficultyFilter] = useState('All');

  // Category data
  const categoryData = {
    name: categoryName || "italian",
    displayName: categoryName === 'italian' ? 'Italian Cuisine' : 
                 categoryName === 'asian' ? 'Asian Cuisine' :
                 categoryName === 'breakfast' ? 'Breakfast' :
                 categoryName === 'healthy' ? 'Healthy' :
                 categoryName === 'dessert' ? 'Desserts' :
                 categoryName === 'pasta' ? 'Pasta' :
                 categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1) || 'Category',
    description: categoryName === 'italian' ? 'Authentic Italian recipes from traditional pasta to modern interpretations' :
                 categoryName === 'asian' ? 'Explore the diverse flavors of Asian cuisine from across the continent' :
                 categoryName === 'breakfast' ? 'Start your day right with delicious breakfast recipes' :
                 categoryName === 'healthy' ? 'Nutritious and delicious recipes for a healthy lifestyle' :
                 categoryName === 'dessert' ? 'Sweet treats and desserts to satisfy your cravings' :
                 categoryName === 'pasta' ? 'From classic spaghetti to creative pasta dishes' :
                 'Discover amazing recipes in this category',
    image: categoryName === 'italian' ? "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" :
           categoryName === 'asian' ? "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" :
           categoryName === 'breakfast' ? "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" :
           categoryName === 'healthy' ? "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" :
           categoryName === 'dessert' ? "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" :
           categoryName === 'pasta' ? "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop" :
           "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
    recipeCount: 1247,
    icon: categoryName === 'italian' ? Utensils :
          categoryName === 'asian' ? Utensils :
          categoryName === 'breakfast' ? Utensils :
          categoryName === 'healthy' ? Award :
          categoryName === 'dessert' ? Star :
          categoryName === 'pasta' ? Utensils :
          BookOpen
  };

  // Sample recipes for this category
  const categoryRecipes = [
    {
      id: 1,
      title: "Creamy Porcini Mushroom Polenta",
      category: "Italian",
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
      trending: true,
      featured: true,
      likes: 97
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
      trending: true,
      likes: 96
    },
    {
      id: 3,
      title: "Classic Margherita Pizza",
      category: "Italian",
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
      likes: 95
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
      likes: 94
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
      likes: 92
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
      likes: 98
    },
    {
      id: 7,
      title: "Korean Bibimbap Bowl",
      category: "Asian",
      cookingTime: "40 min",
      servings: 2,
      difficulty: "Intermediate",
      cuisine: "Korean",
      rating: 4.7,
      reviews: 145,
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Kim",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      likes: 89
    },
    {
      id: 8,
      title: "Avocado Toast Supreme",
      category: "Breakfast",
      cookingTime: "10 min",
      servings: 1,
      difficulty: "Beginner",
      cuisine: "Modern",
      rating: 4.4,
      reviews: 92,
      image: "https://images.pexels.com/photos/1351238/pexels-photo-1351238.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Alex",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      likes: 87
    }
  ];

  const difficulties = ["All", "Beginner", "Intermediate", "Advanced"];
  const sortOptions = [
    { value: 'top-rated', label: language === 'ar' ? 'الأعلى تقييماً' : 'Top Rated' },
    { value: 'most-popular', label: language === 'ar' ? 'الأكثر شعبية' : 'Most Popular' },
    { value: 'newest', label: language === 'ar' ? 'الأحدث' : 'Newest' },
    { value: 'quickest', label: language === 'ar' ? 'الأسرع' : 'Quickest' }
  ];

  // Filter recipes based on category, search, and difficulty
  const filteredRecipes = categoryRecipes.filter(recipe => {
    const matchesCategory = categoryName === 'all' || 
                           recipe.category.toLowerCase() === categoryName?.toLowerCase() ||
                           recipe.cuisine.toLowerCase() === categoryName?.toLowerCase();
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDifficulty = difficultyFilter === "All" || recipe.difficulty === difficultyFilter;
    return matchesCategory && matchesSearch && matchesDifficulty;
  });

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                <div className="absolute top-3 left-3 flex gap-2">
                  <Badge className="bg-[#22ae4b] text-white">
                    {recipe.category}
                  </Badge>
                  {recipe.trending && (
                    <Badge className="bg-red-500 text-white">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Hot
                    </Badge>
                  )}
                  {recipe.featured && (
                    <Badge className="bg-purple-500 text-white">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  )}
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
                  <div className="absolute top-2 left-2 flex flex-col gap-1">
                    <Badge className="bg-[#22ae4b] text-white text-xs">
                      {recipe.category}
                    </Badge>
                    {recipe.trending && (
                      <Badge className="bg-red-500 text-white text-xs">
                        Hot
                      </Badge>
                    )}
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
                        <span>{recipe.servings} servings</span>
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
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/explore">
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900 p-0">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {language === 'ar' ? 'رجوع إلى الاستكشاف' : 'Back to Explore'}
            </Button>
          </Link>
        </div>

        {/* Category Hero */}
        <div className="relative h-64 rounded-3xl overflow-hidden mb-8">
          <img
            src={categoryData.image}
            alt={categoryData.displayName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#22ae4b] rounded-full flex items-center justify-center">
                <categoryData.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-white">{categoryData.displayName}</h1>
                <p className="text-white/90">{categoryData.description}</p>
              </div>
            </div>
            <div className="flex items-center gap-4 text-white/80 text-sm">
              <span>{categoryData.recipeCount.toLocaleString()} {language === 'ar' ? 'وصفة' : 'recipes'}</span>
              <span>•</span>
              <span>{language === 'ar' ? 'محدث يومياً' : 'Updated daily'}</span>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={language === 'ar' ? 'البحث في الوصفات...' : 'Search recipes...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${isRTL ? 'pr-10 text-right' : 'pl-10 text-left'} border-gray-200 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Difficulty Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700 mr-2">{language === 'ar' ? 'الصعوبة:' : 'Difficulty:'}</span>
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty}
                    variant={difficultyFilter === difficulty ? "default" : "outline"}
                    size="sm"
                    onClick={() => setDifficultyFilter(difficulty)}
                    className={difficultyFilter === difficulty 
                      ? "bg-[#22ae4b] hover:bg-[#1c9a40] text-white" 
                      : "border-gray-200 hover:border-[#22ae4b] hover:text-[#22ae4b]"
                    }
                  >
                    {difficulty}
                  </Button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {/* Sort Dropdown */}
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] text-sm"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>

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

            {/* Results Count */}
            <div className="text-gray-600">
              {t.explore.showing_results} {filteredRecipes.length} {language === 'ar' ? 'من' : 'of'} {categoryRecipes.length} {language === 'ar' ? 'وصفة' : 'recipes'}
              {searchQuery && ` ${language === 'ar' ? 'تطابق' : 'matching'} "${searchQuery}"`}
            </div>
          </div>
        </div>

        {/* Recipes Grid/List */}
        {filteredRecipes.length > 0 ? (
          viewMode === 'grid' ? <GridView /> : <ListView />
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{t.explore.no_recipes_found}</h3>
            <p className="text-gray-500">
              {t.explore.adjust_filters}
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredRecipes.length > 0 && (
          <div className="text-center mt-8">
            <Button variant="outline" className="px-8">
              {language === 'ar' ? 'تحميل المزيد' : 'Load More Recipes'}
            </Button>
          </div>
        )}
      </div>

      <AdSection />
    </div>
  );
};