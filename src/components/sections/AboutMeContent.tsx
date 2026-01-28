import React from "react";

interface AboutMeContentProps {
  renderFactCard: (
    fact: { emoji: string; text: string },
    index: number,
    keyPrefix: string,
    layout?: "grid" | "stack"
  ) => React.ReactNode;
  displayedFacts: Array<{ emoji: string; text: string }>;
  shuffleFacts: () => void;
  textColorClass?: string;
  textSecondaryColorClass?: string;
  cardsContainerClass?: string;
  shuffleButtonClass?: string;
}

const AboutMeContent: React.FC<AboutMeContentProps> = ({
  renderFactCard,
  displayedFacts,
  shuffleFacts,
  textColorClass = "text-gray-800 dark:text-[#EAE8F3]",
  textSecondaryColorClass = "text-gray-700 dark:text-[#EAE8F3]/90",
  cardsContainerClass = "relative z-10 flex flex-col md:flex-row gap-3 md:gap-4 mt-6",
  shuffleButtonClass = "relative z-10 w-full mt-2 py-4 px-6 rounded-3xl transition-all duration-200 flex items-center justify-center gap-3 shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-[1.02]",
}) => {
  return (
    <>
      {/* About Me Content */}
      <div className="relative z-10">
        <h2 className={`text-3xl md:text-4xl font-bold ${textColorClass} mb-6 font-hagrid text-left`}>
          about me
        </h2>
        <div className={`space-y-4 ${textSecondaryColorClass} leading-relaxed text-justify`}>
          <p className="text-base md:text-lg">
            I design experiences that create positive social impact. As a Fulbright fellow, I most recently used participatory design to make sure Smart City tech solves real problems for Bangkok residents.
          </p>
          <p className="text-base md:text-lg">
            Nights and weekends I design for Basilica Bio, an environmental justice nonprofit building resilience and climate knowledge in Washington frontline communities. If I'm not in Figma or planning my next international adventure, you can find me at the climbing gym or doing Thai flashcards on the elliptical.
          </p>
          <p className="text-base md:text-lg">
            If you're working on a social impact problem and need a UX consultant, book a time to chat or reach out at lexirohrer@gmail.com
          </p>
        </div>
      </div>

      {/* Fun Facts - 3 Cards in Row on Desktop, Stacked on Mobile */}
      <div className={cardsContainerClass}>
        {displayedFacts
          .slice(0, 3)
          .map((fact, index) => (
            <div key={`wrapper-${index}`} className="flex-1">
              {renderFactCard(fact, index, "stacked", "stack")}
            </div>
          ))}
      </div>

      {/* Shuffle Button - Full Width */}
      <button
        onClick={shuffleFacts}
        className={shuffleButtonClass}
        aria-label="Shuffle facts"
      >
        <img
          src={`${import.meta.env.BASE_URL}Shuffle_Icon.svg`}
          alt="Shuffle"
          className="w-6 h-6 drop-shadow-lg"
          loading="lazy"
        />
        <span className={`${textSecondaryColorClass} font-hagrid font-medium text-xl`}>
          shuffle
        </span>
      </button>
    </>
  );
};

export default AboutMeContent;
