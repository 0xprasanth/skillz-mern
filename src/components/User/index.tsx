import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import About from "./About";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "@/apis";
import SkillCard from "./SkillCard";
import { ScrollArea } from "@/components/ui/scroll-area";

export function UserInfo() {
  const [userObject, setUserObject] = useState<any>({});
  const [windowSize, setWindowSize] = useState(0);

  useEffect(() => {
    setWindowSize(() => window.innerWidth);
    console.log(windowSize);
    
  })
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetchUserInfo();

        setUserObject(resp);
      } catch (error) {
        console.log(`22 ${error}`);
      }
    };

    try {
      fetchData();
    } catch (error) {
      console.log(`30 ${error}`);
    }
  }, []);

  return (
    <ResizablePanelGroup
      direction={'horizontal'}
      className=" h-full  w-screen rounded-lg border dark:bg-black dark:text-white"
    >
      <ResizablePanel defaultSize={30}>
        <div className="flex h-screen items-center justify-center p-6">
          <About userData={userObject} />
        </div>
      </ResizablePanel>

      <ResizableHandle />

      <ResizablePanel defaultSize={70}>
        <ScrollArea>
          <div className="flex flex-col h-screen items-start justify-start p-6">
            <h1 className=" text-[36px] font-bold">Test History</h1>
            {userObject?.skills?.length === 0 ? (
              <span className=" absolute left-80 top-28">No Test History Available</span>
            ) : (
              userObject?.skills?.map((val: string) => {
                console.log(val);
                return <SkillCard value={val} />;
              })
            )}
          </div>
        </ScrollArea>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default UserInfo;
