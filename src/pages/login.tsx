import { useState } from "react";
import { useLocation, Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ChevronRight, ArrowLeft, Upload, Building2, GraduationCap, User, Search, Globe, ArrowRight } from "lucide-react";
import { clsx } from "clsx";
import atpLogo from "@assets/image_1764912058849.png";

export default function Login() {
  const [location, setLocation] = useLocation();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<"student" | "employer" | "visitor" | null>(null);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    nationality: "",
    degree: "",
    gradYear: "",
    country: "",
    state: "",
    companyName: "",
    explorationGoal: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 1) {
      if (formData.fullName && formData.email) setStep(2);
    } else if (step === 2) {
      if (userType) setStep(3);
    } else if (step === 3) {
      // Submit and redirect
      setLocation("/student-portal");
    }
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const containerVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.2 } }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md mb-8 text-center flex justify-center">
        <Link href="/">
          <img src={atpLogo} alt="ATP Global" className="h-16 w-auto object-contain cursor-pointer" />
        </Link>
      </div>

      <Card className="w-full max-w-2xl shadow-xl border-0 overflow-hidden bg-white rounded-3xl">
        <div className="h-2 bg-gray-100 w-full">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: "33%" }}
            animate={{ width: `${(step / 3) * 100}%` }}
            transition={{ duration: 0.4 }}
          />
        </div>

        <CardHeader className="pt-8 px-8 pb-2">
          <div className="flex items-center justify-between mb-2">
            {step > 1 ? (
              <Button variant="ghost" size="sm" onClick={handleBack} className="text-gray-500 -ml-2 hover:text-gray-900">
                <ArrowLeft className="w-4 h-4 mr-1" /> Back
              </Button>
            ) : (
              <div />
            )}
            <span className="text-xs font-bold uppercase tracking-wider text-gray-400">Step {step} of 3</span>
          </div>
          <CardTitle className="text-3xl font-serif font-bold text-gray-900">
            {step === 1 && "Let's get started"}
            {step === 2 && "Tell us about yourself"}
            {step === 3 && "Final details"}
          </CardTitle>
          <CardDescription className="text-base text-gray-500 mt-2">
            {step === 1 && "Enter your basic information to create your account."}
            {step === 2 && "Help us customize your experience by selecting your role."}
            {step === 3 && "Just a few more details to complete your profile."}
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8 pt-4">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div 
                key="step1"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5"
              >
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <Input 
                    id="fullName" 
                    placeholder="John Doe" 
                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all"
                    value={formData.fullName}
                    onChange={(e) => handleInputChange("fullName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com" 
                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-all"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="nationality">Country of Origin / Nationality <span className="text-gray-400 font-normal">(Optional)</span></Label>
                  <Select onValueChange={(val) => handleInputChange("nationality", val)} value={formData.nationality}>
                    <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="vn">Vietnam</SelectItem>
                      <SelectItem value="cn">China</SelectItem>
                      <SelectItem value="in">India</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div 
                key="step2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <p className="text-sm font-medium text-gray-700 mb-2">What best describes you?</p>
                
                <button 
                  onClick={() => setUserType("student")}
                  className={clsx(
                    "w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition-all text-left group",
                    userType === "student" 
                      ? "border-primary bg-primary/5 shadow-md" 
                      : "border-gray-100 bg-white hover:border-primary/30 hover:bg-gray-50"
                  )}
                >
                  <div className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    userType === "student" ? "bg-primary text-white" : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Student</div>
                    <div className="text-sm text-gray-500">I'm studying or recently graduated</div>
                  </div>
                  {userType === "student" && <Check className="w-5 h-5 text-primary ml-auto" />}
                </button>

                <button 
                  onClick={() => setUserType("employer")}
                  className={clsx(
                    "w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition-all text-left group",
                    userType === "employer" 
                      ? "border-primary bg-primary/5 shadow-md" 
                      : "border-gray-100 bg-white hover:border-primary/30 hover:bg-gray-50"
                  )}
                >
                  <div className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    userType === "employer" ? "bg-primary text-white" : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Employer</div>
                    <div className="text-sm text-gray-500">I'm hiring or looking for talent</div>
                  </div>
                  {userType === "employer" && <Check className="w-5 h-5 text-primary ml-auto" />}
                </button>

                <button 
                  onClick={() => setUserType("visitor")}
                  className={clsx(
                    "w-full p-4 rounded-2xl border-2 flex items-center gap-4 transition-all text-left group",
                    userType === "visitor" 
                      ? "border-primary bg-primary/5 shadow-md" 
                      : "border-gray-100 bg-white hover:border-primary/30 hover:bg-gray-50"
                  )}
                >
                  <div className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-colors",
                    userType === "visitor" ? "bg-primary text-white" : "bg-gray-100 text-gray-500 group-hover:bg-primary/10 group-hover:text-primary"
                  )}>
                    <Search className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Visitor</div>
                    <div className="text-sm text-gray-500">Researching internship opportunities</div>
                  </div>
                  {userType === "visitor" && <Check className="w-5 h-5 text-primary ml-auto" />}
                </button>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div 
                key="step3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-5"
              >
                {userType === "student" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="degree">Degree / Major</Label>
                      <Input 
                        id="degree" 
                        placeholder="e.g. Bachelor of Computer Science" 
                        className="h-12 bg-gray-50 border-gray-200"
                        value={formData.degree}
                        onChange={(e) => handleInputChange("degree", e.target.value)}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="gradYear">Graduation Year</Label>
                        <Select onValueChange={(val) => handleInputChange("gradYear", val)} value={formData.gradYear}>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                            <SelectValue placeholder="Year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                            <SelectItem value="2025">2025</SelectItem>
                            <SelectItem value="2026">2026</SelectItem>
                            <SelectItem value="2027">2027</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                         <Label htmlFor="country">Country</Label>
                         <Select onValueChange={(val) => handleInputChange("country", val)} value={formData.country}>
                          <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="nz">New Zealand</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State</Label>
                      <Select onValueChange={(val) => handleInputChange("state", val)} value={formData.state}>
                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select State" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="nsw">New South Wales</SelectItem>
                          <SelectItem value="vic">Victoria</SelectItem>
                          <SelectItem value="qld">Queensland</SelectItem>
                          <SelectItem value="wa">Western Australia</SelectItem>
                          <SelectItem value="sa">South Australia</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {userType === "employer" && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="companyName">Company Name <span className="text-gray-400 font-normal">(Optional)</span></Label>
                      <Input 
                        id="companyName" 
                        placeholder="Your Organization" 
                        className="h-12 bg-gray-50 border-gray-200"
                        value={formData.companyName}
                        onChange={(e) => handleInputChange("companyName", e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="explore">What do you want to explore?</Label>
                      <Select onValueChange={(val) => handleInputChange("explorationGoal", val)} value={formData.explorationGoal}>
                        <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                          <SelectValue placeholder="Select option" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="internships">Finding internships</SelectItem>
                          <SelectItem value="learning">Learning about Australia</SelectItem>
                          <SelectItem value="advice">Career advice</SelectItem>
                          <SelectItem value="content">Exploring content</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </>
                )}

                {userType === "visitor" && (
                   <div className="space-y-2">
                    <Label htmlFor="explore">What do you want to explore?</Label>
                    <Select onValueChange={(val) => handleInputChange("explorationGoal", val)} value={formData.explorationGoal}>
                      <SelectTrigger className="h-12 bg-gray-50 border-gray-200">
                        <SelectValue placeholder="Select option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internships">Finding internships</SelectItem>
                        <SelectItem value="learning">Learning about Australia</SelectItem>
                        <SelectItem value="advice">Career advice</SelectItem>
                        <SelectItem value="content">Exploring content</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                )}

                {/* CV Upload for everyone or specific roles (Student/Visitor usually) */}
                {(userType === "student" || userType === "visitor") && (
                  <div className="pt-2">
                    <Label className="mb-2 block">Drop CV <span className="text-gray-400 font-normal">(Optional)</span></Label>
                    <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-gray-50 hover:border-primary/30 transition-colors cursor-pointer">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-3 text-gray-400">
                        <Upload className="w-5 h-5" />
                      </div>
                      <p className="text-sm font-medium text-gray-900">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500 mt-1">PDF, DOCX up to 10MB</p>
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>

        <CardFooter className="p-8 pt-0 flex items-center justify-between">
          {step === 1 && (
             <div className="text-sm text-gray-500">
               Already have an account? <span className="text-primary font-bold cursor-pointer hover:underline">Log in</span>
             </div>
          )}
          <Button 
            onClick={handleNext} 
            className="ml-auto rounded-full bg-primary hover:bg-primary/90 text-white px-8 h-12 shadow-lg shadow-primary/20"
            disabled={
              (step === 1 && (!formData.fullName || !formData.email)) ||
              (step === 2 && !userType)
            }
          >
            {step === 3 ? "Complete Setup" : "Next Step"}
            {step !== 3 && <ChevronRight className="w-4 h-4 ml-2" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}