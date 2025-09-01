import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";
import { TopCreatorsSection } from "../Home/sections/TopCreatorsSection";
import { AdSection } from "../Home/sections/AdSection";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Separator } from "../../components/ui/separator";
import { 
  Settings,
  User,
  Bell,
  Shield,
  Eye,
  Globe,
  Smartphone,
  Mail,
  Lock,
  Trash2,
  Download,
  Upload,
  ChevronRight,
  Check,
  X,
  AlertTriangle,
  HelpCircle
} from "lucide-react";
import { Link } from "react-router-dom";

export const AccountSettings = (): JSX.Element => {
  const { t, isRTL, language } = useLanguage();
  const [notifications, setNotifications] = useState({
    email: true,
    push: false,
    sms: false,
    marketing: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showFollowers: true,
    allowMessages: true
  });

  const [showModal, setShowModal] = useState<string | null>(null);
  const [tempPassword, setTempPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');

  // Generate localized path
  const getLocalizedPath = (path: string) => {
    return language === 'ar' ? `/ar${path === '/' ? '' : path}` : path;
  };

  const toggleNotification = (key: keyof typeof notifications) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const togglePrivacy = (key: keyof typeof privacy) => {
    if (key === 'profileVisibility') return; // Handle separately
    setPrivacy(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePasswordChange = () => {
    if (tempPassword !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    if (tempPassword.length < 8) {
      alert('Password must be at least 8 characters long!');
      return;
    }
    console.log('Password changed successfully');
    setShowModal(null);
    setTempPassword('');
    setConfirmPassword('');
    setCurrentPassword('');
  };

  const handleDownloadData = () => {
    console.log('Downloading user data...');
    // Simulate download
    const data = {
      profile: { name: 'Adam Ahmed', email: 'adam@example.com' },
      recipes: ['Recipe 1', 'Recipe 2'],
      activity: ['Activity 1', 'Activity 2']
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'my-account-data.json';
    a.click();
  };

  const handleImportRecipes = () => {
    console.log('Opening import dialog...');
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,.csv';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        console.log('Importing recipes from:', file.name);
        // Handle file import logic here
      }
    };
    input.click();
  };

  const handleDeleteAccount = () => {
    const confirmed = window.confirm(
      'Are you sure you want to delete your account? This action cannot be undone and will permanently delete all your data, recipes, and activity.'
    );
    if (confirmed) {
      const doubleConfirm = window.confirm(
        'This is your final warning. Deleting your account will permanently remove all your data. Type "DELETE" to confirm.'
      );
      if (doubleConfirm) {
        console.log('Account deletion initiated...');
        // Handle account deletion logic here
      }
    }
  };

  const Modal = ({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) => (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-md bg-white shadow-2xl">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">{title}</h3>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
          {children}
        </CardContent>
      </Card>
    </div>
  );
  const settingSections = [
    {
      title: t.settings.account,
      icon: User,
      items: [
        { name: language === 'ar' ? 'تعديل الملف الشخصي' : 'Edit Profile', description: language === 'ar' ? 'تحديث معلومات ملفك الشخصي' : 'Update your profile information', link: getLocalizedPath("/edit-profile"), icon: User },
        { name: t.settings.change_password, description: language === 'ar' ? 'تحديث كلمة المرور الخاصة بك' : 'Update your password', action: "password", icon: Lock, interactive: true },
        { name: t.settings.email_settings, description: language === 'ar' ? 'إدارة تفضيلات البريد الإلكتروني' : 'Manage your email preferences', action: "email", icon: Mail, interactive: true },
        { name: t.settings.two_factor_auth, description: language === 'ar' ? 'تأمين حسابك' : 'Secure your account', action: "2fa", icon: Shield, interactive: true }
      ]
    },
    {
      title: t.settings.privacy,
      icon: Shield,
      items: [
        { name: t.settings.profile_visibility, description: language === 'ar' ? 'تحكم في من يمكنه رؤية ملفك الشخصي' : 'Control who can see your profile', action: "visibility", icon: Eye, interactive: true },
        { name: language === 'ar' ? 'البيانات والخصوصية' : 'Data & Privacy', description: language === 'ar' ? 'إدارة تفضيلات البيانات الخاصة بك' : 'Manage your data preferences', action: "data", icon: Globe, interactive: true },
        { name: language === 'ar' ? 'المستخدمون المحظورون' : 'Blocked Users', description: language === 'ar' ? 'إدارة الحسابات المحظورة' : 'Manage blocked accounts', action: "blocked", icon: X, interactive: true }
      ]
    },
    {
      title: t.settings.notifications,
      icon: Bell,
      items: [
        { name: t.settings.push_notifications, description: language === 'ar' ? 'إشعارات الهاتف المحمول وسطح المكتب' : 'Mobile and desktop notifications', action: "push", icon: Smartphone, interactive: true },
        { name: t.settings.email_notifications, description: language === 'ar' ? 'تحديثات وتنبيهات البريد الإلكتروني' : 'Email updates and alerts', action: "email-notif", icon: Mail, interactive: true },
        { name: t.settings.marketing_communications, description: language === 'ar' ? 'رسائل البريد الإلكتروني الترويجية والعروض' : 'Promotional emails and offers', action: "marketing", icon: Globe, interactive: true }
      ]
    },
    {
      title: t.settings.data_storage,
      icon: Download,
      items: [
        { name: t.settings.download_data, description: language === 'ar' ? 'تحميل بيانات حسابك' : 'Download your account data', action: "download", icon: Download, interactive: true },
        { name: t.settings.import_recipes, description: language === 'ar' ? 'استيراد الوصفات من منصات أخرى' : 'Import recipes from other platforms', action: "import", icon: Upload, interactive: true },
        { name: language === 'ar' ? 'استخدام التخزين' : 'Storage Usage', description: language === 'ar' ? 'عرض استخدام التخزين الخاص بك' : 'View your storage usage', action: "storage", icon: Globe, interactive: true }
      ]
    }
  ];

  const handleItemClick = (action: string) => {
    switch (action) {
      case 'password':
        setShowModal('password');
        break;
      case 'email':
        setShowModal('email');
        break;
      case '2fa':
        setShowModal('2fa');
        break;
      case 'visibility':
        setShowModal('visibility');
        break;
      case 'data':
        setShowModal('data');
        break;
      case 'blocked':
        setShowModal('blocked');
        break;
      case 'download':
        handleDownloadData();
        break;
      case 'import':
        handleImportRecipes();
        break;
      case 'storage':
        setShowModal('storage');
        break;
      default:
        console.log('Action not implemented:', action);
    }
  };
  return (
    <div className="bg-gray-50 min-h-screen">
      <TopCreatorsSection />
      
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Settings className="w-8 h-8 text-[#22ae4b]" />
            <div>
              <div className="text-sm text-[#22ae4b] font-medium">{t.settings.account}</div>
              <h1 className="text-3xl font-bold text-gray-900">{t.settings.title}</h1>
            </div>
          </div>
          <p className="text-gray-600">{language === 'ar' ? 'إدارة إعدادات حسابك وتفضيلاتك' : 'Manage your account settings and preferences'}</p>
        </div>

        <div className="grid grid-cols-12 gap-8">
          {/* Main Settings */}
          <div className="col-span-12 lg:col-span-8">
            <div className="space-y-8">
              {settingSections.map((section, sectionIndex) => (
                <Card key={sectionIndex}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-[#22ae4b] rounded-full flex items-center justify-center">
                        <section.icon className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {section.items.map((item, itemIndex) => (
                        <div key={itemIndex}>
                          {item.link ? (
                            <Link to={item.link}>
                              <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                                <div className="flex items-center gap-4">
                                  <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                    <item.icon className="w-4 h-4 text-gray-600" />
                                  </div>
                                  <div>
                                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                    <p className="text-sm text-gray-600">{item.description}</p>
                                  </div>
                                </div>
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                              </div>
                            </Link>
                          ) : (
                            <div 
                              className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
                              onClick={() => item.interactive && item.action && handleItemClick(item.action)}
                            >
                              <div className="flex items-center gap-4">
                                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                                  <item.icon className="w-4 h-4 text-gray-600" />
                                </div>
                                <div>
                                  <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                  <p className="text-sm text-gray-600">{item.description}</p>
                                </div>
                              </div>
                              
                              {/* Toggle switches for notifications */}
                              {item.action === 'push' && (
                                <div 
                                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                                    notifications.push ? 'bg-[#22ae4b]' : 'bg-gray-300'
                                  }`}
                                  onClick={() => toggleNotification('push')}
                                >
                                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                                    notifications.push ? 'translate-x-6' : 'translate-x-0.5'
                                  } mt-0.5`} />
                                </div>
                              )}
                              
                              {item.action === 'email-notif' && (
                                <div 
                                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                                    notifications.email ? 'bg-[#22ae4b]' : 'bg-gray-300'
                                  }`}
                                  onClick={() => toggleNotification('email')}
                                >
                                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                                    notifications.email ? 'translate-x-6' : 'translate-x-0.5'
                                  } mt-0.5`} />
                                </div>
                              )}
                              
                              {item.action === 'marketing' && (
                                <div 
                                  className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                                    notifications.marketing ? 'bg-[#22ae4b]' : 'bg-gray-300'
                                  }`}
                                  onClick={() => toggleNotification('marketing')}
                                >
                                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                                    notifications.marketing ? 'translate-x-6' : 'translate-x-0.5'
                                  } mt-0.5`} />
                                </div>
                              )}
                              
                              {/* Action buttons for other items */}
                              {!item.action?.includes('notif') && !item.action?.includes('push') && !item.action?.includes('marketing') && (
                                <ChevronRight className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                          )}
                          
                          {itemIndex < section.items.length - 1 && (
                            <Separator className="ml-16" />
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Danger Zone */}
              <Card className="border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
                      <Trash2 className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-xl font-bold text-red-600">{t.settings.danger_zone}</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-red-200 bg-red-50">
                      <div>
                        <h3 className="font-semibold text-red-900">{t.settings.delete_account}</h3>
                        <p className="text-sm text-red-700">{language === 'ar' ? 'حذف حسابك وجميع البيانات نهائياً' : 'Permanently delete your account and all data'}</p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="border-red-300 text-red-600 hover:bg-red-600 hover:text-white"
                        onClick={handleDeleteAccount}
                      >
                        {t.settings.delete_account}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{t.profile.quick_actions}</h3>
                  <div className="space-y-3">
                    <Link to={getLocalizedPath("/edit-profile")}>
                      <Button className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white justify-start">
                        <User className="w-4 h-4 mr-2" />
                        {language === 'ar' ? 'تعديل الملف الشخصي' : 'Edit Profile'}
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={() => setShowModal('password')}
                    >
                      <Lock className="w-4 h-4 mr-2" />
                      {t.settings.change_password}
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start"
                      onClick={handleDownloadData}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {t.settings.download_data}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Account Info */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{language === 'ar' ? 'معلومات الحساب' : 'Account Information'}</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.profile.member_since}</span>
                      <span className="font-medium">{language === 'ar' ? 'يناير 2023' : 'January 2023'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.profile.recipes_created}</span>
                      <span className="font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{language === 'ar' ? 'إجمالي المتابعين' : 'Total followers'}</span>
                      <span className="font-medium">1,247</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">{t.profile.account_type}</span>
                      <span className="font-medium text-[#22ae4b]">{t.profile.premium}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Help & Support */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{language === 'ar' ? 'المساعدة والدعم' : 'Help & Support'}</h3>
                  <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                      <p>{language === 'ar' ? 'اتصل بفريق الدعم لأي مشاكل في الحساب' : 'Contact our support team for any account issues'}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                      <p>{language === 'ar' ? 'تحقق من الأسئلة الشائعة للأسئلة الشائعة' : 'Check our FAQ for common questions'}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-[#22ae4b] rounded-full mt-2 flex-shrink-0" />
                      <p>{language === 'ar' ? 'الإبلاغ عن الأخطاء أو اقتراح ميزات جديدة' : 'Report bugs or suggest new features'}</p>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    {language === 'ar' ? 'اتصل بالدعم' : 'Contact Support'}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      {showModal === 'password' && (
        <Modal title="Change Password" onClose={() => setShowModal(null)}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
              <Input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter current password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">New Password</label>
              <Input
                type="password"
                value={tempPassword}
                onChange={(e) => setTempPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</label>
              <Input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button 
                onClick={handlePasswordChange}
                className="flex-1 bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
              >
                Update Password
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setShowModal(null)}
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {showModal === 'email' && (
        <Modal title="Email Settings" onClose={() => setShowModal(null)}>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Recipe notifications</span>
              <div className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                notifications.email ? 'bg-[#22ae4b]' : 'bg-gray-300'
              }`} onClick={() => toggleNotification('email')}>
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  notifications.email ? 'translate-x-6' : 'translate-x-0.5'
                } mt-0.5`} />
              </div>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <span className="font-medium">Marketing emails</span>
              <div className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                notifications.marketing ? 'bg-[#22ae4b]' : 'bg-gray-300'
              }`} onClick={() => toggleNotification('marketing')}>
                <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                  notifications.marketing ? 'translate-x-6' : 'translate-x-0.5'
                } mt-0.5`} />
              </div>
            </div>
            <Button 
              onClick={() => setShowModal(null)}
              className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
            >
              Save Settings
            </Button>
          </div>
        </Modal>
      )}

      {showModal === '2fa' && (
        <Modal title="Two-Factor Authentication" onClose={() => setShowModal(null)}>
          <div className="space-y-4">
            <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <h4 className="font-medium text-green-900">2FA is currently disabled</h4>
                <p className="text-sm text-green-700">Enable 2FA to secure your account</p>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Two-factor authentication adds an extra layer of security to your account.
              </p>
              <Button className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white">
                Enable 2FA
              </Button>
            </div>
          </div>
        </Modal>
      )}

      {showModal === 'visibility' && (
        <Modal title="Profile Visibility" onClose={() => setShowModal(null)}>
          <div className="space-y-4">
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input 
                  type="radio" 
                  name="visibility" 
                  value="public"
                  checked={privacy.profileVisibility === 'public'}
                  onChange={(e) => setPrivacy(prev => ({ ...prev, profileVisibility: e.target.value }))}
                  className="text-[#22ae4b]"
                />
                <div>
                  <div className="font-medium">Public</div>
                  <div className="text-sm text-gray-600">Anyone can see your profile</div>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                <input 
                  type="radio" 
                  name="visibility" 
                  value="private"
                  checked={privacy.profileVisibility === 'private'}
                  onChange={(e) => setPrivacy(prev => ({ ...prev, profileVisibility: e.target.value }))}
                  className="text-[#22ae4b]"
                />
                <div>
                  <div className="font-medium">Private</div>
                  <div className="text-sm text-gray-600">Only followers can see your profile</div>
                </div>
              </label>
            </div>
            <Button 
              onClick={() => setShowModal(null)}
              className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
            >
              Save Changes
            </Button>
          </div>
        </Modal>
      )}

      {showModal === 'storage' && (
        <Modal title="Storage Usage" onClose={() => setShowModal(null)}>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Photos & Videos</span>
                <span className="font-medium">2.4 GB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-[#22ae4b] h-2 rounded-full" style={{ width: '60%' }} />
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Recipes & Data</span>
                <span className="font-medium">156 MB</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '20%' }} />
              </div>
              <div className="flex justify-between items-center pt-2 border-t">
                <span className="font-medium">Total Used</span>
                <span className="font-bold text-[#22ae4b]">2.6 GB / 5 GB</span>
              </div>
            </div>
            <Button 
              variant="outline"
              className="w-full"
              onClick={() => console.log('Manage storage clicked')}
            >
              Manage Storage
            </Button>
          </div>
        </Modal>
      )}

      {showModal === 'blocked' && (
        <Modal title="Blocked Users" onClose={() => setShowModal(null)}>
          <div className="space-y-4">
            <p className="text-sm text-gray-600">You haven't blocked any users yet.</p>
            <div className="text-center py-8">
              <X className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">No blocked users</p>
            </div>
          </div>
        </Modal>
      )}

      {showModal === 'data' && (
        <Modal title="Data & Privacy" onClose={() => setShowModal(null)}>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Show email publicly</span>
                <div className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                  privacy.showEmail ? 'bg-[#22ae4b]' : 'bg-gray-300'
                }`} onClick={() => togglePrivacy('showEmail')}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    privacy.showEmail ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`} />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Show followers count</span>
                <div className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                  privacy.showFollowers ? 'bg-[#22ae4b]' : 'bg-gray-300'
                }`} onClick={() => togglePrivacy('showFollowers')}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    privacy.showFollowers ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`} />
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <span className="font-medium">Allow direct messages</span>
                <div className={`w-12 h-6 rounded-full cursor-pointer transition-colors ${
                  privacy.allowMessages ? 'bg-[#22ae4b]' : 'bg-gray-300'
                }`} onClick={() => togglePrivacy('allowMessages')}>
                  <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                    privacy.allowMessages ? 'translate-x-6' : 'translate-x-0.5'
                  } mt-0.5`} />
                </div>
              </div>
            </div>
            <Button 
              onClick={() => setShowModal(null)}
              className="w-full bg-[#22ae4b] hover:bg-[#1c9a40] text-white"
            >
              Save Settings
            </Button>
          </div>
        </Modal>
      )}
      <AdSection />
    </div>
  );
};