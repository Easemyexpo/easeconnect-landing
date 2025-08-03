import { Button } from "@/components/ui/button";
import expoBooth from "@/assets/expo-booth.png";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-b from-white to-emerald-50">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-40 right-10 w-24 h-24 bg-emerald-300 rounded-full opacity-15 blur-lg"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 bg-emerald-500 rounded-full opacity-10 blur-2xl"></div>
      
      <div className="max-w-[1282px] mx-auto px-4 pt-16">
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
          {/* Green decorative icons around the interface */}
          <div className="absolute -left-20 top-10 w-16 h-16 bg-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"/>
            </svg>
          </div>
          
          <div className="absolute -right-20 top-20 w-16 h-16 bg-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V7H9V9H3V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V9ZM7 15V13H17V15H7Z"/>
            </svg>
          </div>
          
          <div className="absolute -left-24 bottom-10 w-16 h-16 bg-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16 4C18.2 4 20 5.8 20 8C20 10.2 18.2 12 16 12C13.8 12 12 10.2 12 8C12 5.8 13.8 4 16 4ZM8 12C10.2 12 12 13.8 12 16C12 18.2 10.2 20 8 20C5.8 20 4 18.2 4 16C4 13.8 5.8 12 8 12Z"/>
            </svg>
          </div>
          
          <div className="absolute -right-16 bottom-0 w-16 h-16 bg-emerald-400 rounded-xl flex items-center justify-center shadow-lg">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13 3C9.23 3 6.19 5.95 6 9.66L4.1 12.5C3.71 13.19 4.21 14 5 14H6V16C6 18.21 7.79 20 10 20H13C15.21 20 17 18.21 17 16V14H18C18.79 14 19.29 13.19 18.9 12.5L17 9.66C16.81 5.95 13.77 3 13 3Z"/>
            </svg>
          </div>

          {/* Main interface mockup with expo booth image */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden max-w-4xl mx-auto">
            {/* Interface header */}
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 bg-white rounded-md px-4 py-2 text-sm text-gray-500">
                  easemyexpo.com
                </div>
              </div>
            </div>
            
            {/* Interface content with expo booth image */}
            <div className="p-6">
              <img 
                src={expoBooth} 
                alt="Expo booth showcase" 
                className="w-full h-80 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-emerald-100 to-transparent"></div>
    </section>
  );
};

export default HeroSection;