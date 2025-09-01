import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
import { Separator } from "../../components/ui/separator";
import {
     Target,
     TrendingDown,
     TrendingUp,
     Activity,
     Heart,
     Zap,
     Scale,
     Dumbbell,
     Apple,
     Clock,
     Calendar,
     ArrowLeft,
     Plus,
     Edit3,
     Trash2,
     Check,
     X,
     ChefHat,
     Award,
     BarChart3,
     Trophy,
     Flag,
     Milestone,
     Save,
     RefreshCw,
     AlertCircle,
     CheckCircle,
     TrendingDown as Decline,
     Minus,
} from "lucide-react";

interface Goal {
     id: string;
     title: string;
     titleAr: string;
     description: string;
     descriptionAr: string;
     icon: React.ComponentType<any>;
     color: string;
     bgColor: string;
     category: "weight" | "health" | "fitness" | "lifestyle";
     isActive: boolean;
     startValue?: number;
     currentValue?: number;
     targetValue?: number;
     unit?: string;
     startDate: string;
     targetDate: string;
     progress: number;
     milestones: Array<{
          id: number;
          value: number;
          description: string;
          achieved: boolean;
          achievedDate?: string;
     }>;
     progressHistory: Array<{
          id: number;
          value: number;
          date: string;
          note?: string;
     }>;
}

export const GoalsManagement = (): JSX.Element => {
     const { t, isRTL, language } = useLanguage();
     const [showAddGoalModal, setShowAddGoalModal] = useState(false);
     const [showEditGoalModal, setShowEditGoalModal] = useState(false);
     const [showProgressModal, setShowProgressModal] = useState(false);
     const [selectedGoal, setSelectedGoal] = useState<Goal | null>(null);
     const [newProgressValue, setNewProgressValue] = useState("");
     const [newProgressNote, setNewProgressNote] = useState("");
     const [editingGoal, setEditingGoal] = useState<Goal | null>(null);

     // Generate localized path
     const getLocalizedPath = (path: string) => {
          return language === "ar" ? `/ar${path === "/" ? "" : path}` : path;
     };

     // User's active goals with comprehensive data
     const [userGoals, setUserGoals] = useState<Goal[]>([
          {
               id: "lose-weight",
               title: "Lose Weight",
               titleAr: "فقدان الوزن",
               description: "Reach my target weight through healthy eating",
               descriptionAr: "الوصول إلى وزني المستهدف من خلال الأكل الصحي",
               icon: TrendingDown,
               color: "text-red-600",
               bgColor: "bg-red-50 border-red-200",
               category: "weight",
               isActive: true,
               startValue: 85,
               currentValue: 78,
               targetValue: 70,
               unit: "kg",
               startDate: "2024-01-01",
               targetDate: "2024-06-01",
               progress: 47, // (85-78)/(85-70) * 100
               milestones: [
                    {
                         id: 1,
                         value: 82,
                         description: "First 3kg lost",
                         achieved: true,
                         achievedDate: "2024-01-15",
                    },
                    { id: 2, value: 79, description: "Halfway point", achieved: false },
                    { id: 3, value: 75, description: "10kg milestone", achieved: false },
                    { id: 4, value: 70, description: "Target weight reached", achieved: false },
               ],
               progressHistory: [
                    { id: 1, value: 85, date: "2024-01-01", note: "Starting weight" },
                    { id: 2, value: 83, date: "2024-01-08", note: "First week progress" },
                    { id: 3, value: 81, date: "2024-01-15", note: "Feeling great!" },
                    { id: 4, value: 80, date: "2024-01-22", note: "Slow but steady" },
                    { id: 5, value: 78, date: "2024-01-29", note: "New workout routine helping" },
               ],
          },
          {
               id: "build-muscle",
               title: "Build Muscle",
               titleAr: "بناء العضلات",
               description: "Increase muscle mass through strength training",
               descriptionAr: "زيادة الكتلة العضلية من خلال تدريب القوة",
               icon: Dumbbell,
               color: "text-purple-600",
               bgColor: "bg-purple-50 border-purple-200",
               category: "fitness",
               isActive: true,
               startValue: 3,
               currentValue: 4,
               targetValue: 6,
               unit: "workouts/week",
               startDate: "2024-01-01",
               targetDate: "2024-04-01",
               progress: 33, // (4-3)/(6-3) * 100
               milestones: [
                    {
                         id: 1,
                         value: 4,
                         description: "Consistent 4 workouts/week",
                         achieved: true,
                         achievedDate: "2024-01-20",
                    },
                    { id: 2, value: 5, description: "5 workouts milestone", achieved: false },
                    { id: 3, value: 6, description: "Target frequency reached", achieved: false },
               ],
               progressHistory: [
                    { id: 1, value: 3, date: "2024-01-01", note: "Starting routine" },
                    { id: 2, value: 3, date: "2024-01-08", note: "Building habit" },
                    { id: 3, value: 4, date: "2024-01-15", note: "Added extra day" },
                    { id: 4, value: 4, date: "2024-01-22", note: "Staying consistent" },
                    { id: 5, value: 4, date: "2024-01-29", note: "Feeling stronger" },
               ],
          },
          {
               id: "improve-health",
               title: "Improve Overall Health",
               titleAr: "تحسين الصحة العامة",
               description: "Eat more nutritious meals daily",
               descriptionAr: "تناول وجبات مغذية أكثر يومياً",
               icon: Heart,
               color: "text-pink-600",
               bgColor: "bg-pink-50 border-pink-200",
               category: "health",
               isActive: true,
               startValue: 1,
               currentValue: 2,
               targetValue: 3,
               unit: "healthy meals/day",
               startDate: "2024-01-01",
               targetDate: "2024-03-01",
               progress: 50, // (2-1)/(3-1) * 100
               milestones: [
                    {
                         id: 1,
                         value: 2,
                         description: "2 healthy meals daily",
                         achieved: true,
                         achievedDate: "2024-01-18",
                    },
                    { id: 2, value: 3, description: "All meals healthy", achieved: false },
               ],
               progressHistory: [
                    { id: 1, value: 1, date: "2024-01-01", note: "Starting with breakfast" },
                    { id: 2, value: 1, date: "2024-01-08", note: "Focusing on consistency" },
                    { id: 3, value: 2, date: "2024-01-15", note: "Added healthy lunch" },
                    { id: 4, value: 2, date: "2024-01-22", note: "Meal prep helping" },
                    { id: 5, value: 2, date: "2024-01-29", note: "Feeling more energetic" },
               ],
          },
     ]);

     // Available goals that can be added
     const availableGoals = [
          {
               id: "gain-weight",
               title: "Gain Weight",
               titleAr: "زيادة الوزن",
               description: "High-calorie, nutritious recipes for healthy weight gain",
               descriptionAr: "وصفات عالية السعرات ومغذية لزيادة الوزن الصحي",
               icon: TrendingUp,
               color: "text-blue-600",
               bgColor: "bg-blue-50 border-blue-200",
               category: "weight" as const,
          },
          {
               id: "increase-energy",
               title: "Increase Energy",
               titleAr: "زيادة الطاقة",
               description: "Energy-boosting recipes for an active lifestyle",
               descriptionAr: "وصفات معززة للطاقة لنمط حياة نشط",
               icon: Zap,
               color: "text-yellow-600",
               bgColor: "bg-yellow-50 border-yellow-200",
               category: "health" as const,
          },
          {
               id: "better-digestion",
               title: "Better Digestion",
               titleAr: "تحسين الهضم",
               description: "Gut-friendly recipes for digestive health",
               descriptionAr: "وصفات صديقة للمعدة لصحة الجهاز الهضمي",
               icon: Apple,
               color: "text-green-600",
               bgColor: "bg-green-50 border-green-200",
               category: "health" as const,
          },
          {
               id: "save-time",
               title: "Save Time Cooking",
               titleAr: "توفير وقت الطبخ",
               description: "Quick and easy recipes for busy schedules",
               descriptionAr: "وصفات سريعة وسهلة للجداول المزدحمة",
               icon: Clock,
               color: "text-indigo-600",
               bgColor: "bg-indigo-50 border-indigo-200",
               category: "lifestyle" as const,
          },
          {
               id: "learn-cooking",
               title: "Learn New Cooking Skills",
               titleAr: "تعلم مهارات طبخ جديدة",
               description: "Step-by-step recipes to improve your cooking",
               descriptionAr: "وصفات مفصلة خطوة بخطوة لتحسين طبخك",
               icon: ChefHat,
               color: "text-orange-600",
               bgColor: "bg-orange-50 border-orange-200",
               category: "lifestyle" as const,
          },
     ];

     // Filter available goals (exclude already active ones)
     const filteredAvailableGoals = availableGoals.filter(
          (goal) => !userGoals.some((userGoal) => userGoal.id === goal.id)
     );

     const addProgress = (goalId: string) => {
          const value = parseFloat(newProgressValue);
          if (isNaN(value)) return;

          setUserGoals((prev) =>
               prev.map((goal) => {
                    if (goal.id === goalId) {
                         const newProgressEntry = {
                              id: goal.progressHistory.length + 1,
                              value: value,
                              date: new Date().toISOString().split("T")[0],
                              note: newProgressNote.trim() || undefined,
                         };

                         // Update current value and recalculate progress
                         const updatedGoal = {
                              ...goal,
                              currentValue: value,
                              progressHistory: [...goal.progressHistory, newProgressEntry],
                         };

                         // Recalculate progress percentage
                         if (goal.startValue !== undefined && goal.targetValue !== undefined) {
                              if (goal.category === "weight" && goal.id === "lose-weight") {
                                   // For weight loss: progress = (start - current) / (start - target) * 100
                                   updatedGoal.progress = Math.max(
                                        0,
                                        Math.min(
                                             100,
                                             ((goal.startValue - value) /
                                                  (goal.startValue - goal.targetValue)) *
                                                  100
                                        )
                                   );
                              } else {
                                   // For other goals: progress = (current - start) / (target - start) * 100
                                   updatedGoal.progress = Math.max(
                                        0,
                                        Math.min(
                                             100,
                                             ((value - goal.startValue) /
                                                  (goal.targetValue - goal.startValue)) *
                                                  100
                                        )
                                   );
                              }
                         }

                         // Check and update milestones
                         updatedGoal.milestones = goal.milestones.map((milestone) => {
                              if (!milestone.achieved) {
                                   let shouldAchieve = false;
                                   if (goal.id === "lose-weight") {
                                        shouldAchieve = value <= milestone.value;
                                   } else {
                                        shouldAchieve = value >= milestone.value;
                                   }

                                   if (shouldAchieve) {
                                        return {
                                             ...milestone,
                                             achieved: true,
                                             achievedDate: new Date().toISOString().split("T")[0],
                                        };
                                   }
                              }
                              return milestone;
                         });

                         return updatedGoal;
                    }
                    return goal;
               })
          );

          setNewProgressValue("");
          setNewProgressNote("");
          setShowProgressModal(false);
          setSelectedGoal(null);
     };

     const updateGoal = (updatedGoal: Goal) => {
          setUserGoals((prev) =>
               prev.map((goal) => (goal.id === updatedGoal.id ? updatedGoal : goal))
          );
          setShowEditGoalModal(false);
          setEditingGoal(null);
     };

     const removeGoal = (goalId: string) => {
          if (
               window.confirm(
                    language === "ar"
                         ? "هل أنت متأكد من حذف هذا الهدف؟"
                         : "Are you sure you want to remove this goal?"
               )
          ) {
               setUserGoals((prev) => prev.filter((goal) => goal.id !== goalId));
          }
     };

     const addNewGoal = (goalTemplate: any) => {
          const newGoal: Goal = {
               ...goalTemplate,
               isActive: true,
               startValue: 0,
               currentValue: 0,
               targetValue: 0,
               unit:
                    goalTemplate.category === "weight"
                         ? "kg"
                         : goalTemplate.category === "fitness"
                         ? "workouts/week"
                         : goalTemplate.category === "health"
                         ? "meals/day"
                         : "hours/week",
               startDate: new Date().toISOString().split("T")[0],
               targetDate: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000)
                    .toISOString()
                    .split("T")[0], // 90 days from now
               progress: 0,
               milestones: [],
               progressHistory: [],
          };

          setUserGoals((prev) => [...prev, newGoal]);
          setShowAddGoalModal(false);
     };

     const getDaysRemaining = (targetDate: string) => {
          const today = new Date();
          const target = new Date(targetDate);
          const diffTime = target.getTime() - today.getTime();
          const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
          return diffDays;
     };

     const getProgressTrend = (goal: Goal) => {
          if (goal.progressHistory.length < 2) return "stable";

          const recent = goal.progressHistory.slice(-2);
          const diff = recent[1].value - recent[0].value;

          if (goal.id === "lose-weight") {
               return diff < 0 ? "improving" : diff > 0 ? "declining" : "stable";
          } else {
               return diff > 0 ? "improving" : diff < 0 ? "declining" : "stable";
          }
     };

     const getTrendIcon = (trend: string) => {
          switch (trend) {
               case "improving":
                    return <TrendingUp className="w-4 h-4 text-green-500" />;
               case "declining":
                    return <Decline className="w-4 h-4 text-red-500" />;
               default:
                    return <Minus className="w-4 h-4 text-gray-400" />;
          }
     };

     const getTrendColor = (trend: string) => {
          switch (trend) {
               case "improving":
                    return "text-green-600 bg-green-50";
               case "declining":
                    return "text-red-600 bg-red-50";
               default:
                    return "text-gray-600 bg-gray-50";
          }
     };

     // Calculate overall statistics
     const totalGoals = userGoals.length;
     const activeGoals = userGoals.filter((goal) => goal.isActive).length;
     const averageProgress =
          userGoals.length > 0
               ? Math.round(
                      userGoals.reduce((sum, goal) => sum + goal.progress, 0) / userGoals.length
                 )
               : 0;
     const completedGoals = userGoals.filter((goal) => goal.progress >= 100).length;
     const totalMilestones = userGoals.reduce((sum, goal) => sum + goal.milestones.length, 0);
     const achievedMilestones = userGoals.reduce(
          (sum, goal) => sum + goal.milestones.filter((m) => m.achieved).length,
          0
     );

     const ProgressModal = () => {
          if (!showProgressModal || !selectedGoal) return null;

          return (
               <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4">
                    <Card className="w-full max-w-sm sm:max-w-lg bg-white shadow-2xl">
                         <CardContent className="p-4 sm:p-6">
                              <div className="flex items-center justify-between mb-6">
                                   <div className="flex items-center gap-3">
                                        <div
                                             className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${selectedGoal.bgColor}`}>
                                             <selectedGoal.icon
                                                  className={`w-4 h-4 sm:w-5 sm:h-5 ${selectedGoal.color}`}
                                             />
                                        </div>
                                        <div>
                                             <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                                  {language === "ar"
                                                       ? "تحديث التقدم"
                                                       : "Update Progress"}
                                             </h3>
                                             <p className="text-xs sm:text-sm text-gray-600">
                                                  {language === "ar"
                                                       ? selectedGoal.titleAr
                                                       : selectedGoal.title}
                                             </p>
                                        </div>
                                   </div>
                                   <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowProgressModal(false)}>
                                        <X className="w-4 h-4" />
                                   </Button>
                              </div>

                              <div className="space-y-4 sm:space-y-6">
                                   {/* Current Status */}
                                   <div className="bg-gray-50 rounded-lg p-3 sm:p-4">
                                        <div className="grid grid-cols-3 gap-2 sm:gap-4 text-center">
                                             <div>
                                                  <div className="text-xs sm:text-sm text-gray-600">
                                                       {language === "ar" ? "البداية" : "Start"}
                                                  </div>
                                                  <div className="font-bold text-sm sm:text-lg">
                                                       {selectedGoal.startValue}
                                                       <span className="text-xs">
                                                            {selectedGoal.unit}
                                                       </span>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="text-xs sm:text-sm text-gray-600">
                                                       {language === "ar" ? "الحالي" : "Current"}
                                                  </div>
                                                  <div className="font-bold text-sm sm:text-lg text-[#22ae4b]">
                                                       {selectedGoal.currentValue}
                                                       <span className="text-xs">
                                                            {selectedGoal.unit}
                                                       </span>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="text-xs sm:text-sm text-gray-600">
                                                       {language === "ar" ? "الهدف" : "Target"}
                                                  </div>
                                                  <div className="font-bold text-sm sm:text-lg">
                                                       {selectedGoal.targetValue}
                                                       <span className="text-xs">
                                                            {selectedGoal.unit}
                                                       </span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>

                                   {/* New Progress Input */}
                                   <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                             {language === "ar"
                                                  ? `القيمة الجديدة (${selectedGoal.unit})`
                                                  : `New Value (${selectedGoal.unit})`}
                                        </label>
                                        <Input
                                             type="number"
                                             value={newProgressValue}
                                             onChange={(e) => setNewProgressValue(e.target.value)}
                                             placeholder={`${selectedGoal.currentValue}`}
                                             className="h-10 sm:h-12 border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] text-sm"
                                        />
                                   </div>

                                   {/* Progress Note */}
                                   <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                             {language === "ar"
                                                  ? "ملاحظة (اختياري)"
                                                  : "Note (Optional)"}
                                        </label>
                                        <Input
                                             value={newProgressNote}
                                             onChange={(e) => setNewProgressNote(e.target.value)}
                                             placeholder={
                                                  language === "ar"
                                                       ? "أضف ملاحظة حول تقدمك..."
                                                       : "Add a note about your progress..."
                                             }
                                             className={`h-10 sm:h-12 border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] text-sm ${
                                                  isRTL ? "text-right" : "text-left"
                                             }`}
                                        />
                                   </div>

                                   {/* Preview */}
                                   {newProgressValue && !isNaN(parseFloat(newProgressValue)) && (
                                        <div className="bg-blue-50 rounded-lg p-3 sm:p-4">
                                             <h4 className="font-medium text-sm sm:text-base text-blue-900 mb-2">
                                                  {language === "ar"
                                                       ? "معاينة التحديث"
                                                       : "Update Preview"}
                                             </h4>
                                             <div className="text-xs sm:text-sm text-blue-700">
                                                  {selectedGoal.id === "lose-weight"
                                                       ? `${
                                                              language === "ar"
                                                                   ? "تغيير الوزن:"
                                                                   : "Weight change:"
                                                         } ${(
                                                              parseFloat(newProgressValue) -
                                                              (selectedGoal.currentValue || 0)
                                                         ).toFixed(1)}${selectedGoal.unit}`
                                                       : `${
                                                              language === "ar"
                                                                   ? "التغيير:"
                                                                   : "Change:"
                                                         } ${(
                                                              parseFloat(newProgressValue) -
                                                              (selectedGoal.currentValue || 0)
                                                         ).toFixed(1)}${selectedGoal.unit}`}
                                             </div>
                                        </div>
                                   )}

                                   {/* Action Buttons */}
                                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
                                        <Button
                                             onClick={() => addProgress(selectedGoal.id)}
                                             disabled={
                                                  !newProgressValue ||
                                                  isNaN(parseFloat(newProgressValue))
                                             }
                                             className="w-full sm:flex-1 bg-[#22ae4b] hover:bg-[#1c9a40] text-white text-sm h-10 sm:h-12">
                                             <Save className="w-4 h-4 mr-2" />
                                             {language === "ar" ? "حفظ التقدم" : "Save Progress"}
                                        </Button>
                                        <Button
                                             variant="outline"
                                             onClick={() => setShowProgressModal(false)}
                                             className="w-full sm:flex-1 text-sm h-10 sm:h-12">
                                             {t.common.cancel}
                                        </Button>
                                   </div>
                              </div>
                         </CardContent>
                    </Card>
               </div>
          );
     };

     const EditGoalModal = () => {
          if (!showEditGoalModal || !editingGoal) return null;

          const [editData, setEditData] = useState({
               targetValue: editingGoal.targetValue?.toString() || "",
               targetDate: editingGoal.targetDate,
               description: language === "ar" ? editingGoal.descriptionAr : editingGoal.description,
          });

          const handleSave = () => {
               const updatedGoal = {
                    ...editingGoal,
                    targetValue: parseFloat(editData.targetValue),
                    targetDate: editData.targetDate,
                    description: editData.description,
                    descriptionAr:
                         language === "ar" ? editData.description : editingGoal.descriptionAr,
               };
               updateGoal(updatedGoal);
          };

          return (
               <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4">
                    <Card className="w-full max-w-sm sm:max-w-lg bg-white shadow-2xl">
                         <CardContent className="p-4 sm:p-6">
                              <div className="flex items-center justify-between mb-6">
                                   <div className="flex items-center gap-3">
                                        <div
                                             className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${editingGoal.bgColor}`}>
                                             <editingGoal.icon
                                                  className={`w-4 h-4 sm:w-5 sm:h-5 ${editingGoal.color}`}
                                             />
                                        </div>
                                        <div>
                                             <h3 className="text-base sm:text-lg font-bold text-gray-900">
                                                  {language === "ar" ? "تعديل الهدف" : "Edit Goal"}
                                             </h3>
                                             <p className="text-xs sm:text-sm text-gray-600">
                                                  {language === "ar"
                                                       ? editingGoal.titleAr
                                                       : editingGoal.title}
                                             </p>
                                        </div>
                                   </div>
                                   <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setShowEditGoalModal(false)}>
                                        <X className="w-4 h-4" />
                                   </Button>
                              </div>

                              <div className="space-y-4 sm:space-y-6">
                                   <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                             {language === "ar"
                                                  ? `القيمة المستهدفة (${editingGoal.unit})`
                                                  : `Target Value (${editingGoal.unit})`}
                                        </label>
                                        <Input
                                             type="number"
                                             value={editData.targetValue}
                                             onChange={(e) =>
                                                  setEditData((prev) => ({
                                                       ...prev,
                                                       targetValue: e.target.value,
                                                  }))
                                             }
                                             className="h-10 sm:h-12 border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] text-sm"
                                        />
                                   </div>

                                   <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                             {language === "ar" ? "تاريخ الهدف" : "Target Date"}
                                        </label>
                                        <Input
                                             type="date"
                                             value={editData.targetDate}
                                             onChange={(e) =>
                                                  setEditData((prev) => ({
                                                       ...prev,
                                                       targetDate: e.target.value,
                                                  }))
                                             }
                                             className="h-10 sm:h-12 border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b] text-sm"
                                        />
                                   </div>

                                   <div>
                                        <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                                             {language === "ar" ? "وصف الهدف" : "Goal Description"}
                                        </label>
                                        <textarea
                                             value={editData.description}
                                             onChange={(e) =>
                                                  setEditData((prev) => ({
                                                       ...prev,
                                                       description: e.target.value,
                                                  }))
                                             }
                                             rows={2}
                                             className={`w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] resize-none text-sm ${
                                                  isRTL ? "text-right" : "text-left"
                                             }`}
                                             placeholder={
                                                  language === "ar"
                                                       ? "اوصف هدفك..."
                                                       : "Describe your goal..."
                                             }
                                        />
                                   </div>

                                   <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4">
                                        <Button
                                             onClick={handleSave}
                                             className="w-full sm:flex-1 bg-[#22ae4b] hover:bg-[#1c9a40] text-white text-sm h-10 sm:h-12">
                                             <Save className="w-4 h-4 mr-2" />
                                             {language === "ar" ? "حفظ التغييرات" : "Save Changes"}
                                        </Button>
                                        <Button
                                             variant="outline"
                                             onClick={() => setShowEditGoalModal(false)}
                                             className="w-full sm:flex-1 text-sm h-10 sm:h-12">
                                             {t.common.cancel}
                                        </Button>
                                   </div>
                              </div>
                         </CardContent>
                    </Card>
               </div>
          );
     };

     const AddGoalModal = () => {
          if (!showAddGoalModal) return null;

          return (
               <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-2 sm:p-4">
                    <Card className="w-full max-w-sm sm:max-w-2xl bg-white shadow-2xl max-h-[95vh] sm:max-h-[80vh] overflow-hidden">
                         <CardContent className="p-0">
                              <div className="p-4 sm:p-6 border-b border-gray-200">
                                   <div className="flex items-center justify-between">
                                        <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                                             {language === "ar" ? "إضافة هدف جديد" : "Add New Goal"}
                                        </h3>
                                        <Button
                                             variant="ghost"
                                             size="icon"
                                             onClick={() => setShowAddGoalModal(false)}>
                                             <X className="w-4 h-4" />
                                        </Button>
                                   </div>
                              </div>

                              <div className="p-4 sm:p-6 max-h-80 sm:max-h-96 overflow-y-auto">
                                   <div className="grid grid-cols-1 gap-3 sm:gap-4">
                                        {filteredAvailableGoals.map((goal) => (
                                             <Card
                                                  key={goal.id}
                                                  className={`cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${goal.bgColor} border-2`}
                                                  onClick={() => addNewGoal(goal)}>
                                                  <CardContent className="p-4 sm:p-6">
                                                       <div className="flex items-start gap-3 sm:gap-4">
                                                            <div
                                                                 className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white`}>
                                                                 <goal.icon
                                                                      className={`w-5 h-5 sm:w-6 sm:h-6 ${goal.color}`}
                                                                 />
                                                            </div>
                                                            <div className="flex-1">
                                                                 <h4 className="font-bold text-base sm:text-lg text-gray-900 mb-1 sm:mb-2">
                                                                      {language === "ar"
                                                                           ? goal.titleAr
                                                                           : goal.title}
                                                                 </h4>
                                                                 <p className="text-gray-600 text-xs sm:text-sm">
                                                                      {language === "ar"
                                                                           ? goal.descriptionAr
                                                                           : goal.description}
                                                                 </p>
                                                            </div>
                                                            <Plus className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
                                                       </div>
                                                  </CardContent>
                                             </Card>
                                        ))}
                                   </div>

                                   {filteredAvailableGoals.length === 0 && (
                                        <div className="text-center py-6 sm:py-8">
                                             <Target className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-3 sm:mb-4" />
                                             <h4 className="text-base sm:text-lg font-semibold text-gray-600 mb-2">
                                                  {language === "ar"
                                                       ? "جميع الأهداف مضافة"
                                                       : "All Goals Added"}
                                             </h4>
                                             <p className="text-sm sm:text-base text-gray-500">
                                                  {language === "ar"
                                                       ? "لقد أضفت جميع الأهداف المتاحة"
                                                       : "You've added all available goals"}
                                             </p>
                                        </div>
                                   )}
                              </div>
                         </CardContent>
                    </Card>
               </div>
          );
     };

     return (
          <div className="bg-gray-50 min-h-screen">
               <TopCreatorsSection />

               <div className="max-w-7xl mx-auto px-6 py-8">
                    {/* Header */}
                    <div className="mb-8">
                         <div className="flex items-center gap-4 mb-4">
                              <Link to={getLocalizedPath("/profile")}>
                                   <Button
                                        variant="outline"
                                        size="icon"
                                        className="hover:bg-gray-100">
                                        <ArrowLeft className="w-4 h-4" />
                                   </Button>
                              </Link>
                              <div className="flex items-center gap-3">
                                   <Target className="w-8 h-8 text-[#22ae4b]" />
                                   <div>
                                        <div className="text-sm text-[#22ae4b] font-medium">
                                             {language === "ar" ? "الأهداف" : "Goals"}
                                        </div>
                                        <h1 className="text-3xl font-bold text-gray-900">
                                             {language === "ar"
                                                  ? "إدارة الأهداف"
                                                  : "Goals Management"}
                                        </h1>
                                   </div>
                              </div>
                         </div>
                         <p className="text-gray-600">
                              {language === "ar"
                                   ? "تتبع وإدارة أهدافك الصحية والغذائية"
                                   : "Track and manage your health and nutrition goals"}
                         </p>
                    </div>

                    {/* Goals Statistics */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                         <Card>
                              <CardContent className="p-6 text-center">
                                   <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Target className="w-6 h-6 text-blue-600" />
                                   </div>
                                   <div className="text-2xl font-bold text-gray-900">
                                        {activeGoals}
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        {language === "ar" ? "أهداف نشطة" : "Active Goals"}
                                   </div>
                              </CardContent>
                         </Card>
                         <Card>
                              <CardContent className="p-6 text-center">
                                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <BarChart3 className="w-6 h-6 text-green-600" />
                                   </div>
                                   <div className="text-2xl font-bold text-gray-900">
                                        {averageProgress}%
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        {language === "ar" ? "متوسط التقدم" : "Average Progress"}
                                   </div>
                              </CardContent>
                         </Card>
                         <Card>
                              <CardContent className="p-6 text-center">
                                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Trophy className="w-6 h-6 text-purple-600" />
                                   </div>
                                   <div className="text-2xl font-bold text-gray-900">
                                        {achievedMilestones}
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        {language === "ar"
                                             ? "إنجازات محققة"
                                             : "Milestones Achieved"}
                                   </div>
                              </CardContent>
                         </Card>
                         <Card>
                              <CardContent className="p-6 text-center">
                                   <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                                        <Award className="w-6 h-6 text-yellow-600" />
                                   </div>
                                   <div className="text-2xl font-bold text-gray-900">
                                        {completedGoals}
                                   </div>
                                   <div className="text-sm text-gray-600">
                                        {language === "ar" ? "أهداف مكتملة" : "Completed Goals"}
                                   </div>
                              </CardContent>
                         </Card>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                         {/* Main Goals List */}
                         <div className="lg:col-span-8">
                              <div className="flex items-center justify-between mb-6">
                                   <h2 className="text-2xl font-bold text-gray-900">
                                        {language === "ar" ? "أهدافي" : "My Goals"}
                                   </h2>
                                   <Button
                                        onClick={() => setShowAddGoalModal(true)}
                                        className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white">
                                        <Plus className="w-4 h-4 mr-2" />
                                        {language === "ar" ? "إضافة هدف" : "Add Goal"}
                                   </Button>
                              </div>

                              <div className="space-y-6">
                                   {userGoals.map((goal) => {
                                        const daysRemaining = getDaysRemaining(goal.targetDate);
                                        const trend = getProgressTrend(goal);
                                        const recentProgress = goal.progressHistory.slice(-5);

                                        return (
                                             <Card key={goal.id} className="overflow-hidden">
                                                  <CardContent className="p-6">
                                                       {/* Goal Header */}
                                                       <div className="flex items-start justify-between mb-6">
                                                            <div className="flex items-start gap-4">
                                                                 <div
                                                                      className={`w-12 h-12 rounded-full flex items-center justify-center ${goal.bgColor}`}>
                                                                      <goal.icon
                                                                           className={`w-6 h-6 ${goal.color}`}
                                                                      />
                                                                 </div>
                                                                 <div className="flex-1">
                                                                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                                                                           {language === "ar"
                                                                                ? goal.titleAr
                                                                                : goal.title}
                                                                      </h3>
                                                                      <p className="text-gray-600 text-sm mb-3">
                                                                           {language === "ar"
                                                                                ? goal.descriptionAr
                                                                                : goal.description}
                                                                      </p>
                                                                      <div className="flex items-center gap-4 text-sm">
                                                                           <div
                                                                                className={`flex items-center gap-1 px-2 py-1 rounded ${getTrendColor(
                                                                                     trend
                                                                                )}`}>
                                                                                {getTrendIcon(
                                                                                     trend
                                                                                )}
                                                                                <span className="font-medium capitalize">
                                                                                     {trend}
                                                                                </span>
                                                                           </div>
                                                                           <div className="flex items-center gap-1 text-gray-600">
                                                                                <Calendar className="w-4 h-4" />
                                                                                <span>
                                                                                     {daysRemaining >
                                                                                     0
                                                                                          ? `${daysRemaining} ${
                                                                                                 language ===
                                                                                                 "ar"
                                                                                                      ? "يوم متبقي"
                                                                                                      : "days left"
                                                                                            }`
                                                                                          : `${Math.abs(
                                                                                                 daysRemaining
                                                                                            )} ${
                                                                                                 language ===
                                                                                                 "ar"
                                                                                                      ? "يوم متأخر"
                                                                                                      : "days overdue"
                                                                                            }`}
                                                                                </span>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            <div className="flex items-center gap-2">
                                                                 <Button
                                                                      variant="outline"
                                                                      size="icon"
                                                                      onClick={() => {
                                                                           setSelectedGoal(goal);
                                                                           setShowProgressModal(
                                                                                true
                                                                           );
                                                                      }}
                                                                      className="hover:bg-green-50 hover:border-green-300">
                                                                      <Plus className="w-4 h-4" />
                                                                 </Button>
                                                                 <Button
                                                                      variant="outline"
                                                                      size="icon"
                                                                      onClick={() => {
                                                                           setEditingGoal(goal);
                                                                           setShowEditGoalModal(
                                                                                true
                                                                           );
                                                                      }}
                                                                      className="hover:bg-blue-50 hover:border-blue-300">
                                                                      <Edit3 className="w-4 h-4" />
                                                                 </Button>
                                                                 <Button
                                                                      variant="outline"
                                                                      size="icon"
                                                                      onClick={() =>
                                                                           removeGoal(goal.id)
                                                                      }
                                                                      className="hover:bg-red-50 hover:border-red-300 text-red-500">
                                                                      <Trash2 className="w-4 h-4" />
                                                                 </Button>
                                                            </div>
                                                       </div>

                                                       {/* Progress Overview */}
                                                       <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                                 <div className="text-sm text-gray-600 mb-1">
                                                                      {language === "ar"
                                                                           ? "البداية"
                                                                           : "Start"}
                                                                 </div>
                                                                 <div className="text-2xl font-bold text-gray-900">
                                                                      {goal.startValue}
                                                                      {goal.unit}
                                                                 </div>
                                                                 <div className="text-xs text-gray-500">
                                                                      {new Date(
                                                                           goal.startDate
                                                                      ).toLocaleDateString()}
                                                                 </div>
                                                            </div>
                                                            <div className="bg-[#22ae4b] text-white rounded-lg p-4 text-center">
                                                                 <div className="text-sm text-white/90 mb-1">
                                                                      {language === "ar"
                                                                           ? "الحالي"
                                                                           : "Current"}
                                                                 </div>
                                                                 <div className="text-2xl font-bold">
                                                                      {goal.currentValue}
                                                                      {goal.unit}
                                                                 </div>
                                                                 <div className="text-xs text-white/80">
                                                                      {goal.progressHistory.length >
                                                                      0
                                                                           ? new Date(
                                                                                  goal.progressHistory[
                                                                                       goal
                                                                                            .progressHistory
                                                                                            .length -
                                                                                            1
                                                                                  ].date
                                                                             ).toLocaleDateString()
                                                                           : language === "ar"
                                                                           ? "لم يتم التحديث"
                                                                           : "Not updated"}
                                                                 </div>
                                                            </div>
                                                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                                                 <div className="text-sm text-gray-600 mb-1">
                                                                      {language === "ar"
                                                                           ? "الهدف"
                                                                           : "Target"}
                                                                 </div>
                                                                 <div className="text-2xl font-bold text-gray-900">
                                                                      {goal.targetValue}
                                                                      {goal.unit}
                                                                 </div>
                                                                 <div className="text-xs text-gray-500">
                                                                      {new Date(
                                                                           goal.targetDate
                                                                      ).toLocaleDateString()}
                                                                 </div>
                                                            </div>
                                                       </div>

                                                       {/* Progress Bar */}
                                                       <div className="mb-6">
                                                            <div className="flex items-center justify-between mb-2">
                                                                 <span className="text-sm font-medium text-gray-700">
                                                                      {language === "ar"
                                                                           ? "التقدم الإجمالي"
                                                                           : "Overall Progress"}
                                                                 </span>
                                                                 <span className="text-sm font-bold text-[#22ae4b]">
                                                                      {goal.progress.toFixed(1)}%
                                                                 </span>
                                                            </div>
                                                            <div className="w-full bg-gray-200 rounded-full h-3">
                                                                 <div
                                                                      className="h-3 rounded-full bg-[#22ae4b] transition-all duration-500"
                                                                      style={{
                                                                           width: `${Math.min(
                                                                                goal.progress,
                                                                                100
                                                                           )}%`,
                                                                      }}
                                                                 />
                                                            </div>
                                                       </div>

                                                       {/* Milestones */}
                                                       {goal.milestones.length > 0 && (
                                                            <div className="mb-6">
                                                                 <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                                      <Flag className="w-4 h-4 text-[#22ae4b]" />
                                                                      {language === "ar"
                                                                           ? "المعالم"
                                                                           : "Milestones"}
                                                                 </h4>
                                                                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                                                      {goal.milestones.map(
                                                                           (milestone) => (
                                                                                <div
                                                                                     key={
                                                                                          milestone.id
                                                                                     }
                                                                                     className={`flex items-center gap-3 p-3 rounded-lg border ${
                                                                                          milestone.achieved
                                                                                               ? "bg-green-50 border-green-200"
                                                                                               : "bg-gray-50 border-gray-200"
                                                                                     }`}>
                                                                                     <div
                                                                                          className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                                                                               milestone.achieved
                                                                                                    ? "bg-green-500"
                                                                                                    : "bg-gray-300"
                                                                                          }`}>
                                                                                          {milestone.achieved ? (
                                                                                               <Check className="w-4 h-4 text-white" />
                                                                                          ) : (
                                                                                               <span className="text-white text-xs font-bold">
                                                                                                    {
                                                                                                         milestone.id
                                                                                                    }
                                                                                               </span>
                                                                                          )}
                                                                                     </div>
                                                                                     <div className="flex-1">
                                                                                          <div className="font-medium text-gray-900 text-sm">
                                                                                               {
                                                                                                    milestone.value
                                                                                               }
                                                                                               {
                                                                                                    goal.unit
                                                                                               }{" "}
                                                                                               -{" "}
                                                                                               {
                                                                                                    milestone.description
                                                                                               }
                                                                                          </div>
                                                                                          {milestone.achieved &&
                                                                                               milestone.achievedDate && (
                                                                                                    <div className="text-xs text-green-600">
                                                                                                         {language ===
                                                                                                         "ar"
                                                                                                              ? "تم في"
                                                                                                              : "Achieved on"}{" "}
                                                                                                         {new Date(
                                                                                                              milestone.achievedDate
                                                                                                         ).toLocaleDateString()}
                                                                                                    </div>
                                                                                               )}
                                                                                     </div>
                                                                                </div>
                                                                           )
                                                                      )}
                                                                 </div>
                                                            </div>
                                                       )}

                                                       {/* Recent Progress */}
                                                       <div>
                                                            <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                                                                 <Activity className="w-4 h-4 text-[#22ae4b]" />
                                                                 {language === "ar"
                                                                      ? "التقدم الأخير"
                                                                      : "Recent Progress"}
                                                            </h4>
                                                            <div className="space-y-2">
                                                                 {recentProgress.map((entry) => (
                                                                      <div
                                                                           key={entry.id}
                                                                           className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                                                           <div className="flex items-center gap-3">
                                                                                <div className="w-8 h-8 bg-[#22ae4b] rounded-full flex items-center justify-center">
                                                                                     <span className="text-white font-bold text-sm">
                                                                                          {
                                                                                               entry.value
                                                                                          }
                                                                                     </span>
                                                                                </div>
                                                                                <div>
                                                                                     <div className="font-medium text-gray-900 text-sm">
                                                                                          {
                                                                                               entry.value
                                                                                          }
                                                                                          {
                                                                                               goal.unit
                                                                                          }
                                                                                     </div>
                                                                                     {entry.note && (
                                                                                          <div className="text-xs text-gray-600">
                                                                                               {
                                                                                                    entry.note
                                                                                               }
                                                                                          </div>
                                                                                     )}
                                                                                </div>
                                                                           </div>
                                                                           <div className="text-xs text-gray-500">
                                                                                {new Date(
                                                                                     entry.date
                                                                                ).toLocaleDateString()}
                                                                           </div>
                                                                      </div>
                                                                 ))}
                                                            </div>

                                                            <Button
                                                                 onClick={() => {
                                                                      setSelectedGoal(goal);
                                                                      setShowProgressModal(true);
                                                                 }}
                                                                 className="w-full mt-4 bg-[#22ae4b] hover:bg-[#1c9a40] text-white">
                                                                 <Plus className="w-4 h-4 mr-2" />
                                                                 {language === "ar"
                                                                      ? "إضافة تقدم جديد"
                                                                      : "Add New Progress"}
                                                            </Button>
                                                       </div>
                                                  </CardContent>
                                             </Card>
                                        );
                                   })}

                                   {userGoals.length === 0 && (
                                        <Card className="text-center py-12">
                                             <CardContent>
                                                  <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                                  <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                                       {language === "ar"
                                                            ? "لا توجد أهداف بعد"
                                                            : "No Goals Yet"}
                                                  </h3>
                                                  <p className="text-gray-500 mb-6">
                                                       {language === "ar"
                                                            ? "ابدأ بإضافة هدفك الأول"
                                                            : "Start by adding your first goal"}
                                                  </p>
                                                  <Button
                                                       onClick={() => setShowAddGoalModal(true)}
                                                       className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white">
                                                       <Plus className="w-4 h-4 mr-2" />
                                                       {language === "ar"
                                                            ? "إضافة هدف"
                                                            : "Add Goal"}
                                                  </Button>
                                             </CardContent>
                                        </Card>
                                   )}
                              </div>
                         </div>

                         {/* Right Sidebar */}
                         <div className="lg:col-span-4">
                              <div className="sticky top-24 space-y-6">
                                   {/* Quick Actions */}
                                   <Card>
                                        <CardContent className="p-6">
                                             <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                  {language === "ar"
                                                       ? "إجراءات سريعة"
                                                       : "Quick Actions"}
                                             </h3>
                                             <div className="space-y-3">
                                                  <Button
                                                       onClick={() => setShowAddGoalModal(true)}
                                                       className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white justify-start">
                                                       <Plus className="w-4 h-4 mr-2" />
                                                       {language === "ar"
                                                            ? "إضافة هدف جديد"
                                                            : "Add New Goal"}
                                                  </Button>
                                                  <Button
                                                       variant="outline"
                                                       className="w-full justify-start"
                                                       onClick={() => {
                                                            if (userGoals.length > 0) {
                                                                 setSelectedGoal(userGoals[0]);
                                                                 setShowProgressModal(true);
                                                            }
                                                       }}>
                                                       <RefreshCw className="w-4 h-4 mr-2" />
                                                       {language === "ar"
                                                            ? "تحديث التقدم"
                                                            : "Update Progress"}
                                                  </Button>
                                                  <Link to={getLocalizedPath("/planner")}>
                                                       <Button
                                                            variant="outline"
                                                            className="w-full justify-start">
                                                            <Calendar className="w-4 h-4 mr-2" />
                                                            {language === "ar"
                                                                 ? "مخطط الوجبات"
                                                                 : "Meal Planner"}
                                                       </Button>
                                                  </Link>
                                             </div>
                                        </CardContent>
                                   </Card>

                                   {/* Progress Summary */}
                                   <Card>
                                        <CardContent className="p-6">
                                             <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                  {language === "ar"
                                                       ? "ملخص التقدم"
                                                       : "Progress Summary"}
                                             </h3>
                                             <div className="space-y-4">
                                                  <div className="flex justify-between items-center">
                                                       <span className="text-gray-600">
                                                            {language === "ar"
                                                                 ? "الأهداف النشطة"
                                                                 : "Active Goals"}
                                                       </span>
                                                       <span className="font-semibold text-[#22ae4b]">
                                                            {activeGoals}
                                                       </span>
                                                  </div>
                                                  <div className="flex justify-between items-center">
                                                       <span className="text-gray-600">
                                                            {language === "ar"
                                                                 ? "متوسط التقدم"
                                                                 : "Average Progress"}
                                                       </span>
                                                       <span className="font-semibold text-gray-900">
                                                            {averageProgress}%
                                                       </span>
                                                  </div>
                                                  <div className="flex justify-between items-center">
                                                       <span className="text-gray-600">
                                                            {language === "ar"
                                                                 ? "المعالم المحققة"
                                                                 : "Milestones Achieved"}
                                                       </span>
                                                       <span className="font-semibold text-purple-600">
                                                            {achievedMilestones}/{totalMilestones}
                                                       </span>
                                                  </div>
                                                  <Separator />
                                                  <div className="flex justify-between items-center">
                                                       <span className="text-gray-600">
                                                            {language === "ar"
                                                                 ? "الأهداف المكتملة"
                                                                 : "Completed Goals"}
                                                       </span>
                                                       <span className="font-semibold text-green-600">
                                                            {completedGoals}
                                                       </span>
                                                  </div>
                                             </div>
                                        </CardContent>
                                   </Card>

                                   {/* Tips */}
                                   <Card>
                                        <CardContent className="p-6">
                                             <h3 className="text-lg font-bold text-gray-900 mb-4">
                                                  {language === "ar"
                                                       ? "نصائح الأهداف"
                                                       : "Goal Tips"}
                                             </h3>
                                             <div className="space-y-3 text-sm text-gray-600">
                                                  <div className="flex items-start gap-2">
                                                       <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                                                       <p>
                                                            {language === "ar"
                                                                 ? "حدث تقدمك بانتظام للحصول على أفضل النتائج"
                                                                 : "Update your progress regularly for best results"}
                                                       </p>
                                                  </div>
                                                  <div className="flex items-start gap-2">
                                                       <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                                                       <p>
                                                            {language === "ar"
                                                                 ? "ضع أهدافاً واقعية وقابلة للتحقيق"
                                                                 : "Set realistic and achievable goals"}
                                                       </p>
                                                  </div>
                                                  <div className="flex items-start gap-2">
                                                       <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                                                       <p>
                                                            {language === "ar"
                                                                 ? "احتفل بالمعالم الصغيرة في طريقك"
                                                                 : "Celebrate small milestones along the way"}
                                                       </p>
                                                  </div>
                                                  <div className="flex items-start gap-2">
                                                       <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                                                       <p>
                                                            {language === "ar"
                                                                 ? "استخدم الملاحظات لتتبع ما يعمل"
                                                                 : "Use notes to track what works"}
                                                       </p>
                                                  </div>
                                             </div>
                                        </CardContent>
                                   </Card>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Modals */}
               <ProgressModal />
               <EditGoalModal />
               <AddGoalModal />

               <AdSection />
          </div>
     );
};
