import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/diverse_students_career_success.png";

export default function Programs() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground overflow-x-hidden">
      {/* Navigation - Consistent with Home */}
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
              <a className="text-primary font-bold transition-colors">Programs</a>
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

      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src={heroImage} 
          alt="Students success" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center text-white">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={fadeIn}
            className="max-w-3xl"
          >
            <p className="text-sm font-bold tracking-widest uppercase mb-4 text-white/90">Unlock Your Career Potential</p>
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight mb-6">
              Internships: Your Gateway to Success in Australia
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Intro Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-2xl md:text-4xl font-serif text-primary leading-relaxed">
            Our researchers and analysts match you with <span className="text-accent font-bold">global businesses</span> that fit with your skillset and preferred career direction.
          </h2>
        </div>
      </section>

      {/* Programs Cards Section */}
      <section className="py-20 pb-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            
            {/* Card 1: DataCAP - Dark Green/Teal (Using Primary/Dark theme) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#0f393b] rounded-[2rem] p-8 text-white flex flex-col h-full min-h-[420px] shadow-xl relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-500" />
              
              <h3 className="text-3xl font-serif mb-6 relative z-10">DataCAP</h3>
              
              <p className="text-white/80 leading-relaxed mb-12 relative z-10 text-sm md:text-base">
                Our Data Competency Assessment Program evaluates your technical proficiency and analytical skills, connecting you with top-tier data-driven organizations ready to leverage your unique insights.
              </p>
              
              <div className="mt-auto flex justify-end relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#0f393b] transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Card 2: Core Competency Assessment - Orange (Accent) */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-[#d95d2e] rounded-[2rem] p-8 text-white flex flex-col h-full min-h-[420px] shadow-xl relative overflow-hidden group cursor-pointer"
            >
              <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-500" />
              
              <h3 className="text-3xl font-serif mb-6 relative z-10">Core Competency Assessment</h3>
              
              <p className="text-white/90 leading-relaxed mb-12 relative z-10 text-sm md:text-base">
                Identify your key professional strengths. This comprehensive assessment ensures you are matched with roles that align perfectly with your core capabilities and career aspirations.
              </p>
              
              <div className="mt-auto flex justify-end relative z-10">
                <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-[#d95d2e] transition-all duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </motion.div>

            {/* Card 3: Intern Jobs - Pink/Rose (Secondary but darker for contrast, or a soft pink with dark text) */}
            {/* Reference used a light pink with dark text. Let's match that for variety. */}
            <Link href="/intern-jobs">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#eacbd2] rounded-[2rem] p-8 text-primary flex flex-col h-full min-h-[420px] shadow-xl relative overflow-hidden group cursor-pointer"
              >
                <div className="absolute -right-12 -top-12 w-40 h-40 bg-white/40 rounded-full blur-3xl group-hover:bg-white/60 transition-all duration-500" />
                
                <h3 className="text-3xl font-serif mb-6 relative z-10">Intern Jobs</h3>
                
                <p className="text-primary/80 leading-relaxed mb-12 relative z-10 text-sm md:text-base">
                  Gain hands-on career experience in a real business environment, learning industry-specific, technical, and soft skills that set you apart in the job market.
                </p>
                
                <div className="mt-auto flex justify-end relative z-10">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </Link>

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
