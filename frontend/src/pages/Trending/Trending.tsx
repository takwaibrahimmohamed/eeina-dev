import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Avatar } from "../../components/ui/avatar";
import { ArrowLeft, Heart, Clock, Users, ChefHat, Star, Search, Filter, Grid3X3, List, TrendingUp, Siren as Fire, Award, Eye, MessageCircle, Share2, Bookmark, Calendar, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";

export const Trending = (): JSX.Element => {
  const { t, isRTL, language } = useLanguage();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [timeFilter, setTimeFilter] = useState('today');
  const [categoryFilter, setCategoryFilter] = useState('All');

  // Trending recipes data with engagement metrics
  const trendingRecipes = [
    {
      id: 1,
      title: "Viral TikTok Pasta",
      category: "Pasta",
      cookingTime: "15 min",
      servings: 2,
      difficulty: "Beginner",
      cuisine: "Italian",
      rating: 4.9,
      reviews: 2847,
      image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Viral",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      trending: true,
      featured: true,
      likes: 98,
      views: 125000,
      shares: 3400,
      saves: 8900,
      trendingRank: 1,
      growthRate: "+245%",
      timeframe: "24h"
    },
    {
      id: 2,
      title: "Korean Corn Cheese",
      category: "Asian",
      cookingTime: "20 min",
      servings: 4,
      difficulty: "Beginner",
      cuisine: "Korean",
      rating: 4.8,
      reviews: 1923,
      image: "https://images.pexels.com/photos/4518843/pexels-photo-4518843.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef K-Food",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      trending: true,
      likes: 96,
      views: 89000,
      shares: 2100,
      saves: 5600,
      trendingRank: 2,
      growthRate: "+189%",
      timeframe: "24h"
    },
    {
      id: 3,
      title: "Cloud Bread Sandwich",
      category: "Breakfast",
      cookingTime: "30 min",
      servings: 2,
      difficulty: "Intermediate",
      cuisine: "Modern",
      rating: 4.7,
      reviews: 1456,
      image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Fluffy",
        avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      trending: true,
      likes: 94,
      views: 67000,
      shares: 1800,
      saves: 4200,
      trendingRank: 3,
      growthRate: "+156%",
      timeframe: "24h"
    },
    {
      id: 4,
      title: "Baked Feta Pasta",
      category: "Pasta",
      cookingTime: "35 min",
      servings: 4,
      difficulty: "Beginner",
      cuisine: "Mediterranean",
      rating: 4.8,
      reviews: 2134,
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Feta",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      trending: true,
      likes: 97,
      views: 156000,
      shares: 4200,
      saves: 9800,
      trendingRank: 4,
      growthRate: "+134%",
      timeframe: "24h"
    },
    {
      id: 5,
      title: "Dalgona Coffee Cake",
      category: "Dessert",
      cookingTime: "45 min",
      servings: 8,
      difficulty: "Intermediate",
      cuisine: "Korean",
      rating: 4.6,
      reviews: 987,
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Sweet",
        avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      trending: true,
      likes: 93,
      views: 45000,
      shares: 1200,
      saves: 3400,
      trendingRank: 5,
      growthRate: "+112%",
      timeframe: "24h"
    },
    {
      id: 6,
      title: "Green Goddess Salad",
      category: "Healthy",
      cookingTime: "10 min",
      servings: 2,
      difficulty: "Beginner",
      cuisine: "Modern",
      rating: 4.5,
      reviews: 756,
      image: "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      author: {
        name: "Chef Green",
        avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=50&h=50&fit=crop"
      },
      trending: true,
      likes: 91,
      views: 34000,
      shares: 890,
      saves: 2100,
      trendingRank: 6,
      growthRate: "+98%",
      timeframe: "24h"
    }
  ];

  const timeFilters = [
    { value: 'today', label: language === 'ar' ? 'اليوم' : 'Today' },
    { value: 'week', label: language === 'ar' ? 'هذا الأسبوع' : 'This Week' },
    { value: 'month', label: language === 'ar' ? 'هذا الشهر' : 'This Month' },
    { value: 'all-time', label: language === 'ar' ? 'كل الأوقات' : 'All Time' }
  ];

  const categories = ["All", "Pasta", "Asian", "Breakfast", "Healthy", "Dessert"];

  const filteredRecipes = trendingRecipes.filter(recipe => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         recipe.cuisine.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = categoryFilter === "All" || recipe.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const TrendingCard = ({ recipe, index }: { recipe: any, index: number }) => (
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
              <Badge className="bg-red-500 text-white flex items-center gap-1">
                <Fire className="w-3 h-3" />
                #{recipe.trendingRank}
              </Badge>
              <Badge className="bg-[#22ae4b] text-white">
                {recipe.category}
              </Badge>
            </div>
            <div className="absolute top-3 right-3 bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
              {recipe.growthRate}
            </div>
            <div className="absolute bottom-3 left-3 right-3">
              <div className="flex items-center gap-3 text-white text-xs">
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  <span>{(recipe.views / 1000).toFixed(0)}k</span>
                </div>
                <div className="flex items-center gap-1">
                  <Heart className="w-3 h-3" />
                  <span>{recipe.likes}%</span>
                </div>
                <div className="flex items-center gap-1">
                  <Bookmark className="w-3 h-3" />
                  <span>{(recipe.saves / 1000).toFixed(1)}k</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-xs">#{recipe.trendingRank}</span>
              </div>
              <h3 className="font-bold text-lg group-hover:text-[#22ae4b] transition-colors line-clamp-2 flex-1">
                {recipe.title}
              </h3>
            </div>
            
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
  );

  const TrendingListView = () => (
    <div className="space-y-4">
      {filteredRecipes.map((recipe, index) => (
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
                    <Badge className="bg-red-500 text-white text-xs flex items-center gap-1">
                      <Fire className="w-2 h-2" />
                      #{recipe.trendingRank}
                    </Badge>
                    <Badge className="bg-[#22ae4b] text-white text-xs">
                      {recipe.category}
                    </Badge>
                  </div>
                  <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {recipe.growthRate}
                  </div>
                </div>
                
                <div className="flex-1 p-4 flex justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xs">#{recipe.trendingRank}</span>
                      </div>
                      <h3 className="font-bold text-lg group-hover:text-[#22ae4b] transition-colors">
                        {recipe.title}
                      </h3>
                    </div>
                    
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

                    <div className="flex items-center gap-4 text-xs text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{(recipe.views / 1000).toFixed(0)}k views</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-3 h-3" />
                        <span>{(recipe.shares / 1000).toFixed(1)}k shares</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Bookmark className="w-3 h-3" />
                        <span>{(recipe.saves / 1000).toFixed(1)}k saves</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-2">
                      <Avatar className="w-6 h-6">
                        <img src={recipe.author.avatar} alt={recipe.author.name} />
                      </Avatar>
                      <span className="text-sm text-gray-600">{recipe.author.name}</span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between">
                    <div className="text-right">
                      <div className="text-lg font-bold text-red-500">{recipe.growthRate}</div>
                      <div className="text-xs text-gray-500">{recipe.timeframe}</div>
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

  const GridView = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredRecipes.map((recipe, index) => (
        <TrendingCard key={recipe.id} recipe={recipe} index={index} />
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

        {/* Trending Hero */}
        <div className="relative bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl overflow-hidden mb-8 h-64">
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10 h-full flex items-center justify-center text-center p-8">
            <div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-white">{language === 'ar' ? 'الوصفات الرائجة' : 'Trending Recipes'}</h1>
                  <p className="text-white/90 text-lg">{language === 'ar' ? 'الوصفات الأكثر شعبية الآن' : 'The hottest recipes right now'}</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-6 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Fire className="w-4 h-4" />
                  <span>{language === 'ar' ? 'محدث كل ساعة' : 'Updated hourly'}</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4" />
                  <span>{filteredRecipes.length} {language === 'ar' ? 'وصفة رائجة' : 'trending recipes'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-red-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-600">{language === 'ar' ? 'وصفات رائجة' : 'Trending Now'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-blue-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">516k</div>
              <div className="text-sm text-gray-600">{language === 'ar' ? 'مشاهدات اليوم' : 'Views Today'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Share2 className="w-6 h-6 text-green-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">13.5k</div>
              <div className="text-sm text-gray-600">{language === 'ar' ? 'مشاركات' : 'Shares'}</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Bookmark className="w-6 h-6 text-purple-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">34.1k</div>
              <div className="text-sm text-gray-600">{language === 'ar' ? 'حفظ' : 'Saves'}</div>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl p-6 mb-8 shadow-sm">
          <div className="flex flex-col gap-6">
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder={language === 'ar' ? 'البحث في الوصفات الرائجة...' : 'Search trending recipes...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`${isRTL ? 'pr-10 text-right' : 'pl-10 text-left'} border-gray-200 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
              {/* Time Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700 mr-2">{language === 'ar' ? 'الفترة الزمنية:' : 'Time Period:'}</span>
                {timeFilters.map((filter) => (
                  <Button
                    key={filter.value}
                    variant={timeFilter === filter.value ? "default" : "outline"}
                    size="sm"
                    onClick={() => setTimeFilter(filter.value)}
                    className={timeFilter === filter.value 
                      ? "bg-red-500 hover:bg-red-600 text-white" 
                      : "border-gray-200 hover:border-red-500 hover:text-red-500"
                    }
                  >
                    {filter.label}
                  </Button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-sm font-medium text-gray-700 mr-2">{language === 'ar' ? 'الفئة:' : 'Category:'}</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={categoryFilter === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCategoryFilter(category)}
                    className={categoryFilter === category 
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

            {/* Results Count */}
            <div className="text-gray-600">
              {t.explore.showing_results} {filteredRecipes.length} {language === 'ar' ? 'وصفة رائجة' : 'trending recipes'}
              {searchQuery && ` ${language === 'ar' ? 'تطابق' : 'matching'} "${searchQuery}"`}
            </div>
          </div>
        </div>

        {/* Top Trending Recipe Spotlight */}
        {filteredRecipes.length > 0 && (
          <Card className="mb-8 overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-80">
                <img
                  src={filteredRecipes[0].image}
                  alt={filteredRecipes[0].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <Badge className="bg-red-500 text-white flex items-center gap-2 px-4 py-2">
                    <Fire className="w-4 h-4" />
                    <span className="font-bold">#{filteredRecipes[0].trendingRank} {language === 'ar' ? 'الأكثر رواجاً' : 'Most Trending'}</span>
                  </Badge>
                </div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h2 className="text-3xl font-bold text-white mb-3">
                    {filteredRecipes[0].title}
                  </h2>
                  <div className="flex items-center gap-6 text-white/90 text-sm mb-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{(filteredRecipes[0].views / 1000).toFixed(0)}k views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{filteredRecipes[0].growthRate} growth</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{filteredRecipes[0].rating}</span>
                    </div>
                  </div>
                  <Link to={`/recipe/${filteredRecipes[0].id}`}>
                    <Button className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white">
                      {language === 'ar' ? 'عرض الوصفة' : 'View Recipe'}
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Recipes Grid/List */}
        {filteredRecipes.length > 0 ? (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {language === 'ar' ? 'جميع الوصفات الرائجة' : 'All Trending Recipes'}
            </h2>
            {viewMode === 'grid' ? <GridView /> : <TrendingListView />}
          </div>
        ) : (
          <div className="text-center py-12">
            <TrendingUp className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">{t.explore.no_recipes_found}</h3>
            <p className="text-gray-500">
              {t.explore.adjust_filters}
            </p>
          </div>
        )}

        {/* Load More */}
        {filteredRecipes.length > 0 && (
          <div className="text-center">
            <Button variant="outline" className="px-8">
              {language === 'ar' ? 'تحميل المزيد' : 'Load More Trending'}
            </Button>
          </div>
        )}
      </div>

      <AdSection />
    </div>
  );
};