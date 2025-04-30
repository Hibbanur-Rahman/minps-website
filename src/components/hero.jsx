import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

//images
import SlideImg1 from "@/assets/images/slide-img-1.jpg";
import SlideImg2 from "@/assets/images/slide-img-2.jpeg";
import SlideImg3 from "@/assets/images/slide-img-3.jpg";
import SlideImg4 from "@/assets/images/slide-img-4.jpg";
import SlideImg5 from "@/assets/images/slide-img-5.jpg";
import SlideImg6 from "@/assets/images/slide-img-6.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  const [slides] = useState([
    {
      title: "Shaping Healthcare Professionals, Transforming Lives.",
      description: "Dedicated to excellence in healthcare education.",
      image: SlideImg1,
    },
    {
      title: "Building Tomorrow's Healthcare Leaders",
      description:
        "Innovative programs designed for modern healthcare challenges.",
      image: SlideImg2,
    },
    {
      title: "Excellence in Medical Education",
      description: "Join our community of healthcare professionals.",
      image: SlideImg3,
    },
  ]);

  return (
    <div className="w-full">
      {/* Hero Section with Curved Right Side */}
      <div className="relative  max-w-7xl mx-auto rounded-xl overflow-hidden h-[500px]">
        {/* Hero Content */}
        <div className="container mx-auto relative z-[0] w-full h-full bg-white">
          <div className="w-full h-full">
            {/* <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper h-full"
            >
              {slides.map((slide, index) => (
                <SwiperSlide key={index}>
                  <div
                    className="slide-content pb-12 h-full bg-cover"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <h1 className="text-5xl font-bold mb-6">
                      <span className="text-[#3e4095]">{slide.title}</span>
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                      {slide.description}
                    </p>
                    <Button className="bg-[#3e4095] hover:bg-[#3e4095]/90 text-white px-8 py-4 rounded-full text-lg">
                      Learn More
                    </Button>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper> */}
          </div>
        </div>
        {/* Curved Shape Element */}
        <div className="w-full h-full absolute z-[10] top-0">
          <div className="w-8/12 bg-[#e9e9e9] h-full absolute left-0 top-0 rounded-br-3xl rounded-l-3xl z-[11] overflow-hidden border-t border-b border-s">
          </div>
          
          <div className="w-3/12 bg-[#e9e9e9] h-full absolute right-[107px] top-0 overflow-hidden border-t border-b"></div>
          <div className="w-1/12 bg-[#e9e9e9] h-[90%] absolute right-0 top-0 rounded-r-3xl overflow-hidden border-b border-e border-t"></div>
          <div className="absolute bottom-0 right-0 bg-white rounded-tl-3xl h-[50px] w-4/12 overflow-hidden"></div>
        </div>
      </div>

      {/* Notice Board Section */}
      <div className="relative py-8 px-4 max-w-7xl mx-auto rounded-xl my-4 mt-[30px] z-[20]">
        <div className="container mx-auto max-w-6xl relative z-[10]">
          {/* NOTICE BOARD Header */}
          <div className="flex justify-end mb-4 relative mt-[-60px]">
            <h2 className="text-4xl font-extralight italic  text-[#a02b2d]">
              NOTICE
              <br />
              <span className="font-bold">BOARD</span>
            </h2>
          </div>

          <div className="bg-[#D8EAE8] p-6 rounded-lg inset-shadow-sm inset-shadow-[#72AFA8]">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Upcoming Events */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-[#a02b2d] text-white text-center py-3">
                  <h3 className="text-2xl font-medium">Upcoming EVENTS</h3>
                </div>
                <div className="p-6 space-y-6 shadow-sidebar-ring">
                  {/* Event 1 */}
                  <div className="text-center">
                    <h4 className="text-[#3e4095] text-2xl font-semibold">
                      Fresher Party 2025
                    </h4>
                    <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                    <div className="flex items-center justify-center mt-2">
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div className="text-center">
                    <h4 className="text-[#3e4095] text-2xl font-semibold">
                      Fresher Party 2025
                    </h4>
                    <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                    <div className="flex items-center justify-center mt-2">
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Events */}
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="bg-[#a02b2d] text-white text-center py-3">
                  <h3 className="text-2xl font-medium">Recent EVENTS</h3>
                </div>
                <div className="p-6 space-y-6">
                  {/* Event 1 */}
                  <div className="text-center">
                    <h4 className="text-[#3e4095] text-2xl font-semibold">
                      Fresher Party 2025
                    </h4>
                    <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                    <div className="flex items-center justify-center mt-2">
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                    </div>
                  </div>

                  {/* Event 2 */}
                  <div className="text-center">
                    <h4 className="text-[#3e4095] text-2xl font-semibold">
                      Fresher Party 2025
                    </h4>
                    <p className="text-[#3e4095] text-lg">25 MAY 2025</p>
                    <div className="flex items-center justify-center mt-2">
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                      <div className="h-0.5 w-64 bg-[#a02b2d]"></div>
                      <div className="h-2 w-2 rounded-full bg-[#a02b2d]"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Events Button */}
            <div className="flex justify-center mt-8">
              <a href="/events">
                <Button className="bg-[#3e4095] hover:bg-[#3e4095]/90 text-white px-12 py-6 rounded-full text-xl">
                  ALL EVENTS
                </Button>
              </a>
            </div>
          </div>
        </div>
        {/**background design */}
        <div className="w-[68%] bg-[#ecd2d3] h-full absolute left-0 top-0 rounded-l-3xl">
          <div className="w-full bg-[#fff] h-[30px] absolute  top-[-30px] z-[2] right-[-0px] rounded-br-3xl"></div>
          <div className="w-[100px] absolute bg-[#ecd2d3] h-[30px] top-[-20px] right-0"></div>
        </div>
        <div className="w-[32%] bg-[#ecd2d3] h-[110%] absolute right-0 top-[-51px] rounded-r-3xl rounded-tl-3xl"></div>
      </div>
    </div>
  );
};

export default Hero;
