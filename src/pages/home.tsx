import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Users, Building2, GraduationCap, ArrowDown } from "lucide-react";
import studentPortrait from "@assets/generated_images/friendly_female_student_portrait.png";
import employerPortrait from "@assets/generated_images/friendly_employer_portrait.png";
import groupImage from "@assets/generated_images/diverse_group_of_graduates.png";

import atpLogo from "@assets/image_1764912058849.png";

export default function Home() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={atpLogo} alt="ATP Global" className="h-12 w-auto object-contain" />
          </div>
          
          <div className="hidden md:flex items-center gap-6 font-medium text-sm text-gray-600">
            {/* Students & Graduates Dropdown */}
            <div className="relative group">
              <button className="hover:text-primary transition-colors flex items-center gap-1">
                Students & Graduates
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="https://atp-global.com.au/search" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">Intern Jobs</a>
                <a href="https://atp-global.com.au/testimonials" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">Testimonials</a>
                <div className="border-t border-gray-100 my-1"></div>
                <a href="https://atp-global.com.au/data-cap" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">DataCAP</a>
                <a href="https://atp-global.com.au/danh-gia-nang-luc" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">Core Competency Assessment</a>
              </div>
            </div>

            {/* Employers Dropdown */}
            <div className="relative group">
              <button className="hover:text-primary transition-colors flex items-center gap-1">
                Employers
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a href="https://atp-global.com.au/recruitment" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">Recruitment</a>
                <a href="https://atp-global.com.au/partner" className="block px-4 py-2 hover:bg-gray-50 text-gray-700 hover:text-primary transition-colors">Partners</a>
              </div>
            </div>

            <a href="https://talent.atp-global.com.au" className="hover:text-primary transition-colors">Community</a>
            <a href="https://atp-global.com.au/about-us" className="hover:text-primary transition-colors">About Us</a>
            <a href="https://atp-global.com.au/contact-us" className="hover:text-primary transition-colors">Contact Us</a>
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-6 shadow-lg shadow-primary/20">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </nav>
      {/* Hero Section - Clean White */}
      <section className="relative pt-12 pb-32 lg:pt-20 lg:pb-40 overflow-hidden bg-white rounded-b-[3rem] z-10 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div 
              className="lg:col-span-5 space-y-8"
              initial="initial"
              animate="animate"
              variants={fadeIn}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary text-primary text-xs font-bold uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Now accepting applications
              </div>
              <h1 className="text-5xl lg:text-6xl/tight font-serif text-primary">
                A brighter future begins with the right match.
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                International students in Australia graduate from some of the best universities in the world. We connect extraordinary talent with the right job opportunities through internships.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">Over 10,000 graduates placed in leading companies.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <p className="text-sm text-gray-600">Personalized matching for Engineering, IT, Marketing, and more.</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 transition-all">
                  Apply now!
                </Button>
                <Button 
                  variant="outline" 
                  className="rounded-full border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 text-lg font-medium hover:-translate-y-0.5 transition-all"
                  onClick={() => {
                    const nextSection = document.getElementById('welcome-section');
                    nextSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Learn more
                </Button>
              </div>
            </motion.div>

            {/* Right Content - The Arches */}
            <div className="lg:col-span-7 grid md:grid-cols-2 gap-6 relative mt-12 lg:mt-0">
              
              {/* Student Card */}
              <motion.div 
                className="bg-primary rounded-t-[10rem] rounded-b-[2rem] p-8 text-center text-white relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500"
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
                className="bg-secondary rounded-t-[10rem] rounded-b-[2rem] p-8 text-center text-primary relative overflow-hidden group cursor-pointer hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 mt-12 md:mt-24"
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
      {/* Welcome / About Section - Warm Mist Background */}
      <section id="welcome-section" className="py-24 bg-secondary relative -mt-12 pt-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              {/* Decorative Pattern */}
              <div className="absolute -left-8 -top-8 text-primary/10">
                 <svg width="100" height="100" viewBox="0 0 100 100" fill="currentColor">
                   <circle cx="10" cy="10" r="2" /> <circle cx="30" cy="10" r="2" /> <circle cx="50" cy="10" r="2" />
                   <circle cx="10" cy="30" r="2" /> <circle cx="30" cy="30" r="2" /> <circle cx="50" cy="30" r="2" />
                   <circle cx="10" cy="50" r="2" /> <circle cx="30" cy="50" r="2" /> <circle cx="50" cy="50" r="2" />
                 </svg>
              </div>
              
              <div className="absolute inset-0 bg-primary rounded-3xl rotate-3 scale-95 opacity-5 transform translate-x-4 translate-y-4"></div>
              <img 
                src={groupImage} 
                alt="Diverse group of graduates" 
                className="relative rounded-3xl shadow-xl w-full object-cover aspect-video border border-white/50"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif text-primary">
                Welcome to ATP Global
              </h2>
              <p className="text-lg font-medium text-primary/80">
                Where we connect people with opportunities that shape futures.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Employers struggle to find good executives in many areas of the Australian economy, and graduates simultaneously struggle to find job opportunities. We recognised this gap between talent and opportunities, and created a bridge across it.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our platform seamlessly bridges the gap between students, graduates, and global businesses by leveraging established networks and shared experiences.
              </p>

              <div className="grid grid-cols-3 gap-8 py-8 border-y border-primary/10">
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-1">10k+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Internships</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-1">500+</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Partners</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-serif text-primary mb-1">95%</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wide">Employment Rate</div>
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
      {/* CTA / Contact Section - Deep Red Background for Maximum Contrast */}
      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-4xl lg:text-5xl font-serif leading-tight">
                You're qualified. <br/>
                The jobs are there. <br/>
                <span className="text-white/60 italic">You just need to connect.</span>
              </h2>
              <p className="text-white/80 text-lg font-light">
                We observe the disconnect between graduates seeking employment and employers who desperately want and need good candidates. An internship is a key means of landing a job you want.
              </p>
              <div className="pt-4">
                <div className="flex -space-x-4">
                   <div className="w-12 h-12 rounded-full border-2 border-primary bg-gray-200 flex items-center justify-center text-xs text-primary font-bold">JD</div>
                   <div className="w-12 h-12 rounded-full border-2 border-primary bg-gray-300 flex items-center justify-center text-xs text-primary font-bold">AS</div>
                   <div className="w-12 h-12 rounded-full border-2 border-primary bg-gray-400 flex items-center justify-center text-xs text-primary font-bold">MR</div>
                   <div className="w-12 h-12 rounded-full border-2 border-primary bg-white text-primary flex items-center justify-center text-xs font-bold">+2k</div>
                </div>
                <p className="text-sm text-white/60 mt-2">Join thousands of others today.</p>
              </div>
            </div>

            <div className="lg:col-span-7">
              {/* White Card on Dark Background */}
              <div className="bg-white rounded-[2rem] p-8 lg:p-12 text-primary shadow-2xl relative overflow-hidden">
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-serif mb-8">Book a Session to understand internships</h3>
                  
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                        <input 
                          type="email" 
                          className="w-full bg-secondary/50 border border-gray-200 rounded-xl px-4 py-3 text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="you@example.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                        <input 
                          type="text" 
                          className="w-full bg-secondary/50 border border-gray-200 rounded-xl px-4 py-3 text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                    </div>
                    
                    <div className="pt-4 flex justify-end">
                      <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-8 py-6 text-lg font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
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
      {/* Partners Section - Clean White */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
           <p className="text-lg font-medium text-gray-500 mb-12 max-w-3xl mx-auto">
             We work with students and graduates from universities to local colleges
           </p>
           
           <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 hover:opacity-100">
             {/* Partner Logos - Using text placeholders for now, in production would be SVGs/Images */}
             <div className="text-2xl font-bold font-serif text-primary/80 flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
               <Building2 className="w-8 h-8" /> Assistance Abroad
             </div>
             <div className="text-3xl font-bold font-sans text-blue-700 flex items-center gap-2 hover:scale-105 transition-transform cursor-default">
               grcg<sup className="text-xs">®</sup>
             </div>
             <div className="bg-[#d95d2e] text-white p-2 font-bold text-xl rounded-sm hover:scale-105 transition-transform cursor-default">
               abc
             </div>
             <div className="italic font-bold text-2xl text-blue-600 hover:scale-105 transition-transform cursor-default">
               GEM
             </div>
             <div className="border-2 border-primary/30 rounded-lg px-4 py-2 text-xl font-light tracking-wide hover:border-primary hover:scale-105 transition-transform cursor-default">
               applicaa
             </div>
           </div>
        </div>
      </section>
      {/* Footer - Dark Grey/Red Overlay */}
      <footer className="bg-[#1a1a1a] text-white py-16 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-2 md:col-span-1">
              <h4 className="text-2xl font-serif font-bold mb-6 text-white">ATP Global.</h4>
              <p className="text-white/40 text-sm leading-relaxed">
                Connecting extraordinary talent with world-class opportunities through meaningful internships.
              </p>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/90">For Students</h5>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="hover:text-primary transition-colors">Internship Programs</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Career Changer</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/90">For Employers</h5>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="hover:text-primary transition-colors">Host an Intern</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Partners</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Industry Reports</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact Sales</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-medium mb-4 text-white/90">Company</h5>
              <ul className="space-y-2 text-sm text-white/40">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/20">
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
