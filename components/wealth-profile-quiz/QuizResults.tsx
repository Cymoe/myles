'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { wealthProfiles } from './quizData';
import { ProfileKey, ProfileScores } from './Quiz';

interface QuizResultsProps {
  profileKey: ProfileKey;
  scores: ProfileScores;
  onRestart?: () => void;
}

export function QuizResults({ profileKey, scores, onRestart }: QuizResultsProps) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const profile = wealthProfiles[profileKey];
  
  // Calculate percentage for each profile
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);
  const percentages = Object.entries(scores).map(([key, score]) => ({
    key: key as ProfileKey,
    percentage: Math.round((score / totalScore) * 100)
  })).sort((a, b) => b.percentage - a.percentage);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          leadMagnet: 'Wealth Profile Quiz',
          quizResult: profile.name,
          profileData: {
            profile: profileKey,
            scores,
            percentages
          }
        }),
      });

      if (response.ok) {
        setEmailSubmitted(true);
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

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-3xl mx-auto px-4 py-8"
    >
      {/* Profile Header */}
      <div className="text-center mb-8">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-6xl mb-4"
        >
          {profile.emoji}
        </motion.div>
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          You're {profile.name}
        </h1>
        <p className="text-xl text-muted-foreground">
          {profile.tagline}
        </p>
      </div>

      {/* Score Breakdown */}
      <div className="bg-card p-6 rounded-lg border border-border mb-8">
        <h3 className="text-lg font-semibold mb-4">Your Profile Breakdown</h3>
        <div className="space-y-3">
          {percentages.map(({ key, percentage }) => (
            <div key={key}>
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm flex items-center gap-2">
                  <span>{wealthProfiles[key].emoji}</span>
                  <span>{wealthProfiles[key].name}</span>
                </span>
                <span className="text-sm font-medium">{percentage}%</span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                <motion.div
                  className={`h-full ${key === profileKey ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Profile Description */}
      <div className="prose dark:prose-invert max-w-none mb-8">
        <p className="text-lg">{profile.description}</p>
      </div>

      {/* Traits and Strategies */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span>💪</span> Your Strengths
          </h3>
          <ul className="space-y-2">
            {profile.traits.map((trait, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{trait}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-card p-6 rounded-lg border border-border">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span>🚀</span> Wealth Building Strategies
          </h3>
          <ul className="space-y-2">
            {profile.strategies.map((strategy, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <span className="text-muted-foreground">{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Watch Out For */}
      <div className="bg-destructive/5 border border-destructive/20 p-6 rounded-lg mb-8">
        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
          <span>⚠️</span> Watch Out For
        </h3>
        <ul className="space-y-2">
          {profile.challenges.map((challenge, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-destructive mt-1">•</span>
              <span className="text-muted-foreground">{challenge}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Email Capture */}
      {!emailSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-primary/5 border-2 border-primary/20 p-8 rounded-lg text-center"
        >
          <h2 className="text-2xl font-semibold mb-2">
            Get Your Personalized Wealth Roadmap
          </h2>
          <p className="text-muted-foreground mb-6">
            Based on your {profile.name} profile, we'll send you a custom action plan with:
          </p>
          <ul className="text-sm text-muted-foreground mb-6 space-y-1">
            <li>• Specific business models that match your profile</li>
            <li>• Investment strategies aligned with your values</li>
            <li>• Common pitfalls to avoid</li>
            <li>• Resources and next steps</li>
          </ul>
          
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none"
                disabled={isSubmitting}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Get My Roadmap'}
              </button>
            </div>
            <p className="text-xs text-muted-foreground/70 mt-3">
              Free instant delivery. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-primary/5 border-2 border-primary/20 p-8 rounded-lg text-center"
        >
          <div className="text-4xl mb-4">✅</div>
          <h2 className="text-2xl font-semibold mb-2">
            Check Your Email!
          </h2>
          <p className="text-muted-foreground">
            Your personalized {profile.name} wealth roadmap is on its way to {email}
          </p>
        </motion.div>
      )}

      {/* Share Results */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          Found this helpful? Share your profile:
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => {
              const text = `I'm ${profile.name} - ${profile.tagline}! Take the Wealth Profile Quiz to discover yours:`;
              const url = window.location.origin + '/wealth-profile-quiz';
              window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            }}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Share on Twitter →
          </button>
          {onRestart && (
            <button
              onClick={onRestart}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Retake Quiz →
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}