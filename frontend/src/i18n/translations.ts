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
          Crop: string;
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
          Current_Password: string;
          New_Password: string;
          Confirm_Password: string;
          Update_Password: string;
          Recipe_notifications: string;
          Marketing_emails: string;
          Save_Settings: string;
          TwoFA_Status: string;
          Enable_TwoFA: string;
          TwoFA_Description:string;
          Enable_2FA:string;
          Public:string;
          Private:string;
          public_dusc:string;
          Private_dusc:string;
          Save_Changes:string;
          Data_Privacy: string;
          Show_Email_Publicly: string;
          Show_Followers_Count: string;
          Allow_Direct_Messages:string;
          Blocked_Users:string;
          No_Blocked_Users_Message: string;
          No_Blocked_Users:string;
          Storage_Usage:string;
          Photos_Videos: string;
          Recipes_Data: string;
          Total_Used: string;
          Manage_Storage: string;
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
        privacy_policy:{
          informationCollect: string;
          informationCollectSubtitle: string;
          howWeUse: string;
          informationSecurity: string;
          yourRights: string;
          internationalTransfers:string;
          user_information:string;
          first_last_name:string;
          email_address:string;
          password_hashed:string;
          date_of_birth:string;
          phone_number: string;
          profile_image:string;
          preferred_language:string;
          recipeInformation:string;
          recipeInfo_title: string;
          recipeInfo_description: string;
          recipeInfo_ingredients: string;
          recipeInfo_nutrition: string;
          recipeInfo_instructions: string;
          recipeInfo_servings: string;
          recipeInfo_cookingTime: string;
          recipeInfo_category: string;
          recipeInfo_images: string;
          recipeInfo_video: string;
          recipeInfo_likes: string;
          recipeInfo_comments: string;
          recipeInfo_creator: string;
          privacyIntro: string;
         
          category: string;
          category_name: string;
          category_type: string;
          category_image: string;
          ingredient: string;
          ingredient_name: string;
          ingredient_image: string;
  
          list: string;
          list_name: string;
          list_ingredients: string;
          list_user: string;

          comment: string;
          comment_recipe: string;
          comment_content: string;
          comment_user: string;
          comment_likes: string;

          cuisine: string;
          cuisine_name: string;
          cuisine_image: string;

        
          dietLabel: string;
          dietLabel_name: string;
          dietLabel_image: string;

          healthLabel: string;
          healthLabel_name: string;
          healthLabel_image: string;

          mealPlan: string;
          mealPlan_user: string;
          mealPlan_date: string;
          mealPlan_types: string;

          How_Use_title: string;
          purpose_provide: string;
          purpose_notify: string;
          purpose_participate: string;
          purpose_support: string;
          purpose_analysis: string;
          purpose_monitor: string;
          purpose_issues: string;
          cookies_title: string;
          cookies_intro: string;
          cookies_definition: string;
          browser_instructions: string;
          Security_title:string;
          Right_title:string;
          accessUpdateDelete: string;
          rectification: string;
          objection: string;
          restriction: string;
          dataPortability: string;
          withdrawConsent: string;
          gdprNotice: string;
          ccpaNotice: string;
          Transfers_title:string;
          outsideLocationNotice: string;
          consentAgreement: string;
          securityMeasures: string;
          Changes_Privacy_Policy:string;
          policyUpdateNotice: string;
          notificationMethod: string;
          reviewAdvice: string;
          contactTitle: string;
          contactInstruction: string;
         contactEmail: string;
        
     }
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
               Crop:"Crop"
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
               Current_Password: "Current Password",
               New_Password: "New Password",
               Confirm_Password: "Confirm New Password",
               Update_Password: "Update Password",
               Recipe_notifications:"Recipe notifications",
               Marketing_emails: "Marketing emails",
               Save_Settings: " Save Settings",
               TwoFA_Status: "2FA is currently disabled",
               Enable_TwoFA: "Enable 2FA to secure your account",
               TwoFA_Description:"Two-factor authentication adds an extra layer of security to your account.",
               Enable_2FA:"Enable 2FA",
               Public:"Public",
               Private:"Private",
               public_dusc:"Anyone can see your profile",
               Private_dusc:"Anyone can see your profile",
               Save_Changes:"Save Changes",
               Data_Privacy: "Data & Privacy",
               Show_Email_Publicly: "Show email publicly",
               Show_Followers_Count: "Show followers count",
               Allow_Direct_Messages: "Allow direct messages",
               Blocked_Users: "Blocked Users",
               No_Blocked_Users_Message: "You haven't blocked any users yet.",
               No_Blocked_Users: "No blocked users",
               Storage_Usage: "Storage Usage",
               Photos_Videos: "Photos & Videos",
               Recipes_Data: "Recipes & Data",
               Total_Used: "Total Used",
               Manage_Storage:"Manage Storage"

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
          privacy_policy:{
               informationCollect: "Information We Collect",
               informationCollectSubtitle:"We collect several different types of information for various purposes to provide and improve our Services to you.",
               howWeUse: "How We Use Information",
               informationSecurity: "Information Security",
               yourRights: "Your Rights",
               internationalTransfers: "International Transfers",
               user_information: "User Information",
               first_last_name: "First and Last Name",
               email_address: "Email Address",
               password_hashed: "Password (hashed)",
               date_of_birth: "Date of Birth",
               phone_number: "Phone Number",
               profile_image: "Profile Image",
               preferred_language: "Preferred Language",
               recipeInformation:"Recipe Information",
               recipeInfo_title: "Title (English and Arabic)",
               recipeInfo_description: "Description (English and Arabic)",
               recipeInfo_ingredients: "Ingredients (with details, names, and raw text)",
               recipeInfo_nutrition: "Nutritional information",
               recipeInfo_instructions: "Instructions (with steps and images)",
               recipeInfo_servings: "Servings",
               recipeInfo_cookingTime: "Cooking time",
               recipeInfo_category: "Category (cuisine, meal type, health labels, diet labels)",
               recipeInfo_images: "Thumbnail and other images",
               recipeInfo_video: "Video URL",
               recipeInfo_likes: "Likes",
               recipeInfo_comments: "Comments",
               recipeInfo_creator: "Creator",
               privacyIntro:'This Privacy Policy describes how Eeina ("we," "us," or "our") collects, uses, and discloses your information when you use our website and services (collectively, the "Services").',
               category: "Category Information",
               category_name: "Name (English and Arabic)",
               category_type: "Type (cuisine, meal type, health labels, diet labels)",
               category_image: "Image",

               ingredient: "Ingredient Information",
               ingredient_name: "Name (English and Arabic)",
               ingredient_image: "Image",

               list: "List Information",
               list_name: "List name (English and Arabic)",
               list_ingredients: "List of ingredients",
               list_user: "User who created the list",

               comment: "Comment Information",
               comment_recipe: "Recipe the comment belongs to",
               comment_content: "Content of the comment (English and Arabic)",
               comment_user: "User who wrote the comment",
               comment_likes: "Likes",

               cuisine: "Cuisine Information",
               cuisine_name: "Name (English and Arabic)",
               cuisine_image: "Image",

               dietLabel: "Diet Label Information",
               dietLabel_name: "Name (English and Arabic)",
               dietLabel_image: "Image",

               healthLabel: "Health Label Information",
               healthLabel_name: "Name (English and Arabic)",
               healthLabel_image: "Image",

               mealPlan: "Meal Plan Information",
               mealPlan_user: "User who created the meal plan",
               mealPlan_date: "Date of the meal plan",
               mealPlan_types: "Meal types",
               How_Use_title: "We use the collected data for various purposes:",
               purpose_provide: "To provide and maintain our Services",
               purpose_notify: "To notify you about changes to our Services",
               purpose_participate: "To allow you to participate in interactive features of our Services when you choose to do so",
               purpose_support: "To provide customer care and support",
               purpose_analysis: "To provide analysis or valuable information so that we can improve the Services",
               purpose_monitor: "To monitor the usage of the Services",
               purpose_issues: "To detect, prevent and address technical issues",
               cookies_title: " Cookies and Tracking Technologies",
               cookies_intro: "We use cookies and similar tracking technologies to track the activity on our Services and hold certain information.",
               cookies_definition: "Cookies are files with a small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Services.",
               browser_instructions: "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Services",
               Security_title:"The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.",
               Right_title:"Depending on your location, you may have certain rights regarding your personal information. These rights may include:",
               accessUpdateDelete: "The right to access, update or to delete the information we have on you.",
               rectification: "The right of rectification. You have the right to have your information rectified if that information is inaccurate or incomplete.",
               objection: "The right to object. You have the right to object to our processing of your Personal Data.",
               restriction: "The right of restriction. You have the right to request that we restrict the processing of your personal information.",
               dataPortability: "The right to data portability. You have the right to be provided with a copy of the information we have on you in a structured, machine-readable and commonly used format.",
               withdrawConsent: "The right to withdraw consent. You also have the right to withdraw your consent at any time where we relied on your consent to process your personal information.",
               gdprNotice: "If you are a resident of the European Economic Area (EEA), you have certain data protection rights under the General Data Protection Regulation (GDPR).",
               ccpaNotice: "If you are a California resident, you have certain rights under the California Consumer Privacy Act (CCPA).",
               Transfers_title:"Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.",
               outsideLocationNotice: "If you are located outside and choose to provide information to us, please note that we transfer the data, including Personal Data, to and process it there.",
               consentAgreement: "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.",
               securityMeasures: "We will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.",
               Changes_Privacy_Policy:"Changes to This Privacy Policy",
               policyUpdateNotice: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
               notificationMethod: "We will let you know via email and/or a prominent notice on our Services, prior to the change becoming effective and update the 'last updated' date at the top of this Privacy Policy.",
               reviewAdvice: "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.",
               contactTitle: "Contact Us",
               contactInstruction: "If you have any questions about this Privacy Policy, please contact us:",
              contactEmail: "By email: info@eeina.com",
          }
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
               Following:"يتابع" ,
               Crop:"قص"
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
               followers: "متابع",
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
               Current_Password: "كلمة المرور الحالية",
               New_Password: "كلمة المرور الجديدة",
               Confirm_Password: "تأكيد كلمة المرور الجديدة",
               Update_Password: "تحديث كلمة المرور",
               Recipe_notifications: "إشعارات الوصفات",
               Marketing_emails: "رسائل تسويقية عبر البريد",
               Save_Settings: "حفظ الإعدادات",
               TwoFA_Status: "المصادقة الثنائية غير مفعّلة",
               Enable_TwoFA: "فعّل المصادقة الثنائية لتعزيز الأمان",
               TwoFA_Description: "تضيف المصادقة الثنائية طبقة إضافية من الحماية لحسابك.",
               Enable_2FA: "تفعيل المصادقة الثنائية",
               Public: "عام",
               Private: "خاص",
               public_dusc:" يمكن للجميع مشاهدة ملفك الشخصي",
               Private_dusc:" يمكن للمتابعين فقط مشاهدة ملفك الشخصي",
               Save_Changes:"حفظ التغييرات",
               Data_Privacy: "البيانات والخصوصية",
               Show_Email_Publicly: "إظهار البريد الإلكتروني للعامة",
               Show_Followers_Count: "إظهار عدد المتابعين",
               Allow_Direct_Messages: "السماح بالرسائل المباشرة",
               Blocked_Users: "المستخدمون المحظورون",
               No_Blocked_Users_Message: "لم تقم بحظر أي مستخدم بعد.",
               No_Blocked_Users: "لا يوجد مستخدمون محظورون",
               Storage_Usage: "استخدام التخزين",
               Photos_Videos: "الصور والفيديوهات",
               Recipes_Data: "الوصفات والبيانات",
               Total_Used: "إجمالي الاستخدام",
                Manage_Storage: "إدارة التخزين"


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
          privacy_policy:{
               informationCollect: "المعلومات التي نجمعها",
               informationCollectSubtitle:"نجمع عدة أنواع من المعلومات لأغراض مختلفة بهدف تقديم خدماتنا وتحسينها لك",
               howWeUse: "كيفية استخدام المعلومات",
               informationSecurity: "أمان المعلومات",
               yourRights: "حقوقك",
               internationalTransfers: "النقل الدولي للمعلومات",
               user_information: "معلومات المستخدم",
               first_last_name: "الاسم الأول واسم العائلة",
               email_address: "البريد الإلكتروني",
               password_hashed: "كلمة المرور (مشفرة)",
               date_of_birth: "تاريخ الميلاد",
               phone_number: "رقم الهاتف",
               profile_image: "صورة الملف الشخصي",
               preferred_language: "اللغة المفضلة",
               recipeInformation:"معلومات الوصفة",
               recipeInfo_title: "العنوان (بالإنجليزية والعربية)",
               recipeInfo_description: "الوصف (بالإنجليزية والعربية)",
               recipeInfo_ingredients: "المكونات (بالتفاصيل، الأسماء، والنص الخام)",
               recipeInfo_nutrition: "المعلومات الغذائية",
               recipeInfo_instructions: "طريقة التحضير (بالخطوات والصور)",
               recipeInfo_servings: "عدد الحصص",
               recipeInfo_cookingTime: "وقت الطهي",
               recipeInfo_category: "الفئة (المطبخ، نوع الوجبة، الملصقات الصحية، ملصقات النظام الغذائي)",
               recipeInfo_images: "الصورة المصغرة وصور أخرى",
               recipeInfo_video: "رابط الفيديو",
               recipeInfo_likes: "الإعجابات",
               recipeInfo_comments: "التعليقات",
               recipeInfo_creator: "صاحب الوصفة",
               privacyIntro:`توضح سياسة الخصوصية هذه كيف تقوم إيينا ("نحن") بجمع معلوماتك واستخدامها ومشاركتها عند استخدامك لموقعنا وخدماتنا (ويُشار إليها معًا بـ"الخدمات").`,
               category: "معلومات الفئة",
               category_name: "الاسم (بالإنجليزية والعربية)",
               category_type:"النوع (مطبخ، نوع وجبة، صحي، غذائي)",
               category_image: "الصورة",

               ingredient: "معلومات المكونات",
               ingredient_name: "الاسم (بالإنجليزية والعربية)",
               ingredient_image: "الصورة",

               list: "معلومات القوائم",
               list_name: "اسم القائمة (بالإنجليزية والعربية)",
               list_ingredients: "قائمة المكونات",
               list_user: "المستخدم الذي أنشأ القائمة",

               comment: "معلومات التعليقات",
               comment_recipe: "الوصفة المرتبطة بالتعليق",
               comment_content: "محتوى التعليق (بالإنجليزية والعربية)",
               comment_user: "كاتب التعليق",
               comment_likes: "الإعجابات",

               cuisine: "معلومات المطبخ",
               cuisine_name: "الاسم (بالإنجليزية والعربية)",
               cuisine_image: "الصورة",

               dietLabel: "معلومات  النظام الغذائي",
               dietLabel_name: "الاسم (بالإنجليزية والعربية)",
               dietLabel_image: "الصورة",

               healthLabel: "معلومات الصحة",
               healthLabel_name: "الاسم (بالإنجليزية والعربية)",
               healthLabel_image: "الصورة",

               mealPlan: "معلومات خطة الوجبات",
               mealPlan_user: "المستخدم الذي أنشأ خطة الوجبات",
               mealPlan_date: "تاريخ خطة الوجبات",
               mealPlan_types: "أنواع الوجبات",
               How_Use_title: "نستخدم البيانات التي نجمعها لأغراض متعددة:",
               purpose_provide: "لتقديم خدماتنا وضمان استمراريتها",
               purpose_notify: "لإعلامك بأي تحديثات أو تغييرات تطرأ على خدماتنا",
               purpose_participate: "لتمكينك من استخدام الخصائص التفاعلية المتاحة في خدماتنا إذا رغبت بذلك",
               purpose_support: "لتقديم المساعدة والدعم الفني وخدمة العملاء",
               purpose_analysis: "لتحليل البيانات وتقديم رؤى تساعدنا على تحسين خدماتنا",
               purpose_monitor: "لمتابعة كيفية استخدام خدماتنا بشكل مستمر",
               purpose_issues: "لاكتشاف المشكلات التقنية والعمل على منعها أو معالجتها",
               cookies_title: "ملفات تعريف الارتباط وتقنيات التتبع",
               cookies_intro: "نستخدم ملفات تعريف الارتباط وتقنيات مشابهة لمتابعة نشاطك على خدماتنا والاحتفاظ ببعض المعلومات.",
               cookies_definition: "ملفات تعريف الارتباط هي ملفات صغيرة تحتوي على بيانات محدودة، وقد تتضمن معرفًا فريدًا مجهول الهوية. يتم إرسالها من الموقع الإلكتروني إلى متصفحك وتُخزن على جهازك. كما نستخدم تقنيات أخرى مثل إشارات الويب والعلامات والبرمجيات النصية لجمع المعلومات وتحليلها بهدف تحسين خدماتنا.",
               browser_instructions: "يمكنك ضبط متصفحك لرفض جميع ملفات تعريف الارتباط أو لإشعارك عند إرسال ملف جديد. لكن في حال رفضها، قد لا تعمل بعض أجزاء خدماتنا بشكل صحيح.",
               Security_title:  "أمان بياناتك مهم بالنسبة لنا، لكن تذكّر أن أي طريقة نقل عبر الإنترنت أو طريقة تخزين إلكتروني ليست آمنة 100%. بينما نسعى لاستخدام وسائل مقبولة تجارياً لحماية بياناتك الشخصية، لا يمكننا ضمان أمانها بشكل مطلق.",
               Right_title:":اعتمادًا على موقعك، قد يكون لديك بعض الحقوق المتعلقة بمعلوماتك الشخصية. تشمل هذه الحقوق ما يلي",
               accessUpdateDelete: "الحق في الوصول، التحديث أو حذف المعلومات: يحق لك الوصول إلى معلوماتك الشخصية وتحديثها أو حذفها.",
               rectification: "الحق في التصحيح: يحق لك تصحيح معلوماتك إذا كانت غير دقيقة أو غير مكتملة.",
               objection: "الحق في الاعتراض: يحق لك الاعتراض على معالجة بياناتك الشخصية.",
               restriction: "الحق في التقييد: يحق لك طلب تقييد معالجة معلوماتك الشخصية.",
               dataPortability: "الحق في نقل البيانات: يحق لك الحصول على نسخة من بياناتك بصيغة منظمة، قابلة للقراءة آليًا وشائعة الاستخدام.",
               withdrawConsent: "الحق في سحب الموافقة: يحق لك سحب موافقتك في أي وقت إذا اعتمدنا على موافقتك لمعالجة بياناتك.",
               gdprNotice:"إذا كنت مقيمًا في المنطقة الاقتصادية الأوروبية (EEA)، فلديك بعض حقوق حماية البيانات بموجب اللائحة العامة لحماية البيانات (GDPR).",
               ccpaNotice:"إذا كنت مقيمًا في ولاية كاليفورنيا، فلديك بعض الحقوق بموجب قانون خصوصية المستهلك في كاليفورنيا (CCPA).",
               Transfers_title:"قد يتم نقل معلوماتك، بما في ذلك البيانات الشخصية، والاحتفاظ بها على أجهزة كمبيوتر تقع خارج ولايتك أو مقاطعتك أو بلدك أو أي ولاية حكومية أخرى، حيث قد تختلف قوانين حماية البيانات عن تلك المعمول بها في نطاق اختصاصك",

               outsideLocationNotice: "إذا كنت موجودًا في الخارج واخترت تقديم المعلومات لنا، يرجى ملاحظة أننا نقوم بنقل البيانات، بما في ذلك البيانات الشخصية، ومعالجتها هناك.",
               consentAgreement: "تمثل موافقتك على سياسة الخصوصية هذه متبوعة بتقديمك لهذه المعلومات موافقتك على هذا النقل.",
               securityMeasures: "سنتخذ جميع الخطوات اللازمة بشكل معقول لضمان التعامل مع بياناتك بأمان ووفقًا لسياسة الخصوصية هذه، ولن يتم نقل أي من بياناتك الشخصية إلى أي منظمة أو دولة إلا إذا كانت هناك ضوابط كافية بما في ذلك أمان بياناتك والمعلومات الشخصية الأخرى.",
               Changes_Privacy_Policy:"التغييرات على سياسة الخصوصية",
               policyUpdateNotice: "قد نقوم بتحديث سياسة الخصوصية الخاصة بنا من وقت لآخر. سنقوم بإبلاغك بأي تغييرات عن طريق نشر سياسة الخصوصية الجديدة على هذه الصفحة.",
               notificationMethod:'سنقوم بإبلاغك عبر البريد الإلكتروني و/أو من خلال إشعار بارز على خدماتنا، قبل أن يصبح التغيير ساريًا، مع تحديث تاريخ "آخر تعديل" في أعلى هذه السياسة.',
               reviewAdvice: "ننصحك بمراجعة سياسة الخصوصية هذه بشكل دوري للاطلاع على أي تغييرات. تصبح التغييرات في سياسة الخصوصية سارية عند نشرها على هذه الصفحة.",
               contactTitle: "اتصل بنا",
               contactInstruction: "إذا كان لديك أي استفسارات حول سياسة الخصوصية هذه، يرجى الاتصال بنا:",
               contactEmail: "عبر البريد الإلكتروني: info@eeina.com",

          }
     },
};

export const getTranslation = (lang: "en" | "ar"): Translation => {
     return translations[lang] || translations.en;
};
