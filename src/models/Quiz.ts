export interface Quiz {
    id: string
    lessonId: string
    quizType: QuizType
    type: string,
    title: string,
    subtitle: string,
    description: string,
    difficultyPercent: number,
    questions: Question[],
    public: boolean,
    partOfCourseId: string,
    date: Date
}

export enum QuizType {
    INITIAL = "INITIAL",
    FINAL = "FINAL",
    GLOBAL = "GLOBAL"
}

export interface Question {
    type: string,
    questionText: string,
    answerOptions: string[],
    correctAnswers: number[],
    tips: string[],
    explanation: string
}
