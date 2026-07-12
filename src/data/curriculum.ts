export interface Lesson {
  id: string;
  title: string;
  slug: string;
  duration: number; // minutes
  difficulty: "beginner" | "intermediate" | "advanced";
  content: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Module {
  id: number;
  title: string;
  slug: string;
  description: string;
  icon: string;
  lessons: Lesson[];
  quiz: QuizQuestion[];
}
