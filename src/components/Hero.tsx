
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
            Tailor Your Resume. <br />
            <span className="text-jobfit-blue">Land the Job.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg md:mx-0 mx-auto">
            Instantly match your resume to any job description. Get an AI-powered fit score, identify skill gaps, and receive smart improvement tips.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Button 
              size="lg" 
              className="bg-jobfit-blue hover:bg-blue-700 text-white font-medium text-lg px-8 py-6 h-auto"
            >
              Try JobFit for Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-jobfit-blue text-jobfit-blue hover:bg-jobfit-blue hover:text-white font-medium text-lg px-8 py-6 h-auto"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="relative">
            <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-100 relative z-10">
              <div className="bg-jobfit-blue text-white rounded-t-md p-3 mb-4">
                <h3 className="font-semibold">Resume Analysis</h3>
              </div>
              <div className="flex justify-between items-center mb-4">
                <span className="font-medium text-gray-700">Job Match Score</span>
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-jobfit-blue">82</span>
                  <span className="text-gray-500 text-lg">/100</span>
                </div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
                <div className="bg-jobfit-blue h-2 rounded-full" style={{ width: '82%' }}></div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 flex-shrink-0 mt-0.5">✓</div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Match on 14 key skills including "React", "UI/UX", and "API Integration"</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 flex-shrink-0 mt-0.5">!</div>
                  <div className="ml-3">
                    <p className="text-sm text-gray-600">Missing skills: "TypeScript", "GraphQL", "Performance Optimization"</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-4 -right-4 -bottom-4 -z-10 w-full bg-jobfit-purple opacity-20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
