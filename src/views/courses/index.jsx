import bannerDesktop from "@/assets/images/courses/bannerDesktop.png";
import bannerMobile from "@/assets/images/courses/bannerMobile.png";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import courseImg1 from "@/assets/images/courses/course-img-1.png";
import courseImg2 from "@/assets/images/courses/course-img-2.png";
import courseImg3 from "@/assets/images/courses/course-img-3.png";
import { useNavigate } from "react-router-dom";

const Course = () => {
  return (
    <div className="w-full">
      {/* Banner section */}
      {/* Desktop Banner */}
      <div className="relative w-full hidden sm:block p-4 mt-4">
        <img
          src={bannerDesktop}
          alt="Faculty Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-6xl  font-bold">
          COURSES
        </h1>
      </div>
      {/* mobile banner */}
      <div className="relative w-full block sm:hidden p-2 mt-4">
        <img
          src={bannerMobile}
          alt="Faculty Banner"
          className="w-full h-auto object-cover rounded-lg"
        />
        <h1 className="absolute italic inset-0 flex items-center justify-center text-white text-5xl  font-bold">
          COURSES
        </h1>
      </div>

      {/* Content section */}
      <div className="container mx-auto py-4 sm:py-8 px-4">
        {" "}
        {/* Adjusted padding for smaller screens */}
        <Tabs
          defaultValue="nursing"
          className="w-full bg-[#A02B2D] sm:bg-[#D9D9D9] rounded-3xl border inset-shadow-md inset-shadow-[#72AFA8] gap-0 overflow-hidden"
        >
          <TabsList className=" relative z-10 m-0 p-0 w-full flex flex-col sm:flex-row justify-center items-center gap-y-2 sm:gap-y-0 ">
            {" "}
            {/* Stacked on small, row on sm+ */}
            <TabsTrigger
              value="paramedical"
              className=" relative cursor-pointer px-4 pt-12 sm:px-6 sm:py-3 rounded-none rounded-tl-3xl sm:rounded-t-3xl rounded-bl-none sm:rounded-bl-none text-xl sm:text-xl italic text-white sm:text-[#3E4095] font-bold md:transition-all data-[state=active]:bg-[#A02B2D] data-[state=active]:text-white w-full sm:w-auto shadow-xl " // Full width on small, auto on sm+
            >
              PARAMEDICAL COURSES
            </TabsTrigger>
            <TabsTrigger
              value="nursing"
              className=" relative cursor-pointer px-4 pt-12 sm:px-6 sm:py-3 sm:rounded-bl-none rounded-t-3xl sm:rounded-t-3xl rounded-b-none sm:rounded-br-none text-xl sm:text-xl italic text-white md:text-[#3E4095] font-bold md:transition-all data-[state=active]:bg-[#3E4095] sm:data-[state=active]:bg-[#A02B2D] data-[state=active]:text-white w-full sm:w-auto shadow-xl" // Full width on small, auto on sm+
            >
              NURSING COURSES
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="nursing"
            className=" z-10 pt-4 sm:pt-6 bg-[#3E4095] sm:bg-[#A02B2D] text-[#3E4095] sm:text-[#A02B2D]"
          >
            {" "}
            {/* Adjusted padding */}
            <div className="flex flex-wrap justify-center items-center w-11/12 md:w-10/12 mx-auto my-6 sm:my-10">
              {" "}
              {/* Wider on extra small, adjusted margin */}
              {nursingCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent
            value="paramedical"
            className=" z-10 pt-4 sm:pt-6 text-[#A02B2D] bg-[#A02B2D]"
          >
            {" "}
            {/* Adjusted padding */}
            <div className="flex flex-wrap justify-center items-center w-11/12 md:w-10/12 mx-auto my-6 sm:my-10">
              {" "}
              {/* Wider on extra small, adjusted margin */}
              {paramedicalCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

// Course Card Component
const CourseCard = ({ title, image, description, path }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-2 sm:p-3">
      {" "}
      {/* Responsive width and padding */}
      <div
        className="bg-white rounded-xl p-2 overflow-hidden shadow-lg hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer h-[250px]"
        onClick={() => navigate(path)}
      >
        {" "}
        {/* h-full to make cards same height */}
        <div className="h-40 sm:h-48 overflow-hidden rounded-t-lg">
          {" "}
          {/* Responsive image height */}
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="  p-2 flex flex-col items-center flex-grow">
          <h3 className="text-lg sm:text-xl font-bold  text-center ">
            {" "}
            {/* Responsive font size */}
            {title}
          </h3>
          {/* If you want to show description:
          <p className="text-sm text-gray-600 text-center">{description}</p>
          */}
        </div>
      </div>
    </div>
  );
};

// Sample data for nursing courses
const nursingCourses = [
  {
    title: "B.Sc Nursing",
    image: courseImg1,
    description: "4-year undergraduate program in nursing science",
    path: "/bscnursing",
  },
  {
    title: "GNM",
    image: courseImg3,
    path: "/bscnursing",
    description: "3-year diploma program in general nursing and midwifery",
  },
  {
    title: "ANM",
    image: courseImg2,
    path: "/bscnursing",
    description: "2-year auxiliary nurse midwifery program",
  },
  {
    title: "Post Basic B.Sc Nursing",
    image: courseImg1,
    path: "/bscnursing",
    description: "2-year program for registered nurses",
  },
];

// Sample data for paramedical courses
const paramedicalCourses = [
  {
    title: "DMLT",
    image: courseImg1,
    path: "/bscnursing",
    description: "Diploma in Medical Laboratory Technology",
  },
  {
    title: "DMR",
    image: courseImg2,
    path: "/bscnursing",
    description: "Diploma in Medical Radiology",
  },
  {
    title: "DOTA",
    image: courseImg3,
    path: "/bscnursing",
    description: "Diploma in Operation Theatre Assistant",
  },
  {
    title: "CMD",
    image: courseImg1,
    path: "/bscnursing",
    description: "Certificate in Medical Dispenser",
  },
  {
    title: "DOA",
    image: courseImg3,
    path: "/bscnursing",
    description: "Diploma in Ophthalmic Assistant",
  },
];

export default Course;
