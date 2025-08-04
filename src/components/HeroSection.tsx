import { Button } from "@/components/ui/button";
import { Sparkles, MessageCircleMore, Users, Megaphone } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] overflow-hidden bg-white">
      {/* First Icon - Sparkles (Top Left) - Hidden on mobile */}
      <div 
        className="absolute hidden lg:block"
        style={{
          width: '84.6px',
          height: '84.99px',
          left: 'calc(50% - 520px)',
          top: 'calc(50% - 100px)',
          transform: 'matrix(0.98, -0.22, 0.21, 0.98, 0, 0)',
          zIndex: 20
        }}
      >
        {/* Background container */}
        <div 
          className="absolute"
          style={{
            width: '84.6px',
            height: '84.99px',
            background: '#FFFFFF',
            border: '0.845849px solid #D5D2C9',
            boxShadow: '0px 5.07509px 16.917px rgba(0, 0, 0, 0.1)',
            borderRadius: '20.3004px',
          }}
        />
        {/* Green background */}
        <div 
          className="absolute"
          style={{
            width: '76.14px',
            height: '76.49px',
            left: '4.23px',
            top: '4.25px',
            background: '#10B981',
            borderRadius: '16.917px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Sparkles 
            className="text-white" 
            size={30}
            strokeWidth={3}
          />
        </div>
      </div>
      
      {/* Second Icon - MessageCircleMore (Bottom Left) - Hidden on mobile */}
      <div 
        className="absolute hidden lg:block"
        style={{
          width: '84.02px',
          height: '84.02px',
          left: '20%',
          top: '65%',
          transform: 'rotate(10.9deg)',
          zIndex: 20
        }}
      >
        {/* Background container */}
        <div 
          className="absolute"
          style={{
            width: '84.02px',
            height: '84.02px',
            background: '#FFFFFF',
            border: '0.845849px solid #D5D2C9',
            boxShadow: '0px 5.07509px 16.917px rgba(0, 0, 0, 0.1)',
            borderRadius: '17.8358px',
            transform: 'rotate(10.9deg)',
          }}
        />
        {/* Green background */}
        <div 
          className="absolute"
          style={{
            width: '75.6px',
            height: '75.6px',
            left: '4.21px',
            top: '4.21px',
            background: '#10B981',
            borderRadius: '15.15px',
            transform: 'rotate(10.9deg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <MessageCircleMore 
            className="text-white" 
            size={35}
            strokeWidth={2.5}
          />
        </div>
      </div>
      
      {/* Third Icon - Users (Top Right) - Hidden on mobile */}
      <div 
        className="absolute hidden lg:block"
        style={{
          width: '84.64px',
          height: '84.94px',
          right: 'calc(50% - 520px)',
          top: 'calc(50% - 120px)',
          transform: 'matrix(0.93, -0.38, 0.38, 0.93, 0, 0)',
          zIndex: 20
        }}
      >
        {/* Background container */}
        <div 
          className="absolute"
          style={{
            width: '84.64px',
            height: '84.94px',
            background: '#FFFFFF',
            border: '0.845849px solid #D5D2C9',
            boxShadow: '0px 5.07509px 16.917px rgba(0, 0, 0, 0.1)',
            borderRadius: '20.3004px',
            left: '0px',
            top: '0px',
          }}
        />
        {/* Green background */}
        <div 
          className="absolute"
          style={{
            width: '76.18px',
            height: '76.45px',
            left: '4.23px',
            top: '4.25px',
            background: '#10B981',
            borderRadius: '16.917px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Users 
            className="text-white" 
            size={30}
            strokeWidth={3}
          />
        </div>
      </div>
      
      {/* Fourth Icon - Megaphone (Bottom Right) - Hidden on mobile */}
      <div 
        className="absolute hidden lg:block"
        style={{
          width: '84.6px',
          height: '84.99px',
          right: '12%',
          top: '70%',
          transform: 'matrix(0.99, 0.16, -0.16, 0.99, 0, 0)',
          zIndex: 20
        }}
      >
        {/* Background container */}
        <div 
          className="absolute"
          style={{
            width: '84.6px',
            height: '84.99px',
            background: '#FFFFFF',
            border: '0.845849px solid #D5D2C9',
            boxShadow: '0px 5.07509px 16.917px rgba(0, 0, 0, 0.1)',
            borderRadius: '20.3004px',
          }}
        />
        {/* Green background */}
        <div 
          className="absolute"
          style={{
            width: '76.14px',
            height: '76.49px',
            left: '4.85px',
            top: '4.87px',
            background: '#10B981',
            borderRadius: '16.917px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Megaphone 
            className="text-white" 
            size={30}
            strokeWidth={3}
          />
        </div>
      </div>

      {/* Green fade from bottom of hero to half of interface image */}
      <div className="absolute bottom-0 left-0 right-0 h-[50vh] md:h-[75vh] bg-gradient-to-t from-emerald-200/70 via-emerald-100/40 to-transparent pointer-events-none"></div>

      <div className="max-w-[1282px] mx-auto px-4 pt-8 md:pt-16 relative z-10">
        {/* Hero Text Section with 3D perspective grid background */}
        <div className="text-center mb-8 md:mb-12 relative">
          {/* 3D perspective grid background - Hidden on mobile */}
          <div 
            className="absolute opacity-[0.25] pointer-events-none hidden md:block"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.6) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.6) 1px, transparent 1px)
              `,
              backgroundSize: '30px 30px',
              left: '0%',
              right: '0%',
              top: '15%',
              bottom: '-10%',
              position: 'absolute',
              transform: 'perspective(800px) rotateX(45deg)',
              transformOrigin: 'center top',
              maskImage: `
                linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent),
                linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 85%, transparent)
              `,
              WebkitMaskImage: `
                linear-gradient(to right, transparent, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, transparent),
                linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.3) 85%, transparent)
              `,
              maskComposite: 'intersect',
              WebkitMaskComposite: 'source-in'
            }}
          ></div>
          
          <h1 className="font-bricolage font-semibold text-[32px] md:text-[48px] lg:text-[58px] leading-[36px] md:leading-[52px] lg:leading-[62px] tracking-[-1.5px] md:tracking-[-2.0px] lg:tracking-[-2.3px] text-hero-text mb-4 md:mb-6 relative z-10 px-4">
            Explore, Connect, Build<br />
            Connections built right!
          </h1>
          
          <p className="max-w-[900px] mx-auto font-geist font-normal text-[16px] md:text-[18px] lg:text-[19px] leading-[24px] md:leading-[28px] lg:leading-[34px] text-hero-subtitle mb-6 md:mb-8 relative z-10 px-4">
            EaseMyExpo helps you connect, discover, and keep the conversation going—before, during, <br className="hidden md:block" />
            and after the event. Join a community built for exhibitors, visitors, and everything in between.
          </p>
          
          <a href="https://app.easemyexpo.in/" target="_blank" rel="noopener noreferrer">
            <Button variant="hero" size="hero" className="font-semibold relative z-10 text-sm md:text-base">
              Get Started →
            </Button>
          </a>
        </div>

        {/* Interface Mockup Section */}
        <div className="relative mt-8 md:mt-12 mb-8 md:mb-12">
          {/* Main interface mockup with your expo booth image */}
          <div className="relative bg-white rounded-[1.5rem] md:rounded-[2.5rem] shadow-2xl border-[8px] md:border-[16px] border-emerald-500 overflow-hidden max-w-4xl mx-auto">
            {/* Your uploaded expo interface image */}
            <img 
              src="/lovable-uploads/54746e26-00d4-40f0-bbea-7330237c7027.png" 
              alt="EaseMyExpo interface with expo booth showcase" 
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
