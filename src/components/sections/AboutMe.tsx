import React, { useState } from "react";

const AboutMe = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const [cardOrder, setCardOrder] = useState<number[]>([0, 1, 2, 3, 4, 5, 6, 7]);
  const [cardPositions, setCardPositions] = useState([
    { bottom: 8, left: 16, rotation: 2 },
    { bottom: 20, left: 8, rotation: -1 },
    { bottom: 32, left: 20, rotation: 1 },
    { bottom: 24, left: 32, rotation: -2 },
    { bottom: 16, left: 44, rotation: 1 },
    { bottom: 28, left: 56, rotation: -1 },
    { bottom: 12, left: 48, rotation: 2 },
    { bottom: 24, left: 52, rotation: -1 }
  ]);
  const [draggedCard, setDraggedCard] = useState<number | null>(null);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleCardClick = (cardIndex: number) => {
    setActiveCard(cardIndex);
  };

  const handleCloseCard = () => {
    if (activeCard !== null) {
      // Move the active card to the back of the stack
      const newOrder = [...cardOrder];
      const activeIndex = newOrder.indexOf(activeCard);
      newOrder.splice(activeIndex, 1); // Remove from current position
      newOrder.unshift(activeCard); // Add to front (which becomes back due to z-index)
      setCardOrder(newOrder);
    }
    setActiveCard(null);
  };

  const personalFacts = [
    "Collects library cards, just for funsies 📚",
    "Loves presentations, facilitating, and public speaking 🎤",
    "Minored in Linguistics, and loves languages - current project is learning to speak Thai 🇹🇭",
    "Fell in love with design because of its interdisciplinary nature and necessity for big picture thinking 🧠",
    "Once backpacked for a month straight in the Rocky mountains ⛰️",
    "Has visited 21 states and 22 countries (so far!) 🚀",
    "Designs for an environmental justice nonprofit on the side 🌱",
    "Grew up in a house that hosted 56 exchange students from 16 different countries 🌎"
  ];

  const cardColors = "bg-white border-gray-200";

  const handleMouseDown = (e: React.MouseEvent, cardIndex: number) => {
    if (activeCard === cardIndex) return; // Don't drag active cards
    
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = e.currentTarget.parentElement?.getBoundingClientRect();
    
    if (containerRect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
      setDraggedCard(cardIndex);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (draggedCard === null) return;
    
    const containerRect = e.currentTarget.getBoundingClientRect();
    const newLeft = ((e.clientX - containerRect.left - dragOffset.x) / containerRect.width) * 100;
    const newBottom = ((containerRect.height - (e.clientY - containerRect.top - dragOffset.y)) / containerRect.height) * 100;
    
    setCardPositions(prev => prev.map((pos, index) => 
      index === draggedCard 
        ? { ...pos, left: Math.max(0, Math.min(80, newLeft)), bottom: Math.max(0, Math.min(80, newBottom)) }
        : pos
    ));
  };

  const handleMouseUp = () => {
    setDraggedCard(null);
    setDragOffset({ x: 0, y: 0 });
  };

  const shuffleCards = () => {
    // Create a copy of the current positions array
    const shuffledPositions = [...cardPositions];
    
    // Fisher-Yates shuffle algorithm
    for (let i = shuffledPositions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledPositions[i], shuffledPositions[j]] = [shuffledPositions[j], shuffledPositions[i]];
    }
    
    setCardPositions(shuffledPositions);
  };

  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      {/* Text Introduction Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-8 font-hagrid">
            about me
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
        
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 font-hagrid">
            fun fact card stack
          </h2>
          
          <button
            onClick={shuffleCards}
            className="mb-8 px-6 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 font-medium"
          >
            shuffle
          </button>
          
          <div className="relative w-full max-w-lg mx-auto h-96">
          {/* Personal Facts as Stacked Cards */}
          <div 
            className="relative w-full h-full"
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {personalFacts.map((fact, index) => {
              const isActive = activeCard === index;
              const position = cardPositions[index];
              const stackPosition = cardOrder.indexOf(index);
              const zIndex = isActive ? 50 : (draggedCard === index ? 100 : stackPosition + 10);
              const isDragging = draggedCard === index;
              
              return (
                <div
                  key={index}
                  className={`absolute w-64 h-40 ${cardColors} rounded-lg shadow-lg border ${
                    isActive ? 'cursor-default' : 'cursor-grab active:cursor-grabbing'
                  } ${
                    isActive 
                      ? 'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-0 scale-125 z-50 transition-all duration-500 ease-out' 
                      : `transform rotate-${position.rotation} hover:rotate-0 hover:scale-105 z-${zIndex} transition-all duration-300 ease-in-out ${
                          isDragging ? 'scale-110 shadow-2xl' : ''
                        }`
                  }`}
                  style={{
                    transformOrigin: isActive ? 'center center' : 'bottom left',
                    left: isActive ? '50%' : `${position.left}%`,
                    bottom: isActive ? '50%' : `${position.bottom}%`,
                    boxShadow: isActive 
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
                      : isDragging
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                        : '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
                  }}
                  onClick={() => handleCardClick(index)}
                  onMouseDown={(e) => handleMouseDown(e, index)}
                >
                  <div className="p-4 h-full flex items-center justify-center relative">
                    {/* Close button - only show when card is active */}
                    {isActive && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCloseCard();
                        }}
                        className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-all duration-200 z-10 animate-in fade-in-0 zoom-in-95"
                      >
                        <span className="text-sm font-bold">×</span>
                      </button>
                    )}
                    <p className="text-base font-hagrid text-gray-700 leading-relaxed text-center">
                      {fact}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
