'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { quizQuestions, calculateProfile, QuizQuestion } from '@/lib/wealthProfileQuiz';

interface QuizProps {
  onComplete?: (email: string, profileId: string) => void;
}

export default function WealthProfileQuiz({ onComplete }: QuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = { ...answers, [question.id]: answerIndex };
    setAnswers(newAnswers);

    if (currentQuestion < quizQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 300);
    } else {
      // Quiz complete, show email capture
      setShowEmailCapture(true);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const { profile, percentages } = calculateProfile(answers);

    try {
      // Subscribe user with their profile
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          leadMagnet: `Wealth Profile: ${profile.name}`,
          quizResult: profile.name,
          profileData: { profile, percentages }
        }),
      });

      if (response.ok) {
        // Store results in localStorage for results page
        localStorage.setItem('wealthProfileResults', JSON.stringify({
          answers,
          email,
          profileId: profile.id,
          timestamp: new Date().toISOString()
        }));

        // Send wealth profile results email
        await fetch('/api/send-wealth-profile', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            profile,
            percentages
          }),
        });

        // Redirect to results page
        router.push('/wealth-profile-results');
      } else {
        alert('Something went wrong. Please try again.');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
      setIsSubmitting(false);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  if (showEmailCapture) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl">🎯</span>
          </div>
          <h2 className="text-3xl font-semibold text-foreground mb-2">
            Your Profile is Ready!
          </h2>
          <p className="text-muted-foreground">
            Enter your email to see your personalized wealth profile and roadmap
          </p>
        </div>

        <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
          <div className="space-y-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your best email"
              required
              className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none transition-colors rounded-lg"
              disabled={isSubmitting}
              autoFocus
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium rounded-lg disabled:opacity-50"
            >
              {isSubmitting ? 'Calculating...' : 'See My Wealth Profile →'}
            </button>
          </div>
          <p className="text-xs text-muted-foreground/70 mt-4 text-center">
            We&apos;ll also send you weekly insights based on your profile. Unsubscribe anytime.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Question {currentQuestion + 1} of {quizQuestions.length}</span>
          <span>{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full bg-border rounded-full h-2 overflow-hidden">
          <div 
            className="bg-primary h-full transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Question */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-6">
          {question.question}
        </h3>
        {question.scenario && (
          <p className="text-muted-foreground mb-6">{question.scenario}</p>
        )}
      </div>

      {/* Answers */}
      <div className="space-y-3">
        {question.answers.map((answer, index) => {
          const isSelected = answers[question.id] === index;
          return (
            <button
              key={index}
              onClick={() => handleAnswer(index)}
              className={`w-full p-4 text-left border rounded-lg transition-all duration-200 group ${
                isSelected 
                  ? 'bg-primary/10 border-primary' 
                  : 'bg-background hover:bg-muted border-border hover:border-primary'
              }`}
            >
            <div className="flex items-center justify-between">
              <span className={`transition-colors ${isSelected ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
                {answer.text}
              </span>
              {isSelected ? (
                <svg 
                  className="w-5 h-5 text-primary" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              ) : (
                <svg 
                  className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          </button>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between mt-8">
        {currentQuestion > 0 && (
          <button
            onClick={handleBack}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back
          </button>
        )}
      </div>
    </div>
  );
}