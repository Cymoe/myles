'use client';

import { useState } from 'react';
import { quizQuestions, wealthProfiles } from './quizData';
import { QuizQuestion } from './QuizQuestion';
import { QuizResults } from './QuizResults';
import { motion, AnimatePresence } from 'framer-motion';

export type ProfileScores = {
  freedomArchitect: number;
  empireBuilder: number;
  impactInvestor: number;
  securityStrategist: number;
};

export type ProfileKey = keyof ProfileScores;

export function Quiz({ onExit }: { onExit?: () => void }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [scores, setScores] = useState<ProfileScores>({
    freedomArchitect: 0,
    empireBuilder: 0,
    impactInvestor: 0,
    securityStrategist: 0,
  });
  const [showResults, setShowResults] = useState(false);

  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (questionId: number, optionValue: string) => {
    const question = quizQuestions.find(q => q.id === questionId);
    const selectedOption = question?.options.find(opt => opt.value === optionValue);
    
    if (selectedOption) {
      // Update scores
      const newScores = { ...scores };
      Object.entries(selectedOption.profiles).forEach(([profile, points]) => {
        newScores[profile as ProfileKey] += points;
      });
      setScores(newScores);
      
      // Save answer
      setAnswers({ ...answers, [questionId]: optionValue });
      
      // Move to next question or show results
      if (currentQuestion < quizQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      // Remove the score from the previous answer
      const previousQuestion = quizQuestions[currentQuestion - 1];
      const previousAnswer = answers[previousQuestion.id];
      const previousOption = previousQuestion.options.find(opt => opt.value === previousAnswer);
      
      if (previousOption) {
        const newScores = { ...scores };
        Object.entries(previousOption.profiles).forEach(([profile, points]) => {
          newScores[profile as ProfileKey] -= points;
        });
        setScores(newScores);
      }
      
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const getTopProfile = (): ProfileKey => {
    return Object.entries(scores).reduce((a, b) => 
      scores[a[0] as ProfileKey] > scores[b[0] as ProfileKey] ? a : b
    )[0] as ProfileKey;
  };

  if (showResults) {
    const topProfile = getTopProfile();
    return <QuizResults profileKey={topProfile} scores={scores} onRestart={() => {
      setCurrentQuestion(0);
      setAnswers({});
      setScores({
        freedomArchitect: 0,
        empireBuilder: 0,
        impactInvestor: 0,
        securityStrategist: 0,
      });
      setShowResults(false);
    }} />;
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-muted-foreground">
            Question {currentQuestion + 1} of {quizQuestions.length}
          </span>
          <span className="text-sm text-muted-foreground">
            {Math.round(progress)}% Complete
          </span>
        </div>
        <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Question */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          <QuizQuestion
            question={quizQuestions[currentQuestion]}
            onAnswer={handleAnswer}
            onBack={handleBack}
            canGoBack={currentQuestion > 0}
            selectedAnswer={answers[quizQuestions[currentQuestion].id]}
          />
        </motion.div>
      </AnimatePresence>

      {/* Category Indicator */}
      <div className="mt-8 flex justify-center">
        <span className="text-xs text-muted-foreground uppercase tracking-wide">
          {quizQuestions[currentQuestion].category}
        </span>
      </div>
    </div>
  );
}