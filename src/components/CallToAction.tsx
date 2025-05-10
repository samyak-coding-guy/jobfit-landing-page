
import { Button } from "@/components/ui/button";
import { ArrowRight, Apple, Download } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-jobfit-blue to-jobfit-purple text-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Land Your Dream Job?
          </h2>
          <p className="text-xl mb-10 text-blue-50">
            Get started with JobFitResume AI today and increase your chances of getting hired.
          </p>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">90%</div>
                <p className="text-blue-100">of users saw improved response rates</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">2.5x</div>
                <p className="text-blue-100">more likely to get an interview</p>
              </div>
              <div className="p-4">
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-blue-100">minutes saved per application</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-white hover:bg-gray-100 text-jobfit-blue font-medium text-lg px-10 py-6 h-auto"
            >
              Try JobFitResume AI for Free
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:bg-opacity-10 font-medium text-lg px-10 py-6 h-auto"
            >
              Upload Resume
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center gap-2"
            >
              <Apple className="h-5 w-5" />
              Download for iOS
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:bg-opacity-10 flex items-center gap-2"
            >
              <Download className="h-5 w-5" />
              Download for Android
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
