import Container from "@/layouts/Container";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import QuizNode from "@/components/Quiz/Node/QuizNode";

import QuizReact from "@/components/Quiz/React/QuizReact";
import QuizNext from "@/components/Quiz/Nextjs/QuizNext";

const TestPage: React.FC = () => {
  const { topic } = useParams();
  // const [questionData, setQuestionData] = useState<{ [key: string]: any }>();
  // const [questionCount, setQuestionCount] = useState<number>(1);
  // const [currentQuestion, setCurrentQuestion] = useState(1);
  // const [selected, setSelected] = useState("");
  // const [answers, setAnswers] = useState([""]);

  // const [score, setScore] = useState(0);
  // // useEffect hook to assign question to JSON
  // useEffect(() => {
  //   // console.log(Questions);
  //   if (topic === "node.js") {
  //     setQuestionData(() => '');
  //   }
  // }, []);
  // useEffect(() => {
  //   // console.log((((questionCount * questionData?.length) / 100) * 100) / 2);
  //   // console.log(currentQuestion);
  // });

  // const handleAnswer = (e: any) => {
  //   console.log(e);
  //   setSelected(e.target);
  // };

  // useEffect(() => {
  //   setCurrentQuestion(() => questionCount);

  //   if (questionCount === questionData?.length) {
  //     console.log("calc score");
  //   }
  // }, []);

  return (
    <Container place={`TEST`} topic={topic}>
      <div className="container !max-w-[740px] flex flex-col items-center justify-center">
        <div className="mb-2 md:mb-6">
          {" "}
          <a
            href="/dashboard"
            className="group rounded-md text-sm font-medium text-gray-400 transition-colors duration-200 hover:text-gray-800"
          >
            {" "}
            <span className="inline-block transform transition-transform group-hover:translate-x-[-2px]">
              ←
            </span>
            Back to Dashboard
          </a>{" "}
        </div>
        <h1 className="mb-1 text-2xl font-bold sm:mb-5 sm:text-5xl">
          {" "}
          {topic?.toUpperCase()} Questions{" "}
        </h1>
        <p className="hidden text-xl text-gray-500 sm:block">
          {" "}
          Test, rate and improve your {topic?.toUpperCase()} knowledge with
          these questions.{" "}
        </p>

        {topic === "node.js" ? <QuizNode topic={topic} /> : <></>}
        {topic === "React" ? <QuizReact topic={topic} /> : <></>}
        {topic === "next.js" ? <QuizNext topic={topic} /> : <></>}
      </div>
    </Container>
  );
};

export const TopCardNav = (questionCount: number, questionData: any) => {
  return (
    <div className="h-[122px] w-[680px] mt-6 border border-black rounded-xl">
      <div className="grid grid-cols-4 gap-4 mt-5 overflow-hidden justify-center-center">
        <div className="h-[5px] w-[450px] col-span-3 mr-6 ml-6">
          <Progress
            className="h-[15px] mt-1 "
            value={(questionCount / questionData?.length) * 100}
          />
        </div>

        <div className="grid grid-cols-4 gap-2 overflow-hidden mr-2">
          <Button
            className="w-5 h-[23px]"
            // onClick={
            //   // questionCount <= 1 ? null : setQuestionCount(questionCount - 1)
            // }
          >
            {" "}
            &lt;{" "}
          </Button>
          <p className="col-span-2">
            {" "}
            {questionCount} / {questionData?.length}{" "}
          </p>
          <Button
            className="w-5 h-[23px]"
            // onClick={() =>
            //   questionCount >= questionData?.length
            //     ? null
            //     // : setQuestionCount(questionCount + 1)
            // }
          >
            {" "}
            &gt;{" "}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestPage;
