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
    imageSrc: "/lovable-uploads/image.png",
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
    imageSrc: "/lovable-uploads/image.png",
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
    imageSrc: "/lovable-uploads/image.png",
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
    imageSrc: "/lovable-uploads/image.png",
    imagePosition: "left",
  },
];

// Getting started steps data
const gettingStartedSteps = [];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[90px] relative pt-24">
      {/* Image copy 6 after hero section */}


      {/* Features Section */}
      <div className="flex flex-col w-full items-center gap-20 px-7 py-0 pt-20">
        <div className="flex flex-col w-full items-center gap-12">
          {/* Section Header */}
          <header className="w-full text-center">
            <div className="mx-auto max-w-[1100px] flex flex-col items-center gap-[22px]">
              <h2 className="font-bricolage text-[52px] tracking-[-2.75px] leading-[52px]">
                <span className="font-medium text-emerald-500 tracking-[-1.43px] leading-[50px]">
                  Build your connections
                </span>
                <span className="font-medium text-[#101010] tracking-[-1.43px] leading-[50px]">
                  {" "}
                  with easemyexpo
                </span>
              </h2>
              <p className="font-geist text-[32px] text-[#41464c] tracking-[-1.53px] leading-[49.7px] max-w-[930px]">
                Reduce manual work and streamline your ad tracking and
                performance analytics, so you can focus on scaling profitably.
              </p>
            </div>
          </header>

          {/* Features Grid */}
          <div className="flex flex-wrap w-full max-w-[1275px] gap-[52px_50px] justify-center">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex w-full max-w-[1275px] items-center gap-[50px]"
              >
                {feature.imagePosition === "left" && (
                  <Card className="relative w-full max-w-[612px] h-[387px] rounded-[21.46px] overflow-hidden border-0">
                    <CardContent className="p-0">
                      <div className="relative w-full h-full flex items-center justify-center p-6">
                        <div className="relative max-w-[520px] w-full">
                          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 to-emerald-10 rounded-2xl"></div>
                          <img
                            src={feature.imageSrc}
                            alt={feature.title}
                            className="relative w-full h-auto rounded-2xl object-contain translate-x-[10%] translate-y-[10%]"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}

                <div className="flex flex-col w-full max-w-[612px] items-start gap-12">
                  <div className="w-full">
                    <h3 className="font-bricolage font-medium text-[#101010] text-[32px] tracking-[-1.29px] leading-[41.9px] mb-4">
                      {feature.title}
                    </h3>
                    <p className="font-geist text-[#41464c] text-[17.5px] tracking-[-0.77px] leading-[25.1px] max-w-[518px]">
                      {feature.description}
                    </p>
                  </div>

                  <ul className="w-full space-y-4">
                    {feature.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-[18px]">
                        <CheckIcon className="w-[21px] h-[21px] mt-0.5 text-emerald-500" />
                        <span className="font-geist text-[#41464c] text-[17.5px] tracking-[-0.77px] leading-[25.1px]">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                                {feature.imagePosition === "right" && (
                  <Card className="relative w-full max-w-[612px] h-[387px] rounded-[21.46px] overflow-hidden border-0">
                    <CardContent className="p-0">
                      <div className="relative w-full h-full flex items-center justify-center p-6">
                        <div className="relative max-w-[520px] w-full">
                          <div className="absolute inset-0 bg-gradient-to-b from-emerald-500 to-emerald-10 rounded-2xl"></div>
                          <img
                            src={feature.imageSrc}
                            alt={feature.title}
                            className="relative w-full h-auto rounded-2xl object-contain translate-x-[10%] translate-y-[10%]"
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
      <div className="flex flex-col min-h-[350px] w-full items-center pt-16 pb-24 px-[60px] relative">
        <div className="flex flex-col max-w-[1000px] w-full items-center relative">
          <div className="flex items-center justify-between w-full relative">
            <img
              className="w-[240px] h-[240px] object-contain"
              alt="Left decoration"
              src="/lovable-uploads/image copy 2.png"
            />
            
            <div className="flex flex-col items-center text-center">
              <h2 className="font-bricolage font-semibold text-black text-[48px] tracking-[-1.44px] leading-[52px]">
                More collaboration
              </h2>
              <h2 className="font-bricolage font-semibold text-black text-[48px] tracking-[-1.44px] leading-[52px]">
                better communication
              </h2>
            </div>

            <img
              className="w-[240px] h-[240px] object-contain"
              alt="Right decoration"
              src="/lovable-uploads/image copy.png"
            />
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="w-full relative">
        <div className="relative w-full max-w-[1200px] mx-auto px-6">
          <img
            className="absolute w-[120px] h-[100px] top-[140px] right-[80px] z-40"
            alt="Arrow pointing to cards"
            src="/lovable-uploads/image copy 3.png"
          />

          <div className="flex flex-col w-full items-center gap-[60px]">
            {/* Section Header */}
            <header className="w-full overflow-hidden">
              <div className="flex flex-col items-center gap-[20px] w-full mx-auto text-center">
                <h2 className="font-bricolage font-medium text-[42px] text-center tracking-[-2.0px] leading-[45px]">
                  <span className="text-emerald-500 tracking-[-1.4px]">
                    Get Started{" "}
                  </span>
                  <span className="text-black tracking-[-1.4px]">
                    in 3 easy steps
                  </span>
                </h2>
                <p className="font-geist text-[#41464c] text-[24px] text-center tracking-[-0.9px] leading-[32px] max-w-[750px] mx-auto">
                  Reduce manual work and streamline your ad tracking and
                  performance analytics, so you can focus on scaling profitably.
                </p>
              </div>
            </header>
            
            {/* Image copy 4 placed below the description */}
            <div className="w-full flex justify-center mb-16">
              <img
                className="w-full max-w-[1000px] h-auto object-contain"
                alt="Process illustration"
                src="/lovable-uploads/image copy 4.png"
              />
            </div>
            
            {/* Testimonial Card below image copy 4 */}
            <div className="w-full flex justify-center mb-32">
              <div className="flex items-center bg-white p-6 rounded-lg max-w-4xl mx-auto">
                {/* Profile Image Section */}
                <div className="flex-shrink-0 mr-8">
                  <div className="w-32 h-32 rounded-lg overflow-hidden">
                    <img 
                      src="/lovable-uploads/guy.webp" 
                      alt="Anand Malhotra"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="flex-1 text-black">
                  {/* Testimonial Quote */}
                  <blockquote className="text-2xl font-medium leading-relaxed mb-6">
                    "Easemyexpo has transformed how our team connects, in exhibitions. It has made our work more efficient."
                  </blockquote>
                  
                  {/* Attribution */}
                  <div className="text-gray-600">
                    <p className="font-medium text-base">Anand Malhotra, Gravity Technologies</p>
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
