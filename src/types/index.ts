export type QuestionType = {
    questionId: number,
    question: string,
    option1: string,
    option2: string,
    option3: string,
    option4: string,
    answerText: string,
    answer: number;
}

export type LoginPageProps = {
    message?: string
}

export type UserObjectType = {
    __v: number,
    _id: string,
    email: string,
    role: string,
    username: string,
    languages?: string[],
    skills?: {
        title: string,
        score: string,
        _id: string,
    }

}