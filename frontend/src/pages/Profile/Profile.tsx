import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Avatar } from "../../components/ui/avatar";
import { Separator } from "../../components/ui/separator";
import {
    User,
    Settings,
    Plus,
    Heart,
    MessageCircle,
    Share2,
    Bookmark,
    Calendar,
    Award,
    Target,
    TrendingUp,
    TrendingDown,
    Scale,
    Dumbbell,
    Zap,
    Apple,
    Clock,
    ChefHat,
    X,
    Check,
    Edit3,
    Trash2,
    Activity,
    Save,
    BarChart3,
    Minus,
    History,
    Trophy,
    AlertCircle,
    Info,
    Flame,
    MapPin,
    Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/hook";
import { Header } from "../../components/Header";

interface Goal {
    id: string;
    title: string;
    description: string;
    progress: number;
    target: string;
    currentValue: number;
    targetValue: number;
    unit: string;
    color: string;
    bgColor: string;
    progressColor: string;
    icon: React.ComponentType<any>;
    active: boolean;
    startDate: string;
    targetDate: string;
    category: "weight" | "fitness" | "health" | "lifestyle";
    progressHistory: Array<{
        date: string;
        value: number;
        note?: string;
    }>;
    milestones: Array<{
        value: number;
        label: string;
        achieved: boolean;
        achievedDate?: string;
    }>;
}

export const Profile = (): JSX.Element => {
    const { t, isRTL, language } = useLanguage();
    const [showAllPosts, setShowAllPosts] = useState(false);
    const [showAllCreators, setShowAllCreators] = useState(false);
    const [newComment, setNewComment] = useState("");
    const [newRecipeUrl, setNewRecipeUrl] = useState("");
    const [showGoalsModal, setShowGoalsModal] = useState(false);
    const [showAddGoalModal, setShowAddGoalModal] = useState(false);
    const [showEditGoalModal, setShowEditGoalModal] = useState(false);
    const [showProgressModal, setShowProgressModal] = useState(false);
    const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
    const [progressValue, setProgressValue] = useState("");
    const [progressNote, setProgressNote] = useState("");
    const [editingGoal, setEditingGoal] = useState<Goal | null>(null);
    const user = useAppSelector((state) => state.auth.user);
    console.log("user", user);

    const [userGoals, setUserGoals] = useState<Goal[]>([
        {
            id: "lose-weight",
            title: language === "ar" ? "فقدان الوزن" : "Lose Weight",
            description:
                language === "ar"
                    ? "وصفات منخفضة السعرات وخطط وجبات"
                    : "Low-calorie recipes and meal plans",
            progress: 65,
            target: language === "ar" ? "فقدان 5 كيلو" : "Lose 5kg",
            currentValue: 78,
            targetValue: 75,
            unit: "kg",
            color: "text-red-600",
            bgColor: "bg-red-50",
            progressColor: "bg-red-500",
            icon: TrendingDown,
            active: true,
            startDate: "2024-01-01",
            targetDate: "2024-06-01",
            category: "weight",
            progressHistory: [
                { date: "2024-01-01", value: 80, note: "Starting weight" },
                { date: "2024-01-15", value: 79.2, note: "Good progress!" },
                { date: "2024-01-30", value: 78.5 },
                { date: "2024-02-15", value: 78, note: "Halfway there!" },
            ],
            milestones: [
                { value: 79, label: "1kg lost", achieved: true, achievedDate: "2024-01-15" },
                { value: 78, label: "2kg lost", achieved: true, achievedDate: "2024-02-15" },
                { value: 77, label: "3kg lost", achieved: false },
                { value: 76, label: "4kg lost", achieved: false },
                { value: 75, label: "Target reached!", achieved: false },
            ],
        },
        {
            id: "build-muscle",
            title: language === "ar" ? "بناء العضلات" : "Build Muscle",
            description:
                language === "ar"
                    ? "وصفات عالية البروتين لنمو العضلات"
                    : "High-protein recipes for muscle growth",
            progress: 40,
            target: language === "ar" ? "زيادة 3 كيلو عضل" : "Gain 3kg muscle",
            currentValue: 65,
            targetValue: 68,
            unit: "kg",
            color: "text-purple-600",
            bgColor: "bg-purple-50",
            progressColor: "bg-purple-500",
            icon: Dumbbell,
            active: true,
            startDate: "2024-01-01",
            targetDate: "2024-08-01",
            category: "fitness",
            progressHistory: [
                { date: "2024-01-01", value: 65, note: "Starting muscle mass" },
                { date: "2024-01-30", value: 65.5 },
                { date: "2024-02-15", value: 66.2, note: "Great gains!" },
            ],
            milestones: [
                { value: 66, label: "1kg gained", achieved: true, achievedDate: "2024-02-15" },
                { value: 67, label: "2kg gained", achieved: false },
                { value: 68, label: "Target reached!", achieved: false },
            ],
        },
        {
            id: "improve-health",
            title: language === "ar" ? "تحسين الصحة العامة" : "Improve Overall Health",
            description:
                language === "ar"
                    ? "وصفات غنية بالعناصر الغذائية"
                    : "Nutrient-rich recipes for wellness",
            progress: 80,
            target: language === "ar" ? "نمط حياة صحي" : "Healthy lifestyle",
            currentValue: 8,
            targetValue: 10,
            unit: "healthy meals/week",
            color: "text-green-600",
            bgColor: "bg-green-50",
            progressColor: "bg-green-500",
            icon: Heart,
            active: true,
            startDate: "2024-01-01",
            targetDate: "2024-12-31",
            category: "health",
            progressHistory: [
                { date: "2024-01-01", value: 5, note: "Starting healthy eating" },
                { date: "2024-01-15", value: 6 },
                { date: "2024-01-30", value: 7 },
                { date: "2024-02-15", value: 8, note: "Feeling great!" },
            ],
            milestones: [
                { value: 6, label: "6 meals/week", achieved: true, achievedDate: "2024-01-15" },
                { value: 8, label: "8 meals/week", achieved: true, achievedDate: "2024-02-15" },
                { value: 10, label: "Target reached!", achieved: false },
            ],
        },
    ]);

    const availableGoals = [
        {
            id: "maintain-weight",
            title: language === "ar" ? "الحفاظ على الوزن" : "Maintain Weight",
            description:
                language === "ar"
                    ? "وصفات متوازنة للحفاظ على الوزن"
                    : "Balanced recipes for weight maintenance",
            icon: Scale,
            color: "text-blue-600",
            bgColor: "bg-blue-50",
            category: "weight" as const,
            defaultTarget: { current: 70, target: 70, unit: "kg" },
        },
        {
            id: "increase-energy",
            title: language === "ar" ? "زيادة الطاقة" : "Increase Energy",
            description: language === "ar" ? "وصفات معززة للطاقة" : "Energy-boosting recipes",
            icon: Zap,
            color: "text-yellow-600",
            bgColor: "bg-yellow-50",
            category: "health" as const,
            defaultTarget: { current: 5, target: 8, unit: "energy level (1-10)" },
        },
        {
            id: "better-digestion",
            title: language === "ar" ? "تحسين الهضم" : "Better Digestion",
            description: language === "ar" ? "وصفات صديقة للمعدة" : "Gut-friendly recipes",
            icon: Apple,
            color: "text-green-600",
            bgColor: "bg-green-50",
            category: "health" as const,
            defaultTarget: { current: 3, target: 7, unit: "gut-friendly meals/week" },
        },
        {
            id: "save-time",
            title: language === "ar" ? "توفير وقت الطبخ" : "Save Time Cooking",
            description: language === "ar" ? "وصفات سريعة وسهلة" : "Quick and easy recipes",
            icon: Clock,
            color: "text-indigo-600",
            bgColor: "bg-indigo-50",
            category: "lifestyle" as const,
            defaultTarget: { current: 2, target: 5, unit: "quick meals/week" },
        },
        {
            id: "learn-cooking",
            title: language === "ar" ? "تعلم مهارات طبخ جديدة" : "Learn New Cooking Skills",
            description:
                language === "ar" ? "وصفات مفصلة خطوة بخطوة" : "Step-by-step detailed recipes",
            icon: ChefHat,
            color: "text-orange-600",
            bgColor: "bg-orange-50",
            category: "lifestyle" as const,
            defaultTarget: { current: 1, target: 3, unit: "new techniques/month" },
        },
    ];

    // Generate localized path
    const getLocalizedPath = (path: string) => {
        return language === "ar" ? `/ar${path === "/" ? "" : path}` : path;
    };

    // User profile data
    const userProfile = {
        name: user?.firstName + " " + user?.lastName || "Adam Ahmed",
        username: "@adamahmed",
        avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
        coverImage:
            "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop",
        bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        location: "New York, USA",
        website: "https://adamahmed.com",
        followers: 7,
        following: 10,
        recipesCreated: 12,
        totalLikes: 1247,
        memberSince: "January 2023",
        accountType: "Premium",
        verified: true,
        profileCompletion: 85,
    };

    // Sample posts data
    const userPosts = [
        {
            id: 1,
            content:
                "Just made this incredible homemade pasta! The secret is in the fresh herbs 🌿",
            image: "https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
            likes: 24,
            comments: 8,
            shares: 3,
            timestamp: "30 mins ago",
            recipeLink: "/recipe/1",
        },
        {
            id: 2,
            content: "Perfect weekend brunch! These fluffy pancakes are absolutely divine 🥞✨",
            image: "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
            likes: 42,
            comments: 15,
            shares: 7,
            timestamp: "2 hours ago",
            recipeLink: "/recipe/4",
        },
    ];

    // Top creators data
    const creators = [
        {
            name: "Sarah Johnson",
            avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
            followers: 1200,
            specialty: "Italian Cuisine",
            verified: true,
        },
        {
            name: "Mike Chen",
            avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
            followers: 890,
            specialty: "Asian Fusion",
            verified: false,
        },
        {
            name: "Emma Davis",
            avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
            followers: 2100,
            specialty: "Healthy Meals",
            verified: true,
        },
    ];

    const toggleGoal = (goalId: string) => {
        setUserGoals((prev) =>
            prev.map((goal) => (goal.id === goalId ? { ...goal, active: !goal.active } : goal))
        );
    };

    const removeGoal = (goalId: string) => {
        setUserGoals((prev) => prev.filter((goal) => goal.id !== goalId));
    };

    const addGoal = (goalData: any) => {
        const newGoal: Goal = {
            ...goalData,
            progress: 0,
            currentValue: goalData.defaultTarget.current,
            targetValue: goalData.defaultTarget.target,
            unit: goalData.defaultTarget.unit,
            target: `${goalData.defaultTarget.target} ${goalData.defaultTarget.unit}`,
            progressColor: goalData.color.replace("text-", "bg-").replace("-600", "-500"),
            active: true,
            startDate: new Date().toISOString().split("T")[0],
            targetDate: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000)
                .toISOString()
                .split("T")[0], // 6 months from now
            progressHistory: [
                {
                    date: new Date().toISOString().split("T")[0],
                    value: goalData.defaultTarget.current,
                    note: "Goal started",
                },
            ],
            milestones: generateMilestones(
                goalData.defaultTarget.current,
                goalData.defaultTarget.target,
                goalData.defaultTarget.unit
            ),
        };
        setUserGoals((prev) => [...prev, newGoal]);
        setShowAddGoalModal(false);
    };

    const generateMilestones = (current: number, target: number, unit: string) => {
        const milestones = [];
        const diff = target - current;
        const steps = Math.abs(diff) > 10 ? 5 : Math.max(2, Math.abs(diff));

        for (let i = 1; i <= steps; i++) {
            const value = current + (diff * i) / steps;
            milestones.push({
                value: Math.round(value * 10) / 10,
                label: i === steps ? "Target reached!" : `Milestone ${i}`,
                achieved: false,
            });
        }
        return milestones;
    };

    const addProgress = () => {
        if (!selectedGoal || !progressValue) return;

        const newValue = parseFloat(progressValue);
        const newProgress = {
            date: new Date().toISOString().split("T")[0],
            value: newValue,
            note: progressNote.trim() || undefined,
        };

        // Calculate new progress percentage
        const totalChange = selectedGoal.targetValue - selectedGoal.progressHistory[0].value;
        const currentChange = newValue - selectedGoal.progressHistory[0].value;
        const newProgressPercentage = Math.max(
            0,
            Math.min(100, (currentChange / totalChange) * 100)
        );

        // Update milestones
        const updatedMilestones = selectedGoal.milestones.map((milestone) => {
            if (!milestone.achieved) {
                const achieved = selectedGoal.id.includes("lose")
                    ? newValue <= milestone.value
                    : newValue >= milestone.value;

                if (achieved && !milestone.achieved) {
                    return { ...milestone, achieved: true, achievedDate: newProgress.date };
                }
            }
            return milestone;
        });

        setUserGoals((prev) =>
            prev.map((goal) =>
                goal.id === selectedGoal.id
                    ? {
                          ...goal,
                          currentValue: newValue,
                          progress: Math.round(newProgressPercentage),
                          progressHistory: [...goal.progressHistory, newProgress],
                          milestones: updatedMilestones,
                      }
                    : goal
            )
        );

        setProgressValue("");
        setProgressNote("");
        setShowProgressModal(false);
        setSelectedGoal(null);
    };

    const updateGoal = () => {
        if (!editingGoal) return;

        setUserGoals((prev) =>
            prev.map((goal) => (goal.id === editingGoal.id ? editingGoal : goal))
        );

        setEditingGoal(null);
        setShowEditGoalModal(false);
    };

    const openProgressModal = (goal: Goal) => {
        setSelectedGoal(goal);
        setProgressValue(goal.currentValue.toString());
        setShowProgressModal(true);
    };

    const openEditModal = (goal: Goal) => {
        setEditingGoal({ ...goal });
        setShowEditGoalModal(true);
    };

    const handleComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (newComment.trim()) {
            console.log("New comment:", newComment);
            setNewComment("");
        }
    };

    const handleImportRecipe = () => {
        if (newRecipeUrl.trim()) {
            console.log("Importing recipe from:", newRecipeUrl);
            setNewRecipeUrl("");
        }
    };

    const getProgressTrend = (goal: Goal) => {
        if (goal.progressHistory.length < 2) return null;

        const recent = goal.progressHistory.slice(-2);
        const trend = recent[1].value - recent[0].value;

        if (Math.abs(trend) < 0.1) return { direction: "stable", value: 0 };

        return {
            direction: trend > 0 ? "up" : "down",
            value: Math.abs(trend),
        };
    };

    const getDaysRemaining = (targetDate: string) => {
        const target = new Date(targetDate);
        const today = new Date();
        const diffTime = target.getTime() - today.getTime();
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return diffDays;
    };

    // Enhanced Goals Modal with comprehensive management
    const GoalsModal = () => (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden bg-white shadow-2xl">
                <CardContent className="p-0">
                    {/* Modal Header */}
                    <div className="p-6 border-b border-gray-200 bg-white sticky top-0 z-10">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Target className="w-6 h-6 text-[#22ae4b]" />
                                <h3 className="text-xl font-bold text-gray-900">
                                    {language === "ar" ? "إدارة الأهداف" : "Goals Management"}
                                </h3>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowGoalsModal(false)}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Goals Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                            <div className="text-center p-3 bg-blue-50 rounded-lg">
                                <div className="text-2xl font-bold text-blue-600">
                                    {userGoals.filter((g) => g.active).length}
                                </div>
                                <div className="text-xs text-blue-500 font-medium">
                                    {language === "ar" ? "أهداف نشطة" : "Active Goals"}
                                </div>
                            </div>
                            <div className="text-center p-3 bg-green-50 rounded-lg">
                                <div className="text-2xl font-bold text-green-600">
                                    {userGoals.length > 0
                                        ? Math.round(
                                              userGoals.reduce(
                                                  (acc, goal) => acc + goal.progress,
                                                  0
                                              ) / userGoals.length
                                          )
                                        : 0}
                                    %
                                </div>
                                <div className="text-xs text-green-500 font-medium">
                                    {language === "ar" ? "متوسط التقدم" : "Avg Progress"}
                                </div>
                            </div>
                            <div className="text-center p-3 bg-yellow-50 rounded-lg">
                                <div className="text-2xl font-bold text-yellow-600">
                                    {userGoals.filter((g) => g.progress >= 100).length}
                                </div>
                                <div className="text-xs text-yellow-500 font-medium">
                                    {language === "ar" ? "أهداف مكتملة" : "Completed"}
                                </div>
                            </div>
                            <div className="text-center p-3 bg-purple-50 rounded-lg">
                                <div className="text-2xl font-bold text-purple-600">
                                    {userGoals.reduce(
                                        (acc, goal) =>
                                            acc + goal.milestones.filter((m) => m.achieved).length,
                                        0
                                    )}
                                </div>
                                <div className="text-xs text-purple-500 font-medium">
                                    {language === "ar" ? "إنجازات" : "Milestones"}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 max-h-[60vh] overflow-y-auto">
                        <div className="space-y-6">
                            {userGoals.map((goal) => {
                                const trend = getProgressTrend(goal);
                                const daysRemaining = getDaysRemaining(goal.targetDate);

                                return (
                                    <Card
                                        key={goal.id}
                                        className={`border-2 ${
                                            goal.active
                                                ? goal.bgColor + " border-current"
                                                : "bg-gray-50 border-gray-200"
                                        }`}
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-start justify-between mb-4">
                                                <div className="flex items-center gap-4">
                                                    <div
                                                        className={`w-12 h-12 rounded-full flex items-center justify-center ${goal.bgColor}`}
                                                    >
                                                        <goal.icon
                                                            className={`w-6 h-6 ${goal.color}`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h4 className="font-bold text-lg text-gray-900">
                                                            {goal.title}
                                                        </h4>
                                                        <p className="text-sm text-gray-600">
                                                            {goal.description}
                                                        </p>
                                                        <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                                                            <span>
                                                                {language === "ar"
                                                                    ? "بدأ في"
                                                                    : "Started"}
                                                                :{" "}
                                                                {new Date(
                                                                    goal.startDate
                                                                ).toLocaleDateString()}
                                                            </span>
                                                            <span>•</span>
                                                            <span
                                                                className={
                                                                    daysRemaining > 0
                                                                        ? "text-blue-600"
                                                                        : "text-red-600"
                                                                }
                                                            >
                                                                {daysRemaining > 0
                                                                    ? `${daysRemaining} ${
                                                                          language === "ar"
                                                                              ? "يوم متبقي"
                                                                              : "days left"
                                                                      }`
                                                                    : language === "ar"
                                                                      ? "انتهت المدة"
                                                                      : "Overdue"}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    {/* Action Buttons */}
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => openProgressModal(goal)}
                                                        className="text-[#22ae4b] border-[#22ae4b] hover:bg-[#22ae4b] hover:text-white"
                                                    >
                                                        <Plus className="w-4 h-4 mr-1" />
                                                        {language === "ar" ? "تحديث" : "Update"}
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => openEditModal(goal)}
                                                        className="text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
                                                    >
                                                        <Edit3 className="w-4 h-4" />
                                                    </Button>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => removeGoal(goal.id)}
                                                        className="text-red-600 border-red-600 hover:bg-red-600 hover:text-white"
                                                    >
                                                        <Trash2 className="w-4 h-4" />
                                                    </Button>

                                                    {/* Toggle Switch */}
                                                    <div
                                                        className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                                                            goal.active
                                                                ? "bg-[#22ae4b]"
                                                                : "bg-gray-300"
                                                        }`}
                                                        onClick={() => toggleGoal(goal.id)}
                                                    >
                                                        <div
                                                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                                                                goal.active
                                                                    ? "translate-x-6"
                                                                    : "translate-x-0.5"
                                                            } mt-0.5`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            {goal.active && (
                                                <div className="space-y-4">
                                                    {/* Current Progress */}
                                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                        <div className="bg-white rounded-lg p-4 border">
                                                            <div className="text-center">
                                                                <div
                                                                    className={`text-2xl font-bold ${goal.color}`}
                                                                >
                                                                    {goal.currentValue} {goal.unit}
                                                                </div>
                                                                <div className="text-sm text-gray-600">
                                                                    {language === "ar"
                                                                        ? "الحالي"
                                                                        : "Current"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white rounded-lg p-4 border">
                                                            <div className="text-center">
                                                                <div className="text-2xl font-bold text-gray-900">
                                                                    {goal.targetValue} {goal.unit}
                                                                </div>
                                                                <div className="text-sm text-gray-600">
                                                                    {language === "ar"
                                                                        ? "الهدف"
                                                                        : "Target"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="bg-white rounded-lg p-4 border">
                                                            <div className="text-center">
                                                                <div
                                                                    className={`text-2xl font-bold ${
                                                                        goal.progress >= 100
                                                                            ? "text-green-600"
                                                                            : goal.color
                                                                    }`}
                                                                >
                                                                    {goal.progress}%
                                                                </div>
                                                                <div className="text-sm text-gray-600">
                                                                    {language === "ar"
                                                                        ? "التقدم"
                                                                        : "Progress"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    {/* Progress Bar */}
                                                    <div>
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-sm font-medium text-gray-700">
                                                                {goal.target}
                                                            </span>
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-sm text-gray-600">
                                                                    {goal.progress}%
                                                                </span>
                                                                {trend && (
                                                                    <div
                                                                        className={`flex items-center gap-1 text-xs px-2 py-1 rounded ${
                                                                            trend.direction === "up"
                                                                                ? "bg-green-100 text-green-600"
                                                                                : trend.direction ===
                                                                                    "down"
                                                                                  ? "bg-red-100 text-red-600"
                                                                                  : "bg-gray-100 text-gray-600"
                                                                        }`}
                                                                    >
                                                                        {trend.direction ===
                                                                        "up" ? (
                                                                            <TrendingUp className="w-3 h-3" />
                                                                        ) : trend.direction ===
                                                                          "down" ? (
                                                                            <TrendingDown className="w-3 h-3" />
                                                                        ) : (
                                                                            <Minus className="w-3 h-3" />
                                                                        )}
                                                                        <span>
                                                                            {trend.value.toFixed(1)}
                                                                        </span>
                                                                    </div>
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="w-full bg-gray-200 rounded-full h-3">
                                                            <div
                                                                className={`h-3 rounded-full transition-all duration-300 ${goal.progressColor}`}
                                                                style={{
                                                                    width: `${goal.progress}%`,
                                                                }}
                                                            />
                                                        </div>
                                                    </div>

                                                    {/* Milestones */}
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                                            <Trophy className="w-4 h-4 text-yellow-500" />
                                                            {language === "ar"
                                                                ? "الإنجازات"
                                                                : "Milestones"}
                                                        </h5>
                                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                            {goal.milestones.map(
                                                                (milestone, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className={`flex items-center gap-3 p-2 rounded-lg ${
                                                                            milestone.achieved
                                                                                ? "bg-green-100 text-green-800"
                                                                                : "bg-gray-100 text-gray-600"
                                                                        }`}
                                                                    >
                                                                        <div
                                                                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                                                                milestone.achieved
                                                                                    ? "bg-green-500"
                                                                                    : "bg-gray-300"
                                                                            }`}
                                                                        >
                                                                            {milestone.achieved ? (
                                                                                <Check className="w-4 h-4 text-white" />
                                                                            ) : (
                                                                                <span className="text-white text-xs font-bold">
                                                                                    {index + 1}
                                                                                </span>
                                                                            )}
                                                                        </div>
                                                                        <div className="flex-1">
                                                                            <div className="text-sm font-medium">
                                                                                {milestone.label}
                                                                            </div>
                                                                            {milestone.achieved &&
                                                                                milestone.achievedDate && (
                                                                                    <div className="text-xs opacity-75">
                                                                                        {new Date(
                                                                                            milestone.achievedDate
                                                                                        ).toLocaleDateString()}
                                                                                    </div>
                                                                                )}
                                                                        </div>
                                                                        <div className="text-sm font-bold">
                                                                            {milestone.value}{" "}
                                                                            {goal.unit}
                                                                        </div>
                                                                    </div>
                                                                )
                                                            )}
                                                        </div>
                                                    </div>

                                                    {/* Recent Progress */}
                                                    <div>
                                                        <h5 className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                                                            <History className="w-4 h-4 text-blue-500" />
                                                            {language === "ar"
                                                                ? "التقدم الأخير"
                                                                : "Recent Progress"}
                                                        </h5>
                                                        <div className="space-y-2 max-h-32 overflow-y-auto">
                                                            {goal.progressHistory
                                                                .slice(-5)
                                                                .reverse()
                                                                .map((entry, index) => (
                                                                    <div
                                                                        key={index}
                                                                        className="flex items-center justify-between p-2 bg-white rounded border"
                                                                    >
                                                                        <div className="flex items-center gap-3">
                                                                            <div className="text-sm font-medium">
                                                                                {new Date(
                                                                                    entry.date
                                                                                ).toLocaleDateString()}
                                                                            </div>
                                                                            {entry.note && (
                                                                                <div className="text-xs text-gray-500 italic">
                                                                                    "{entry.note}"
                                                                                </div>
                                                                            )}
                                                                        </div>
                                                                        <div className="text-sm font-bold text-gray-900">
                                                                            {entry.value}{" "}
                                                                            {goal.unit}
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        <Button
                            onClick={() => {
                                setShowGoalsModal(false);
                                setShowAddGoalModal(true);
                            }}
                            className="w-full mt-6 bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
                        >
                            <Plus className="w-4 h-4 mr-2" />
                            {language === "ar" ? "إضافة هدف جديد" : "Add New Goal"}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    // Progress Update Modal
    const ProgressModal = () => (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-md bg-white shadow-2xl">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">
                            {language === "ar" ? "تحديث التقدم" : "Update Progress"}
                        </h3>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowProgressModal(false)}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    {selectedGoal && (
                        <div className="space-y-4">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${selectedGoal.bgColor}`}
                                >
                                    <selectedGoal.icon
                                        className={`w-6 h-6 ${selectedGoal.color}`}
                                    />
                                </div>
                                <h4 className="font-bold text-gray-900">{selectedGoal.title}</h4>
                                <p className="text-sm text-gray-600">{selectedGoal.target}</p>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === "ar"
                                        ? `القيمة الحالية (${selectedGoal.unit})`
                                        : `Current Value (${selectedGoal.unit})`}
                                </label>
                                <Input
                                    type="number"
                                    step="0.1"
                                    value={progressValue}
                                    onChange={(e) => setProgressValue(e.target.value)}
                                    placeholder={`Enter current ${selectedGoal.unit}`}
                                    className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === "ar" ? "ملاحظة (اختياري)" : "Note (Optional)"}
                                </label>
                                <Input
                                    value={progressNote}
                                    onChange={(e) => setProgressNote(e.target.value)}
                                    placeholder={
                                        language === "ar" ? "أضف ملاحظة..." : "Add a note..."
                                    }
                                    className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                                />
                            </div>

                            {/* Progress Preview */}
                            {progressValue && (
                                <div className="p-3 bg-blue-50 rounded-lg">
                                    <div className="text-sm font-medium text-blue-900 mb-1">
                                        {language === "ar" ? "معاينة التقدم" : "Progress Preview"}
                                    </div>
                                    <div className="text-xs text-blue-700">
                                        {language === "ar" ? "من" : "From"}{" "}
                                        {selectedGoal.currentValue}{" "}
                                        {language === "ar" ? "إلى" : "to"} {progressValue}{" "}
                                        {selectedGoal.unit}
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-3 pt-4">
                                <Button
                                    onClick={addProgress}
                                    disabled={!progressValue}
                                    className="flex-1 bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    {language === "ar" ? "حفظ التقدم" : "Save Progress"}
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setShowProgressModal(false)}
                                    className="flex-1"
                                >
                                    {language === "ar" ? "إلغاء" : "Cancel"}
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );

    // Edit Goal Modal
    const EditGoalModal = () => (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-lg bg-white shadow-2xl">
                <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-bold text-gray-900">
                            {language === "ar" ? "تعديل الهدف" : "Edit Goal"}
                        </h3>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowEditGoalModal(false)}
                        >
                            <X className="w-4 h-4" />
                        </Button>
                    </div>

                    {editingGoal && (
                        <div className="space-y-4">
                            <div className="text-center p-4 bg-gray-50 rounded-lg">
                                <div
                                    className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${editingGoal.bgColor}`}
                                >
                                    <editingGoal.icon className={`w-6 h-6 ${editingGoal.color}`} />
                                </div>
                                <h4 className="font-bold text-gray-900">{editingGoal.title}</h4>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {language === "ar"
                                            ? `القيمة المستهدفة (${editingGoal.unit})`
                                            : `Target Value (${editingGoal.unit})`}
                                    </label>
                                    <Input
                                        type="number"
                                        step="0.1"
                                        value={editingGoal.targetValue}
                                        onChange={(e) =>
                                            setEditingGoal((prev) =>
                                                prev
                                                    ? {
                                                          ...prev,
                                                          targetValue:
                                                              parseFloat(e.target.value) || 0,
                                                      }
                                                    : null
                                            )
                                        }
                                        className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        {language === "ar" ? "تاريخ الهدف" : "Target Date"}
                                    </label>
                                    <Input
                                        type="date"
                                        value={editingGoal.targetDate}
                                        onChange={(e) =>
                                            setEditingGoal((prev) =>
                                                prev
                                                    ? {
                                                          ...prev,
                                                          targetDate: e.target.value,
                                                      }
                                                    : null
                                            )
                                        }
                                        className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    {language === "ar" ? "وصف الهدف" : "Goal Description"}
                                </label>
                                <Input
                                    value={editingGoal.description}
                                    onChange={(e) =>
                                        setEditingGoal((prev) =>
                                            prev
                                                ? {
                                                      ...prev,
                                                      description: e.target.value,
                                                  }
                                                : null
                                        )
                                    }
                                    placeholder={
                                        language === "ar" ? "وصف الهدف..." : "Goal description..."
                                    }
                                    className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]"
                                />
                            </div>

                            <div className="flex gap-3 pt-4">
                                <Button
                                    onClick={updateGoal}
                                    className="flex-1 bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
                                >
                                    <Save className="w-4 h-4 mr-2" />
                                    {language === "ar" ? "حفظ التغييرات" : "Save Changes"}
                                </Button>
                                <Button
                                    variant="outline"
                                    onClick={() => setShowEditGoalModal(false)}
                                    className="flex-1"
                                >
                                    {language === "ar" ? "إلغاء" : "Cancel"}
                                </Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );

    // Add Goal Modal
    const AddGoalModal = () => (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <Card className="w-full max-w-4xl max-h-[80vh] overflow-hidden bg-white shadow-2xl">
                <CardContent className="p-0">
                    {/* Modal Header */}
                    <div className="p-6 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Plus className="w-6 h-6 text-[#22ae4b]" />
                                <h3 className="text-xl font-bold text-gray-900">
                                    {language === "ar" ? "إضافة هدف جديد" : "Add New Goal"}
                                </h3>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setShowAddGoalModal(false)}
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-6 max-h-96 overflow-y-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {availableGoals
                                .filter((goal) => !userGoals.some((ug) => ug.id === goal.id))
                                .map((goal) => (
                                    <Card
                                        key={goal.id}
                                        className="cursor-pointer transition-all duration-300 hover:shadow-md hover:scale-105 border-2 border-gray-200 hover:border-gray-300"
                                        onClick={() => addGoal(goal)}
                                    >
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div
                                                    className={`w-12 h-12 rounded-full flex items-center justify-center ${goal.bgColor}`}
                                                >
                                                    <goal.icon
                                                        className={`w-6 h-6 ${goal.color}`}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-lg text-gray-900 mb-1">
                                                        {goal.title}
                                                    </h4>
                                                    <p className="text-gray-600 text-sm mb-3">
                                                        {goal.description}
                                                    </p>
                                                    <Badge
                                                        className={`${goal.bgColor} ${goal.color} border-current`}
                                                    >
                                                        {goal.category}
                                                    </Badge>
                                                </div>
                                                <div className="w-6 h-6 border-2 border-gray-300 rounded-full flex items-center justify-center">
                                                    <Plus className="w-4 h-4 text-gray-400" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>

                        {availableGoals.filter((goal) => !userGoals.some((ug) => ug.id === goal.id))
                            .length === 0 && (
                            <div className="text-center py-8">
                                <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                <h4 className="text-lg font-semibold text-gray-600 mb-2">
                                    {language === "ar" ? "جميع الأهداف مضافة" : "All Goals Added"}
                                </h4>
                                <p className="text-gray-500">
                                    {language === "ar"
                                        ? "لقد أضفت جميع الأهداف المتاحة"
                                        : "You have added all available goals"}
                                </p>
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    return (
        <div className="bg-gray-50 min-h-screen">
            <Header />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8">
                {/* Cover Image and Profile Header */}
                <div className="relative bg-gradient-to-r from-[#22ae4b] to-[#1c9a40] rounded-2xl overflow-hidden mb-8 shadow-lg">
                    {/* Cover Image */}
                    <div className="relative h-48 sm:h-56">
                        <img
                            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop"
                            alt="Cover"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40" />

                        {/* Profile Picture - RTL positioned */}
                        <div
                            className={`absolute inset-y-0 ${
                                isRTL ? "right-6 sm:right-8" : "left-6 sm:left-8"
                            } flex items-center`}
                        >
                            <div className="relative">
                                <Avatar className="w-28 h-28 sm:w-40 sm:h-40 border-4 border-white shadow-2xl">
                                    <img
                                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
                                        alt="Adam Ahmed"
                                        className="w-full h-full object-cover"
                                    />
                                </Avatar>
                                {/* Verification Badge */}
                                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                                    <Check className="w-4 h-4 text-white" />
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div
                            className={`absolute top-4 ${isRTL ? "left-4 justify-end" : "right-4 justify-start"} flex gap-2`}
                        >
                            <Link to={getLocalizedPath("/goals")}>
                                <Button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/30 px-3 py-2 h-10 shadow-lg">
                                    <Target className={`w-4 h-4 ${isRTL ? "ml-2 mr-0" : "mr-2"}`} />
                                    <span className="hidden sm:inline">
                                        {language === "ar" ? "إدارة الأهداف" : "Manage Goals"}
                                    </span>
                                </Button>
                            </Link>
                            <Link to={getLocalizedPath("/edit-profile")}>
                                <Button
                                    variant="outline"
                                    className="bg-white/90 backdrop-blur-sm hover:bg-white text-gray-900 border-white px-3 py-2 h-10 shadow-lg"
                                >
                                    <Edit3 className={`w-4 h-4 ${isRTL ? "ml-2 mr-0" : "mr-2"}`} />
                                    <span className="hidden sm:inline">{t.profile.edit}</span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* User Info Card */}
                <Card className="mb-8 bg-white shadow-lg border-0">
                    <CardContent className="p-6 sm:p-8">
                        <div
                            className={`flex flex-col sm:flex-row sm:items-center gap-6 ${
                                isRTL ? "sm:flex-row-reverse" : ""
                            }`}
                        >
                            <div className={`flex-1 ${isRTL ? "order-2" : ""}`}>
                                <div
                                    className={`flex items-center gap-3 mb-4 `}
                                >
                                    <h1
                                        className={`text-base sm:text-4xl font-bold text-gray-900 ${
                                            isRTL ? "text-right" : "text-left"
                                        }`}
                                    >
                                        {user?.firstName + " " + user?.lastName || "Adam Ahmed"}
                                    </h1>
                                    <Badge className="bg-[#22ae4b] text-white px-3 py-1 text-sm font-medium">
                                        {t.profile.premium}
                                    </Badge>
                                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                                <p
                                    className={`text-base sm:text-lg text-gray-600 mb-6 ${
                                        isRTL ? "text-right" : "text-left"
                                    }`}
                                >
                                    {t.profile.food_enthusiast}
                                </p>
                                <div
                                    className={`flex flex-wrap items-center gap-4 
                                        text-sm text-gray-500`}
                                >
                                    <div
                                        className={`flex items-center gap-2 `}
                                    >
                                        <Calendar className="w-4 h-4 text-[#22ae4b]" />
                                        <span>
                                            {t.profile.member_since}{" "}
                                            {language === "ar" ? "يناير 2023" : "January 2023"}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex items-center gap-2`}
                                    >
                                        <MapPin className="w-4 h-4 text-[#22ae4b]" />
                                        <span>
                                            {language === "ar"
                                                ? "نيويورك، الولايات المتحدة"
                                                : "New York, USA"}
                                        </span>
                                    </div>
                                    <div
                                        className={`flex items-center gap-2`}
                                    >
                                        <Globe className="w-4 h-4 text-[#22ae4b]" />
                                        <span>adamahmed.com</span>
                                    </div>
                                </div>
                            </div>
                            <div
                                className={`flex flex-col gap-3 ${
                                    isRTL ? "sm:mr-auto" : "sm:mr-auto"
                                }`}
                            >
                                <Link to={getLocalizedPath("/account-settings")}>
                                    <Button
                                        variant="outline"
                                        className="w-full sm:w-auto px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                                    >
                                        <Settings
                                            className={`w-4 h-4 ${isRTL ? "ml-2 mr-0" : "mr-2"}`}
                                        />
                                        {t.profile.account_settings}
                                    </Button>
                                </Link>
                                <Button
                                    onClick={() => setShowGoalsModal(true)}
                                    className="w-full sm:w-auto bg-[#22ae4b] hover:bg-[#1c9a40] text-white px-6 py-3 text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                                >
                                    <Target className={`w-4 h-4 ${isRTL ? "ml-2 mr-0" : "mr-2"}`} />
                                    {language === "ar" ? "إدارة الأهداف" : "Manage Goals"}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Stats Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-6 mb-6 sm:mb-8 px-4 sm:px-0">
                    <Card>
                        <CardContent className="p-3 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#22ae4b] mb-1 sm:mb-2">
                                12
                            </div>
                            <div className="text-xs sm:text-base text-gray-600">
                                {t.profile.recipes}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-3 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#22ae4b] mb-1 sm:mb-2">
                                1,247
                            </div>
                            <div className="text-xs sm:text-base text-gray-600">
                                {t.profile.followers}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-3 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#22ae4b] mb-1 sm:mb-2">
                                89
                            </div>
                            <div className="text-xs sm:text-base text-gray-600">
                                {t.profile.following}
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-3 sm:p-6 text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-[#22ae4b] mb-1 sm:mb-2">
                                2,156
                            </div>
                            <div className="text-xs sm:text-base text-gray-600">
                                {t.profile.likes}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
                    {/* Left Column - Goals and Posts */}
                    <div className="lg:col-span-8">
                        {/* Goals Section */}
                        <div className="mb-6 sm:mb-8 px-4 sm:px-0">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    {language === "ar" ? "أهدافي" : "My Goals"}
                                </h2>
                                <Link to={getLocalizedPath("/goals")}>
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="text-xs sm:text-sm"
                                    >
                                        {t.common.view_all}
                                    </Button>
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:gap-6">
                                {userGoals.slice(0, 2).map((goal) => (
                                    <Card key={goal.id} className="overflow-hidden">
                                        <CardContent className="p-4 sm:p-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div
                                                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${goal.bgColor}`}
                                                >
                                                    <goal.icon
                                                        className={`w-4 h-4 sm:w-5 sm:h-5 ${goal.color}`}
                                                    />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="font-bold text-base sm:text-lg text-gray-900">
                                                        {language === "ar"
                                                            ? goal.titleAr
                                                            : goal.title}
                                                    </h3>
                                                    <p className="text-gray-600 text-xs sm:text-sm">
                                                        {language === "ar"
                                                            ? goal.descriptionAr
                                                            : goal.description}
                                                    </p>
                                                </div>
                                                <div className="text-right flex-shrink-0">
                                                    <div className="text-lg sm:text-2xl font-bold text-[#22ae4b]">
                                                        {goal.progress}%
                                                    </div>
                                                    <div className="text-xs text-gray-500">
                                                        {language === "ar" ? "مكتمل" : "Complete"}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="mb-3 sm:mb-4">
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div
                                                        className="h-2 rounded-full bg-[#22ae4b] transition-all duration-500"
                                                        style={{
                                                            width: `${Math.min(
                                                                goal.progress,
                                                                100
                                                            )}%`,
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600">
                                                <span>
                                                    {goal.currentValue}
                                                    {goal.unit} / {goal.targetValue}
                                                    {goal.unit}
                                                </span>
                                                <span>
                                                    {getDaysRemaining(goal.targetDate)}{" "}
                                                    {language === "ar" ? "يوم متبقي" : "days left"}
                                                </span>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        {/* Posts Section */}
                        <div className="px-4 sm:px-0">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                    {t.profile.latest_activity}
                                </h2>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => setShowAllPosts(!showAllPosts)}
                                    className="text-xs sm:text-sm"
                                >
                                    {showAllPosts
                                        ? t.profile.show_less
                                        : `${t.profile.showing_posts} (${userPosts.length})`}
                                </Button>
                            </div>

                            <div className="space-y-6">
                                {(showAllPosts ? userPosts : userPosts.slice(0, 2)).map((post) => (
                                    <Card
                                        key={post.id}
                                        className="bg-white rounded-2xl border-0 shadow-sm"
                                    >
                                        <CardContent className="p-4 sm:p-6">
                                            {/* Post Header */}
                                            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                                                <Avatar className="w-10 h-10 sm:w-12 sm:h-12">
                                                    <img
                                                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                                                        alt="Adam Ahmed"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </Avatar>
                                                <div className="flex-1">
                                                    <h3 className="font-semibold text-sm sm:text-base text-black">
                                                        Adam Ahmed
                                                    </h3>
                                                    <div className="font-medium text-[#7a7a7a] text-xs sm:text-sm">
                                                        {post.timestamp}
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="text-gray-400 hover:text-gray-600"
                                                >
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
                                                    {post.content}
                                                </p>
                                                <Link
                                                    to={post.recipeLink}
                                                    className="block rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform"
                                                >
                                                    <img
                                                        className="w-full h-48 sm:h-64 md:h-80 object-cover"
                                                        alt={post.title}
                                                        src={post.image}
                                                    />
                                                </Link>
                                            </div>

                                            {/* Interactive Actions */}
                                            <div className="flex items-center gap-2 sm:gap-6 mb-3 sm:mb-4">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="flex items-center gap-2 text-gray-600 hover:text-red-500 pl-0 sm:px-3"
                                                >
                                                    <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <span className="text-sm">{post.likes}</span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="flex items-center gap-2 text-gray-600 hover:text-blue-500"
                                                >
                                                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    <span className="text-sm">{post.comments}</span>
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="flex items-center gap-2 text-gray-600 hover:text-green-500"
                                                >
                                                    <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </Button>
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="ml-auto text-gray-600 hover:text-yellow-500"
                                                >
                                                    <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
                                                </Button>
                                            </div>

                                            {/* Comment Input */}
                                            <form
                                                onSubmit={handleComment}
                                                className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-full border border-gray-300 bg-gray-50"
                                            >
                                                <Avatar className="w-6 h-6 sm:w-8 sm:h-8">
                                                    <img
                                                        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                                                        alt="Your avatar"
                                                        className="w-full h-full object-cover"
                                                    />
                                                </Avatar>
                                                <Input
                                                    placeholder={t.profile.add_comment}
                                                    value={newComment}
                                                    onChange={(e) => setNewComment(e.target.value)}
                                                    className={`flex-1 border-0 bg-transparent text-gray-700 focus-visible:ring-0 focus-visible:ring-offset-0 px-0 text-sm sm:text-base ${
                                                        isRTL ? "text-right" : "text-left"
                                                    }`}
                                                />
                                                {newComment.trim() && (
                                                    <Button
                                                        type="submit"
                                                        size="sm"
                                                        className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white rounded-full px-3 sm:px-4 text-xs sm:text-sm"
                                                    >
                                                        {t.profile.post}
                                                    </Button>
                                                )}
                                            </form>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-4 px-4 sm:px-0">
                        <div className="sticky top-24 space-y-6">
                            {/* Quick Actions */}
                            <Card>
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                                        {t.profile.quick_actions}
                                    </h3>
                                    <div className="space-y-2 sm:space-y-3">
                                        <Link to={getLocalizedPath("/create-recipe")} className="block">
                                            <Button className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white justify-start text-sm h-10 sm:h-12">
                                                <Plus className="w-4 h-4 mr-2" />
                                                {t.profile.add_new_recipe}
                                            </Button>
                                        </Link>
                                        <Link to={getLocalizedPath("/planner")} className="block">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-sm h-10 sm:h-12"
                                            >
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {t.home.meal_planner}
                                            </Button>
                                        </Link>
                                        <Link to={getLocalizedPath("/lists")} className="block">
                                            <Button
                                                variant="outline"
                                                className="w-full justify-start text-sm h-10 sm:h-12"
                                            >
                                                <Bookmark className="w-4 h-4 mr-2" />
                                                {t.home.shopping_list}
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Goals Summary */}
                            {userGoals.filter((g) => g.active).length > 0 && (
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                                            <BarChart3 className="w-5 h-5 text-[#22ae4b]" />
                                            {language === "ar" ? "ملخص الأهداف" : "Goals Summary"}
                                        </h3>
                                        <div className="space-y-3">
                                            {userGoals
                                                .filter((g) => g.active)
                                                .slice(0, 3)
                                                .map((goal) => (
                                                    <div
                                                        key={goal.id}
                                                        className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <div
                                                                className={`w-8 h-8 rounded-full flex items-center justify-center ${goal.bgColor}`}
                                                            >
                                                                <goal.icon
                                                                    className={`w-4 h-4 ${goal.color}`}
                                                                />
                                                            </div>
                                                            <div>
                                                                <div className="font-medium text-sm text-gray-900">
                                                                    {goal.title}
                                                                </div>
                                                                <div className="text-xs text-gray-600">
                                                                    {goal.currentValue} /{" "}
                                                                    {goal.targetValue} {goal.unit}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="text-right">
                                                            <div
                                                                className={`text-lg font-bold ${goal.color}`}
                                                            >
                                                                {goal.progress}%
                                                            </div>
                                                            <div className="w-12 bg-gray-200 rounded-full h-1">
                                                                <div
                                                                    className={`h-1 rounded-full ${goal.progressColor}`}
                                                                    style={{
                                                                        width: `${goal.progress}%`,
                                                                    }}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                        </div>
                                        <Button
                                            onClick={() => setShowGoalsModal(true)}
                                            variant="outline"
                                            className="w-full mt-4"
                                        >
                                            {language === "ar"
                                                ? "عرض جميع الأهداف"
                                                : "View All Goals"}
                                        </Button>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Import Recipe */}
                            <Card>
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                                        {t.profile.import_recipe}
                                    </h3>
                                    <div className="space-y-2 sm:space-y-3">
                                        <Input
                                            placeholder={t.profile.enter_recipe_url}
                                            value={newRecipeUrl}
                                            onChange={(e) => setNewRecipeUrl(e.target.value)}
                                            className="border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] text-sm h-10 sm:h-12"
                                        />
                                        <Button
                                            onClick={handleImportRecipe}
                                            className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white text-sm h-10 sm:h-12"
                                        >
                                            {t.profile.import_recipe}
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Account Info */}
                            <Card>
                                <CardContent className="p-4 sm:p-6">
                                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
                                        {language === "ar"
                                            ? "معلومات الحساب"
                                            : "Account Information"}
                                    </h3>
                                    <div className="space-y-3 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">
                                                {t.profile.member_since}
                                            </span>
                                            <span className="font-medium">
                                                {userProfile.memberSince}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">
                                                {t.profile.account_type}
                                            </span>
                                            <span className="font-medium text-[#22ae4b]">
                                                {userProfile.accountType}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">
                                                {t.profile.verification}
                                            </span>
                                            <span className="font-medium text-green-600">
                                                {t.profile.verified}
                                            </span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-600">
                                                {t.profile.profile_completion}
                                            </span>
                                            <span className="font-medium text-[#22ae4b]">
                                                {userProfile.profileCompletion}%
                                            </span>
                                        </div>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                                        <div
                                            className="bg-[#22ae4b] h-2 rounded-full transition-all duration-300"
                                            style={{
                                                width: `${userProfile.profileCompletion}%`,
                                            }}
                                        />
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Top Creators */}
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-2 mb-6">
                                        <Award className="w-5 h-5 text-[#22ae4b]" />
                                        <h3 className="font-bold text-gray-900">
                                            {t.home.top_creators}
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        {creators
                                            .slice(0, showAllCreators ? creators.length : 3)
                                            .map((creator, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3"
                                                >
                                                    <div className="relative">
                                                        <Avatar className="w-12 h-12">
                                                            <img
                                                                src={creator.avatar}
                                                                alt={creator.name}
                                                            />
                                                        </Avatar>
                                                        {creator.verified && (
                                                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                                                                <Check className="w-2 h-2 text-white" />
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="flex-1">
                                                        <div className="font-semibold text-sm text-gray-900">
                                                            {creator.name}
                                                        </div>
                                                        <div className="text-xs text-gray-600">
                                                            {creator.specialty}
                                                        </div>
                                                        <div className="text-xs text-[#22ae4b] font-medium">
                                                            {creator.followers} followers
                                                        </div>
                                                    </div>
                                                    <Button
                                                        size="sm"
                                                        variant="outline"
                                                        className="text-xs px-3 py-1 h-7"
                                                    >
                                                        Follow
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
                                            ? t.profile.show_less
                                            : t.profile.show_more_creators}
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            {/* Enhanced Modals */}
            {showGoalsModal && <GoalsModal />}
            {showProgressModal && <ProgressModal />}
            {showEditGoalModal && <EditGoalModal />}
            {showAddGoalModal && <AddGoalModal />}

            <AdSection />
        </div>
    );
};
