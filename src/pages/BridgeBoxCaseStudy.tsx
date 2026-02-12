import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/sections/Footer";
import CaseStudyNavigation from "@/components/sections/CaseStudyNavigation";

const BridgeBoxCaseStudy = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [isLightboxVisible, setIsLightboxVisible] = useState(false);
  const [imageRatios, setImageRatios] = useState<Record<string, number>>({});
  const closeTimeoutRef = useRef<number | null>(null);

  const handleOpenLightbox = (src: string) => {
    if (closeTimeoutRef.current) {
      window.clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setLightboxImage(src);
    requestAnimationFrame(() => {
      setIsLightboxVisible(true);
    });
  };

  const handleCloseLightbox = () => {
    setIsLightboxVisible(false);
    closeTimeoutRef.current = window.setTimeout(() => {
      setLightboxImage(null);
      closeTimeoutRef.current = null;
    }, 200);
  };

  const handleAfterImageLoad = (key: string) => (event: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = event.currentTarget;
    if (naturalWidth && naturalHeight) {
      setImageRatios((previous) => ({
        ...previous,
        [key]: naturalWidth / naturalHeight,
      }));
    }
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        window.clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#2B2727', minHeight: '100vh' }}>
      <Header />
      
      {/* Hero Section - Full Width */}
      <section className="relative w-full pt-[160px] pb-16 max-xl:pt-[152px] max-lg:pt-[136px] max-md:pt-[120px] max-sm:pt-[100px] max-sm:pb-12 overflow-hidden">
        {/* Header - No background */}
        <div className="relative z-10 w-full py-8">
          <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <Link 
              to="/projects" 
              className="inline-flex items-center text-[#EAE8F3]/80 hover:text-[#EAE8F3] transition-colors duration-200 mb-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span className="text-sm font-medium">Back to projects</span>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold text-[#EAE8F3] mb-2 max-md:text-3xl font-hagrid">
              BridgeBox 
            </h1>
            <p className="text-lg lg:text-xl text-[#EAE8F3]/90 font-normal leading-relaxed">
              Designing disaster response tools in rural Thailand
            </p>
          </div>
        </div>
        
        <div className="max-w-[1440px] mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            {/* Header with logo */}
            <div className="flex justify-between items-start mb-6 max-lg:flex-col max-lg:gap-6">
              <div className="flex-1">
                
              </div>
              
              {/* BridgeBox Logo placeholder */}
              
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-8">
              {/* Left content */}
              <div className="space-y-4">
                {/* Context */}
                <div>
                  <h2 className="text-2xl font-bold text-[#EAE8F3] mb-2 font-hagrid">Context</h2>
                  <p className="text-[#EAE8F3]/90 leading-relaxed">
                    As part of my Fulbright fellowship on Human-Centered Design in Thailand, I collaborated with BridgeBox, a startup developing a communication system for climate disaster response. BridgeBox connects rural "reporters" with urban "responders" (local governments, nonprofits, and employers) through a mobile app and desktop interface.
                  </p>
                </div>

                {/* Role */}
                <div>
                  <h2 className="text-2xl font-bold text-[#EAE8F3] mb-2 font-hagrid">Role</h2>
                  <p className="text-[#EAE8F3]/90 leading-relaxed">
                    Sole UX/UI Designer, co-workshop facilitator
                  </p>
                </div>

                {/* Duration */}
                <div>
                  <h2 className="text-2xl font-bold text-[#EAE8F3] mb-2 font-hagrid">Duration</h2>
                  <p className="text-[#EAE8F3]/90 leading-relaxed">
                    Thailand, 2025 – Fulbright Research Project (10 months)
                  </p>
                </div>

                {/* Tools */}
                <div>
                  <h2 className="text-2xl font-bold text-[#EAE8F3] mb-2 font-hagrid">Methods</h2>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-[#0A0520]/30 text-[#EAE8F3] border border-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Participatory Design
                    </span>
                    <span className="bg-[#0A0520]/30 text-[#EAE8F3] border border-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      User Research
                    </span>
                    <span className="bg-[#0A0520]/30 text-[#EAE8F3] border border-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      AI/ML Design
                    </span>
                    <span className="bg-[#0A0520]/30 text-[#EAE8F3] border border-white/10 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm shadow-sm">
                      Workshop Facilitation
                    </span>
                  </div>
                </div>
              </div>

              {/* Right content - BridgeBox cover */}
              <div className="flex justify-center lg:justify-end">
                <div className="relative w-full">
                  <img 
                    src={`${import.meta.env.BASE_URL}BBX cover.png`} 
                    alt="BridgeBox Disaster Response"
                    className="w-full h-auto rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="max-w-[1440px] w-full mx-auto my-0 max-md:max-w-[991px] max-sm:max-w-screen-sm bg-transparent relative z-10">
          <main className="px-[120px] py-[60px] max-md:px-10 max-md:py-[40px] max-sm:px-5 relative z-10">
          {/* Overview */}
          <section className="mb-24">
            <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Overview</h2>
            <p className="text-[#EAE8F3] text-lg mb-6">
                As part of my Fulbright fellowship on adapting Participatory Design to Thailand, I collaborated with BridgeBox, a startup developing <strong>a communication system for climate disaster response.</strong> BridgeBox builds a mobile app for rural residents to call for help during disasters like flash flooding, and a desktop software for "responders" (local governments, nonprofits, and employers) to manage and respond to the submitted cases. The high stakes and unique context for rural Thai users made usability a critical priority in this project.
              </p>
          </section>

          {/* Project Goals */}
          <section className="mb-24">
            <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Project Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-[#0A0520]/20 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-[#F7E59E] text-[#403E33] rounded-full text-xl font-bold mb-4">🏆</div>
                <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Adapt HCD Methods</h4>
                <p className="text-[#EAE8F3] text-md">Adapt Design Research methods like participatory design to Thai cultural contexts as part of my Fulbright research.</p>
              </div>
              <div className="bg-[#0A0520]/20 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-[#FDEFB4] text-[#EAE8F3] rounded-full text-xl font-bold mb-4">🏆</div>
                <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Increase Access</h4>
                <p className="text-[#EAE8F3] text-md">Make BridgeBox more user-friendly and accessible to rural users with lower digital literacy rates.</p>
              </div>
              <div className="bg-[#0A0520]/20 p-6 rounded-2xl flex flex-col items-start text-left h-full">
                <div className="flex items-center justify-center w-12 h-12 bg-[#F7E59E] text-[#EAE8F3] rounded-full text-xl font-bold mb-4">🏆</div>
                <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Integrate Responsible AI</h4>
                <p className="text-[#EAE8F3] text-md">Design AI support features to help responders categorize and prioritize disaster reports, so they can focus on the most urgent cases.</p>
              </div>
            </div>
          </section>

          {/* Project Process */}
          <section className="mb-24">
            <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Project Process</h2>
            <p className="text-[#EAE8F3] text-lg mb-6">
              Durign this project, I planned a series of participatory design workshops for rural Thai users, trained BridgeBox employees to faciliate design workshops, synthesized workshop results, and produced the final UI designs for implementation. During the 10 month partnership, we:
            </p>
            
            {/* Process graphic */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div 
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#EAE8F3] text-[#1A103F] rounded-full text-xl font-bold mb-4">1</div>
                <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Planned co-design workshops</h4>
                <p className="text-[#EAE8F3]/90 text-md">First, we decided on which participatory methods would best elicit honest critique and leverage Thai collectivist cultural strengths among</p>
              </div>
              
              <div 
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#EAE8F3] text-[#1A103F] rounded-full text-xl font-bold mb-4">2</div>
                <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Training local facilitators</h4>
                <p className="text-[#EAE8F3]/90 text-md">Next, I trained Thai collaborators in workshop facilitation to overcome language barriers, and ensure they could reuse these skills after our partnership ended. </p>
              </div>

              <div 
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#EAE8F3] text-[#1A103F] rounded-full text-xl font-bold mb-4">3</div>
                <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Ran Co-design workshops </h4>
                <p className="text-[#EAE8F3]/90 text-md">Co-designed features with rural users through paper prototyping and generative sketching activities. Iterated on these workshops as we found what worked and didn't.</p>
              </div>

              <div 
                className="p-6 rounded-2xl"
                style={{
                  background: 'rgba(10, 5, 32, 0.3)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <div className="flex items-center justify-center w-12 h-12 bg-[#EAE8F3] text-[#1A103F] rounded-full text-xl font-bold mb-4">4</div>
                <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Designed UI & AI features</h4>
                <p className="text-[#EAE8F3]/90 text-md">I overhauled the UI based on user-generated designs, and built an ML models to auto-categorize emergency cases by urgency</p>
              </div>
            </div>

            <p className="text-[#EAE8F3] text-lg mb-6">
              Results from this 10 month process included:
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  User-generated features such as offline emergency reporting, proxy reporting for non-smartphone users, and a "Bridge Alert" function for critical announcements.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  AI support to auto-categorize cases by urgency, helping responders prioritize between life-threatening issues and routine requests.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  Stronger trust and confidence among rural users in adopting new tools for disaster communication.
                </p>
              </div>
            </div>
            
            {/* Why participatory design? */}
            <div className="mb-12">
              <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Why participatory design?</h3>
              <p className="text-[#EAE8F3] text-lg mb-6">
                Past research and design at BridgeBox relied on surveys and interviews, but these methods often yielded little more than confirmation of expected issues. Participatory approaches were chosen for two key reasons:
              </p>
              <ol className="list-decimal list-outside text-[#EAE8F3] text-lg space-y-3 ml-6 pl-2 mb-6">
                <li>To gather honest critique despite Thailand's culturally engrained indirect feedback tendencies</li>
                <li>To play to collectivist cultural strengths. Thai social values are heavily focused on building trustworthy relationships and amicable collaboration, making this context a particularly good fit for participatory design workshops</li>
              </ol>
            </div>

            {/* Running workshops in rural contexts */}
            <div className="mb-12">
              <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Running workshops in rural contexts</h3>
              <p className="text-[#EAE8F3] text-lg mb-6">
                These workshops were conducted with two partner organizations – the Human Rights Development Foundation (HRDF), and the Songkhla Disaster Center. At each organization, employees joined in 3 participatory design workshops, structured as follows: 
              </p>
              <ol className="list-decimal list-outside text-[#EAE8F3] text-lg space-y-3 ml-6 pl-2 mb-6">
                <li><strong>Workshop 1:</strong> Usability testing of the existing BridgeBox app</li>
                <li><strong>Workshop 2:</strong> Community dreaming exercises & feature prioritization</li>
                <li><strong>Workshop 3:</strong> Generative sketching and co-design of new features</li>
              </ol>
              <p className="text-[#EAE8F3] text-lg mb-6">
                Both contexts had to be structured carefully; At HRDF, lawyers were working to address human rights violations for migrant and rural workers across many site. In Songkhla, frequent flash flooding paried with the tension from political insurgency created a general mistrust of government and aid responders when climate disasters struck.In both contexts, it was crucial to make the submission UI extremely intuitive for rural users, correctly prioritze the submitted cases, and build trust through open lines of communication open between reporters and responders.
              </p>
               <div className="bg-[#0A0520]/40 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 mb-6">
                 <div className="relative">
                   <img 
                     src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                     alt="" 
                     className="absolute top-8 left-2 hidden w-16 h-16 opacity-60"
                   />
                   <img 
                     src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                     alt="" 
                     className="absolute top-8 left-2 w-16 h-16 opacity-60"
                   />
                  <p className="text-[#EAE8F3] text-xl sm:text-2xl pl-28 max-sm:pl-8 pt-2 mb-2">These areas, long affected by ongoing conflict, have endured deep pain—where <strong>violence, bombings, and gunfire have sadly become part of daily life.</strong> What makes it even harder is how <strong>this unrest blocks access to help during natural disasters.</strong> Floods often submerge entire neighborhoods, leaving families homeless and vulnerable. In such conditions, delivering timely support becomes incredibly difficult.</p>
                  <p className="text-[#EAE8F3] text-lg sm:text-xl pl-28 max-sm:pl-8 pt-2">— Tanida Disyabut, BridgeBox Founder</p>
                 </div>
               </div>
              <p className="text-[#EAE8F3] text-lg mb-6">
                For the first workshop with each organization, we focused on usability testing. I had created a prototype of the website and app, but we quickly realized that our users didn't understand how a "prototype" was different than the real app, and what it could or could not do. They had trouble opening the prototype on their own computers, navigating the systems, and understanding the limitations - so we quickly switched to user testing with live versions of the software.
                </p>

              <p className="text-[#EAE8F3] text-lg mb-6"> Some of the workshops were originally hosted as hybrid – however, we quickly saw that this format was going to prevent true collaboration. With rural participants, <strong>in person sessions were essential for building trust and comfort. </strong>Many users weren’t used to juggling tools like Zoom and an online whiteboard, so being face to face with facilitators and using familiar tools like pen and paper put them at ease and allowed them to meaningfully participate without insecurity or confusion. 
              </p>
              
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 {["BBx_Songkhla1.png", "BBx_workshop1.png"].map((image, index) => (
                 <div
                   key={image}
                   className="rounded-2xl overflow-hidden"
                 >
                     <img
                       src={`${import.meta.env.BASE_URL}${image}`}
                       alt={index === 0 ? "Picture of workshop participants in Songkhla Province" : "Picture of HRDF workshop participants"}
                     className="w-full h-full object-cover"
                     />
                   </div>
                 ))}
               </div>
            <div className="bg-[#0A0520]/40 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 mb-6">
                 <div className="relative">
                   <img 
                     src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                     alt="" 
                     className="absolute top-8 left-2 hidden w-16 h-16 opacity-60"
                   />
                   <img 
                     src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                     alt="" 
                     className="absolute top-8 left-2 w-16 h-16 opacity-60"
                   />
                  <p className="text-[#EAE8F3] text-xl sm:text-2xl pl-28 max-sm:pl-8 pt-2 mb-2">It's important to have someone in the field with [the participants], because online it's difficult to get their full attention…in person, you can see the time they spent to write down what they actually think.</p>
                  <p className="text-[#EAE8F3] text-lg sm:text-xl pl-28 max-sm:pl-8 pt-2">— Tanida Disyabut, BridgeBox Founder</p>
                 </div>
              </div>
              <p className="text-[#EAE8F3] text-lg mb-6">
                During this first workshop, I faciliated while my collaborator from BridgeBox translated - however, we quickly realized that common technology concepts in English often don't have a clear Thai translation. Moreover, my Thai collaborators from BridgeBox were interested in learning participatory design, so <strong>I took a step back and conducted training for BridgeBox employees in faciliating participatory design workshops</strong>, so that they could lead sessions themselves. By the final workshop, Thai BridgeBox employees were comfortable facilitating sessions independently, and since this project's conclusion have continued to do so.
              </p>
            </div>

            {/* Workshop activities: generative sketching */}
            <div className="mb-12">
              <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Workshop activities: generative sketching</h3>
              <p className="text-[#EAE8F3] text-lg mb-6">
                Workshops used generative sketching to invite participants to imagine solutions beyond the existing software. In this exercise, users were given a situation like "Imagine that there is a flash flood, and you are working on dispatching emergency aid to different areas. Think about the information would you want people calling for help to provide to you to help you dispatch the right aid to the right area. Keeping in mind that reporters need to be able to fill out this information as quickly as possible, what should the screens look like to report an emergency?"
              </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 {["BBx_sketch1.png", "BBx_sketch2.png"].map((image, index) => (
                 <div
                   key={image}
                   className="rounded-2xl overflow-hidden"
                 >
                     <img
                       src={`${import.meta.env.BASE_URL}${image}`}
                       alt={index === 0 ? "Example 1 of sketching activity" : "Example 2 of sketching activity"}
                     className="w-full h-full object-cover"
                     />
                   </div>
                 ))}
               </div>
              <p className="text-[#EAE8F3] text-lg mb-6">
              This approach encouraged participants to propose ideas, share what they came up with, compare alternatives, and frame feedback as preferences rather than critiques. The generative sketching activities yielded tangible concepts that met real user needs, many of which BridgeBox later developed. These included:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#EAE8F3] text-lg">
                    Offline emergency reporting for inconsistent connection in rural areas
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#EAE8F3] text-lg">
                    Proxy reporting for those without smartphones
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#EAE8F3] text-lg">
                    Bridge Alert, a one-way channel for urgent announcements from responders to users
                  </p>
                </div>
              </div>
              <p className="text-[#EAE8F3] text-lg mb-6">
                Beyond feature improvements, collaborating on the solution garnered buy in from users, with one BridgeBox facilitator noting:
              </p>
              <div className="bg-[#0A0520]/40 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 mb-6">
                 <div className="relative">
                   <img 
                     src={`${import.meta.env.BASE_URL}open-quotes-light.png`} 
                     alt="" 
                     className="absolute top-8 left-2 hidden w-16 h-16 opacity-60"
                   />
                   <img 
                     src={`${import.meta.env.BASE_URL}open-quotes-dark.png`} 
                     alt="" 
                     className="absolute top-8 left-2 w-16 h-16 opacity-60"
                   />
                  <p className="text-[#EAE8F3] text-xl sm:text-2xl pl-28 max-sm:pl-8 pt-2 mb-2">[Rural responders] realized that the existing process does not work well and were keen to adopt new tools. With the participatory approach, they take ownership in designing.</p>
                  <p className="text-[#EAE8F3] text-lg sm:text-xl pl-28 max-sm:pl-8 pt-2">— BridgeBox Facilitator</p>
                 </div>
              </div>
              <p className="text-[#EAE8F3] text-lg mb-6">
                This buy in is crucial not only for efficient emergency response, but also for BridgeBox itself, who work under immense pressure to scale their solutions quickly amid the dramatic climate changes in Thailand. When we had completed usability tests, design requirements sessions, and generative sketching workshops, I went heads down to integrate the information into a fresh, clean design that would prioritize the digital comfort levels of this specific user group. 
              </p>
            </div>

            {/* Before/After UI Comparisons */}
            <div className="mb-12">
              <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Case List Page:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <p className="text-[#EAE8F3] text-lg mb-2">Before</p>
                  <div
                    className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]"
                    style={imageRatios.caseList ? { aspectRatio: `${imageRatios.caseList}` } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(`${import.meta.env.BASE_URL}BBx_before_caseList.png`)}
                      className="relative block w-full h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6E59A5]"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}BBx_before_caseList.png`}
                        alt="Case List page before"
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-[#EAE8F3] text-lg mb-2">After</p>
                  <div
                    className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]"
                    style={imageRatios.caseList ? { aspectRatio: `${imageRatios.caseList}` } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(`${import.meta.env.BASE_URL}BBx_after_caseList.png`)}
                      className="relative block w-full h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6E59A5]"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}BBx_after_caseList.png`}
                        alt="Case List page after"
                        onLoad={handleAfterImageLoad('caseList')}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Case Page:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <p className="text-[#EAE8F3] text-lg mb-2">Before</p>
                  <div
                    className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]"
                    style={imageRatios.case ? { aspectRatio: `${imageRatios.case}` } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(`${import.meta.env.BASE_URL}BBx_before_case.png`)}
                      className="relative block w-full h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6E59A5]"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}BBx_before_case.png`}
                        alt="Case page before"
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-[#EAE8F3] text-lg mb-2">After</p>
                  <div
                    className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]"
                    style={imageRatios.case ? { aspectRatio: `${imageRatios.case}` } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(`${import.meta.env.BASE_URL}BBx_after_case.png`)}
                      className="relative block w-full h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6E59A5]"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}BBx_after_case.png`}
                        alt="Case page after"
                        onLoad={handleAfterImageLoad('case')}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>

              <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Messages Page:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div>
                  <p className="text-[#EAE8F3] text-lg mb-2">Before</p>
                  <div
                    className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]"
                    style={imageRatios.messages ? { aspectRatio: `${imageRatios.messages}` } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(`${import.meta.env.BASE_URL}BBx_before_messages.png`)}
                      className="relative block w-full h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6E59A5]"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}BBx_before_messages.png`}
                        alt="Messages page before"
                        className="w-full h-full object-cover object-top"
                      />
                    </button>
                  </div>
                </div>
                <div>
                  <p className="text-[#EAE8F3] text-lg mb-2">After</p>
                  <div
                    className="group rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-[1.02] focus-within:scale-[1.02]"
                    style={imageRatios.messages ? { aspectRatio: `${imageRatios.messages}` } : undefined}
                  >
                    <button
                      type="button"
                      onClick={() => handleOpenLightbox(`${import.meta.env.BASE_URL}BBx_after_messages.png`)}
                      className="relative block w-full h-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6E59A5]"
                    >
                      <img
                        src={`${import.meta.env.BASE_URL}BBx_after_messages.png`}
                        alt="Messages page after"
                        onLoad={handleAfterImageLoad('messages')}
                        className="w-full h-full object-contain"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            
            {/* AI for Social Good */}
            <div className="mb-12">
              <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">AI for Social Good</h3>
              <p className="text-[#EAE8F3] text-lg mb-6">
                At the participatory design workshops, emergency responders often spoke with frustration of trying to correctly sort cases into categories using a complex set of government guidelines. While time consuming for a human, this well defined task would be simple for an AI model. The feature I proposed would auto-suggest tags for submitted cases by category and urgency. Reports that were automatically tagged as urgent, such as "medical emergency" or "human rights violation" could then be prioritized over more routine issues like "documentation approval needed."
              </p>
              <p className="text-[#EAE8F3] text-lg mb-6">
                Because the BridgeBox team only had one engineer, I volunteered to design this feature and build the model to power it using Google Vertex. To start, I identified the following steps:
               </p>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                 <div 
                   className="p-6 rounded-2xl"
                   style={{
                     background: 'rgba(10, 5, 32, 0.3)',
                     backdropFilter: 'blur(20px)',
                     WebkitBackdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                   }}
                 >
                   <div className="flex items-center justify-center w-12 h-12 bg-[#EAE8F3] text-[#1A103F] rounded-full text-xl font-bold mb-4">1</div>
                   <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Gather Data</h4>
                   <p className="text-[#EAE8F3]/90 text-md">Collected and organized historical BridgeBox case data for model training.</p>
                 </div>
                 <div 
                   className="p-6 rounded-2xl"
                   style={{
                     background: 'rgba(10, 5, 32, 0.3)',
                     backdropFilter: 'blur(20px)',
                     WebkitBackdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                   }}
                 >
                   <div className="flex items-center justify-center w-12 h-12 bg-[#EAE8F3] text-[#1A103F] rounded-full text-xl font-bold mb-4">2</div>
                   <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Train AI Model</h4>
                   <p className="text-[#EAE8F3]/90 text-md">Trained and validated a simple model to auto-tag new cases by urgency and category.</p>
                 </div>
                 <div 
                   className="p-6 rounded-2xl"
                   style={{
                     background: 'rgba(10, 5, 32, 0.3)',
                     backdropFilter: 'blur(20px)',
                     WebkitBackdropFilter: 'blur(20px)',
                     border: '1px solid rgba(255, 255, 255, 0.1)',
                   }}
                 >
                   <div className="flex items-center justify-center w-12 h-12 bg-[#EAE8F3] text-[#1A103F] rounded-full text-xl font-bold mb-4">3</div>
                   <h4 className="text-[#EAE8F3] text-2xl font-bold mb-3">Handoff for Integration</h4>
                   <p className="text-[#EAE8F3]/90 text-md">Packaged the trained model and collaborated with engineering for platform integration.</p>
                 </div>
               </div>
               <p className="text-[#EAE8F3] text-lg mb-6">
                While the model was training and iterating, I designed the UI that the user would interact with to confirm or correct the AI's suggested categories. BridgeBox employees were concerned about users' hesitation to fact check the AI, as they themselves barely understood the complex categories – so the design had to give users not only the ability to correct the AI, but the tools to identify when it was wrong.
               </p>

               <p className="text-[#EAE8F3] text-lg mb-6">
                When the user entered their case dashboard, they saw a red alert if the case needed conformation. If the categorization was correct, the user could simply click "Yes, Correct" and the categories would be confirmed in the system, removing the "needs confirmation" status:
               </p>

               <div className="mb-6">
                 <video 
                   className="w-full h-auto rounded-lg"
                   controls 
                   muted 
                   loop
                   playsInline
                   preload="metadata"
                 >
                   <source src={`${import.meta.env.BASE_URL}BBX_AI_correct.mp4`} type="video/mp4"/>
                   Your browser does not support the video tag.
                 </video>
               </div>

               <p className="text-[#EAE8F3] text-lg mb-6">
                If the user was unsure whether categorization was correct, they could click "See how to categorize" to bring up the help menu, which both gave rationale for why the AI categorized the case as it did, and provided the standard list of definions for each category, so that the user could make an informed decision whether to correct the AI. If the user decided that the AI was incorrect, they could simply click "No, Incorrect." Clicking Incorrect automatically opened the dropdown for category selection, and allowed the user to choose a different category:
               </p>

               <div className="mb-6">
                 <video 
                   className="w-full h-auto rounded-lg"
                   controls 
                   muted 
                   loop
                   playsInline
                   preload="metadata"
                 >
                   <source src={`${import.meta.env.BASE_URL}BBX_AI_incorrect.mp4`} type="video/mp4"/>
                   Your browser does not support the video tag.
                 </video>
               </div>
              <p className="text-[#EAE8F3] text-lg mt-6">
                After training the model and collaborating with our single engineer to ensure it passed sufficient precision and recall levels, I handed off the Google Vertex credentials for export and implementation. At the time of writing, BridgeBox has implemented this feature, and is seeking further funding from partners to enable it for their largest clients.
              </p>
            </div>
          </section>

          {/* End to End Solution */}
          <section className="mb-24">
            <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">End to End Solution</h2>
            <p className="text-[#EAE8F3] text-lg mb-6">
              The end to end designs had incorporated useful new co-designed features and AI-assisted case categorization – however, BridgeBox's clients could be anyone using a case management system rurally, from large farms managing migrant workers to NGOs delivering disaster relief. To make this system work for everyone, BridgeBox included, I was asked to divide the UI into a tiered subscription model, and explore what the "lite" vs "pro" versions of the UI would look like. This exploration yielded one of the most beautiful Figma files I've made yet (I'm a big color coding gal):
            </p>
            <img src={`${import.meta.env.BASE_URL}BBx_tiers.png`} alt="Subscription Tiers" className="w-full h-auto rounded-lg mb-6" />
          </section>

          {/* Impact */}
          <section className="mb-24">
            <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Outcomes</h2>
            <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Concrete Changes</h3>
            <div className="space-y-4 mb-8">
            <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  Complete UI overhaul based on usability testing and participatory design workshop
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  7 new clients aquired within 3 months of the UI redesign
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  AI categorization tools improved responder efficiency in handling urgent vs. routine cases.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  User adoption and trust increased, with rural participants more confident in using the app after co-design involvement.
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-[#EAE8F3] text-lg">
                  A clear set adaptations for making participatory design work with users who are rural, lower technical literacy, and identify with Thai cultural norms.
                </p>
              </div>
            </div>
          </section>

          <h3 className="text-[#EAE8F3] text-2xl font-bold mb-6">Methodology Learnings</h3>
          <p className="text-[#EAE8F3] text-lg mb-6">
                After each workshop, I reflected not only on the product feedback received, but the methodological blockers to a successful session. Through successive rounds of participatory design, I learned that a successful participatory design workshops for rural users with lower technical literacy should include:
              </p>
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#EAE8F3] text-lg">
                    Activity instructions that are more detailed than typical, and broken in discrete steps (e.g., "First, write the steps you'd take to report an incident. Then, draw the screen you'd expect to see for each step").
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#EAE8F3] text-lg">
                    In-person sessions, as many participants were not comfortable juggling tools like Zoom or online whiteboards. Using familiar materials like pen and paper allowed participants to express their ideas more comfortably. The BridgeBox founder, after co-facilitating, noted "It's important to have someone in the field with participants, because online it's difficult to get their full attention… in person, you can see the time they spent to write down what they actually think."
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 bg-[#557592] bg-[#EAE8F3] rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-[#EAE8F3] text-lg">
                    Flexible pacing with respect to Thailand's polychronic view of time, where building consensus matters more than keeping to strict schedules.
                  </p>
                </div>
              </div>

          {/* Reflection */}
          <section className="mb-24">
            <h2 className="text-[#EAE8F3] text-[32px] font-bold mb-8 font-hagrid">Reflection</h2>
            <p className="text-[#EAE8F3] text-lg mb-6">
              This project reinforced that smart city technologies succeed only when adapted to cultural and infrastructural realities.
            </p>
            <p className="text-[#EAE8F3] text-lg mb-6">
              Working with BridgeBox, I learned that participatory design — carefully adapted for rural, low-digital-literacy users — could uncover solutions that were both technically feasible and socially resonant. By involving participants directly in sketching, testing, and decision-making, we not only shaped platform features but also built lasting user trust.
            </p>
            <p className="text-[#EAE8F3] text-lg mb-6">
              I was drawn to this collaboration for my Fulbright Fellowship because of the opportunity to work on Smart City tech for frontline communities, who bear the brunt of effects from the climate crisis. My approach to designing disaster response tools is so much more than just building software — it's about facilitating trust, participation, and context-sensitive innovation to engrain self-empowered resilience into the communities that need it most.
            </p>
          </section>

          {/* Case Study Navigation */}
          <div className="max-w-[1440px] w-full mx-auto px-[120px] max-md:px-10 max-sm:px-5">
            <CaseStudyNavigation />
          </div>
          </main>
          <Footer />
        </div>

      {lightboxImage && (
        <div
          className={`fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 transition-opacity duration-200 ${
            isLightboxVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={handleCloseLightbox}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`relative max-w-5xl w-full transition-all duration-300 ${
              isLightboxVisible ? 'scale-100 translate-y-0' : 'scale-95 translate-y-2'
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={handleCloseLightbox}
              className="absolute -top-12 right-0 text-white/90 hover:text-white transition-colors text-lg font-medium"
              aria-label="Close image preview"
            >
              Close ✕
            </button>
            <img
              src={lightboxImage}
              alt="BridgeBox UI preview"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default BridgeBoxCaseStudy;
