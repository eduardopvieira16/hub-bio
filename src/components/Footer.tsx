
const Footer = () => {
  return (
    <footer className="text-center text-sm text-gray-400 pt-8 border-t border-gray-200/30">
      <p className="hover:text-gray-600 transition-colors duration-300">
        Feito com ❤️ por{" "}
        <a
          href="https://github.com/eduardopvieira16"
          target="_blank"
          rel="noopener noreferrer"
          className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text hover:from-purple-700 hover:to-pink-700 font-semibold transition-all duration-300 hover:underline"
        >
          Eduardo Vieira
        </a>
      </p>
    </footer>
  );
};

export default Footer;
