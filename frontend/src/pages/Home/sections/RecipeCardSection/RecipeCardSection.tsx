import React from "react";
import { Link } from "react-router-dom";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { Heart, MessageCircle, Share2, Bookmark } from "lucide-react";

export const RecipeCardSection = (): JSX.Element => {
  return (
    <Card className="bg-[#ececec] rounded-3xl border-0">
      <CardContent className="p-6">
        {/* Header with user info */}
        <div className="flex items-center gap-4 mb-6">
          <Avatar className="w-11 h-11">
            <Link to="/profile">
              <AvatarImage 
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
              alt="Sarah Johnson" 
              />
            </Link>
            <AvatarFallback>SJ</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <Link to="/profile" className="font-semibold text-base text-black hover:text-[#22ae4b] transition-colors">
              Sarah Johnson
            </Link>
            <div className="font-medium text-[#7a7a7a] text-sm">
              2 hours ago
            </div>
          </div>

          <Button variant="ghost" size="icon" className="ml-auto">
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
            <div className="w-1 h-1 bg-gray-400 rounded-full mx-1" />
            <div className="w-1 h-1 bg-gray-400 rounded-full" />
          </Button>
        </div>

        {/* Recipe content */}
        <div className="mb-6">
          <p className="font-semibold text-black text-lg mb-4">
            Perfect weekend brunch! These fluffy pancakes are absolutely divine 🥞✨
          </p>

          <Link to="/recipe/4" className="block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform">
            <img
              className="w-full h-80 object-cover"
              alt="Fluffy pancakes with berries"
              src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
            />
          </Link>
        </div>

        {/* Social interaction buttons */}
        <div className="flex items-center gap-6 mb-4">
          <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-red-500">
            <Heart className="w-5 h-5" />
            <span>42</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-blue-500">
            <MessageCircle className="w-5 h-5" />
            <span>15</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-2 text-gray-600 hover:text-green-500">
            <Share2 className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="sm" className="ml-auto text-gray-600 hover:text-yellow-500">
            <Bookmark className="w-5 h-5" />
          </Button>
        </div>

        {/* Comment input section */}
        <div className="flex items-center gap-3 p-3 rounded-full border border-gray-300 bg-white">
          <Avatar className="w-8 h-8">
            <Link to="/profile">
              <AvatarImage 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" 
              alt="Your avatar" 
              />
            </Link>
            <AvatarFallback>U</AvatarFallback>
          </Avatar>

          <Input
            placeholder="Add a comment..."
            className="flex-1 border-0 bg-transparent text-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0 px-0"
          />
        </div>
      </CardContent>
    </Card>
  );
};