
import Header from "@/components/common/Header";
import Quiz from "@/components/quiz/Quiz";
import { QuizProvider } from "@/context/QuizContext";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <QuizProvider>
      <motion.div 
        className="min-h-screen flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Header />
        <main className="flex-1 flex flex-col">
          <Quiz />
        </main>
        <footer className="py-4 px-6 text-center text-xs text-muted-foreground">
          <p>© 2025 Guidance AI • Orientação de carreira para estudantes de tecnologia</p>
        </footer>
      </motion.div>
    </QuizProvider>
  );
};

export default Index;
