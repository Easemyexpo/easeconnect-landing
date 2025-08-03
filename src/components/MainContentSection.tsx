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
const gettingStartedSteps = [
  {
    title: "Chat and Collaboration",
    description: "Seamless Collaboration for Effective Meetings",
    details:
      "Easily schedule and manage meetings, collaborate in real-time, and keep everyone aligned for successful team interactions and faster decision-making.",
    imageSrc: "/group-24.png",
    iconSrc: "/svg.svg",
    zIndex: 30,
    top: "100px",
  },
  {
    title: "Planning and Managing",
    description: "Efficient Planning and Real-Time Tracking",
    details:
      "Plan tasks, set priorities, and track progress with ease to ensure projects stay on track and deadlines are met with minimal effort.",
    imageSrc: "/group-25.png",
    iconSrc: "/svg-2.svg",
    zIndex: 20,
    top: "50px",
  },
  {
    title: "Smart Matching",
    description: "Organize Events and Share Documents",
    details:
      "Effortlessly manage events, share important documents, and collaborate with your team to ensure everything is in one place and easily accessible.",
    imageSrc: "/menu.png",
    iconSrc: "/svg-1.svg",
    zIndex: 10,
    top: "0",
  },
];

export const MainContentSection = (): JSX.Element => {
  return (
    <section className="flex flex-col w-full items-start gap-[90px] relative pt-24">
      {/* Features Section */}
      <div className="flex flex-col w-full items-center gap-20 px-7 py-0">
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
      <div className="flex flex-col min-h-[400px] w-full items-center pt-24 pb-40 px-[120px] relative">
        <div className="flex flex-col max-w-[1200px] w-full items-start relative">
          <div className="flex items-start justify-center px-[205px] py-0 relative w-full">
            <div className="inline-flex flex-col max-w-[790px] items-start relative self-stretch">
              <div className="flex flex-col items-center px-[37px] py-0 relative w-full">
                <h2 className="font-bricolage font-semibold text-black text-[69.5px] text-center tracking-[-1.44px] leading-[72px]">
                  More collaboration,
                  <br />
                  better communication
                </h2>
              </div>
            </div>

            <img
              className="absolute w-[155px] h-[300px] -top-14 left-[63px]"
              alt="Decorative element"
              src="/646b87b78fb7b113600b2a07-group-20627397-svg.svg"
            />

            <img
              className="absolute w-[159px] h-[298px] top-[-53px] left-[1005px]"
              alt="Decorative element"
              src="/646b87b74b286fbdc61e8fdb-group-20627398-svg.svg"
            />
          </div>
        </div>
      </div>

      {/* Getting Started Section */}
      <div className="w-full relative">
        <div className="relative w-full max-w-[1482px] mx-auto px-6">
          <img
            className="absolute w-[553px] h-[105px] top-[209px] right-0"
            alt="Abstract decoration"
            src="/image---abstract.svg"
          />

          <div className="flex flex-col w-full max-w-[1030px] items-start gap-[90px]">
            {/* Section Header */}
            <header className="w-full overflow-hidden">
              <div className="flex flex-col items-center gap-[23px] max-w-[1100px] mx-auto">
                <h2 className="font-bricolage font-medium text-[52px] text-center tracking-[-2.75px] leading-[50px]">
                  <span className="text-emerald-500 tracking-[-1.43px]">
                    Get Started{" "}
                  </span>
                  <span className="text-black tracking-[-1.43px]">
                    in 3 easy steps
                  </span>
                </h2>
                <p className="font-geist text-[#41464c] text-[32px] text-center tracking-[-1.53px] leading-[49.7px] max-w-[930px]">
                  Reduce manual work and streamline your ad tracking and
                  performance analytics, so you can focus on scaling profitably.
                </p>
              </div>
            </header>

            {/* Steps Cards */}
            <div className="w-full">
              <div className="relative h-[660px] w-full">
                {gettingStartedSteps.map((step, index) => (
                  <Card
                    key={index}
                    className={`absolute w-full ${index === 0 ? "max-w-[1030px]" : index === 1 ? "max-w-[950px] left-10" : "max-w-[880px] left-[75px]"} 
                    ${index === 0 ? "h-[560px]" : index === 1 ? "h-[496px]" : "h-[440px]"} 
                    ${step.top} left-0 bg-white rounded-xl overflow-hidden shadow-[0px_9px_50px_#0000000d] 
                    ${index !== 0 ? (index === 1 ? "opacity-70" : "opacity-50") : ""}`}
                    style={{ zIndex: step.zIndex }}
                  >
                    <CardContent className="p-0 h-full">
                      <div className="relative h-full rounded-xl">
                        {/* Card Header */}
                        <div className="w-full h-16 bg-[#ececec] rounded-xl flex items-center px-[30px]">
                          <img
                            className="w-7 h-7"
                            alt={`${step.title} icon`}
                            src={step.iconSrc}
                          />
                          <span className="ml-2 font-geist font-medium text-[#111111] text-[16.7px] leading-[27px]">
                            {step.title}
                          </span>
                        </div>

                        {/* Card Content */}
                        <div className="w-full h-[calc(100%-64px)] bg-white flex">
                          <div className="w-[400px] pt-10 pl-10">
                            <h3 className="font-inter text-[#111111] text-[31px] leading-[44.8px] mb-5">
                              {step.description
                                .split("<br />")
                                .map((line, i) => (
                                  <React.Fragment key={i}>
                                    {line}
                                    {i <
                                      step.description.split("<br />").length -
                                        1 && <br />}
                                  </React.Fragment>
                                ))}
                            </h3>
                            <p className="font-inter font-medium text-[#4c4c4c] text-[16.7px] leading-[27px]">
                              {step.details.split("<br />").map((line, i) => (
                                <React.Fragment key={i}>
                                  {line}
                                  {i <
                                    step.details.split("<br />").length - 1 && (
                                    <br />
                                  )}
                                </React.Fragment>
                              ))}
                            </p>
                          </div>
                          <div className="flex-1 pt-10 pl-[60px]">
                            <img
                              className="w-full h-auto"
                              alt={`${step.title} illustration`}
                              src={step.imageSrc}
                            />
                          </div>
                        </div>

                        {/* Border */}
                        <div className="absolute inset-0 rounded-xl border-2 border-solid border-white" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default MainContentSection;
