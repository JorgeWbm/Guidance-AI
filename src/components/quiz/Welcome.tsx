
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { ChevronRight, Code, Database, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function Welcome() {
  const { startQuiz } = useQuiz();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  return (
    <motion.div 
      className="quiz-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className="quiz-card"
        variants={itemVariants}
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
          Find Your Ideal Tech Career Path
        </h1>
        
        <motion.p 
          className="text-muted-foreground mb-8"
          variants={itemVariants}
        >
          Not sure if you should focus on front-end, back-end, or full-stack development? 
          Take this quiz to discover which path aligns best with your interests, 
          preferences, and natural abilities.
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
          variants={itemVariants}
        >
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-blue-500/10 mr-3">
                <Monitor className="w-5 h-5 text-neon-blue" />
              </div>
              <h3 className="font-semibold text-neon-blue">Front-End</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Create beautiful, interactive user interfaces. Focus on what users see and interact with.
            </p>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-purple-500/10 mr-3">
                <Database className="w-5 h-5 text-neon-purple" />
              </div>
              <h3 className="font-semibold text-neon-purple">Back-End</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Build the logic and data systems that power applications. Work with databases and server technologies.
            </p>
          </div>
          
          <div className="p-5 rounded-xl border border-border/40 bg-card/30">
            <div className="flex items-center mb-3">
              <div className="p-2 rounded-full bg-pink-500/10 mr-3">
                <Code className="w-5 h-5 text-neon-pink" />
              </div>
              <h3 className="font-semibold text-neon-pink">Full-Stack</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Become versatile by mastering both front-end and back-end. Build complete applications from start to finish.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="mb-6 p-4 rounded-lg bg-muted/20 border border-muted"
          variants={itemVariants}
        >
          <h4 className="font-semibold mb-2">How it works:</h4>
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Answer 20 questions about your preferences and interests</li>
            <li>We'll analyze your answers to determine your ideal path</li>
            <li>Receive a personalized career roadmap based on your results</li>
            <li>All questions are designed to gauge your natural tendencies and preferences</li>
          </ul>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <Button 
            onClick={startQuiz} 
            className="neon-button"
            size="lg"
          >
            Start Quiz <ChevronRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
