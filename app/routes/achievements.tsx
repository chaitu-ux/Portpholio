import type { MetaFunction } from "react-router";
import { achievements } from "../content/site";

export const meta: MetaFunction = () => {
  return [
    { title: "Achievements | Portfolio" },
    { name: "description", content: "Key achievements and milestones in my development journey" },
  ];
};

export default function Achievements() {
  return (
    <main className="container-prose py-16">
      <div className="text-center mb-12 animate-fade-in-up">
        <h1 className="gradient-text mb-4">Key Achievements</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Measurable results and milestones that demonstrate my technical capabilities and impact.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {achievements.map((achievement, index) => (
          <div 
            key={achievement.title}
            className="card group animate-fade-in-up hover:scale-105 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {achievement.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>
              {achievement.metric && (
                <div className="ml-4 text-right">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {achievement.metric}
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs text-gray-500 dark:text-gray-400">Verified Achievement</span>
              </div>
              <svg className="w-5 h-5 text-primary-500 group-hover:text-primary-600 transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
        ))}
      </div>

      {/* Skills Impact Section */}
      <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="card max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
            Technical Impact Metrics
          </h3>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">2+</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Production Apps</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-600 dark:text-accent-400 mb-2">15+</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">API Endpoints</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">40+</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">React Components</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">90%</div>
              <p className="text-sm text-gray-600 dark:text-gray-300">Security Improvement</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
