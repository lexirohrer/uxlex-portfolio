import React from "react";

const AboutMe = () => {
  return (
    <section className="py-16 px-8 max-w-4xl mx-auto">
      {/* Text Introduction Section */}
      <div className="border-2 border-blue-500 rounded-lg p-8 mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">
          hey hey! I'm Lexi.
        </h2>
        
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I design experiences that create positive social impact. As a Fulbright fellow, I used participatory design to make sure Smart City tech solves real problems for Bangkok residents. Nights and weekends I design for Basilica Bio, an environmental justice nonprofit building resilience and climate knowledge in Washington frontline communities.
          </p>
          
          <p>
            Before finding design, I grew up in a home that hosted 56 exchange students from 16 different countries. This multicultural exposure fostered a love of travel and language learning. If I'm not in Figma or planning my next international adventure, you can find me at the climbing gym or studying Thai in one of Bangkok's coffee shops 🇹🇭
          </p>
          
          <p>
            If you're working on a social impact problem and need a UX consultant, book a time to chat or reach out at lexirohrer@gmail.com
          </p>
        </div>
      </div>

      {/* Circular About Me Diagram */}
      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
          about Lexi
        </h2>
        
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Central Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-6xl">👩‍💻</span>
            </div>
          </div>
          
          {/* Personal Facts - Arranged in a circle */}
          <div className="relative w-full h-96">
            {/* Top (12 o'clock) */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Collects library cards, just for funsies 📚
              </p>
            </div>
            
            {/* Top Right (1:30 o'clock) */}
            <div className="absolute top-8 right-8 text-right max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Loves presentations, facilitating, and public speaking 🎤
              </p>
            </div>
            
            {/* Middle Right (3 o'clock) */}
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2 text-right max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Minored in Linguistics, and loves languages - current project is learning to speak Thai 🇹🇭
              </p>
            </div>
            
            {/* Bottom Right (4:30 o'clock) */}
            <div className="absolute bottom-8 right-8 text-right max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Fell in love with design because of its interdisciplinary nature and necessity for big picture thinking 🧠
              </p>
            </div>
            
            {/* Bottom (6 o'clock) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Once backpacked for a month straight in the Rocky mountains ⛰️
              </p>
            </div>
            
            {/* Bottom Left (7:30 o'clock) */}
            <div className="absolute bottom-8 left-8 text-left max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Has visited 21 states and 22 countries (so far!) 🚀
              </p>
            </div>
            
            {/* Middle Left (9 o'clock) */}
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2 text-left max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Designs for an environmental justice nonprofit on the side 🌱
              </p>
            </div>
            
            {/* Top Left (10:30 o'clock) */}
            <div className="absolute top-8 left-8 text-left max-w-48">
              <p className="text-sm text-gray-700 leading-relaxed">
                Grew up in a house that hosted 56 exchange students from 16 different countries 🌎
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
