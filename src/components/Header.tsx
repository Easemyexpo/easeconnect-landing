import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <nav className="w-full bg-background border-b">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="relative flex items-center justify-center h-20">
          {/* Logo */}
          <div className="absolute left-0 flex items-center">
            <div className="flex items-center gap-3">
              <div className="relative w-8 h-8">
                <div className="absolute w-2 h-5 bg-primary rounded-sm transform rotate-12 top-1 left-1"></div>
                <div className="absolute w-1 h-3 bg-primary rounded-sm top-3 left-0"></div>
              </div>
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