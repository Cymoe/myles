'use client';

import { motion } from 'framer-motion';
import { QuizQuestion as QuizQuestionType } from './quizData';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (questionId: number, optionValue: string) => void;
  onBack: () => void;
  canGoBack: boolean;
  selectedAnswer?: string;
}

export function QuizQuestion({ 
  question, 
  onAnswer, 
  onBack, 
  canGoBack,
  selectedAnswer 
}: QuizQuestionProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold text-center">
        {question.question}
      </h2>

      <div className="space-y-3">
        {question.options.map((option, index) => (
          <motion.button
            key={option.value}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            onClick={() => onAnswer(question.id, option.value)}
            className={`w-full p-4 text-left rounded-lg border transition-all hover:border-primary hover:shadow-md ${
              selectedAnswer === option.value
                ? 'border-primary bg-primary/5'
                : 'border-border'
            }`}
          >
            <span className="text-base md:text-lg">{option.text}</span>
          </motion.button>
        ))}
      </div>

      {canGoBack && (
        <div className="flex justify-center mt-8">
          <button
            onClick={onBack}
            className="text-muted-foreground hover:text-foreground transition-colors text-sm"
          >
            ← Back to previous question
          </button>
        </div>
      )}
    </div>
  );
}