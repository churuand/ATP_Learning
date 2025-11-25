import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Building2, GraduationCap } from "lucide-react";
import studentPortrait from "@assets/generated_images/friendly_female_student_portrait.png";
import employerPortrait from "@assets/generated_images/friendly_employer_portrait.png";
import groupImage from "@assets/generated_images/diverse_group_of_graduates.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold text-primary tracking-tight">ATP Global.</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm">
            <a href="#" className="hover:text-primary/80 transition-colors">About Us</a>
            <a href="#" className="hover:text-primary/80 transition-colors">Programs</a>
            <a href="#" className="hover:text-primary/80 transition-colors">For Employers</a>
            <a href="#" className="hover:text-primary/80 transition-colors">Internships</a>
            <a href="#" className="hover:text-primary/80 transition-colors">Insights</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex rounded-full border-primary text-primary hover:bg-primary/5">
              Contact Us
            </Button>
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-6">
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <h1 className="text-5xl lg:text-6xl/tight font-serif text-primary">
                A brighter future begins with the right match.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                International students in Australia graduate from some of the best universities in the world. We connect extraordinary talent with the right job opportunities through internships.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">Over 10,000 graduates placed in leading companies.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-muted-foreground">Personalized matching for Engineering, IT, Marketing, and more.</p>
                </div>
              </div>
            </motion.div>

            {/* Right Content - The Arches */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 relative mt-12 lg:mt-0">
              
              {/* Student Card */}
              <motion.div 
                className="bg-primary rounded-t-[10rem] rounded-b-[2rem] p-8 text-center text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="relative z-10 flex flex-col h-full items-center">
                  <p className="text-white/80 text-sm font-medium uppercase tracking-wider mb-2">Welcome!</p>
                  <h3 className="text-2xl font-serif mb-8 pb-4 border-b border-white/20 w-full max-w-[200px]">I'm a Student</h3>
                  
                  <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-full px-8 mb-12 group-hover:scale-105 transition-transform">
                    Get Started
                  </Button>

                  <div className="mt-auto w-full aspect-[3/4] relative rounded-t-full overflow-hidden border-4 border-white/10">
                     <img 
                      src={studentPortrait} 
                      alt="Student" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>

              {/* Employer Card */}
              <motion.div 
                className="bg-secondary rounded-t-[10rem] rounded-b-[2rem] p-8 text-center text-primary relative overflow-hidden group cursor-pointer hover:shadow-2xl transition-all duration-500 mt-12 md:mt-24"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                 <div className="relative z-10 flex flex-col h-full items-center">
                  <p className="text-primary/70 text-sm font-medium uppercase tracking-wider mb-2">Welcome!</p>
                  <h3 className="text-2xl font-serif mb-8 pb-4 border-b border-primary/20 w-full max-w-[200px]">I'm an Employer</h3>
                  
                  <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white rounded-full px-8 mb-12 group-hover:scale-105 transition-transform">
                    Get Started
                  </Button>

                  <div className="mt-auto w-full aspect-[3/4] relative rounded-t-full overflow-hidden border-4 border-primary/10">
                     <img 
                      src={employerPortrait} 
                      alt="Employer" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* Welcome / About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-secondary rounded-3xl rotate-3 scale-95 opacity-50 transform translate-x-4 translate-y-4"></div>
              <img 
                src={groupImage} 
                alt="Diverse group of graduates" 
                className="relative rounded-3xl shadow-xl w-full object-cover aspect-video"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary">
                Welcome to ATP Global
              </h2>
              <p className="text-lg text-muted-foreground">
                Where we connect people with opportunities that shape futures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Employers struggle to find good executives in many areas of the Australian economy, and graduates simultaneously struggle to find job opportunities. We recognised this gap between talent and opportunities, and created a bridge across it.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our platform seamlessly bridges the gap between students, graduates, and global businesses by leveraging established networks and shared experiences.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-1">10k+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-1">500+</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-1">95%</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Employment Rate</div>
                </div>
              </div>

              <div className="pt-4">
                <Button variant="link" className="text-primary p-0 h-auto font-medium text-lg hover:underline decoration-2 underline-offset-4 group">
                  Read our full story <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary leading-tight">
                You're qualified. <br/>
                The jobs are there. <br/>
                <span className="text-primary/60 italic">You just need to connect.</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                We observe the disconnect between graduates seeking employment and employers who desperately want and need good candidates. An internship is a key means of landing a job you want.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-primary rounded-[2rem] p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
                {/* Decorative circle */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-8">Book a Session to understand internships</h3>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 ml-1">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/30 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
                        Submit Request
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
           <p className="text-lg font-medium text-muted-foreground mb-12 max-w-3xl mx-auto">
             We work with students and graduates from universities to local colleges
           </p>
           
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
             {/* Partner Logos - Using text placeholders for now, in production would be SVGs/Images */}
             <div className="text-2xl font-bold font-serif text-primary/80 flex items-center gap-2">
               <Building2 className="w-8 h-8" /> Assistance Abroad
             </div>
             <div className="text-3xl font-bold font-sans text-blue-700 flex items-center gap-2">
               grcg<sup className="text-xs">®</sup>
             </div>
             <div className="bg-[#d95d2e] text-white p-2 font-bold text-xl rounded-sm">
               abc
             </div>
             <div className="italic font-bold text-2xl text-blue-600">
               GEM
             </div>
             <div className="border-2 border-primary/30 rounded-lg px-4 py-2 text-xl font-light tracking-wide">
               applicaa
             </div>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-16 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-2xl font-serif font-bold mb-6">ATP Global.</h4>
              <p className="text-white/60 text-sm leading-relaxed">
                Connecting extraordinary talent with world-class opportunities through meaningful internships.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/90">For Students</h5>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Internship Programs</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Career Changer</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/90">For Employers</h5>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">Host an Intern</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Our Partners</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Industry Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact Sales</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/90">Company</h5>
              <ul className="space-y-2 text-sm text-white/60">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>© 2025 ATP Global. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
