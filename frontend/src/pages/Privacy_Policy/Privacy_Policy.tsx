import { Header } from '../../components/Header'
import { AdSection } from '../Home/sections/AdSection'
import {AlertCircle, Database, Eye, Globe, Lock, Shield, UserCheck } from 'lucide-react'

import { PrivacyCard } from '../../components/PrivacyCard'
import { useLanguage } from '../../contexts/LanguageContext'

export const Privacy_Policy = (): JSX.Element => {
  
    const {t,language} = useLanguage();
    const Privacy_Policy=[
      {
        icon: <Eye />,
        title:`${t.privacy_policy.informationCollect}` ,
        subtitle: `${t.privacy_policy.informationCollectSubtitle}`,
        bullets: [
          {
            section:`${t.privacy_policy.user_information}`,
            items:[
           `${t.privacy_policy.first_last_name}`,
          `${t.privacy_policy.email_address}`,
           `${t.privacy_policy.password_hashed}`,
          `${t.privacy_policy.date_of_birth}`,
           `${t.privacy_policy.phone_number}`,
           `${t.privacy_policy.profile_image}`,
           `${t.privacy_policy.preferred_language}`,
         ]},
         {
          section:`${t.privacy_policy.recipeInformation}`,
            items:[
              `${t.privacy_policy.recipeInfo_title} `,
              `${t.privacy_policy.recipeInfo_description} `,
              `${t.privacy_policy.recipeInfo_ingredients} `,
              `${t.privacy_policy.recipeInfo_nutrition} `,
              `${t.privacy_policy.recipeInfo_instructions} `,
              `${t.privacy_policy.recipeInfo_servings} `,
              `${t.privacy_policy.recipeInfo_cookingTime} `,
              `${t.privacy_policy.recipeInfo_category} `,
              `${t.privacy_policy.recipeInfo_images} `,
              `${t.privacy_policy.recipeInfo_video} `,
              `${t.privacy_policy.recipeInfo_likes} `,
              `${t.privacy_policy.recipeInfo_comments} `,
              `${t.privacy_policy.recipeInfo_creator} `,
            
            ]
         }
         ,
        {
          section:`${t.privacy_policy.category}`,
            items:[
              `${t.privacy_policy.category_name}`,
              `${t.privacy_policy.category_type}`,
              `${t.privacy_policy.category_image}`,
             

            ]
        },
        {
          section:`${t.privacy_policy.ingredient}`,
            items:[
              `${t.privacy_policy.ingredient_name}`,
              `${t.privacy_policy.ingredient_image}`,
         
            ]
        },
        {
          section:`${t.privacy_policy.ingredient}`,
            items:[
              `${t.privacy_policy.ingredient_name}`,
              `${t.privacy_policy.ingredient_image}`,
         
            ]
        },
        {
          section:`${t.privacy_policy.list}`,
            items:[
              `${t.privacy_policy.list_name}`,
              `${t.privacy_policy.list_ingredients}`,
              `${t.privacy_policy.list_user}`,
         
            ]
        },
        {
          section:`${t.privacy_policy.comment}`,
            items:[
              `${t.privacy_policy.comment_recipe}`,
              `${t.privacy_policy.comment_content}`,
              `${t.privacy_policy.comment_user}`,
              `${t.privacy_policy.comment_likes}`,
         
            ]
        },
        {
          section:`${t.privacy_policy.cuisine}`,
            items:[
              `${t.privacy_policy.cuisine_name}`,
              `${t.privacy_policy.cuisine_image}`,
           
            ]
        },
        {
          section:`${t.privacy_policy.dietLabel}`,
            items:[
              `${t.privacy_policy.dietLabel_name}`,
              `${t.privacy_policy.dietLabel_image}`,
           
            ]
        },
        {
          section:`${t.privacy_policy.healthLabel}`,
            items:[
              `${t.privacy_policy.healthLabel_name}`,
              `${t.privacy_policy.healthLabel_image}`,
           
            ]
        },
        {
          section:`${t.privacy_policy.mealPlan}`,
            items:[
              `${t.privacy_policy.mealPlan_user}`,
              `${t.privacy_policy.mealPlan_date}`,
              `${t.privacy_policy.mealPlan_types}`,
           
            ]
        },
        ]
      },
      {
        icon: <Database />,
        title: `${t.privacy_policy.howWeUse}`,
        subtitle: `${t.privacy_policy.How_Use_title}`,
        bullets:[
          `${t.privacy_policy.purpose_provide}`,
          `${t.privacy_policy.purpose_notify}`,
          `${t.privacy_policy.purpose_participate}`,
          `${t.privacy_policy.purpose_support}`,
          `${t.privacy_policy.purpose_analysis}`,
          `${t.privacy_policy.purpose_monitor}`,
          `${t.privacy_policy.purpose_issues}`,
        ]
      },
      {
        icon: <Eye/>,
        title: `${t.privacy_policy.cookies_title}`,
        subtitle: `${t.privacy_policy.cookies_intro}`,
        bullets:[
          `${t.privacy_policy.cookies_definition}`,
          `${t.privacy_policy.browser_instructions}`,
       
        ]
      },
      {
        icon: <Shield />,
        title: `${t.privacy_policy.informationSecurity}`,
        subtitle:`${t.privacy_policy.Security_title}`,
       
      },
      {
        icon: <UserCheck />,
        title: `${t.privacy_policy.yourRights}`,
        subtitle: `${t.privacy_policy.Right_title}`,
          bullets:[
          `${t.privacy_policy.accessUpdateDelete}`,
          `${t.privacy_policy.rectification}`,
          `${t.privacy_policy.objection}`,
          `${t.privacy_policy.restriction}`,
          `${t.privacy_policy.dataPortability}`,
          `${t.privacy_policy.withdrawConsent}`,
          `${t.privacy_policy.gdprNotice}`,
          `${t.privacy_policy.ccpaNotice}`,
       
        ]
      },
      {
        icon: <Globe />,
        title: `${t.privacy_policy.internationalTransfers}`,
        subtitle:`${t.privacy_policy.Transfers_title}`,
         bullets:[
          `${t.privacy_policy.outsideLocationNotice}`,
          `${t.privacy_policy.consentAgreement}`,
          `${t.privacy_policy.securityMeasures}`,
        
       
        ]
      },
      {
        icon: <AlertCircle />,
        title: `${t.privacy_policy.Changes_Privacy_Policy}`,
        subtitle:`${t.privacy_policy.policyUpdateNotice}`,
         bullets:[
          `${t.privacy_policy.notificationMethod}`,
          `${t.privacy_policy.reviewAdvice}`,
        
       
        ]
      },
    ]
  return (
   <div className="bg-gray-50 min-h-screen">
      <Header/>
      <div className="max-w-5xl mx-auto px-6 py-8">
     
          <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Lock className="w-8 h-8 text-[#22ae4b]" />
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t.footer.privacy_policy}</h1>
          </div>
          <p className="text-gray-600">{language=="ar"?"آخر تحديث: 3 سبتمبر 2025":"Last Updated: September 3, 2025"}</p>
          <p className="text-gray-600 py-4 text-base sm:text-xl">
          {t.privacy_policy.privacyIntro}
           </p>
        </div>
        <div className="space-y-8">
          {Privacy_Policy.map((item, index) => (
            <PrivacyCard
              key={index}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              bullets={item.bullets}
            />
          ))}
        </div>
        <div className="mt-12 p-8 bg-green-100 rounded-2xl">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{t.privacy_policy.contactTitle}</h2>
        <p className="text-gray-700-300 mb-4">{t.privacy_policy.contactInstruction}</p>
        <div className="space-y-2 text-gray-700 ">
          <p>{t.privacy_policy.contactEmail}</p>
          </div>
        </div>
      </div>
      <AdSection />
   </div>
  )
}

export default Privacy_Policy
