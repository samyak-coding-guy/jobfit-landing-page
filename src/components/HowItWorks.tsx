
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Paste Resume & Job Description",
      description: "Upload your existing resume and paste the job description you're interested in.",
      color: "bg-blue-100 text-jobfit-blue border-blue-200",
    },
    {
      number: 2,
      title: "Let AI Analyze",
      description: "Our advanced AI compares your resume against the job requirements and industry standards.",
      color: "bg-purple-100 text-jobfit-purple border-purple-200",
    },
    {
      number: 3,
      title: "Get Score, Gaps & Tips",
      description: "Review your match score, identify skill gaps, and get actionable improvement suggestions.",
      color: "bg-green-100 text-green-700 border-green-200",
    },
    {
      number: 4,
      title: "Apply with Confidence",
      description: "Update your resume with our recommendations and submit your application with confidence.",
      color: "bg-amber-100 text-amber-700 border-amber-200",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">How JobFit Works</h2>
          <p className="text-lg text-gray-600">
            Our simple 4-step process helps you optimize your resume for each job application.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-24 bottom-24 w-1 bg-gray-300 -ml-0.5" aria-hidden="true"></div>
          
          <div className="space-y-16">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center`}
              >
                <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-16' : 'lg:pl-16'} mb-8 lg:mb-0`}>
                  <div className="max-w-md mx-auto lg:mx-0">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${step.color} font-bold text-xl mb-4`}>
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                
                <div className="lg:w-1/2 relative">
                  <div className={`bg-white rounded-lg shadow-md p-6 border ${index % 2 === 0 ? 'lg:ml-12' : 'lg:mr-12'}`}>
                    {step.number === 1 && (
                      <div className="space-y-4">
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                          <div className="h-4 w-20 bg-gray-300 rounded mb-2"></div>
                          <div className="h-32 bg-gray-200 rounded w-full"></div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                          <div className="h-4 w-32 bg-gray-300 rounded mb-2"></div>
                          <div className="h-40 bg-gray-200 rounded w-full"></div>
                        </div>
                      </div>
                    )}
                    
                    {step.number === 2 && (
                      <div className="flex justify-center items-center h-full">
                        <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                          <div className="w-16 h-16 border-4 border-jobfit-blue border-t-transparent rounded-full animate-spin"></div>
                        </div>
                      </div>
                    )}
                    
                    {step.number === 3 && (
                      <div className="space-y-4">
                        <div className="mb-4">
                          <div className="flex justify-between">
                            <span className="font-medium">Job Match</span>
                            <span className="font-bold text-jobfit-blue">73%</span>
                          </div>
                          <div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
                            <div className="h-2 bg-jobfit-blue rounded-full" style={{ width: '73%' }}></div>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-md p-3">
                          <h4 className="font-medium mb-2">Missing Skills</h4>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-red-50 text-red-600 text-xs rounded-full px-3 py-1">TypeScript</span>
                            <span className="bg-red-50 text-red-600 text-xs rounded-full px-3 py-1">Docker</span>
                            <span className="bg-red-50 text-red-600 text-xs rounded-full px-3 py-1">AWS</span>
                          </div>
                        </div>
                        
                        <div className="border border-gray-200 rounded-md p-3">
                          <h4 className="font-medium mb-2">Suggestions</h4>
                          <div className="space-y-2">
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                                <span className="text-xs">1</span>
                              </div>
                              <p className="text-sm text-gray-600 ml-2">Add experience with cloud platforms</p>
                            </div>
                            <div className="flex">
                              <div className="h-5 w-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                                <span className="text-xs">2</span>
                              </div>
                              <p className="text-sm text-gray-600 ml-2">Highlight your team leadership</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {step.number === 4 && (
                      <div className="text-center space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 text-2xl">
                          ✓
                        </div>
                        <h4 className="text-lg font-medium">Resume Optimized</h4>
                        <p className="text-sm text-gray-600">Your resume is now tailored for this position with an 89% match score!</p>
                        <div className="pt-2">
                          <Button variant="outline" size="sm" className="text-sm">
                            Download PDF
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            size="lg" 
            className="bg-jobfit-blue hover:bg-blue-700 text-white font-medium px-8"
          >
            Start Matching Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
