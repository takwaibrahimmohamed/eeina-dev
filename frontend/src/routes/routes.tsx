import { AccountSettings } from "../pages/AccountSettings";
import { GoalsSetup, Login, Signup } from "../pages/Auth";
import { VerifyOtp } from "../pages/Auth/VerifiOtp";
import { Category } from "../pages/Category";
import { CreateRecipe } from "../pages/CreateRecipe";
import { EditProfile } from "../pages/EditProfile";
import { Explore } from "../pages/Explore";
import { GoalsManagement } from "../pages/GoalsManagement";
import { Home } from "../pages/Home";
import { IngredientDetails } from "../pages/IngredientDetails";
import { MealPlanner } from "../pages/MealPlanner";
import { Profile } from "../pages/Profile";
import { RecipeDetails } from "../pages/RecipeDetails";
import { SavedRecipes } from "../pages/SavedRecipes";
import { ShoppingList } from "../pages/ShoppingList";
import { Trending } from "../pages/Trending";
import ProtectedRoute from "./ProtectedRoute";

// English routes
export const englishRoutes = [
   {
      path: "/",
      element: <Home />,
   },
   {
      path: "/explore",
      element: <Explore />,
   },
   {
      path: "/recipe/:id",
      element: <RecipeDetails />,
   },
   {
      path: "/saved",
      element:<ProtectedRoute><SavedRecipes /></ProtectedRoute>,
   },
   {
      path: "/planner",
      element: <ProtectedRoute><MealPlanner /></ProtectedRoute>,
   },
   {
      path: "/lists",
      element: <ProtectedRoute><ShoppingList /></ProtectedRoute>,
   },
   {
      path: "/profile",
      element: <ProtectedRoute><Profile /></ProtectedRoute>,
   },
   {
      path: "/create-recipe",
      element: <ProtectedRoute><CreateRecipe /></ProtectedRoute>,
   },
   {
      path: "/account-settings",
      element: <ProtectedRoute><AccountSettings /></ProtectedRoute>,
   },
   {
      path: "/edit-profile",
      element: <ProtectedRoute><EditProfile /></ProtectedRoute>,
   },
   {
      path: "/ingredient/:ingredientName",
      element: <IngredientDetails />,
   },
   {
      path: "/category/:categoryName",
      element: <Category />,
   },
   {
      path: "/trending",
      element: <Trending />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/signup",
      element: <Signup />,
   },
   {
      path: "/verify-otp",
      element: <VerifyOtp />,
   },
   {
      path: "/goals-setup",
      element: <GoalsSetup />,
   },
   {
      path: "/goals",
      element: <ProtectedRoute><GoalsManagement /></ProtectedRoute>,
   },
];

// Arabic routes (with /ar prefix)
export const arabicRoutes = englishRoutes.map((route) => ({
   ...route,
   path: `/ar${route.path === "/" ? "" : route.path}`,
}));