// Translation system for English and Arabic
export interface Translation {
     // Navigation
     nav: {
          home: string;
          explore: string;
          saved: string;
          planner: string;
          lists: string;
          profile: string;
          search_placeholder: string;
     };

     // Common
     common: {
          loading: string;
          save: string;
          cancel: string;
          delete: string;
          edit: string;
          add: string;
          remove: string;
          view_all: string;
          back: string;
          next: string;
          previous: string;
          close: string;
          confirm: string;
          yes: string;
          no: string;
            Follow: string;
          Following: string;
     };

     // Home page
     home: {
          title: string;
          subtitle: string;
          trending_recipes: string;
          popular_this_week: string;
          recent_activity: string;
          top_creators: string;
          quick_actions: string;
          create_recipe: string;
          meal_planner: string;
          shopping_list: string;
          import_recipe: string;
          trending_now: string;
          premium_recipes: string;
          upgrade_now: string;
          Paste_recipe_URL:string;
     };

     // Recipe details
     recipe: {
          cooking_time: string;
          cuisine: string;
          serves: string;
          difficulty: string;
          beginner: string;
          intermediate: string;
          advanced: string;
          ingredients: string;
          instructions: string;
          servings: string;
          add_to_list: string;
          nutritional_info: string;
          calories: string;
          protein: string;
          carbs: string;
          fat: string;
          comments: string;
          leave_comment: string;
          mark_complete: string;
          view_all_ingredients: string;
          View_Recipe: string;
     };

     // Profile
     profile: {
          edit_profile: string;
          account_settings: string;
          posts: string;
          followers: string;
          following: string;
          recipes_created: string;
          latest_activity: string;
          add_new_recipe: string;
          quick_actions: string;
          manage_followers: string;
          no_activity: string;
          no_recipes: string;
          create_first_recipe: string;
          view_profile:string;
          food_enthusiast:string;
          premium:string;
          member_since:string;
          recipes:string;
          likes:string;
          show_less:string;
          showing_posts:string;
          add_comment:string;
          post:string;
          import_recipe:string;
          enter_recipe_url:string;
          account_type:string;
          verification:string;
          verified:string;
          profile_completion:string;
          show_more_creators:string;
     };

     // Create Recipe
     create_recipe: {
          title: string;
          create_new_recipe: string;
          recipe_title: string;
          ingredient_name: string;
          preparation_time: string;
          servings: string;
          video_url: string;
          description: string;
          thumbnail_image: string;
          additional_images: string;
          add_ingredients: string;
          instructions: string;
          quantity: string;
          weight: string;
          step: string;
          add_step: string;
          create_recipe: string;
          import_new_recipe: string;
          recipe_tips: string;
          click_to_upload: string;
          add_image: string;
          crop_image: string;
           crop_perfect:string;
          StepImage:string;
          Add_Step_Image:string;
           Import_new_recipe:string;
          recipe_url:string;
           ImportRecipe:string;
           tips_1:string;
           tips_2:string,
           tips_3:string,
           tips_4:string,
           tips_5:string,
           ad_title:string,
           ad_subtitle:string,
     };

     // Meal Planner
     meal_planner: {
          title: string;
          plan_meals: string;
          daily_nutrition: string;
          weekly_summary: string;
          breakfast: string;
          lunch: string;
          dinner: string;
          snack: string;
          add_custom_meal: string;
          trending_recipes: string;
          saved_recipes: string;
          search_recipes: string;
          nutrition_goals: string;
          avg_daily_calories: string;
          days_on_track: string;
          meals_planned: string;
     };

     // Shopping List
     shopping_list: {
          title: string;
          shopping_progress: string;
          items_completed: string;
          quick_add: string;
          add_item: string;
          shopping_stats: string;
          total_items: string;
          completed: string;
          remaining: string;
          progress: string;
          categories: string;
          share_list: string;
          export_list: string;
          clear_completed: string;
     };

     // Explore
     explore: {
          title: string;
          discover_recipes: string;
          featured_categories: string;
          search_recipes: string;
          category: string;
          cuisine: string;
          difficulty: string;
          showing_results: string;
          no_recipes_found: string;
          adjust_filters: string;
     };

     // Saved Recipes
     saved: {
          title: string;
          your_collection: string;
          recipes_saved: string;
          search_saved: string;
          no_saved_recipes: string;
          start_saving: string;
     };

