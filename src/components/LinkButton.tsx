
import { ChevronRight, Link2 } from "lucide-react";

interface LinkButtonProps {
  href: string;
  title: string;
  subtitle?: string;
  info?: string;
}

const LinkButton = ({ href, title, subtitle, info }: LinkButtonProps) => {
  const ariaLabel = subtitle ? `${title} - ${subtitle}` : title;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative flex w-full items-center gap-4 rounded-2xl border border-white/40 bg-white/70 p-5 text-left shadow-[0_12px_30px_-24px_rgba(88,28,135,0.65)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-purple-200/70 hover:bg-white/90 hover:shadow-[0_18px_40px_-20px_rgba(88,28,135,0.8)]"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 text-white shadow-lg">
        <Link2 size={20} />
      </div>

      <div className="relative z-10 flex-1 space-y-1">
        {info && (
          <span className="inline-flex w-fit items-center rounded-full bg-purple-100 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-purple-700">
            {info}
          </span>
        )}
        <div className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-purple-700">
          {title}
        </div>
        {subtitle && (
          <div className="text-sm text-gray-500 transition-colors duration-300 group-hover:text-gray-600">
            {subtitle}
          </div>
        )}
      </div>

      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-purple-100 bg-white text-purple-500 transition-all duration-300 group-hover:border-purple-200 group-hover:bg-purple-50 group-hover:text-purple-700">
        <ChevronRight size={18} />
      </div>
    </a>
  );
};

export default LinkButton;
