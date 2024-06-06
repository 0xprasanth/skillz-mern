import SelectSkill from "@/components/SelectSkill";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Container from "@/layouts/Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const TakeTestPage = () => {
  const navigate = useNavigate();
  const [skillName, setSkillName] = useState("");

  const handleStart = () =>{
    console.log(skillName);
    if(skillName === ''){
      toast.warning('Select a framework', {
        position: 'top-right'
      })
      return
    }
    // render: TestPage
    navigate(`/take-test/${skillName}`)
  }

  return (
    <Container place={`Skill Test`}>
      <div className="flex items-start justify-center h-screen">
        <Card className="w-[650px] max-sm:w-[350px] flex flex-col items-center justify-start">
          <CardHeader>
            <CardTitle>Skill Test</CardTitle>
            <CardDescription>Please choose a skill topic for asseessment</CardDescription>
          </CardHeader>
          <CardContent>
            <SelectSkill skillName={skillName} setSkillName={setSkillName}/>
          </CardContent>
          <CardFooter>
          <Button className="m-1" onClick={() => navigate(-1)}>
          &lt;- Back
        </Button>
        <Button className="m-1" onClick={() => handleStart()}>
          Start -&gt;
        </Button>
          </CardFooter>
        </Card>

      </div>
    </Container>
  );
};

export default TakeTestPage;
