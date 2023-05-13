import { useContext } from "react";
import { Context } from "../../context/context";
import slides from "../../mocks/slides.json";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';

function Slider() {
  const { tutorialDone, setTutorialDone, darkMode, loginValue, adminValue } = useContext(Context);

  function finishTutorial() {
    setInterval(quitTutorial, 1000);
    const swiper = document.querySelector(".swiper");
    swiper.classList.add("animate__fadeOut");
  };

  function quitTutorial () {
    setTutorialDone(true);
  };

  if (tutorialDone || loginValue || adminValue) {
    return ;
  } else if (darkMode) {
    return (
        <Swiper
          className="swiper animate__animated"
          style={{
            "--swiper-pagination-color": "white",
            "--swiper-pagination-bullet-inactive-color": "white",
            "--swiper-pagination-bullet-size": "1.3rem",
            "--swiper-pagination-bullet-horizontal-gap": "0.6rem",
            "--swiper-heigth": "100%",
          }}
          modules={[Pagination, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
        >
        {slides.map ((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.image} alt={slide.title} className='swiper-image dark'/>
            <div>
              <p className='swiper-title'>{slide.title}</p>
              <p className='swiper-text'>{slide.text}</p>
            </div>
          </SwiperSlide>
        ))}
          <div>
              <button className="swiper-button" onClick={finishTutorial}>Start</button>
          </div>
        </Swiper>
    );
  } else {
      return (
          <Swiper
            className="swiper animate__animated"
            style={{
              "--swiper-pagination-color": "black",
              "--swiper-pagination-bullet-size": "1.3rem",
              "--swiper-pagination-bullet-horizontal-gap": "0.6rem",
              "--swiper-heigth": "100%",
            }}
            modules={[Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
          >
          {slides.map ((slide) => (
            <SwiperSlide key={slide.id}>
              <img src={slide.image} alt={slide.title} className='swiper-image'/>
              <div>
                <p className='swiper-title'>{slide.title}</p>
                <p className='swiper-text'>{slide.text}</p>
              </div>
            </SwiperSlide>
          ))}
            <div>
                <button className="swiper-button" onClick={finishTutorial}>Start</button>
            </div>
          </Swiper>
      );
  };
};

export default Slider;