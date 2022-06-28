import { useState, useEffect } from "react";
import { sliderData } from "./slider-data";
import BlanketDrive from './Sliders/BlanketDrive.png';
import ClarkCoolidge from './Sliders/ClarkCoolidge.jpg';
import CPRAED from './Sliders/CPR&AEDAwarenessWeek.jpg';
import FightForAirClimb from './Sliders/FightForAirClimb.jpg';
import HealHood from './Sliders/HealHood.jpg';
import CommunityMeeting from './Sliders/instacommunity-meeting-flyer.png';
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 2500;

  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    console.log("next");
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
    console.log("prev");
  };

  function auto() {
    slideInterval = setInterval(nextSlide, intervalTime);
  }

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);

  return (
    <div className="slider">
      {sliderData.map((slide, index) => {
        return (
          <div
            className={index === currentSlide ? "slide current" : "slide"}
            key={index}
          >
            {index === currentSlide && (
              <div>
                <img src={slide.image} alt="slide" className="image" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Slider;
