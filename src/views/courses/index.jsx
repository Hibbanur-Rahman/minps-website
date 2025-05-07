import BannerImg from "@/assets/images/courses/course-banner.png";
import { Tabs, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import courseImg1 from "@/assets/images/courses/course-img-1.png";
import courseImg2 from "@/assets/images/courses/course-img-2.png";
import courseImg3 from "@/assets/images/courses/course-img-3.png";
import { useNavigate } from "react-router-dom";

const Course = () => {
  return (
    <div className="w-full">
      {/**Banner section */}
      <div className="relative">
        <div className=" h-[250px] relative w-full rounded-3xl overflow-hidden">
          <div className="bg-[#A02B2D]/70 w-full h-full z-[2] absolute flex items-center justify-center">
            <h2 className="text-2xl text-white sm:text-5xl font-bold italic mb-2 text-center font-[Poppins]">
              Courses
            </h2>
          </div>
          <img
            src={BannerImg || "/placeholder.svg"}
            alt="Courses Banner"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/**Content section */}
      <div className="container mx-auto py-8">
        <Tabs
          defaultValue="nursing"
          className="w-full bg-gray-100  rounded-3xl  border inset-shadow-sm inset-shadow-[#72AFA8] gap-0 overflow-hidden"
        >
          <TabsList className=" m-0 p-0 w-full flex justify-center items-center gap-x-4">
            <TabsTrigger
              value="nursing"
              className="cursor-pointer px-6 py-3 rounded-none rounded-tr-3xl rounded-br-none text-xl italic text-violet-800 font-bold transition-all data-[state=active]:bg-[#A02B2D] data-[state=active]:text-white"
            >
              NURSING COURSES
            </TabsTrigger>
            <TabsTrigger
              value="paramedical"
              className="cursor-pointer px-6 py-3 rounded-none rounded-tl-3xl rounded-bl-none text-xl italic text-violet-800 font-bold transition-all data-[state=active]:bg-[#A02B2D] data-[state=active]:text-white"
            >
              PARAMEDICAL COURSES
            </TabsTrigger>
          </TabsList>

          <TabsContent value="nursing" className="pt-6 bg-[#A02B2D]">
            <div className="flex flex-wrap justify-center items-center  w-10/12 mx-auto my-10">
              {nursingCourses.map((course, index) => (
                <CourseCard key={index} {...course} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="paramedical" className="pt-6 bg-[#A02B2D]">
            <div className="flex flex-wrap  justify-center items-center   w-10/12 mx-auto my-10">
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
const CourseCard = ({ title, image, description,path }) => {
  const navigate = useNavigate();
  return (
    <div className="w-4/12 p-3">
      <div className=" bg-white rounded-xl p-2 overflow-hidden shadow-lg hover:shadow-lg transition-shadow duration-300 flex flex-col cursor-pointer" onClick={()=>navigate(path)}>
        <div className="h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105 rounded-t-2xl"
          />
        </div>
        <div className="p-4 flex flex-col items-center flex-grow">
          <h3 className="text-xl font-bold text-[#A02B2D] text-center mb-2">
            {title}
          </h3>
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
    path:'/bscnursing'
  },
  {
    title: "GNM",
    image: courseImg3,
    path:'/bscnursing',
    description: "3-year diploma program in general nursing and midwifery",
  },
  {
    title: "ANM",
    image: courseImg2,
    path:'/bscnursing',
    description: "2-year auxiliary nurse midwifery program",
  },
  {
    title: "Post Basic B.Sc Nursing",
    image: courseImg1,
    path:'/bscnursing',
    description: "2-year program for registered nurses",
  },
];

// Sample data for paramedical courses
const paramedicalCourses = [
  {
    title: "DMLT",
    image: courseImg1,
    path:'/bscnursing',
    description: "Diploma in Medical Laboratory Technology",
  },
  {
    title: "DMR",
    image: courseImg2,
    path:'/bscnursing',
    description: "Diploma in Medical Radiology",
  },
  {
    title: "DOTA",
    image: courseImg3,
    path:'/bscnursing',
    description: "Diploma in Operation Theatre Assistant",
  },
  {
    title: "CMD",
    image: courseImg1,
    path:'/bscnursing',
    description: "Certificate in Medical Dispenser",
  },
  {
    title: "DOA",
    image: courseImg3,
    path:'/bscnursing',
    description: "Diploma in Ophthalmic Assistant",
  },
];

export default Course;
