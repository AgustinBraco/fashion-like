// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css/bundle';

function Slider( {slides, finishTutorial} ) {
  return (
      <Swiper
        style={{
          "--swiper-pagination-color": "var(--color-black)",
          "--swiper-pagination-bullet-size": "12px",
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

          <div>
            <button className="swiper-button" onClick={finishTutorial}>{slide.button}</button>
          </div>
        </SwiperSlide>
      ))}
      </Swiper>
  );
};

export default Slider;