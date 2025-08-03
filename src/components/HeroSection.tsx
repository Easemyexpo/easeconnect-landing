import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white to-emerald-50">
      {/* Decorative green circles around the interface */}
      <div className="absolute top-1/2 left-20 w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg transform -translate-y-1/2">
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
        </svg>
      </div>
      
      <div className="absolute top-1/3 right-16 w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M8 16H16V14H8V16ZM8 12H16V10H8V12ZM14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.89 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-1/3 left-12 w-20 h-20 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 12C10.2 12 12 13.8 12 16C12 18.2 10.2 20 8 20C5.8 20 4 18.2 4 16C4 13.8 5.8 12 8 12Z"/>
        </svg>
      </div>
      
      <div className="absolute bottom-1/4 right-12 w-24 h-24 bg-emerald-400 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.1 12.5C3.71 13.19 4.21 14 5 14H6V16C6 18.21 7.79 20 10 20H13C15.21 20 17 18.21 17 16V14H18C18.79 14 19.29 13.19 18.9 12.5L17 9.66C16.81 5.95 13.77 3 13 3Z"/>
        </svg>
      </div>

      <div className="max-w-[1282px] mx-auto px-4 pt-20">
        {/* Hero Text Section */}
        <div className="text-center mb-16">
          <h1 className="font-bricolage font-semibold text-[68.825px] leading-[72px] tracking-[-2.688px] text-hero-text mb-8">
            Explore, Connect, Build<br />
            Connections built right!
          </h1>
          
          <p className="max-w-[918px] mx-auto font-geist font-normal text-[21.5px] leading-[38px] text-hero-subtitle mb-12">
            EaseMyExpo helps you connect, discover, and keep the conversation going—before, during, and after the event. Join a community built for exhibitors, visitors, and everything in between.
          </p>
          
          <Button variant="hero" size="hero" className="font-semibold">
            Get Started →
          </Button>
        </div>

        {/* Interface Mockup Section */}
        <div className="relative mt-20 mb-20">
          {/* Main interface mockup with your expo booth image */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-5xl mx-auto">
            {/* Your uploaded expo interface image */}
            <img 
              src="/lovable-uploads/54746e26-00d4-40f0-bbea-7330237c7027.png" 
              alt="EaseMyExpo interface with expo booth showcase" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade to green */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-emerald-200 via-emerald-100 to-transparent"></div>
      
      {/* Side gradient fades */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-emerald-100 to-transparent"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-emerald-100 to-transparent"></div>
    </section>
  );
};

export default HeroSection;