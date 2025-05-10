
import { useQuiz } from "@/context/QuizContext";
import { careerPaths } from "@/data/careerPaths";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check, Code, Database, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function Results() {
  const { selectedPath, resetQuiz } = useQuiz();

  if (!selectedPath || !careerPaths[selectedPath]) return null;

  const path = careerPaths[selectedPath];
  const IconComponent = getIconByName(path.icon);
  const colorClass = `text-${path.color}`;

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
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="quiz-container pb-16">
      <motion.div 
        className="quiz-card"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="mb-8 text-center"
          variants={itemVariants}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" 
            style={{backgroundColor: `rgba(var(--${path.color}-rgb, 79, 172, 254), 0.1)`}}>
            {IconComponent && <IconComponent className={`w-8 h-8 ${colorClass}`} />}
          </div>
          <h2 className="text-3xl font-bold mb-2 gradient-text">
            You're a{path.title.startsWith('F') ? 'n' : ''} {path.title}!
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {path.description}
          </p>
        </motion.div>

        <motion.div 
          className="mb-10"
          variants={itemVariants}
        >
          <h3 className="text-xl font-semibold mb-6 gradient-text">Your Career Roadmap</h3>
          <div className="space-y-8">
            {path.sections.map((section, sectionIndex) => (
              <motion.div 
                key={sectionIndex} 
                className="relative"
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 + sectionIndex * 0.1 }}
              >
                <h4 className="text-lg font-semibold mb-4">{section.title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {section.items.map((item, i) => (
                    <div 
                      key={i} 
                      className={`p-3 border rounded-lg ${getPriorityStyles(item.priority)}`}
                    >
                      <div className="flex items-start">
                        <div className={`p-1 rounded-full ${getPriorityBgStyles(item.priority)} mr-3 mt-0.5`}>
                          <Check className={`w-3 h-3 ${getPriorityTextStyles(item.priority)}`} />
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                          <div className="text-xs text-muted-foreground">{item.description}</div>
                          <div className="mt-1">
                            <span className={`inline-block text-xs px-2 py-0.5 rounded-full ${getPriorityTagStyles(item.priority)}`}>
                              {formatPriority(item.priority)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="flex justify-center"
          variants={itemVariants}
        >
          <Button 
            onClick={resetQuiz} 
            variant="outline" 
            className="neon-button"
            size="lg"
          >
            <ArrowLeft className="mr-2 w-4 h-4" /> Retake Quiz
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}

function getIconByName(name: string) {
  const icons: Record<string, React.FC<any>> = {
    'monitor': Monitor,
    'database': Database,
    'code': Code,
  };
  
  return icons[name];
}

function getPriorityStyles(priority: string) {
  switch(priority) {
    case 'core':
      return 'border-blue-500/30 bg-blue-500/10';
    case 'important':
      return 'border-purple-500/30 bg-purple-500/10';
    case 'advanced':
      return 'border-pink-500/30 bg-pink-500/10';
    default:
      return 'border-border/40 bg-card/30';
  }
}

function getPriorityBgStyles(priority: string) {
  switch(priority) {
    case 'core':
      return 'bg-blue-500/20';
    case 'important':
      return 'bg-purple-500/20';
    case 'advanced':
      return 'bg-pink-500/20';
    default:
      return 'bg-muted/40';
  }
}

function getPriorityTextStyles(priority: string) {
  switch(priority) {
    case 'core':
      return 'text-blue-400';
    case 'important':
      return 'text-purple-400';
    case 'advanced':
      return 'text-pink-400';
    default:
      return 'text-muted-foreground';
  }
}

function getPriorityTagStyles(priority: string) {
  switch(priority) {
    case 'core':
      return 'bg-blue-500/20 text-blue-300';
    case 'important':
      return 'bg-purple-500/20 text-purple-300';
    case 'advanced':
      return 'bg-pink-500/20 text-pink-300';
    default:
      return 'bg-muted/40 text-muted-foreground';
  }
}

function formatPriority(priority: string) {
  return priority.charAt(0).toUpperCase() + priority.slice(1);
}
