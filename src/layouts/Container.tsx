import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

const Container = ({ children, place, topic='' }: { children: ReactNode, place: string, topic?:string }) => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14 dark:bg-black dark:text-white">
        <Header place={place} topic={topic} />
        {children}
      </div>
    </>
  );
};

export default Container;
