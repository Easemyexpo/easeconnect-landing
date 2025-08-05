import { CheckIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "./ui/card";

// Feature data for the main content section
const features = [
  {
    title: "Smart Matchmaking",
    description:
      "Automatically suggest exhibitors and attendees based on your interests and past interactions.",
    benefits: [
      "AI-driven recommendations based on your profile and interests",
      'Personalized "you may like" suggestions in your feed',
      "Instant prompts to introduce yourself",
    ],
    imageSrc: "/lovable-uploads/smartmatch.png",
    imagePosition: "right",
  },
  {
    title: "Join Expo Communities",
    description:
      "Effortlessly join topic-focused expo communities to chat, ask questions, and network before, during, and after the event.",
    benefits: [
      "Topic-focused communities for targeted networking",
      "Pre-event, during-event, and post-event engagement",
      "Easy chat and Q&A functionality",
    ],
    imageSrc: "/lovable-uploads/communities.png",
    imagePosition: "left",
  },
  {
    title: "Instant Brochure Downloads",
    description:
      "One-click download of all exhibitor brochures and catalogs—no extra apps or sign-ups required.",
    benefits: [
      "One-click download functionality",
      "No additional apps or registrations needed",
      "Access to all exhibitor materials instantly",
    ],
    imageSrc: "/lovable-uploads/download.png",
    imagePosition: "right",
  },
  {
    title: "Chat & Meeting Scheduler",
    description:
      "Message anyone and lock in a time slot without endless back-and-forth.",
    benefits: [
      "Direct messaging with attendees and exhibitors",
      "Integrated meeting scheduler",
      "Eliminate scheduling back-and-forth",
    ],
    imageSrc: "/lovable-uploads/chat.png",
    imagePosition: "left",
  },
];

// Getting started steps data
const gettingStartedSteps = [];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[60px] md:gap-[90px] relative pt-12 md:pt-24">
      {/* Image copy 6 after hero section */}


      {/* Features Section */}
      <div className="flex flex-col w-full items-center gap-12 md:gap-20 px-4 md:px-7 py-0 pt-12 md:pt-20">
        <div className="flex flex-col w-full items-center gap-8 md:gap-12">
          {/* Section Header */}
          <header className="w-full text-center">
            <div className="mx-auto max-w-[1100px] flex flex-col items-center gap-[16px] md:gap-[22px] px-4">
              <h2 className="font-bricolage text-[28px] md:text-[42px] lg:text-[52px] tracking-[-1.5px] md:tracking-[-2.75px] leading-[32px] md:leading-[42px] lg:leading-[52px]">
                <span className="font-medium text-emerald-500 tracking-[-1.0px] md:tracking-[-1.43px] leading-[32px] md:leading-[42px] lg:leading-[50px]">
                  Build your connections
                </span>
                <span className="font-medium text-[#101010] tracking-[-1.0px] md:tracking-[-1.43px] leading-[32px] md:leading-[42px] lg:leading-[50px]">
                  {" "}
                  with easemyexpo
                </span>
              </h2>
              <p className="font-geist text-[18px] md:text-[24px] lg:text-[32px] text-[#41464c] tracking-[-0.8px] md:tracking-[-1.2px] lg:tracking-[-1.53px] leading-[24px] md:leading-[32px] lg:leading-[49.7px] max-w-[930px]">
                Reduce manual work and streamline your ad tracking and
                performance analytics, so you can focus on scaling profitably.
              </p>
            </div>
          </header>

          {/* Features Grid */}
          <div className="flex flex-col lg:flex-wrap w-full max-w-[1275px] gap-[32px] md:gap-[42px] lg:gap-[52px_50px] justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col lg:flex-row w-full max-w-[1275px] items-center gap-[30px] md:gap-[40px] lg:gap-[50px]"
              >
                {feature.imagePosition === "left" && (
                  <Card className="relative w-full max-w-[400px] lg:max-w-[612px] h-[250px] md:h-[320px] lg:h-[387px] rounded-[16px] lg:rounded-[21.46px] overflow-hidden border-0 order-1 lg:order-none">
                    <CardContent className="p-0">
                      <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4 lg:p-6">
                        <div className="relative max-w-[320px] md:max-w-[420px] lg:max-w-[520px] w-full">
                          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 to-emerald-10 rounded-xl lg:rounded-2xl"></div>
                          <img
                            src={feature.imageSrc}
                            alt={feature.title}
                            className="relative w-full h-auto rounded-xl lg:rounded-2xl object-contain translate-x-[5%] md:translate-x-[8%] lg:translate-x-[10%] translate-y-[5%] md:translate-y-[8%] lg:translate-y-[10%]"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex flex-col w-full max-w-[612px] items-start gap-6 md:gap-8 lg:gap-12 order-2 lg:order-none">
                  <div className="w-full">
                    <h3 className="font-bricolage font-medium text-[#101010] text-[24px] md:text-[28px] lg:text-[32px] tracking-[-1.0px] md:tracking-[-1.2px] lg:tracking-[-1.29px] leading-[28px] md:leading-[32px] lg:leading-[41.9px] mb-3 md:mb-4">
                      {feature.title}
                    </h3>
                    <p className="font-geist text-[#41464c] text-[15px] md:text-[16px] lg:text-[17.5px] tracking-[-0.6px] md:tracking-[-0.7px] lg:tracking-[-0.77px] leading-[20px] md:leading-[22px] lg:leading-[25.1px] max-w-[518px]">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="w-full space-y-3 md:space-y-4">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-[12px] md:gap-[15px] lg:gap-[18px]">
                        <CheckIcon className="w-[18px] md:w-[20px] lg:w-[21px] h-[18px] md:h-[20px] lg:h-[21px] mt-0.5 text-emerald-500 flex-shrink-0" />
                        <span className="font-geist text-[#41464c] text-[15px] md:text-[16px] lg:text-[17.5px] tracking-[-0.6px] md:tracking-[-0.7px] lg:tracking-[-0.77px] leading-[20px] md:leading-[22px] lg:leading-[25.1px]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {feature.imagePosition === "right" && (
                  <Card className="relative w-full max-w-[400px] lg:max-w-[612px] h-[250px] md:h-[320px] lg:h-[387px] rounded-[16px] lg:rounded-[21.46px] overflow-hidden border-0 order-1 lg:order-none">
                    <CardContent className="p-0">
                      <div className="relative w-full h-full flex items-center justify-center p-3 md:p-4 lg:p-6">
                        <div className="relative max-w-[320px] md:max-w-[420px] lg:max-w-[520px] w-full">
                          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 to-emerald-10 rounded-xl lg:rounded-2xl"></div>
                          <img
                            src={feature.imageSrc}
                            alt={feature.title}
                            className="relative w-full h-auto rounded-xl lg:rounded-2xl object-contain translate-x-[5%] md:translate-x-[8%] lg:translate-x-[10%] translate-y-[5%] md:translate-y-[8%] lg:translate-y-[10%]"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <div className="flex flex-col min-h-[250px] md:min-h-[300px] lg:min-h-[350px] w-full items-center pt-8 md:pt-12 lg:pt-16 pb-12 md:pb-18 lg:pb-24 px-[20px] md:px-[40px] lg:px-[60px] relative">
        <div className="flex flex-col max-w-[1000px] w-full items-center relative">
          <div className="flex flex-col md:flex-row items-center justify-between w-full relative gap-6 md:gap-4">
            <img
              className="w-[120px] md:w-[180px] lg:w-[240px] h-[120px] md:h-[180px] lg:h-[240px] object-contain order-1 md:order-none"
              alt="Left decoration"
              src="/lovable-uploads/image copy 2.png"
            />
            
            <div className="flex flex-col items-center text-center order-2 md:order-none">
              <h2 className="font-bricolage font-semibold text-black text-[28px] md:text-[38px] lg:text-[48px] tracking-[-1.0px] md:tracking-[-1.2px] lg:tracking-[-1.44px] leading-[32px] md:leading-[42px] lg:leading-[52px]">
                More collaboration
              </h2>
              <h2 className="font-bricolage font-semibold text-black text-[28px] md:text-[38px] lg:text-[48px] tracking-[-1.0px] md:tracking-[-1.2px] lg:tracking-[-1.44px] leading-[32px] md:leading-[42px] lg:leading-[52px]">
                better communication
              </h2>
            </div>

            <img
              className="w-[120px] md:w-[180px] lg:w-[240px] h-[120px] md:h-[180px] lg:h-[240px] object-contain order-3 md:order-none"
              alt="Right decoration"
              src="/lovable-uploads/image copy.png"
            />
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="w-full relative">
        <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-6">
          <img
            className="absolute w-[80px] md:w-[100px] lg:w-[120px] h-[70px] md:h-[85px] lg:h-[100px] top-[100px] md:top-[120px] lg:top-[140px] right-[40px] md:right-[60px] lg:right-[80px] z-40 hidden md:block"
            alt="Arrow pointing to cards"
            src="/lovable-uploads/image copy 3.png"
          />

          <div className="flex flex-col w-full items-center gap-[40px] md:gap-[50px] lg:gap-[60px]">
            {/* Section Header */}
            <header className="w-full overflow-hidden">
              <div className="flex flex-col items-center gap-[16px] md:gap-[18px] lg:gap-[20px] w-full mx-auto text-center px-4">
                <h2 className="font-bricolage font-medium text-[28px] md:text-[35px] lg:text-[42px] text-center tracking-[-1.4px] md:tracking-[-1.7px] lg:tracking-[-2.0px] leading-[32px] md:leading-[38px] lg:leading-[45px]">
                  <span className="text-emerald-500 tracking-[-1.0px] md:tracking-[-1.2px] lg:tracking-[-1.4px]">
                    Get Started{" "}
                  </span>
                  <span className="text-black tracking-[-1.0px] md:tracking-[-1.2px] lg:tracking-[-1.4px]">
                    in 3 easy steps
                  </span>
                </h2>
                <p className="font-geist text-[#41464c] text-[16px] md:text-[20px] lg:text-[24px] text-center tracking-[-0.6px] md:tracking-[-0.75px] lg:tracking-[-0.9px] leading-[22px] md:leading-[27px] lg:leading-[32px] max-w-[750px] mx-auto">
                  Reduce manual work and streamline your ad tracking and
                  performance analytics, so you can focus on scaling profitably.
                </p>
              </div>
            </header>
            
            {/* Image copy 4 placed below the description */}
            <div className="w-full flex justify-center mb-8 md:mb-12 lg:mb-16">
              <img
                className="w-full max-w-[600px] md:max-w-[800px] lg:max-w-[1000px] h-auto object-contain"
                alt="Process illustration"
                src="/lovable-uploads/image copy 4.png"
              />
            </div>
            
            {/* Testimonial Card below image copy 4 */}
            <div className="w-full flex justify-center mb-16 md:mb-24 lg:mb-32">
              <div className="flex flex-col md:flex-row items-center bg-white p-4 md:p-6 rounded-lg max-w-4xl mx-auto gap-4 md:gap-0">
                {/* Profile Image Section */}
                <div className="flex-shrink-0 md:mr-8">
                  <div className="w-24 md:w-32 h-24 md:h-32 rounded-lg overflow-hidden mx-auto md:mx-0">
                    <img 
                      src="/lovable-uploads/guy.webp" 
                      alt="Anand Malhotra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-black text-center md:text-left">
                  {/* Testimonial Quote */}
                  <blockquote className="text-lg md:text-xl lg:text-2xl font-medium leading-relaxed mb-4 md:mb-6">
                    "Easemyexpo has transformed how our team connects, in exhibitions. It has made our work more efficient."
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="text-gray-600">
                    <p className="font-medium text-sm md:text-base">Anand Malhotra, Gravity Technologies</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image copy 5 below testimonial */}


          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
