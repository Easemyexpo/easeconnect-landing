import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-background relative z-50">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="relative flex items-center justify-between h-16 md:justify-center">
          {/* Logo */}
          <div className="flex items-center md:absolute md:left-0">
            <div className="flex items-center gap-2 md:gap-3">
              <img 
                src="/easemyexpo-logo.png" 
                alt="EaseMyExpo Logo" 
                className="w-8 h-8 md:w-10 md:h-10 object-contain"
              />
              <span className="text-logo-text font-normal text-sm md:text-base tracking-[-0.5px] mx-1">×</span>
              <img 
                src="/lovable-uploads/msm_logo.png" 
                alt="MSM Logo" 
                className="w-16 h-16 md:w-19 md:h-19 object-contain"
              />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex items-center justify-center w-8 h-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-nav-text" />
            ) : (
              <Menu className="w-6 h-6 text-nav-text" />
            )}
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            <Button variant="nav" size="nav">
              About
            </Button>
            
            <Button variant="nav" size="nav">
              Resources
            </Button>
            
            <Button variant="nav" size="nav">
              Features
            </Button>
          </div>

          {/* Desktop Right Side Actions */}
          <div className="hidden md:flex md:absolute md:right-0 items-center gap-3 lg:gap-5">
            <a href="https://ease-my-expo-chat.netlify.app/login" target="_blank" rel="noopener noreferrer">
              <Button variant="nav" size="nav">
                Login
              </Button>
            </a>
            
            <a href="https://ease-my-expo-chat.netlify.app/" target="_blank" rel="noopener noreferrer">
              <Button variant="start-free" size="start-free">
                Signup
              </Button>
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-t border-gray-200 shadow-lg">
            <div className="flex flex-col p-4 space-y-4">

              
              <Button variant="nav" size="nav" className="justify-start">
                About
              </Button>
              
              <Button variant="nav" size="nav" className="justify-start">
                Resources
              </Button>
              
              <Button variant="nav" size="nav" className="justify-start">
                Features
              </Button>

              <div className="border-t border-gray-200 pt-4 flex flex-col space-y-3">
                <a href="https://ease-my-expo-chat.netlify.app/login" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="nav" size="nav" className="justify-start w-full">
                    Login
                  </Button>
                </a>
                
                <a href="https://ease-my-expo-chat.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="start-free" size="start-free" className="w-full">
                    Signup
                  </Button>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;