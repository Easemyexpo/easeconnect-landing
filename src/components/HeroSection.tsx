import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-[1282px] mx-auto">
        <div className="relative w-full h-[337px] flex flex-col items-center">
          {/* Main content container */}
          <div className="relative w-full h-[246px]">
            {/* Main headline */}
            <h1 className="absolute top-0 left-0 w-full h-[145px] font-bricolage font-semibold text-[68.825px] leading-[72px] text-center tracking-[-2.688px] text-hero-text">
              Explore, Connect, Build<br />
              Connections built right!
            </h1>
            
            {/* Subtitle */}
            <p className="absolute top-[157px] left-1/2 transform -translate-x-1/2 w-[918px] h-[76px] font-geist font-normal text-[21.5px] leading-[38px] text-center text-hero-subtitle">
              EaseMyExpo helps you connect, discover, and keep the conversation going—before, during, and after the event. Join a community built for exhibitors, visitors, and everything in between.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="absolute top-[270px] left-1/2 transform -translate-x-1/2">
            <Button variant="hero" size="hero" className="w-[175px] font-semibold">
              Get Started →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;