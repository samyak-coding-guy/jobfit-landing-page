
import { CheckCircle } from "lucide-react";

const Features = () => {
  const featuresList = [
    {
      id: 1,
      title: "Job Match Score",
      description: "Instantly see how well your resume aligns with any job description using AI-powered analysis.",
      icon: "🎯",
    },
    {
      id: 2,
      title: "Identify Skill Gaps",
      description: "Get a clear list of missing skills and keywords employers are looking for.",
      icon: "📉",
    },
    {
      id: 3,
      title: "Resume Improvement Tips",
      description: "Receive tailored suggestions to improve your resume based on the job you're applying for.",
      icon: "🛠️",
    },
    {
      id: 4,
      title: "History & Versioning",
      description: "Track your past resume submissions and keep improving over time.",
      icon: "📁",
    },
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Unlock Your Career Potential with AI
          </h2>
          <p className="text-lg text-gray-600">
            Our intelligent platform helps you tailor your resume for each job application, 
            increasing your chances of getting noticed by recruiters and landing interviews.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {featuresList.map((feature) => (
            <div key={feature.id} className="feature-card flex flex-col h-full">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 mb-4 flex-grow">{feature.description}</p>
              <ul className="space-y-2 mt-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-jobfit-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    {feature.id === 1 ? "AI-driven score based on 20+ factors" : 
                     feature.id === 2 ? "Highlight exactly what's missing" :
                     feature.id === 3 ? "Personalized to your experience level" :
                     "Compare different versions side by side"}
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-jobfit-blue mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    {feature.id === 1 ? "Compare against industry standards" : 
                     feature.id === 2 ? "Suggestions for addressing gaps" :
                     feature.id === 3 ? "Optimize keywords for ATS systems" :
                     "Automatic saves of all submissions"}
                  </span>
                </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
