import React from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

export const PopularRecipesSection = (): JSX.Element => {
  // Recipe data with demo images
  const recipes = [
    {
      id: 1,
      title: "Spicy Thai Basil Chicken",
      servings: "4 Servings",
      ingredients: "12 Ingredients",
      time: "25 Minutes",
      source: "Thai Kitchen",
      imageUrl: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Classic Margherita Pizza",
      servings: "2 Servings",
      ingredients: "8 Ingredients",
      time: "45 Minutes",
      source: "Italian Recipes",
      imageUrl: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="flex gap-4 h-full">
      {recipes.map((recipe) => (
        <Link
          key={recipe.id}
          to={`/recipe/${recipe.id}`}
          className="flex-1 h-full"
        >
          <Card className="relative h-full rounded-2xl overflow-hidden border-none cursor-pointer hover:scale-105 transition-transform duration-300">
            <CardContent className="p-0 h-full">
              <div
                className="h-full bg-cover bg-center relative"
                style={{ backgroundImage: `url(${recipe.imageUrl})` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Source badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge className="bg-white text-[#22ae4b] hover:bg-white px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-[#22ae4b] rounded-full mr-2" />
                    {recipe.source}
                  </Badge>
                </div>

                {/* Recipe details */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="font-bold text-white text-xl mb-3 leading-tight">
                    {recipe.title}
                  </h3>

                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <span className="font-medium">{recipe.servings}</span>
                    <div className="w-1 h-1 bg-[#22ae4b] rounded-full" />
                    <span className="font-medium">{recipe.ingredients}</span>
                    <div className="w-1 h-1 bg-[#22ae4b] rounded-full" />
                    <span className="font-medium">{recipe.time}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};