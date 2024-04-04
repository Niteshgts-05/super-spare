import React, { useState, useEffect, useRef } from "react";

interface CarouselProps {
  children?: React.ReactNode; // Making children prop optional
  autoSlide?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({ children, autoSlide = true }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [numVisibleSlides, setNumVisibleSlides] = useState<number>(1); // Number of visible slides
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Determine number of visible slides based on screen size
    const updateNumVisibleSlides = () => {
      const width = window.innerWidth;
      const numSlides =
        width < 480
          ? 2
          : width < 640
          ? 3
          : width < 768
          ? 4
          : width < 990
          ? 6
          : 8; // Show 1 slide on small screens, 2 slides on medium screens, and 4 slides on larger screens
      setNumVisibleSlides(numSlides);
    };

    updateNumVisibleSlides(); // Initial update
    window.addEventListener("resize", updateNumVisibleSlides); // Update on window resize

    return () => {
      window.removeEventListener("resize", updateNumVisibleSlides); // Cleanup
    };
  }, []);

  useEffect(() => {
    // Start auto slide
    // timerRef.current = setInterval(goToNextSlide, 3000); // Adjust auto slide duration as needed

    // Start auto slide if there are more slides than visible and autoSlide is true
    if (autoSlide && React.Children.count(children) > numVisibleSlides) {
      timerRef.current = setInterval(goToNextSlide, 3000);
    }

    // Clear interval on component unmount
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [currentIndex, children, numVisibleSlides, autoSlide]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    const newIndex =
      currentIndex === 0
        ? React.Children.count(children) - numVisibleSlides
        : currentIndex - 1;
    goToSlide(newIndex);
  };

  const goToNextSlide = () => {
    const newIndex =
      currentIndex === React.Children.count(children) - numVisibleSlides
        ? 0
        : currentIndex + 1;
    goToSlide(newIndex);
  };

  const handlePrevButtonClick = () => {
    goToPrevSlide();
    if (timerRef.current) clearInterval(timerRef.current); // Clear interval on user interaction
    // timerRef.current = setInterval(goToNextSlide, 3000); // Restart auto slide
    if (autoSlide && React.Children.count(children) > numVisibleSlides) {
      timerRef.current = setInterval(goToNextSlide, 3000); // Restart auto slide
    }
  };

  const handleNextButtonClick = () => {
    goToNextSlide();
    if (timerRef.current) clearInterval(timerRef.current); // Clear interval on user interaction
    // timerRef.current = setInterval(goToNextSlide, 3000); // Restart auto slide

    if (autoSlide && React.Children.count(children) > numVisibleSlides) {
      timerRef.current = setInterval(goToNextSlide, 3000); // Restart auto slide
    }
  };

  return (
    <div className="relative">
      <div className="flex overflow-hidden">
        {children &&
          React.Children.map(children, (child, index) => (
            <div
              key={index}
              className={`w-full ${
                index >= currentIndex && index < currentIndex + numVisibleSlides
                  ? "block"
                  : "hidden"
              }`}
              style={{
                minWidth: `${100 / numVisibleSlides}%`,
                marginRight: "12px",
              }}
            >
              {child}
            </div>
          ))}
      </div>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-gray-500 text-white px-4 py-2 rounded-full"
        onClick={handlePrevButtonClick}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-gray-500 text-white px-4 py-2 rounded-full"
        onClick={handleNextButtonClick}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;
