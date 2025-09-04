export interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Project Supervisor",
    role: "Technical Lead",
    company: "Technical Hub, Aditya University",
    content: "Chaitanya demonstrated exceptional technical skills during the SCAN2RIDE project. His ability to architect scalable solutions and implement complex features like real-time tracking was impressive for an intern-level developer.",
  },
  {
    name: "Team Colleague",
    role: "Full Stack Developer",
    company: "Project Space 7.0",
    content: "Working with Chaitanya was a great experience. He consistently delivered high-quality code, was proactive in solving technical challenges, and his collaborative approach made our team more productive.",
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900/50">
      <div className="container-prose">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            What Colleagues Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feedback from supervisors and team members I've worked with.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="card animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="flex-1">
                  <blockquote className="text-gray-600 dark:text-gray-300 mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
