
import { useQuiz } from "@/context/QuizContext";
import Welcome from "./Welcome";
import QuizQuestion from "./QuizQuestion";
import TiebreakQuestion from "./TiebreakQuestion";
import Results from "./Results";
import { AnimatePresence } from "framer-motion";

export default function Quiz() {
  const { currentStep, totalSteps, isTiebreaking, selectedPath } = useQuiz();

  const renderQuizSection = () => {
    if (currentStep === 0) {
      return <Welcome />;
    } else if (isTiebreaking) {
      return <TiebreakQuestion />;
    } else if (selectedPath) {
      return <Results />;
    } else if (currentStep <= totalSteps) {
      return <QuizQuestion />;
    }
    return null;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <AnimatePresence mode="wait">
        {renderQuizSection()}
      </AnimatePresence>
    </div>
  );
}
