import React, { useEffect } from "react";
import bannerMobile from "@/assets/images/event/bannerMobile.png";
import bannerDesktop from "@/assets/images/event/bannerDesktop.svg";
import event1 from "@/assets/images/event/event-1.jpg"; // Importing the first event image
const Event = () => {
  const events = [
    {
      image: event1,
      date: "06 MAY 2025",
      title: "Science Exhibition 2025",
      description:
        "An amazing showcase of student projects in science and technology.",
    },
    {
      image: "/images/event2.jpg",
      date: "12 MAY 2025",
      title: "Art & Craft Fair",
      description: "Creative displays from students of all classes.",
    },
    {
      image: "/images/event3.jpg",
      date: "20 MAY 2025",
      title: "Annual Sports Meet",
      description:
        "Exciting sports activities and competitions throughout the day.",
    },
    {
      image: "/images/event4.jpg",
      date: "25 MAY 2025",
      title: "Inter-School Debate",
      description: "Debate competition with multiple schools participating.",
    },
    {
      image: "/images/event5.jpg",
      date: "30 MAY 2025",
      title: "Music & Dance Night",
      description: "An entertaining evening of performances by students.",
    },
    {
      image: "/images/event6.jpg",
      date: "05 JUN 2025",
      title: "Literary Fest",
      description: "Poetry, storytelling, and creative writing by students.",
    },
    {
      image: "/images/event7.jpg",
      date: "10 JUN 2025",
      title: "Alumni Meet",
      description: "A warm reunion of past and present students and teachers.",
    },
    {
      image: "/images/event8.jpg",
      date: "15 JUN 2025",
      title: "Tech Talk",
      description: "Experts share insights on future tech and innovation.",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="bg-white min-h-screen pt-10 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="relative max-w-screen-xl h-[250px] sm:h-[302px]">
        {/* Mobile banner */}
        <img
          src={bannerMobile}
          alt="Mobile Banner"
          className="w-full h-full absolute object-fit rounded-t-3xl block sm:hidden"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white  text-5xl font-bold sm:hidden">
          EVENTS
        </h1>

        {/* Desktop & Tablet banner */}
        <img
          src={bannerDesktop}
          alt="Desktop Banner"
          className="w-full h-full object-fit rounded-t-3xl hidden sm:block"
        />
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 mt-8 max-w-screen-xl mx-auto">
        {events.map((event, index) => (
          <div
            key={index}
            className="border border-[#D8EAE8] rounded-lg shadow hover:shadow-md transition duration-300 overflow-hidden bg-[#D8EAE8]"
          >
            {/* Image with Date */}
            <div className="relative p-2">
              <img
                src={event.image}
                alt={`Event ${index + 1}`}
                className="w-full h-[200px] sm:h-[250px] object-fit rounded-md"
              />
              <div className="absolute bottom-2 right-2 text-xs sm:text-sm bg-[#A02B2D] text-white px-2 py-1 rounded-tl-md rounded-br-md shadow-md">
                {event.date}
              </div>
            </div>

            {/* Content */}
            <div className="px-4 pb-4">
              <h2 className="font-semibold text-base text-[#3E4095]">
                {event.title}
              </h2>
              <p className="text-sm text-gray-600 mt-2">{event.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center text-lg sm:text-xl mt-10 mb-14">
        <button className="bg-[#3E4095] text-white px-6 sm:px-8 py-2 rounded-full hover:bg-blue-700 transition cursor-pointer">
          Load More...
        </button>
      </div>
    </div>
  );
};

export default Event;
