import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowDown, CheckCircle2, Briefcase, Users, TrendingUp } from "lucide-react";
import heroImage from "@assets/generated_images/mentorship_moment_in_office.png";

export default function InternJobs() {
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
            <Link href="/">
              <span className="text-2xl font-serif font-bold text-primary tracking-tight cursor-pointer">ATP Global.</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-600">
            <Link href="/">
              <a className="hover:text-primary transition-colors">About Us</a>
            </Link>
            <Link href="/programs">
              <a className="hover:text-primary transition-colors">Programs</a>
            </Link>
            <a href="#" className="hover:text-primary transition-colors">For Employers</a>
            <a href="#" className="hover:text-primary transition-colors">Internships</a>
            <a href="#" className="hover:text-primary transition-colors">Insights</a>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:flex rounded-full border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-primary">
              Contact Us
            </Button>
            <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-6 shadow-lg shadow-primary/20">
              Login
            </Button>
          </div>
        </div>
      </nav>

      {/* Split Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex flex-col lg:flex-row">
        {/* Left Content - Warm Mist Background */}
        <div className="w-full lg:w-1/2 bg-[linear-gradient(135deg,hsl(var(--secondary)),hsl(var(--background)))] flex flex-col justify-center p-8 lg:p-20 relative z-10">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-xl"
          >
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-bold uppercase tracking-wide mb-8">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Intern Jobs Program
              </div>
            <h1 className="text-5xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
              Placement Program
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-md">
              Our unique placement program helps you transition seamlessly and confidently from study to work, connecting you with Australia's leading organizations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="rounded-full bg-primary text-white hover:bg-primary/90 px-8 py-6 text-lg h-auto shadow-xl shadow-primary/20">
                Apply Now
              </Button>
               <Button variant="outline" className="rounded-full border-primary/20 text-primary hover:bg-primary/5 px-8 py-6 text-lg h-auto">
                Download Brochure
              </Button>
            </div>

            <div className="mt-20 flex items-center gap-2 text-primary/60 animate-bounce">
              <ArrowDown className="w-5 h-5" />
              <span className="text-sm font-medium uppercase tracking-widest">Discover More</span>
            </div>
          </motion.div>
        </div>

        {/* Right Image - Full Height */}
        <div className="w-full lg:w-1/2 relative min-h-[50vh] lg:min-h-auto">
           <div className="absolute inset-0 bg-gradient-to-r from-secondary via-transparent to-transparent z-10 lg:w-32 w-full h-32 lg:h-full pointer-events-none" />
           <img 
            src={heroImage} 
            alt="Mentorship in office" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">Why Choose Our Placement Program?</h2>
            <p className="text-gray-600 text-lg">
              We don't just find you an internship; we launch your career. Our comprehensive approach ensures you are ready, supported, and successful.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Briefcase className="w-8 h-8 text-primary" />,
                title: "Real Experience",
                desc: "Work on genuine projects that impact the business. No coffee runs—just real, hands-on professional experience."
              },
              {
                icon: <Users className="w-8 h-8 text-primary" />,
                title: "Mentorship",
                desc: "Get paired with a dedicated industry mentor who guides your professional development and growth."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-primary" />,
                title: "Career Growth",
                desc: "70% of our interns are offered permanent roles upon completion. Start your journey with the end in mind."
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl bg-secondary/30 border border-secondary hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-24 bg-secondary/20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary">Your Journey to Employment</h2>
              
              <div className="space-y-8">
                {[
                  { step: "01", title: "Application & Assessment", desc: "We review your background and career goals to ensure a perfect match." },
                  { step: "02", title: "Training & Prep", desc: "Participate in our Core Competency workshops to get workplace ready." },
                  { step: "03", title: "Placement", desc: "Begin your 12-week internship with one of our partner organizations." },
                  { step: "04", title: "Review & Hire", desc: "Final performance review and potential transition to permanent employment." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-serif text-lg shrink-0 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
               <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent rounded-3xl -rotate-3 transform scale-105" />
               <div className="bg-white p-8 rounded-3xl shadow-xl relative">
                  <h3 className="text-2xl font-serif text-primary mb-6">Ready to start?</h3>
                  <p className="text-gray-600 mb-8">Join thousands of graduates who have successfully launched their careers through ATP Global.</p>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <input 
                      type="email" 
                      placeholder="Email Address" 
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                     <input 
                      type="tel" 
                      placeholder="Phone Number" 
                      className="w-full p-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Button className="w-full rounded-xl bg-primary text-white hover:bg-primary/90 py-6 text-lg">
                      Enquire Now
                    </Button>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Consistent with Home */}
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
