import React from "react";
type TestContentType = {
    questions: {
        questionId: number,
        question: string, 
        options: string[] 
    }
};

const TestContent = ({
    questions
}: TestContentType) => {
  const { questionId, question, options } = questions;
  console.log(questionId, question, options);
  

  return (
    <div className="w-[500px] border border-black flex flex-row items-center justify-center">
        
    </div>
  );
};

export default TestContent;
