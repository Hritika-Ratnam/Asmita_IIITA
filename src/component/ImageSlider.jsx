import React, { useState, useEffect } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full h-64 md:h-96 lg:h-[500px] overflow-hidden rounded-lg shadow-xl">
      <div
        className="w-full h-full bg-cover bg-center transition-all duration-500 ease-in-out"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
          <h3 className="text-xl md:text-2xl font-bold">
            {slides[currentIndex].title}
          </h3>
          <p className="mt-2 text-sm md:text-base">
            {slides[currentIndex].description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`h-2 w-2 md:h-3 md:w-3 rounded-full transition-all ${currentIndex === slideIndex ? "bg-white w-4 md:w-6" : "bg-white/50"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
