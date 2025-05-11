
import React, { createContext, useContext, useState, ReactNode } from "react";
import { PathCategory, Question, quizQuestions, tiebreakQuestions } from "@/data/questions";
import { toast } from "sonner";

interface QuizContextType {
  currentStep: number;
  totalSteps: number;
  currentQuestion: Question | null;
  answers: Record<number, number>;
  isTiebreaking: boolean;
  tiebreakQuestion: string | null;
  selectedPath: PathCategory | null;
  scores: Record<PathCategory, number>;
  
  startQuiz: () => void;
  answerQuestion: (questionId: number, answerIndex: number) => void;
  handleTiebreakAnswer: (category: PathCategory) => void;
  resetQuiz: () => void;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [scores, setScores] = useState<Record<PathCategory, number>>({
    frontend: 0,
    backend: 0,
    fullstack: 0
  });
  const [isTiebreaking, setIsTiebreaking] = useState(false);
  const [tiebreakQuestion, setTiebreakQuestion] = useState<string | null>(null);
  const [selectedPath, setSelectedPath] = useState<PathCategory | null>(null);
  
  const totalSteps = quizQuestions.length;
  
  const currentQuestion = currentStep > 0 && currentStep <= totalSteps 
    ? quizQuestions[currentStep - 1] 
    : null;

  const startQuiz = () => {
    setCurrentStep(1);
    setAnswers({});
    setScores({
      frontend: 0,
      backend: 0,
      fullstack: 0
    });
    setIsTiebreaking(false);
    setTiebreakQuestion(null);
    setSelectedPath(null);
  };

  const answerQuestion = (questionId: number, answerIndex: number) => {
    // Save the answer
    setAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));

    // Update scores
    const question = quizQuestions.find(q => q.id === questionId);
    if (question) {
      const selectedAnswer = question.answers[answerIndex];
      
      setScores(prev => ({
        frontend: prev.frontend + selectedAnswer.scores.frontend,
        backend: prev.backend + selectedAnswer.scores.backend,
        fullstack: prev.fullstack + selectedAnswer.scores.fullstack
      }));
    }

    // Move to next question or finish quiz
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const finishQuiz = () => {
    // Get the path with the highest score
    let maxScore = -1;
    let maxPath: PathCategory | null = null;
    let tiedPaths: PathCategory[] = [];
    
    // Find max score
    Object.entries(scores).forEach(([path, score]) => {
      if (score > maxScore) {
        maxScore = score;
        maxPath = path as PathCategory;
        tiedPaths = [path as PathCategory];
      } else if (score === maxScore) {
        tiedPaths.push(path as PathCategory);
      }
    });

    // Check if we have a tie
    if (tiedPaths.length > 1) {
      handleTieScenario(tiedPaths);
    } else {
      setSelectedPath(maxPath);
      setCurrentStep(totalSteps + 1); // Move to results
    }
  };

  const handleTieScenario = (tiedPaths: PathCategory[]) => {
    // Sort paths alphabetically to ensure consistent tie-break formatting
    tiedPaths.sort();
    
    // Create tie-break key
    const tieKey = tiedPaths.join('-');
    
    // Check if we have a specific tie-break question for these paths
    if (tiebreakQuestions[tieKey]) {
      setIsTiebreaking(true);
      setTiebreakQuestion(tieKey);
      toast.info("Precisamos de mais algumas informações para determinar seu melhor caminho!");
    } else {
      // Fallback tie-break logic - prioritize fullstack > backend > frontend
      const priorityOrder: PathCategory[] = ['fullstack', 'backend', 'frontend'];
      
      for (const path of priorityOrder) {
        if (tiedPaths.includes(path)) {
          setSelectedPath(path);
          setCurrentStep(totalSteps + 1);
          return;
        }
      }
      
      // If somehow we get here, just use the first tied path
      setSelectedPath(tiedPaths[0]);
      setCurrentStep(totalSteps + 1);
    }
  };

  const handleTiebreakAnswer = (category: PathCategory) => {
    setSelectedPath(category);
    setIsTiebreaking(false);
    setTiebreakQuestion(null);
    setCurrentStep(totalSteps + 1); // Move to results
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setScores({
      frontend: 0,
      backend: 0,
      fullstack: 0
    });
    setIsTiebreaking(false);
    setTiebreakQuestion(null);
    setSelectedPath(null);
  };

  const value = {
    currentStep,
    totalSteps,
    currentQuestion,
    answers,
    isTiebreaking,
    tiebreakQuestion,
    selectedPath,
    scores,
    startQuiz,
    answerQuestion,
    handleTiebreakAnswer,
    resetQuiz
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (context === undefined) {
    throw new Error("useQuiz deve ser usado dentro de um QuizProvider");
  }
  return context;
};
