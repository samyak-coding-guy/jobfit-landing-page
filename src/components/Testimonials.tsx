
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "JobFit Resume AI helped me land two interviews in one week. The match score and tips were spot-on!",
    name: "Ritika",
    role: "Marketing Analyst",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    quote: "I finally understood what was missing in my resume. The improvement tips were a game-changer!",
    name: "Ankit",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    quote: "Before using JobFit, I applied to 20+ jobs with no response. After optimizing my resume, I got 3 callbacks in a week!",
    name: "Sophia",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: 4,
    quote: "The skill gap analysis was eye-opening. I took a quick online course to fill the gaps and got the job!",
    name: "Miguel",
    role: "Data Analyst",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">What Job Seekers Say</h2>
          <p className="text-lg text-gray-600">
            Discover how JobFit Resume AI has helped professionals land their dream jobs.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="hidden md:block absolute inset-0 -z-10">
            <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-60"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-60"></div>
          </div>
          
          <div className="testimonial-card">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                  <img 
                    src={testimonials[activeIndex].avatar} 
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold text-gray-900">{testimonials[activeIndex].name}</h4>
                <p className="text-jobfit-blue">{testimonials[activeIndex].role}</p>
              </div>
              
              <div className="md:w-2/3 flex flex-col justify-center">
                <blockquote className="relative">
                  <div className="text-3xl text-jobfit-purple absolute -top-5 -left-4">"</div>
                  <p className="text-lg text-gray-600 italic mb-6 relative z-10">
                    {testimonials[activeIndex].quote}
                  </p>
                  <div className="text-3xl text-jobfit-purple absolute -bottom-8 right-0">"</div>
                </blockquote>
                
                <div className="mt-6 flex justify-center md:justify-start space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full ${
                        index === activeIndex ? 'bg-jobfit-blue' : 'bg-gray-300'
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-center space-x-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevTestimonial}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextTestimonial}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
