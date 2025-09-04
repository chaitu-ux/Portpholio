import { useEffect, useState } from "react";

interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export function StatsCounter() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20">
      <div className="container-prose">
        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div className="animate-fade-in-up">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              <Counter end={2} suffix="+" />
            </div>
            <p className="text-gray-600 dark:text-gray-300">Production Apps</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl font-bold text-accent-600 dark:text-accent-400 mb-2">
              <Counter end={15} suffix="+" />
            </div>
            <p className="text-gray-600 dark:text-gray-300">API Endpoints</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              <Counter end={40} suffix="+" />
            </div>
            <p className="text-gray-600 dark:text-gray-300">React Components</p>
          </div>
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              <Counter end={90} suffix="%" />
            </div>
            <p className="text-gray-600 dark:text-gray-300">Security Improvement</p>
          </div>
        </div>
      </div>
    </section>
  );
}