     // Account Settings
     settings: {
          title: string;
          account: string;
          privacy: string;
          notifications: string;
          data_storage: string;
          change_password: string;
          email_settings: string;
          two_factor_auth: string;
          profile_visibility: string;
          push_notifications: string;
          email_notifications: string;
          marketing_communications: string;
          download_data: string;
          import_recipes: string;
          delete_account: string;
          danger_zone: string;
     };

     // Footer
     footer: {
          company: string;
          help: string;
          newsletter: string;
          about: string;
          features: string;
          works: string;
          career: string;
          customer_support: string;
          delivery_details: string;
          terms_conditions: string;
          privacy_policy: string;
          enter_email: string;
          subscribe_now: string;
          copyright: string;
          discover_description: string;
     };

     // Authentication
     auth: {
          login: string;
          signup: string;
          email: string;
          password: string;
          confirm_password: string;
          first_name: string;
          last_name: string;
          remember_me: string;
          forgot_password: string;
          sign_in: string;
          create_account: string;
          already_have_account: string;
          dont_have_account: string;
          agree_to_terms: string;
          terms_of_service: string;
          privacy_policy: string;
          continue_with_google: string;
          continue_with_facebook: string;
          welcome_back: string;
          sign_in_to_continue: string;
          join_community: string;
          start_journey: string;
          creating_account: string;
          signing_in: string;
     };

     // Goals Setup
     goals: {
          setup_title: string;
          what_are_goals: string;
          select_goals: string;
          tell_about_yourself: string;
          personalize_recommendations: string;
          activity_level: string;
          calculate_calories: string;
          dietary_preferences: string;
          restrictions_allergies: string;
          age: string;
          gender: string;
          height: string;
          weight: string;
          bmi: string;
          step_of: string;
          next: string;
          back: string;
          complete_setup: string;
          skip_for_now: string;
          saving: string;
          goals_selected: string;
          change_later: string;
          lose_weight: string;
          gain_weight: string;
          maintain_weight: string;
          build_muscle: string;
          improve_health: string;
          increase_energy: string;
          better_digestion: string;
          save_time: string;
          learn_cooking: string;
          dietary_restrictions: string;
          food_allergies: string;
          preferences_summary: string;
     };
}

