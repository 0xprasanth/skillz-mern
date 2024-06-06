
import propic from "@/assets/gk1.jpg";

import { Badge } from "../ui/badge";

const About = ({ userData }: { userData: any }) => {
console.log(userData);

  
  

  return (
    <div className="w-[450px]">
      <div className="aspect-square items-center justify-center h-[200px] w-[400px]">
        <img src={propic} alt="Image" className=" px-6" />
      </div>
      <div className="h-48 w-96  flex flex-col ">
        <div className=" px-5 mt-3 text-xl  ">
          <span className="text-4xl font-semibold  px-5 w-16">
            {userData?.username}
          </span>
        </div>
        <div className=" px-5 mt-3 text-xl">
          <span className="text-4xl font-semibold  px-5 w-16">
            {userData.email}
          </span>
        </div>
        <div className=" px-5 mt-3 text-xl ">
          <span className="text-4xl font-semibold  px-5 w-16">
          {userData.role}
          </span>
        </div>
        <div className=" px-5 mt-3 text-xl ">
          {
            userData?.languages?.map((val: string) => {

              return (
                <Badge variant={"outline"} key={val} className=" px-2 ml-5">
                  {val}
                </Badge>
              )
              
            })
          }
        </div>
      </div>
    </div>
  );
};

export default About;
