import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Avatar } from "../../components/ui/avatar";
import { Separator } from "../../components/ui/separator";
import { 
  User,
  Camera,
  Save,
  X,
  MapPin,
  Globe,
  Calendar,
  Mail,
  Phone,
  Link as LinkIcon,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

export const EditProfile = (): JSX.Element => {
  const { t, isRTL, language } = useLanguage();
  const [profileData, setProfileData] = useState({
    firstName: "Adam",
    lastName: "Ahmed",
    username: "adamahmed",
    email: "adam@example.com",
    phone: "+1 (555) 123-4567",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    location: "New York, USA",
    website: "https://adamahmed.com",
    birthDate: "1990-01-15",
    gender: "male",
    language: "English",
    timezone: "EST (UTC-5)"
  });

  const [socialLinks, setSocialLinks] = useState({
    instagram: "https://instagram.com/adamahmed",
    twitter: "https://twitter.com/adamahmed",
    facebook: "",
    youtube: "https://youtube.com/adamahmed"
  });

  const [profileImage, setProfileImage] = useState("https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop");
  const [coverImage, setCoverImage] = useState("https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop");

  // Generate localized path
  const getLocalizedPath = (path: string) => {
    return language === 'ar' ? `/ar${path === '/' ? '' : path}` : path;
  };

  const handleInputChange = (field: keyof typeof profileData, value: string) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSocialChange = (platform: keyof typeof socialLinks, value: string) => {
    setSocialLinks(prev => ({
      ...prev,
      [platform]: value
    }));
  };

  const handleImageUpload = (type: 'profile' | 'cover') => {
    // Simulate image upload
    const mockImageUrl = type === 'profile' 
      ? "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
      : "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop";
    
    if (type === 'profile') {
      setProfileImage(mockImageUrl);
    } else {
      setCoverImage(mockImageUrl);
    }
  };

  const handleSave = () => {
    console.log('Saving profile data:', { profileData, socialLinks, profileImage, coverImage });
    // Here you would send the data to your backend
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <TopCreatorsSection />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Link to={getLocalizedPath("/profile")}>
              <Button variant="outline" size="icon" className="hover:bg-gray-100">
                <ArrowLeft className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <User className="w-8 h-8 text-[#22ae4b]" />
              <div>
                <div className="text-sm text-[#22ae4b] font-medium">{language === 'ar' ? 'الملف الشخصي' : 'Profile'}</div>
                <h1 className="text-3xl font-bold text-gray-900">{t.profile.edit_profile}</h1>
              </div>
            </div>
          </div>
          <p className="text-gray-600">{language === 'ar' ? 'تحديث معلومات ملفك الشخصي وتفضيلاتك' : 'Update your profile information and preferences'}</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Form */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-8">
              {/* Profile Images */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">{language === 'ar' ? 'صور الملف الشخصي' : 'Profile Images'}</h2>
                  
                  {/* Cover Image */}
                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-3">{language === 'ar' ? 'صورة الغلاف' : 'Cover Image'}</label>
                    <div className="relative h-48 bg-gradient-to-r from-[#22ae4b] to-[#1c9a40] rounded-2xl overflow-hidden">
                      <img 
                        src={coverImage} 
                        alt="Cover" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <Button
                          onClick={() => handleImageUpload('cover')}
                          className="bg-white/20 hover:bg-white/30 text-white border-white/30"
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          {language === 'ar' ? 'تغيير الغلاف' : 'Change Cover'}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">{language === 'ar' ? 'صورة الملف الشخصي' : 'Profile Picture'}</label>
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <Avatar className="w-24 h-24">
                          <img src={profileImage} alt="Profile" className="w-full h-full object-cover" />
                        </Avatar>
                        <Button
                          onClick={() => handleImageUpload('profile')}
                          size="icon"
                          className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#22ae4b] hover:bg-[#1c9a40] text-white rounded-full"
                        >
                          <Camera className="w-4 h-4" />
                        </Button>
                      </div>
                      <div>
                        <Button 
                          onClick={() => handleImageUpload('profile')}
                          variant="outline" 
                          className="mb-2"
                        >
                          <Camera className="w-4 h-4 mr-2" />
                          {language === 'ar' ? 'رفع صورة جديدة' : 'Upload New Photo'}
                        </Button>
                        <p className="text-sm text-gray-500">{language === 'ar' ? 'JPG، PNG أو GIF. الحد الأقصى للحجم 2 ميجابايت.' : 'JPG, PNG or GIF. Max size 2MB.'}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Basic Information */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">{language === 'ar' ? 'المعلومات الأساسية' : 'Basic Information'}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'ar' ? 'الاسم الأول' : 'First Name'}</label>
                      <Input
                        value={profileData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`h-12 ${isRTL ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'ar' ? 'اسم العائلة' : 'Last Name'}</label>
                      <Input
                        value={profileData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`h-12 ${isRTL ? 'text-right' : 'text-left'}`}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                      <Input
                        value={profileData.username}
                        onChange={(e) => handleInputChange('username', e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <Input
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">{language === 'ar' ? 'النبذة الشخصية' : 'Bio'}</label>
                    <textarea
                      value={profileData.bio}
                      onChange={(e) => handleInputChange('bio', e.target.value)}
                      rows={4}
                      className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] resize-none ${isRTL ? 'text-right' : 'text-left'}`}
                      placeholder={language === 'ar' ? 'أخبرنا عن نفسك...' : 'Tell us about yourself...'}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <Input
                        type="url"
                        value={profileData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="h-12"
                        placeholder="https://yourwebsite.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Birth Date</label>
                      <Input
                        type="date"
                        value={profileData.birthDate}
                        onChange={(e) => handleInputChange('birthDate', e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">{language === 'ar' ? 'روابط وسائل التواصل الاجتماعي' : 'Social Media Links'}</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Instagram</label>
                        <Input
                          value={socialLinks.instagram}
                          onChange={(e) => handleSocialChange('instagram', e.target.value)}
                          placeholder="https://instagram.com/username"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <Twitter className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                        <Input
                          value={socialLinks.twitter}
                          onChange={(e) => handleSocialChange('twitter', e.target.value)}
                          placeholder="https://twitter.com/username"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Facebook className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Facebook</label>
                        <Input
                          value={socialLinks.facebook}
                          onChange={(e) => handleSocialChange('facebook', e.target.value)}
                          placeholder="https://facebook.com/username"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                        <Youtube className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium text-gray-700 mb-1">YouTube</label>
                        <Input
                          value={socialLinks.youtube}
                          onChange={(e) => handleSocialChange('youtube', e.target.value)}
                          placeholder="https://youtube.com/channel/username"
                          className="h-12"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Preferences */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Preferences</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                      <select
                        value={profileData.gender}
                        onChange={(e) => handleInputChange('gender', e.target.value)}
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] bg-white"
                      >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Language</label>
                      <select
                        value={profileData.language}
                        onChange={(e) => handleInputChange('language', e.target.value)}
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] bg-white"
                      >
                        <option value="English">English</option>
                        <option value="Spanish">Spanish</option>
                        <option value="French">French</option>
                        <option value="German">German</option>
                        <option value="Italian">Italian</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Timezone</label>
                      <select
                        value={profileData.timezone}
                        onChange={(e) => handleInputChange('timezone', e.target.value)}
                        className="w-full h-12 px-3 border border-gray-300 rounded-lg focus:border-[#22ae4b] focus:ring-[#22ae4b] bg-white"
                      >
                        <option value="EST (UTC-5)">EST (UTC-5)</option>
                        <option value="PST (UTC-8)">PST (UTC-8)</option>
                        <option value="GMT (UTC+0)">GMT (UTC+0)</option>
                        <option value="CET (UTC+1)">CET (UTC+1)</option>
                      </select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Save Button */}
              <div className="flex items-center gap-4">
                <Button 
                  onClick={handleSave}
                  className="bg-[#22ae4b] hover:bg-[#1c9a40] text-white px-8 py-3 h-12"
                >
                  <Save className="w-4 h-4 mr-2" />
                  {language === 'ar' ? 'حفظ التغييرات' : 'Save Changes'}
                </Button>
                <Link to={getLocalizedPath("/profile")}>
                  <Button variant="outline" className="px-8 py-3 h-12">
                    <X className="w-4 h-4 mr-2" />
                    {t.common.cancel}
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Profile Preview */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{language === 'ar' ? 'معاينة الملف الشخصي' : 'Profile Preview'}</h3>
                  <div className="text-center">
                    <Avatar className="w-20 h-20 mx-auto mb-4">
                      <img src={profileImage} alt="Profile Preview" className="w-full h-full object-cover" />
                    </Avatar>
                    <h4 className="font-bold text-lg text-gray-900">
                      {profileData.firstName} {profileData.lastName}
                    </h4>
                    <p className="text-gray-600 text-sm mb-2">@{profileData.username}</p>
                    <p className="text-gray-600 text-sm mb-4">{profileData.location}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {profileData.bio.substring(0, 100)}...
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{language === 'ar' ? 'نصائح الملف الشخصي' : 'Profile Tips'}</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                      <p>{language === 'ar' ? 'استخدم صورة ملف شخصي واضحة وعالية الجودة' : 'Use a clear, high-quality profile picture'}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                      <p>Write a compelling bio that describes your cooking style</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                      <p>Add social media links to grow your following</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                      <p>Keep your contact information up to date</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Account Status */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{language === 'ar' ? 'حالة الحساب' : 'Account Status'}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.profile.profile_completion}</span>
                      <span className="font-medium text-[#22ae4b]">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#22ae4b] h-2 rounded-full" style={{ width: '85%' }} />
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.profile.account_type}</span>
                      <span className="font-medium text-[#22ae4b]">{t.profile.premium}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.profile.verification}</span>
                      <span className="font-medium text-green-600">{t.profile.verified}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <AdSection />
    </div>
  );
};