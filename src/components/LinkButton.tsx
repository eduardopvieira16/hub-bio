
interface LinkButtonProps {
  href: string;
  title: string;
  subtitle?: string;
}

const LinkButton = ({ href, title, subtitle }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-6 text-center hover:bg-white hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:scale-[1.02] hover:-translate-y-1 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      <div className="relative z-10">
        <div className="font-bold text-lg text-gray-800 mb-1 group-hover:text-purple-700 transition-colors duration-300">
          {title}
        </div>
        {subtitle && (
          <div className="text-sm text-gray-500 group-hover:text-gray-600 transition-colors duration-300">
            {subtitle}
          </div>
        )}
      </div>

      <div className="absolute top-3 right-3 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </a>
  );
};

export default LinkButton;
