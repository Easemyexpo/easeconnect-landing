import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-white-900 text-white">
      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <p className="font-geist text-gray-400 text-xs md:text-sm">
            © 2025 EaseMyExpo. All rights reserved.
          </p>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-center">
            <a href="#" className="font-geist text-gray-400 hover:text-white text-xs md:text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="font-geist text-gray-400 hover:text-white text-xs md:text-sm transition-colors">Terms of Service</a>
            <a href="#" className="font-geist text-gray-400 hover:text-white text-xs md:text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
