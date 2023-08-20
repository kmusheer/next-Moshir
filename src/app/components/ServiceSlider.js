import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { RxCrop, RxPencil2, RxDesktop, RxReader, RxRocket, RxArrowTopRight } from 'react-icons/rx'

// data
const serviceData = [
  {
    icon: <RxCrop />,
    title: 'Branding',
    description: 'Distinctive brand identities that resonate and captivate your audience.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Innovative visuals that merge aesthetics with user-centric functionality.',
  },
  {
    icon: <RxDesktop />,
    title: 'Development',
    description: 'Seamless code to bring your digital dreams to vibrant life.',
  },
  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Persuasive words that narrate your story with irresistible allure',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Elevate visibility; ascend search ranks through strategic optimization mastery.',
  },
];

const ServiceSlider = () => {
  return <Swiper
    breakpoints={{
      320: {
        slidesPerView: 1,
        spaceBetween: 15
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 15
      }
    }}
    freeMode={true}
    pagination={{
      clickable: true
    }}
    modules={[FreeMode, Pagination]}
    className=' h-[200px] sm:h-[320px]'
  >

    {serviceData.map((item, index) => {
      return (
        <SwiperSlide key={index}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6py8
           flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            <div>
              <div>{item.title}</div>
              <p>{item.description}</p>
            </div>
            <div className='text-3xl'>
              <RxArrowTopRight className=' group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      )
    })
    }
  </Swiper>;
};

export default ServiceSlider;
