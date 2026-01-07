
import { Instagram, Youtube } from "lucide-react";

interface SocialLinksProps {
  instagram?: string;
  youtube?: string;
  instagram2?: string;
}

const SocialLinks = ({ instagram, youtube, instagram2 }: SocialLinksProps) => {
  const socialLinks = [
    {
      href: instagram,
      icon: Instagram,
      label: "Instagram Elaine Pagnoncelli",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      hoverGradient: "group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-red-600"
    },
    {
      href: youtube,
      icon: Youtube,
      label: "YouTube Elaine Pagnoncelli",
      gradient: "from-red-500 to-red-600",
      hoverGradient: "group-hover:from-red-600 group-hover:to-red-700"
    },
    {
      href: instagram2,
      icon: Instagram,
      label: "Instagram Ellatem Propósito",
      gradient: "from-orange-400 via-pink-500 to-purple-500",
      hoverGradient: "group-hover:from-orange-500 group-hover:via-pink-600 group-hover:to-purple-600"
    }
  ];

  return (
    <div className="flex justify-center space-x-6 pt-6">
      {socialLinks.map((social, index) => {
        if (!social.href) return null;

        const IconComponent = social.icon;

        return (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative"
            aria-label={social.label}
          >
            <div className={`w-14 h-14 bg-gradient-to-r ${social.gradient} ${social.hoverGradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:shadow-2xl transform group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 relative overflow-hidden`}>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

              <IconComponent size={24} className="relative z-10" />
            </div>

            <div className={`absolute inset-0 w-14 h-14 bg-gradient-to-r ${social.gradient} rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
