import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../contexts/LanguageContext";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Badge } from "../../components/ui/badge";
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
  ArrowRight,
  ArrowLeft,
  Check,
  ChefHat,
  Award,
  Users
} from "lucide-react";

interface UserGoal {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  category: 'weight' | 'health' | 'fitness' | 'lifestyle';
}

interface UserProfile {
  age: string;
  gender: string;
  height: string;
  weight: string;
  activityLevel: string;
  dietaryRestrictions: string[];
  allergies: string[];
}

export const GoalsSetup = (): JSX.Element => {
  const { t, isRTL, language } = useLanguage();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [userProfile, setUserProfile] = useState<UserProfile>({
    age: '',
    gender: '',
    height: '',
    weight: '',
    activityLevel: '',
    dietaryRestrictions: [],
    allergies: []
  });
  const [isLoading, setIsLoading] = useState(false);

  const goals: UserGoal[] = [
    {
      id: 'lose-weight',
      title: 'Lose Weight',
      titleAr: 'فقدان الوزن',
      description: 'Get personalized low-calorie recipes and meal plans',
      descriptionAr: 'احصل على وصفات منخفضة السعرات وخطط وجبات مخصصة',
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-50 border-red-200',
      category: 'weight'
    },
    {
      id: 'gain-weight',
      title: 'Gain Weight',
      titleAr: 'زيادة الوزن',
      description: 'High-calorie, nutritious recipes for healthy weight gain',
      descriptionAr: 'وصفات عالية السعرات ومغذية لزيادة الوزن الصحي',
      icon: TrendingUp,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-200',
      category: 'weight'
    },
    {
      id: 'maintain-weight',
      title: 'Maintain Weight',
      titleAr: 'الحفاظ على الوزن',
      description: 'Balanced recipes to maintain your current weight',
      descriptionAr: 'وصفات متوازنة للحفاظ على وزنك الحالي',
      icon: Scale,
      color: 'text-green-600',
      bgColor: 'bg-green-50 border-green-200',
      category: 'weight'
    },
    {
      id: 'build-muscle',
      title: 'Build Muscle',
      titleAr: 'بناء العضلات',
      description: 'High-protein recipes to support muscle growth',
      descriptionAr: 'وصفات عالية البروتين لدعم نمو العضلات',
      icon: Dumbbell,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 border-purple-200',
      category: 'fitness'
    },
    {
      id: 'improve-health',
      title: 'Improve Overall Health',
      titleAr: 'تحسين الصحة العامة',
      description: 'Nutrient-rich recipes for better health and wellness',
      descriptionAr: 'وصفات غنية بالعناصر الغذائية لصحة أفضل',
      icon: Heart,
      color: 'text-pink-600',
      bgColor: 'bg-pink-50 border-pink-200',
      category: 'health'
    },
    {
      id: 'increase-energy',
      title: 'Increase Energy',
      titleAr: 'زيادة الطاقة',
      description: 'Energy-boosting recipes for an active lifestyle',
      descriptionAr: 'وصفات معززة للطاقة لنمط حياة نشط',
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50 border-yellow-200',
      category: 'health'
    },
    {
      id: 'better-digestion',
      title: 'Better Digestion',
      titleAr: 'تحسين الهضم',
      description: 'Gut-friendly recipes for digestive health',
      descriptionAr: 'وصفات صديقة للمعدة لصحة الجهاز الهضمي',
      icon: Apple,
      color: 'text-green-600',
      bgColor: 'bg-green-50 border-green-200',
      category: 'health'
    },
    {
      id: 'save-time',
      title: 'Save Time Cooking',
      titleAr: 'توفير وقت الطبخ',
      description: 'Quick and easy recipes for busy schedules',
      descriptionAr: 'وصفات سريعة وسهلة للجداول المزدحمة',
      icon: Clock,
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-200',
      category: 'lifestyle'
    },
    {
      id: 'learn-cooking',
      title: 'Learn New Cooking Skills',
      titleAr: 'تعلم مهارات طبخ جديدة',
      description: 'Step-by-step recipes to improve your cooking',
      descriptionAr: 'وصفات مفصلة خطوة بخطوة لتحسين طبخك',
      icon: ChefHat,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 border-orange-200',
      category: 'lifestyle'
    }
  ];

  const activityLevels = [
    { value: 'sedentary', label: language === 'ar' ? 'قليل الحركة' : 'Sedentary', description: language === 'ar' ? 'مكتبي، قليل التمرين' : 'Desk job, little exercise' },
    { value: 'light', label: language === 'ar' ? 'نشاط خفيف' : 'Lightly Active', description: language === 'ar' ? 'تمرين خفيف 1-3 أيام/أسبوع' : 'Light exercise 1-3 days/week' },
    { value: 'moderate', label: language === 'ar' ? 'نشاط متوسط' : 'Moderately Active', description: language === 'ar' ? 'تمرين متوسط 3-5 أيام/أسبوع' : 'Moderate exercise 3-5 days/week' },
    { value: 'very', label: language === 'ar' ? 'نشاط عالي' : 'Very Active', description: language === 'ar' ? 'تمرين شاق 6-7 أيام/أسبوع' : 'Hard exercise 6-7 days/week' },
    { value: 'extra', label: language === 'ar' ? 'نشاط مكثف' : 'Extra Active', description: language === 'ar' ? 'تمرين مكثف يومياً' : 'Very hard exercise daily' }
  ];

  const dietaryOptions = [
    { value: 'vegetarian', label: language === 'ar' ? 'نباتي' : 'Vegetarian' },
    { value: 'vegan', label: language === 'ar' ? 'نباتي صرف' : 'Vegan' },
    { value: 'keto', label: language === 'ar' ? 'كيتو' : 'Keto' },
    { value: 'paleo', label: language === 'ar' ? 'باليو' : 'Paleo' },
    { value: 'mediterranean', label: language === 'ar' ? 'متوسطي' : 'Mediterranean' },
    { value: 'low-carb', label: language === 'ar' ? 'قليل الكربوهيدرات' : 'Low Carb' },
    { value: 'gluten-free', label: language === 'ar' ? 'خالي من الجلوتين' : 'Gluten Free' },
    { value: 'dairy-free', label: language === 'ar' ? 'خالي من الألبان' : 'Dairy Free' }
  ];

  const allergyOptions = [
    { value: 'nuts', label: language === 'ar' ? 'المكسرات' : 'Nuts' },
    { value: 'shellfish', label: language === 'ar' ? 'المحار' : 'Shellfish' },
    { value: 'eggs', label: language === 'ar' ? 'البيض' : 'Eggs' },
    { value: 'soy', label: language === 'ar' ? 'الصويا' : 'Soy' },
    { value: 'fish', label: language === 'ar' ? 'السمك' : 'Fish' },
    { value: 'wheat', label: language === 'ar' ? 'القمح' : 'Wheat' },
    { value: 'milk', label: language === 'ar' ? 'الحليب' : 'Milk' },
    { value: 'sesame', label: language === 'ar' ? 'السمسم' : 'Sesame' }
  ];

  const toggleGoal = (goalId: string) => {
    setSelectedGoals(prev => 
      prev.includes(goalId) 
        ? prev.filter(id => id !== goalId)
        : [...prev, goalId]
    );
  };

  const toggleDietaryRestriction = (restriction: string) => {
    setUserProfile(prev => ({
      ...prev,
      dietaryRestrictions: prev.dietaryRestrictions.includes(restriction)
        ? prev.dietaryRestrictions.filter(r => r !== restriction)
        : [...prev.dietaryRestrictions, restriction]
    }));
  };

  const toggleAllergy = (allergy: string) => {
    setUserProfile(prev => ({
      ...prev,
      allergies: prev.allergies.includes(allergy)
        ? prev.allergies.filter(a => a !== allergy)
        : [...prev.allergies, allergy]
    }));
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleComplete = async () => {
    setIsLoading(true);
    
    // Simulate saving user goals and profile
    setTimeout(() => {
      console.log('User goals and profile:', { selectedGoals, userProfile });
      setIsLoading(false);
      // Redirect to home with personalized experience
      window.location.href = '/';
    }, 2000);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedGoals.length > 0;
      case 2: return userProfile.age && userProfile.gender && userProfile.height && userProfile.weight;
      case 3: return userProfile.activityLevel;
      case 4: return true; // Optional step
      default: return false;
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
            step <= currentStep 
              ? 'bg-[#22ae4b] text-white' 
              : 'bg-gray-200 text-gray-500'
          }`}>
            {step < currentStep ? <Check className="w-5 h-5" /> : step}
          </div>
          {step < 4 && (
            <div className={`w-12 h-1 mx-2 ${
              step < currentStep ? 'bg-[#22ae4b]' : 'bg-gray-200'
            }`} />
          )}
        </div>
      ))}
    </div>
  );

  const Step1Goals = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Target className="w-16 h-16 text-[#22ae4b] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {language === 'ar' ? 'ما هي أهدافك؟' : 'What are your goals?'}
        </h2>
        <p className="text-gray-600">
          {language === 'ar' 
            ? 'اختر هدفاً أو أكثر لنخصص تجربتك' 
            : 'Select one or more goals to personalize your experience'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {goals.map((goal) => (
          <Card
            key={goal.id}
            className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
              selectedGoals.includes(goal.id)
                ? `${goal.bgColor} border-2 scale-105`
                : 'bg-white border-2 border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => toggleGoal(goal.id)}
          >
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  selectedGoals.includes(goal.id) ? 'bg-white' : goal.bgColor
                }`}>
                  <goal.icon className={`w-6 h-6 ${goal.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900 mb-1">
                    {language === 'ar' ? goal.titleAr : goal.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {language === 'ar' ? goal.descriptionAr : goal.description}
                  </p>
                </div>
                {selectedGoals.includes(goal.id) && (
                  <div className="w-6 h-6 bg-[#22ae4b] rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center text-sm text-gray-500">
        {language === 'ar' 
          ? `تم اختيار ${selectedGoals.length} من ${goals.length} أهداف` 
          : `${selectedGoals.length} of ${goals.length} goals selected`
        }
      </div>
    </div>
  );

  const Step2Profile = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Users className="w-16 h-16 text-[#22ae4b] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {language === 'ar' ? 'أخبرنا عن نفسك' : 'Tell us about yourself'}
        </h2>
        <p className="text-gray-600">
          {language === 'ar' 
            ? 'هذه المعلومات ستساعدنا في تخصيص التوصيات لك' 
            : 'This information helps us personalize recommendations for you'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'العمر' : 'Age'}
          </label>
          <Input
            type="number"
            value={userProfile.age}
            onChange={(e) => setUserProfile(prev => ({ ...prev, age: e.target.value }))}
            placeholder={language === 'ar' ? 'عمرك بالسنوات' : 'Your age in years'}
            className={`h-12 ${isRTL ? 'text-right' : 'text-left'} border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
            min="13"
            max="120"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'الجنس' : 'Gender'}
          </label>
          <select
            value={userProfile.gender}
            onChange={(e) => setUserProfile(prev => ({ ...prev, gender: e.target.value }))}
            className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] bg-white"
          >
            <option value="">{language === 'ar' ? 'اختر الجنس' : 'Select gender'}</option>
            <option value="male">{language === 'ar' ? 'ذكر' : 'Male'}</option>
            <option value="female">{language === 'ar' ? 'أنثى' : 'Female'}</option>
            <option value="other">{language === 'ar' ? 'آخر' : 'Other'}</option>
            <option value="prefer-not-to-say">{language === 'ar' ? 'أفضل عدم الإفصاح' : 'Prefer not to say'}</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'الطول (سم)' : 'Height (cm)'}
          </label>
          <Input
            type="number"
            value={userProfile.height}
            onChange={(e) => setUserProfile(prev => ({ ...prev, height: e.target.value }))}
            placeholder={language === 'ar' ? 'طولك بالسنتيمتر' : 'Your height in cm'}
            className={`h-12 ${isRTL ? 'text-right' : 'text-left'} border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
            min="100"
            max="250"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {language === 'ar' ? 'الوزن (كجم)' : 'Weight (kg)'}
          </label>
          <Input
            type="number"
            value={userProfile.weight}
            onChange={(e) => setUserProfile(prev => ({ ...prev, weight: e.target.value }))}
            placeholder={language === 'ar' ? 'وزنك بالكيلوجرام' : 'Your weight in kg'}
            className={`h-12 ${isRTL ? 'text-right' : 'text-left'} border-gray-300 focus:border-[#22ae4b] focus:ring-[#22ae4b]`}
            min="30"
            max="300"
          />
        </div>
      </div>

      {/* BMI Calculation */}
      {userProfile.height && userProfile.weight && (
        <Card className="bg-[#22ae4b] text-white">
          <CardContent className="p-6 text-center">
            <h3 className="font-bold text-lg mb-2">
              {language === 'ar' ? 'مؤشر كتلة الجسم' : 'Body Mass Index (BMI)'}
            </h3>
            <div className="text-3xl font-bold mb-2">
              {(parseFloat(userProfile.weight) / Math.pow(parseFloat(userProfile.height) / 100, 2)).toFixed(1)}
            </div>
            <p className="text-white/90 text-sm">
              {language === 'ar' 
                ? 'سنستخدم هذا لتخصيص توصياتك الغذائية' 
                : "We'll use this to personalize your nutrition recommendations"
              }
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );

  const Step3Activity = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <Activity className="w-16 h-16 text-[#22ae4b] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {language === 'ar' ? 'ما هو مستوى نشاطك؟' : 'What\'s your activity level?'}
        </h2>
        <p className="text-gray-600">
          {language === 'ar' 
            ? 'هذا يساعدنا في حساب احتياجاتك من السعرات الحرارية' 
            : 'This helps us calculate your calorie needs'
          }
        </p>
      </div>

      <div className="space-y-4">
        {activityLevels.map((level) => (
          <Card
            key={level.value}
            className={`cursor-pointer transition-all duration-300 hover:shadow-md ${
              userProfile.activityLevel === level.value
                ? 'bg-green-50 border-2 border-[#22ae4b]'
                : 'bg-white border-2 border-gray-200 hover:border-gray-300'
            }`}
            onClick={() => setUserProfile(prev => ({ ...prev, activityLevel: level.value }))}
          >
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  userProfile.activityLevel === level.value
                    ? 'border-[#22ae4b] bg-[#22ae4b]'
                    : 'border-gray-300'
                }`}>
                  {userProfile.activityLevel === level.value && (
                    <div className="w-3 h-3 bg-white rounded-full" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{level.label}</h3>
                  <p className="text-gray-600 text-sm">{level.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );

  const Step4Preferences = () => (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Apple className="w-16 h-16 text-[#22ae4b] mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          {language === 'ar' ? 'التفضيلات الغذائية' : 'Dietary Preferences'}
        </h2>
        <p className="text-gray-600">
          {language === 'ar' 
            ? 'اختياري: أخبرنا عن قيودك الغذائية والحساسية' 
            : 'Optional: Tell us about your dietary restrictions and allergies'
          }
        </p>
      </div>

      {/* Dietary Restrictions */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {language === 'ar' ? 'القيود الغذائية' : 'Dietary Restrictions'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {dietaryOptions.map((option) => (
            <Button
              key={option.value}
              variant={userProfile.dietaryRestrictions.includes(option.value) ? "default" : "outline"}
              className={`h-12 ${
                userProfile.dietaryRestrictions.includes(option.value)
                  ? 'bg-[#22ae4b] hover:bg-[#1c9a40] text-white'
                  : 'border-gray-200 hover:border-[#22ae4b] hover:text-[#22ae4b]'
              }`}
              onClick={() => toggleDietaryRestriction(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Allergies */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-4">
          {language === 'ar' ? 'الحساسية الغذائية' : 'Food Allergies'}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {allergyOptions.map((option) => (
            <Button
              key={option.value}
              variant={userProfile.allergies.includes(option.value) ? "default" : "outline"}
              className={`h-12 ${
                userProfile.allergies.includes(option.value)
                  ? 'bg-red-500 hover:bg-red-600 text-white'
                  : 'border-gray-200 hover:border-red-500 hover:text-red-500'
              }`}
              onClick={() => toggleAllergy(option.value)}
            >
              {option.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Summary */}
      {(userProfile.dietaryRestrictions.length > 0 || userProfile.allergies.length > 0) && (
        <Card className="bg-gray-50">
          <CardContent className="p-6">
            <h4 className="font-bold text-gray-900 mb-3">
              {language === 'ar' ? 'ملخص تفضيلاتك' : 'Your Preferences Summary'}
            </h4>
            {userProfile.dietaryRestrictions.length > 0 && (
              <div className="mb-3">
                <span className="text-sm font-medium text-gray-700">
                  {language === 'ar' ? 'القيود الغذائية: ' : 'Dietary Restrictions: '}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {userProfile.dietaryRestrictions.map((restriction) => (
                    <Badge key={restriction} className="bg-[#22ae4b] text-white">
                      {dietaryOptions.find(opt => opt.value === restriction)?.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
            {userProfile.allergies.length > 0 && (
              <div>
                <span className="text-sm font-medium text-gray-700">
                  {language === 'ar' ? 'الحساسية: ' : 'Allergies: '}
                </span>
                <div className="flex flex-wrap gap-2 mt-1">
                  {userProfile.allergies.map((allergy) => (
                    <Badge key={allergy} className="bg-red-500 text-white">
                      {allergyOptions.find(opt => opt.value === allergy)?.label}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="bg-[#22ae4b] text-white font-bold text-2xl px-6 py-3 rounded-xl inline-block mb-6">
            EEINA
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {language === 'ar' ? 'إعداد ملفك الشخصي' : 'Set Up Your Profile'}
          </h1>
          <p className="text-gray-600">
            {language === 'ar' 
              ? 'خطوات قليلة لتخصيص تجربتك المثالية' 
              : 'A few steps to customize your perfect experience'
            }
          </p>
        </div>

        <StepIndicator />

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            {currentStep === 1 && <Step1Goals />}
            {currentStep === 2 && <Step2Profile />}
            {currentStep === 3 && <Step3Activity />}
            {currentStep === 4 && <Step4Preferences />}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-4">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="flex items-center gap-2"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    {language === 'ar' ? 'السابق' : 'Back'}
                  </Button>
                )}
                
                <Link to="/login">
                  <Button variant="ghost" className="text-gray-600">
                    {language === 'ar' ? 'تخطي الآن' : 'Skip for now'}
                  </Button>
                </Link>
              </div>

              <div className="flex items-center gap-4">
                <div className="text-sm text-gray-500">
                  {language === 'ar' ? `الخطوة ${currentStep} من 4` : `Step ${currentStep} of 4`}
                </div>
                
                {currentStep < 4 ? (
                  <Button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {language === 'ar' ? 'التالي' : 'Next'}
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleComplete}
                    disabled={isLoading}
                    className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white flex items-center gap-2"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{language === 'ar' ? 'جاري الحفظ...' : 'Saving...'}</span>
                      </>
                    ) : (
                      <>
                        <span>{language === 'ar' ? 'إنهاء الإعداد' : 'Complete Setup'}</span>
                        <Check className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Summary */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            {language === 'ar' 
              ? 'يمكنك تغيير هذه الإعدادات لاحقاً من إعدادات الحساب' 
              : 'You can change these settings later in your account preferences'
            }
          </p>
        </div>
      </div>
    </div>
  );
};