export const translations: Record<"en" | "ar", Translation> = {
     en: {
          nav: {
               home: "Home",
               explore: "Explore",
               saved: "Saved",
               planner: "Planner",
               lists: "Lists",
               profile: "Profile",
               search_placeholder: "Search for recipes...",
          },
          common: {
               loading: "Loading...",
               save: "Save",
               cancel: "Cancel",
               delete: "Delete",
               edit: "Edit",
               add: "Add",
               remove: "Remove",
               view_all: "View All",
               back: "Back",
               next: "Next",
               previous: "Previous",
               close: "Close",
               confirm: "Confirm",
               yes: "Yes",
               no: "No",
                 Follow:"Follow",
               Following:"Following",
          },
          home: {
               title: "EEINA Food",
               subtitle: "Discover amazing recipes and plan your meals",
               trending_recipes: "Trending Recipes",
               popular_this_week: "Popular This Week",
               recent_activity: "Recent Activity",
               top_creators: "Top Creators",
               quick_actions: "Quick Actions",
               create_recipe: "Create Recipe",
               meal_planner: "Meal Planner",
               shopping_list: "Shopping List",
               import_recipe: "Import Recipe",
               trending_now: "Trending Now",
               premium_recipes: "Premium Recipes",
               upgrade_now: "Upgrade Now",
               Paste_recipe_URL:"Paste_recipe_URL",
          },
          recipe: {
               cooking_time: "Cooking Time",
               cuisine: "Cuisine",
               serves: "Serves",
               difficulty: "Difficulty",
               beginner: "Beginner",
               intermediate: "Intermediate",
               advanced: "Advanced",
               ingredients: "Ingredients",
               instructions: "Instructions",
               servings: "Servings",
               add_to_list: "Add to list",
               nutritional_info: "Nutritional Information",
               calories: "Calories",
               protein: "Protein",
               carbs: "Carbs",
               fat: "Fat",
               comments: "Recipe Comments",
               leave_comment: "Leave a Comment",
               mark_complete: "Mark as complete",
               view_all_ingredients: "View all ingredients",
               View_Recipe:"View Recipe"
          },
          profile: {
               edit_profile: "Edit Profile",
               account_settings: "Account Settings",
               posts: "Posts",
               followers: "Followers",
               following: "Following",
               recipes_created: "Recipes Created",
               latest_activity: "Latest Activity",
               add_new_recipe: "Add new recipe",
               quick_actions: "Quick Actions",
               manage_followers: "Manage Followers",
               no_activity: "No activity yet",
               no_recipes: "No recipes created yet",
               create_first_recipe: "Create Your First Recipe",
               food_enthusiast: "Food enthusiast & home chef",
               recipes: "Recipes",
               likes: "Likes",
               view_profile: "View Profile",
               edit: "Edit",
               member_since: "Member since",
               account_type: "Account type",
               premium: "Premium",
               verified: "Verified",
               profile_completion: "Profile Completion",
               verification: "Verification",
               share_culinary: "Share your culinary creations with the community",
               enter_recipe_url: "Enter Recipe URL",
               import_recipe: "Import Recipe",
               showing_posts: "Show All",
               posts_count: "Posts",
               show_less: "Show Less",
               show_more_creators: "Show More Creators",
               post: "Post",
               add_comment: "Add a comment...",
               created: "Created",
               no_recipes_category: "No recipes found in",
               category: "category",
               create_recipe_see: "Create your first recipe to see it here",
          },
          create_recipe: {
               title: "Create Recipe",
               create_new_recipe: "Create new recipe",
               recipe_title: "Recipe Title",
               ingredient_name: "Ingredient Name",
               preparation_time: "Preparation Time",
               servings: "Servings",
               video_url: "Video Url",
               description: "Description",
               thumbnail_image: "Thumbnail Image",
               additional_images: "Additional Images",
               add_ingredients: "Add ingredients",
               instructions: "Instructions",
               quantity: "Quantity",
               weight: "Choose weight",
               step: "Step",
               add_step: "Add Step",
               create_recipe: "Create Recipe",
               import_new_recipe: "Import new recipe",
               recipe_tips: "Recipe Tips",
               click_to_upload: "Click to upload",
               add_image: "Add Image",
               crop_image: "Crop Image",
               crop_perfect:"Then crop to perfect size",
               StepImage:"Step Image (Optional)",
               Add_Step_Image:"Add Step Image",
                Import_new_recipe:"Import new recipe",
                recipe_url:" Import a recipe from a URL to automatically fill in the details",
                ImportRecipe:" Import Recipe",
                tips_1:"Use high-quality images to make your recipe more appealing",
                tips_2:"Be specific with measurements and cooking times",
                tips_3:"Include step-by-step photos for complex techniques",
                tips_4:"Add personal notes and variations to make it unique",
                tips_5:"Test your recipe multiple times before publishing",
                ad_title: "Your Brand Here",
                ad_subtitle: "Reach thousands of food enthusiasts"
          },
          meal_planner: {
               title: "Meal Planner",
               plan_meals: "Plan your meals and track your nutrition goals",
               daily_nutrition: "Daily Nutrition",
               weekly_summary: "Weekly Summary",
               breakfast: "Breakfast",
               lunch: "Lunch",
               dinner: "Dinner",
               snack: "Snack",
               add_custom_meal: "Add Custom Meal",
               trending_recipes: "Trending Recipes",
               saved_recipes: "Saved Recipes",
               search_recipes: "Search Recipes",
               nutrition_goals: "Nutrition Goals",
               avg_daily_calories: "Avg Daily Calories",
               days_on_track: "Days on Track",
               meals_planned: "Meals Planned",
          },
          shopping_list: {
               title: "Shopping List",
               shopping_progress: "Shopping Progress",
               items_completed: "items completed",
               quick_add: "Quick Add",
               add_item: "Add Item",
               shopping_stats: "Shopping Stats",
               total_items: "Total Items",
               completed: "Completed",
               remaining: "Remaining",
               progress: "Progress",
               categories: "Categories",
               share_list: "Share",
               export_list: "Export",
               clear_completed: "Clear Completed",
          },
          explore: {
               title: "Explore Recipes",
               discover_recipes: "Discover amazing recipes from around the world",
               featured_categories: "Featured Categories",
               search_recipes: "Search recipes...",
               category: "Category",
               cuisine: "Cuisine",
               difficulty: "Difficulty",
               showing_results: "Showing",
               no_recipes_found: "No recipes found",
               adjust_filters: "Try adjusting your search or filters",
          },
          saved: {
               title: "Saved Recipes",
               your_collection: "Your collection of favorite recipes",
               recipes_saved: "recipes saved",
               search_saved: "Search saved recipes...",
               no_saved_recipes: "No saved recipes",
               start_saving: "Start saving recipes to see them here",
               saved_date: "Saved",
               ago: "ago",
               servings: "servings",
          },
          settings: {
               title: "Settings",
               account: "Account",
               privacy: "Privacy",
               notifications: "Notifications",
               data_storage: "Data & Storage",
               change_password: "Change Password",
               email_settings: "Email Settings",
               two_factor_auth: "Two-Factor Authentication",
               profile_visibility: "Profile Visibility",
               push_notifications: "Push Notifications",
               email_notifications: "Email Notifications",
               marketing_communications: "Marketing Communications",
               download_data: "Download Data",
               import_recipes: "Import Recipes",
               delete_account: "Delete Account",
               danger_zone: "Danger Zone",
          },
          footer: {
               company: "COMPANY",
               help: "HELP",
               newsletter: "NEWSLETTER",
               about: "About",
               features: "Features",
               works: "Works",
               career: "Career",
               customer_support: "Customer Support",
               delivery_details: "Delivery Details",
               terms_conditions: "Terms & Conditions",
               privacy_policy: "Privacy Policy",
               enter_email: "Enter your email address",
               subscribe_now: "Subscribe Now",
               copyright: "© Copyright 2022, All Rights Reserved by Adam",
               discover_description:
                    "Discover both timeless classics and exciting new dishes with EEINA Food, where our users' top-rated recipe categories guide you to the best of every cuisine",
          },
          auth: {
               login: "Login",
               signup: "Sign Up",
               email: "Email Address",
               password: "Password",
               confirm_password: "Confirm Password",
               first_name: "First Name",
               last_name: "Last Name",
               remember_me: "Remember me",
               forgot_password: "Forgot password?",
               sign_in: "Sign In",
               create_account: "Create Account",
               already_have_account: "Already have an account?",
               dont_have_account: "Don't have an account?",
               agree_to_terms: "I agree to the Terms of Service and Privacy Policy",
               terms_of_service: "Terms of Service",
               privacy_policy: "Privacy Policy",
               continue_with_google: "Continue with Google",
               continue_with_facebook: "Continue with Facebook",
               welcome_back: "Welcome Back",
               sign_in_to_continue: "Sign in to continue",
               join_community: "Join our food community",
               start_journey: "Start your culinary journey with us",
               creating_account: "Creating account...",
               signing_in: "Signing in...",
          },
          goals: {
               setup_title: "Set Up Your Profile",
               what_are_goals: "What are your goals?",
               select_goals: "Select one or more goals to personalize your experience",
               tell_about_yourself: "Tell us about yourself",
               personalize_recommendations:
                    "This information helps us personalize recommendations for you",
               activity_level: "What's your activity level?",
               calculate_calories: "This helps us calculate your calorie needs",
               dietary_preferences: "Dietary Preferences",
               restrictions_allergies:
                    "Optional: Tell us about your dietary restrictions and allergies",
               age: "Age",
               gender: "Gender",
               height: "Height (cm)",
               weight: "Weight (kg)",
               bmi: "Body Mass Index (BMI)",
               step_of: "Step {current} of {total}",
               next: "Next",
               back: "Back",
               complete_setup: "Complete Setup",
               skip_for_now: "Skip for now",
               saving: "Saving...",
               goals_selected: "{count} of {total} goals selected",
               change_later: "You can change these settings later in your account preferences",
               lose_weight: "Lose Weight",
               gain_weight: "Gain Weight",
               maintain_weight: "Maintain Weight",
               build_muscle: "Build Muscle",
               improve_health: "Improve Overall Health",
               increase_energy: "Increase Energy",
               better_digestion: "Better Digestion",
               save_time: "Save Time Cooking",
               learn_cooking: "Learn New Cooking Skills",
               dietary_restrictions: "Dietary Restrictions",
               food_allergies: "Food Allergies",
               preferences_summary: "Your Preferences Summary",
          },
     },
     ar: {
          nav: {
               home: "الرئيسية",
               explore: "استكشف",
               saved: "المفضلة",
               planner: "خطة التغذية ",
               lists: "قائمة التسوق",
               profile: "الملف الشخصي",
               search_placeholder: "البحث عن الوصفات...",
          },
          common: {
               loading: "جاري التحميل...",
               save: "حفظ",
               cancel: "إلغاء",
               delete: "حذف",
               edit: "تعديل",
               add: "إضافة",
               remove: "إزالة",
               view_all: "عرض الكل",
               back: "رجوع",
               next: "التالي",
               previous: "السابق",
               close: "إغلاق",
               confirm: "تأكيد",
               yes: "نعم",
               no: "لا",
               Follow:"تابع",
               Following:"يتابع" 
          },
          home: {
               title: "إيناء للطعام",
               subtitle: "اكتشف وصفات لذيذة ونظّم وجباتك بسهولة",
               trending_recipes: "الوصفات الاكثر شيوعًا",
               popular_this_week: "الأكثر شيوعًا هذا الأسبوع",
               recent_activity: "مؤخرًا ",
               top_creators: "الطهاة المميزون ",
               quick_actions: "إجراءات سريعة",
               create_recipe: " أضف وصفة",
               meal_planner:  "خطة التغذية ",
               shopping_list: "قائمة التسوق",
               import_recipe: "استيراد وصفة",
               trending_now: "الأكثر رواجًا الآن",
               premium_recipes: "وصفات  المميزة",
               upgrade_now: "ترقية الآن",
               Paste_recipe_URL:"ضع رابط الوصفة",
          },
          recipe: {
               cooking_time: "مدة الطهي ",
               cuisine: "المطبخ",
               serves: "يكفي لـ",
               difficulty: "مستوى الصعوبة",
               beginner: "مبتدئ",
               intermediate: "متوسط",
               advanced: "متقدم",
               ingredients: "المكونات",
               instructions: "طريقة التحضير",
               servings: "الحصص",
               add_to_list: "إضافة للقائمة",
               nutritional_info: "المعلومات الغذائية",
               calories: "السعرات",
               protein: "البروتين",
               carbs: "الكربوهيدرات",
               fat: "الدهون",
               comments: "التعليقات ",
               leave_comment: "اترك تعليقاً",
               mark_complete: "تحديد كمكتمل",
               view_all_ingredients: "عرض جميع المكونات",
               View_Recipe:" عرض الوصفة"
          },
          profile: {
               edit_profile: "تعديل الملف ",
               account_settings: "إعدادات الحساب",
               posts: "المنشورات",
               followers: "المتابعون",
               following: "أتابع",
               recipes_created: "الوصفات المنشأة",
               latest_activity: " أحدث الأنشطة ",
               add_new_recipe: " أضف وصفة جديدة ",
               quick_actions: "إجراءات سريعة",
               manage_followers: "إدارة المتابعين",
               no_activity: "لا يوجد نشاط بعد",
               no_recipes:"لم تضف أي وصفات بعد",
               create_first_recipe: "أنشئ وصفتك الأولى",
               food_enthusiast: "عاشق للطعام وطاهي منزلي",
               recipes: "الوصفات",
               likes: "الإعجابات",
               view_profile: "عرض الملف ",
               edit: "تعديل",
               member_since: "عضو منذ",
               account_type: "نوع الحساب",
               premium: "مميز",
               verified: "موثّق",
               profile_completion: "اكتمال الملف الشخصي",
               verification: "التحقق",
               share_culinary: "شارك وصفاتك وإبداعاتك مع المجتمع ",
               enter_recipe_url: "أدخل رابط الوصفة",
               import_recipe: "استيراد وصفة",
               showing_posts: "عرض الكل",
               posts_count: "عدد المنشورات",
               show_less: "عرض أقل",
               show_more_creators: "عرض المزيد من الطهاة",
               post: "نشر",
               add_comment: "أضف تعليقاً...",
               created: "تمت الإضافة ",
               no_recipes_category: "لا توجد وصفات في هذه الفئة",
               category: "الفئة",
               create_recipe_see: "أضف وصفتك الأولى لتظهر هنا",
          },
          create_recipe: {
               title: "أضف وصفة",
               create_new_recipe: "إضافة وصفة جديدة",
               recipe_title:  "اسم الوصفة",
               ingredient_name: "اسم المكون",
               preparation_time: "مدة التحضير",
               servings: "عدد الحصص",
               video_url: "رابط الفيديو",
               description: "الوصف",
               thumbnail_image: "الصورة الرئيسية",
               additional_images: "صور إضافية",
               add_ingredients: "إضافة المكونات",
               instructions: "طريقة التحضير",
               quantity: "الكمية",
               weight: "اختر الوزن",
               step: "الخطوة",
               add_step: "إضافة خطوة",
               create_recipe: "إضافةالوصفة",
               import_new_recipe: "استيراد وصفة جديدة",
               recipe_tips: "نصائح الوصفة",
               click_to_upload: "اضغط للرفع",
               add_image: "إضافة صورة",
               crop_image: "قص الصورة",
               crop_perfect:"اضبط الصورة للحجم المناسب",
               StepImage:"أضف صورة (اختياري)",
               Add_Step_Image:"أضف صورة",
               Import_new_recipe:"استيراد وصفة جديدة",
               recipe_url:"استورد وصفة من رابط وسيتم ملء التفاصيل تلقائيًا",
               ImportRecipe:"استيراد وصفة",
              tips_1: "استخدم صورًا عالية الجودة لجعل وصفتك أكثر جاذبية",
               tips_2: "كن محددًا في المقادير وأوقات الطهي",
               tips_3: "أضف صورًا خطوة بخطوة للتقنيات المعقدة",
               tips_4: "أضف ملاحظاتك الشخصية والتغييرات لتجعلها مميزة",
               tips_5: "جرّب وصفتك عدة مرات قبل نشرها",
               ad_title: "علامتك التجارية هنا",
               ad_subtitle: "لتصل إلى آلاف عشاق الطعام"



          },
          meal_planner: {
               title: "خطة التغذية",
               plan_meals: "خطط وجباتك وتابع أهدافك الغذائية",
               daily_nutrition: "التغذية اليومية",
               weekly_summary: "ملخص  الأسبوعي",
               breakfast: "الإفطار",
               lunch: "الغداء",
               dinner: "العشاء",
               snack: "وجبة خفيفة",
               add_custom_meal: "إضافة وجبة مخصصة",
               trending_recipes: "الوصفات الاكتر شيوعًا",
               saved_recipes:  "الوصفات المفضلة",
               search_recipes:  "ابحث في الوصفات",
               nutrition_goals: "الأهداف الغذائية",
               avg_daily_calories: "متوسط السعرات اليومية",
               days_on_track: "أيام الالتزام",
               meals_planned: "الوجبات المخططة",
          },
          shopping_list: {
               title: "قائمة التسوق",
               shopping_progress: "حالة القائمة ",
               items_completed: "العناصر المكتملة",
               quick_add: "إضافة سريعة",
               add_item: "إضافة عنصر",
               shopping_stats: "إحصائيات القائمة",
               total_items: "إجمالي العناصر",
               completed: "مكتمل",
               remaining: "متبقي",
               progress: "التقدم",
               categories: "التصنيفات",
               share_list: "مشاركة",
               export_list: "تصدير",
               clear_completed:"حذف العناصر المكتملة",
          },
          explore: {
               title: "اكتشف الوصفات ",
               discover_recipes: "تعرف على وصفات شهية من مختلف مطابخ العالم",
               featured_categories: "الفئات المميزة",
               search_recipes: "ابحث عن وصفات...",
               category: "التصنيف",
               cuisine: "المطبخ",
               difficulty: "مستوى الصعوبة",
               showing_results: "عرض النتائج",
               no_recipes_found: "لا توجد وصفات مطابقة",
               adjust_filters: "عدّل خيارات البحث لتحصل على نتائج أفضل",
          },
          saved: {
               title: "الوصفات المفضلة",
               your_collection: "مجموعتك من الوصفات المفضلة",
               recipes_saved: "وصفة المفضلة",
               search_saved: "ابحث في الوصفات المفضلة...",
               no_saved_recipes: "لا توجد وصفات مفضلة بعد",
               start_saving: "ابدأ بإضافة وصفات إلى المفضلة لتظهر هنا",
               saved_date: "تاريخ الإضافة",
               ago: "منذ",
               servings: "عدد الحصص",
          },
          settings: {
               title: "الإعدادات",
               account: "الحساب",
               privacy: "الخصوصية",
               notifications: "الإشعارات",
               data_storage: "البيانات والتخزين",
               change_password: "تغيير كلمة المرور",
               email_settings: "إعدادات البريد الإلكتروني",
               two_factor_auth: "المصادقة الثنائية",
               profile_visibility: "رؤية الملف الشخصي",
               push_notifications: "الإشعارات الفورية",
               email_notifications: "إشعارات البريد الإلكتروني",
               marketing_communications: "الاتصالات التسويقية",
               download_data: "تحميل البيانات",
               import_recipes: "استيراد الوصفات",
               delete_account: "حذف الحساب",
               danger_zone: "منطقة الخطر",
          },
          footer: {
               company: "عن الشركة",
               help: "مركز المساعدة",
               newsletter: "النشرة الإخبارية",
               about: "من نحن",
               features: "مميزاتنا",
               works: "أعمالنا",
               career: "الوظائف",
               customer_support: "خدمة العملاء",
               delivery_details: "معلومات التوصيل",
               terms_conditions: "الشروط والأحكام",
               privacy_policy: "سياسة الخصوصية",
               enter_email: "أدخل عنوان بريدك الإلكتروني",
               subscribe_now: "اشترك الآن",
               copyright: "© حقوق الطبع والنشر 2022، جميع الحقوق محفوظة لآدم",
               discover_description:
                    "اكتشف الأطباق الكلاسيكية الخالدة والأطباق الجديدة المثيرة مع إيينا للطعام، حيث تقودك فئات الوصفات الأعلى تقييماً من مستخدمينا إلى أفضل ما في كل مطبخ",
          },
          auth: {
               login: "تسجيل الدخول",
               signup: "إنشاء حساب",
               email: "البريد الإلكتروني",
               password: "كلمة المرور",
               confirm_password: "تأكيد كلمة المرور",
               first_name: "الاسم الأول",
               last_name: "اسم العائلة",
               remember_me: "تذكرني",
               forgot_password: "نسيت كلمة المرور؟",
               sign_in: "تسجيل الدخول",
               create_account: "إنشاء حساب",
               already_have_account: "لديك حساب بالفعل؟",
               dont_have_account: "ليس لديك حساب؟",
               agree_to_terms: "أوافق على الشروط والأحكام وسياسة الخصوصية",
               terms_of_service: "الشروط والأحكام",
               privacy_policy: "سياسة الخصوصية",
               continue_with_google: "التسجيل بجوجل",
               continue_with_facebook: "التسجيل بفيسبوك",
               welcome_back: "مرحباً بعودتك",
               sign_in_to_continue: "سجل دخولك للمتابعة",
               join_community: "انضم إلى مجتمع الطعام",
               start_journey: "ابدأ رحلتك الطهوية معنا",
               creating_account: "جاري إنشاء الحساب...",
               signing_in: "جاري تسجيل الدخول...",
          },
          goals: {
               setup_title: "إعداد ملفك الشخصي",
               what_are_goals: "ما هي أهدافك؟",
               select_goals: "اختر هدفاً أو أكثر لنخصص تجربتك",
               tell_about_yourself: "أخبرنا عن نفسك",
               personalize_recommendations: "هذه المعلومات ستساعدنا في تخصيص التوصيات لك",
               activity_level: "ما هو مستوى نشاطك؟",
               calculate_calories: "هذا يساعدنا في حساب احتياجاتك من السعرات الحرارية",
               dietary_preferences: "التفضيلات الغذائية",
               restrictions_allergies: "اختياري: أخبرنا عن قيودك الغذائية والحساسية",
               age: "العمر",
               gender: "الجنس",
               height: "الطول (سم)",
               weight: "الوزن (كجم)",
               bmi: "مؤشر كتلة الجسم",
               step_of: "الخطوة {current} من {total}",
               next: "التالي",
               back: "السابق",
               complete_setup: "إنهاء الإعداد",
               skip_for_now: "تخطي الآن",
               saving: "جاري الحفظ...",
               goals_selected: "تم اختيار {count} من {total} أهداف",
               change_later: "يمكنك تغيير هذه الإعدادات لاحقاً من إعدادات الحساب",
               lose_weight: "فقدان الوزن",
               gain_weight: "زيادة الوزن",
               maintain_weight: "الحفاظ على الوزن",
               build_muscle: "بناء العضلات",
               improve_health: "تحسين الصحة العامة",
               increase_energy: "زيادة الطاقة",
               better_digestion: "تحسين الهضم",
               save_time: "توفير وقت الطبخ",
               learn_cooking: "تعلم مهارات طبخ جديدة",
               dietary_restrictions: "القيود الغذائية",
               food_allergies: "الحساسية الغذائية",
               preferences_summary: "ملخص تفضيلاتك",
          },
     },
};

export const getTranslation = (lang: "en" | "ar"): Translation => {
     return translations[lang] || translations.en;
};
