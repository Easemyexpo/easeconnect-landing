import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="w-full bg-background">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="relative flex items-center justify-center h-16">
          {/* Logo */}
          <div className="absolute left-0 flex items-center">
            <div className="flex items-center gap-3">
              <img 
                src="/easemyexpo-logo.png" 
                alt="EaseMyExpo Logo" 
                className="w-8 h-8 object-contain"
              />
              <span className="text-logo-text font-normal text-base tracking-[-0.5px] font-['Bricolage_Grotesque',_'Inter',_sans-serif]">
                Easemyexpo
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-1">
              <Button variant="nav" size="nav">
                Get started
              </Button>
              <ChevronDown className="w-[18px] h-[18px] text-nav-text" strokeWidth={1.5} />
            </div>
            
            <Button variant="nav" size="nav">
              Docs
            </Button>
            
            <Button variant="nav" size="nav">
              Blog
            </Button>
            
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

          {/* Right Side Actions */}
          <div className="absolute right-0 flex items-center gap-5">
            <Button variant="nav" size="nav">
              Login
            </Button>
            
            <Button variant="start-free" size="start-free">
              Start for free
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;