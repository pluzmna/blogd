import React from 'react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { 
  MessageCircle, 
  Mic, 
  Tv, 
  MessageSquare, 
  Youtube, 
  MessageSquareMore, 
  Sticker,
  Palette,
  Github,
  Archive,
  Mail
} from 'lucide-react';

const ProfilePage = () => {
  const socialLinks = [
    {
      name: "E-posta",
      url: "mailto:dgiymat@gmail.com",
      icon: Mail,
      color: "from-red-600 to-pink-600"
    },
    {
      name: "Telegram Bot",
      url: "https://telegram.me/tavsiyeebot/pluzman",
      icon: MessageCircle,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Sesle Chat",
      url: "https://www.seslee.com/join.php?code=9963c3d170aa639435be993f6e9b7d5e",
      icon: Mic,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Twitch TV",
      url: "https://www.twitch.tv/pluzfans",
      icon: Tv,
      color: "from-purple-500 to-violet-500"
    },
    {
      name: "Reddit",
      url: "https://www.reddit.com/user/CommunicationLevel72/",
      icon: MessageSquare,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@plusjell6172/posts",
      icon: Youtube,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Geri Bildirim",
      url: "https://github.com/pluzmna/blog/discussions",
      icon: MessageSquareMore,
      color: "from-gray-600 to-gray-800"
    },
    {
      name: "Sticker Pack",
      url: "https://t.me/addstickers/t_me_addstickers_Kosmos_by_fStikBot",
      icon: Sticker,
      color: "from-yellow-500 to-amber-500"
    },
    {
      name: "Tema Paketi",
      url: "https://t.me/addtheme/pluzman2",
      icon: Palette,
      color: "from-indigo-500 to-blue-600"
    },
    {
      name: "GitHub Sayfam",
      url: "https://github.com/pluzmna",
      icon: Github,
      color: "from-gray-700 to-black"
    },
    {
      name: "Archive.org",
      url: "https://archive.org/details/@_plus_jell",
      icon: Archive,
      color: "from-teal-500 to-cyan-600"
    }
  ];

  const handleProfileClick = () => {
    window.open('https://t.me/pluzman', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="absolute top-20 left-20 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
      
      <Card className="w-full max-w-md bg-black/30 backdrop-blur-lg border border-gray-700/50 shadow-2xl relative z-10">
        <div className="p-8 text-center">
          {/* Profile Image */}
          <div 
            className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-gray-400/50 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-110 hover:border-gray-300/70 hover:shadow-xl"
            onClick={handleProfileClick}
          >
            <img
              src="https://avatars.githubusercontent.com/u/194362840?v=4"
              alt="pluzman"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Info */}
          <h1 className="text-3xl font-bold text-gray-100 mb-2">pluzman</h1>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Dijital dünyada paylaşım ve etkileşim için tüm bağlantılarım burada
          </p>

          {/* Social Links */}
          <div className="space-y-3">
            {socialLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={index}
                  onClick={() => {
                    if (link.url.startsWith('mailto:')) {
                      window.location.href = link.url;
                    } else {
                      window.open(link.url, '_blank', 'noopener,noreferrer');
                    }
                  }}
                  className={`w-full h-14 bg-gradient-to-r ${link.color} hover:shadow-lg hover:scale-105 transition-all duration-300 text-white border-0 font-medium group relative overflow-hidden`}
                  variant="default"
                >
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-start w-full relative z-10">
                    <IconComponent className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-left">{link.name}</span>
                  </div>
                </Button>
              );
            })}
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/60 text-sm">
              © 2025 pluzman
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProfilePage;