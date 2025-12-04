import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  LayoutDashboard,
  PlayCircle,
  Calendar,
  BookOpen,
  User,
  LogOut,
  Search,
  Bell,
  Filter,
  Clock,
  MoreVertical,
  Play,
  HelpCircle,
  Lock,
  Coins,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { clsx } from "clsx";

// Mock Assets (replacing with generated ones later)
import masterclass1 from "@assets/generated_images/interview_masterclass_thumbnail.png";
import masterclass2 from "@assets/generated_images/resume_workshop_thumbnail.png";
import short1 from "@assets/generated_images/quick_career_tip_vertical.png";
import short2 from "@assets/generated_images/networking_tip_vertical.png";
import studentPortrait from "@assets/generated_images/friendly_female_student_portrait.png";
import welcomeAvatar from "@assets/generated_images/pixel_art_avatar_of_asian_male_in_suit.png";

export default function StudentPortal() {
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"all" | "full" | "shorts">("all");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(true);

  // Mock Data
  const fullVideos = [
    {
      id: 1,
      title: "Mastering the Australian Interview Process",
      author: "Sarah Jenkins",
      role: "HR Director",
      duration: "45 min",
      category: "Career Development",
      image: masterclass1,
      tags: ["Interview", "Soft Skills"],
    },
    {
      id: 2,
      title: "Resume Workshop: Stand Out from the Crowd",
      author: "David Chen",
      role: "Senior Recruiter",
      duration: "32 min",
      category: "Documentation",
      image: masterclass2,
      tags: ["Resume", "Application"],
    },
    {
      id: 3,
      title: "Networking Strategies for Introverts",
      author: "Emily Wilson",
      role: "Career Coach",
      duration: "28 min",
      category: "Networking",
      image: masterclass1, // Reusing for mockup
      tags: ["Networking", "Communication"],
    },
  ];

  const shortVideos = [
    {
      id: 101,
      title: "The Perfect Handshake",
      duration: "45 sec",
      image: short1,
    },
    {
      id: 102,
      title: "Elevator Pitch 101",
      duration: "58 sec",
      image: short2,
    },
    {
      id: 103,
      title: "Dress for Success",
      duration: "1 min",
      image: short1, // Reusing
    },
    {
      id: 104,
      title: "Zoom Etiquette",
      duration: "30 sec",
      image: short2, // Reusing
    },
  ];

  const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
    <button
      onClick={onClick}
      className={clsx(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm",
        active
          ? "bg-primary text-white shadow-lg shadow-primary/20"
          : "text-gray-500 hover:bg-secondary hover:text-primary",
      )}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-secondary/30 font-sans text-foreground flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-gray-100 h-screen sticky top-0 hidden lg:flex flex-col p-6 z-20">
        <div className="flex items-center gap-2 mb-10 px-2">
          <span className="text-2xl font-serif font-bold text-primary tracking-tight">
            ATP Global.
          </span>
        </div>

        <div className="space-y-2 flex-1">
          <div className="px-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
            Menu
          </div>
          <SidebarItem icon={PlayCircle} label="Videos" active />
          <SidebarItem icon={BookOpen} label="Resources" />
          <SidebarItem icon={Calendar} label="Events" />
          <SidebarItem icon={User} label="Members" />

          <div className="px-4 pt-6">
            <Dialog
              open={isConsultationOpen}
              onOpenChange={setIsConsultationOpen}
            >
              <DialogTrigger asChild>
                <Button className="w-full bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white shadow-lg shadow-red-200 border-0">
                  Book Consultation
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-transparent border-0 shadow-none p-0 max-w-4xl w-full flex flex-col items-center justify-center overflow-hidden">
                <div className="w-full bg-[#c71018] p-8 md:p-12 text-center rounded-t-3xl relative z-10">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                    Book your free internship <br /> placement session.
                  </h2>
                  <p className="text-white/80 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                    No commitment. We'll understand your goals, review your CV,
                    and suggest the best internship options for you.
                  </p>
                </div>

                <div className="w-full bg-white p-8 md:p-12 rounded-b-3xl -mt-4 relative z-20 shadow-2xl max-w-3xl mx-auto">
                  <form
                    className="space-y-6"
                    onSubmit={(e) => e.preventDefault()}
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label
                          htmlFor="fullName"
                          className="text-gray-700 font-medium"
                        >
                          Full Name
                        </Label>
                        <Input
                          id="fullName"
                          placeholder="John Doe"
                          className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="email"
                          className="text-gray-700 font-medium"
                        >
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="country"
                          className="text-gray-700 font-medium"
                        >
                          Country
                        </Label>
                        <Input
                          id="country"
                          placeholder="Current Country"
                          className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="city"
                          className="text-gray-700 font-medium"
                        >
                          City
                        </Label>
                        <Input
                          id="city"
                          placeholder="Current City"
                          className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="degree"
                          className="text-gray-700 font-medium"
                        >
                          Degree / Major
                        </Label>
                        <Input
                          id="degree"
                          placeholder="e.g. Master of IT"
                          className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label
                          htmlFor="gradYear"
                          className="text-gray-700 font-medium"
                        >
                          Graduation Year
                        </Label>
                        <Input
                          id="gradYear"
                          placeholder="e.g. 2025"
                          className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="startMonth"
                        className="text-gray-700 font-medium"
                      >
                        Preferred Internship Start Month
                      </Label>
                      <Select>
                        <SelectTrigger className="bg-gray-50 border-gray-200 h-12 rounded-xl focus:ring-primary/20">
                          <SelectValue placeholder="Select Month" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="jan">January</SelectItem>
                          <SelectItem value="feb">February</SelectItem>
                          <SelectItem value="mar">March</SelectItem>
                          <SelectItem value="apr">April</SelectItem>
                          <SelectItem value="may">May</SelectItem>
                          <SelectItem value="jun">June</SelectItem>
                          <SelectItem value="jul">July</SelectItem>
                          <SelectItem value="aug">August</SelectItem>
                          <SelectItem value="sep">September</SelectItem>
                          <SelectItem value="oct">October</SelectItem>
                          <SelectItem value="nov">November</SelectItem>
                          <SelectItem value="dec">December</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full bg-[#bf360c] hover:bg-[#a02e0a] text-white h-14 text-lg font-bold rounded-full shadow-lg shadow-orange-900/20 mt-4">
                      Book My Session
                    </Button>

                    <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mt-4">
                      <Lock className="w-3 h-3" />
                      <span>
                        Your details are kept private and only used to contact
                        you about internship options.
                      </span>
                    </div>
                  </form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 px-4 mb-6">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10">
              <img
                src={studentPortrait}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-bold text-gray-900 truncate">
                Việt Nguyen
              </div>
              <div className="text-xs text-gray-500 truncate">
                Student Member
              </div>
              <div className="flex items-center gap-1.5 mt-1.5 text-xs font-medium text-amber-600 bg-amber-50 w-fit px-2.5 py-1 rounded-full border border-amber-100">
                <Coins className="w-3 h-3 fill-current" />
                100 credits
              </div>
            </div>
          </div>
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-500 hover:bg-red-50 transition-colors text-sm font-medium">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* Welcome Dialog */}
      <Dialog open={isWelcomeOpen} onOpenChange={setIsWelcomeOpen}>
        <DialogContent className="bg-transparent border-0 shadow-none p-0 max-w-xl w-full flex flex-col items-center justify-center focus:outline-none">
          <div className="w-full bg-white p-8 rounded-3xl shadow-2xl relative">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gray-100 overflow-hidden flex-shrink-0 border border-gray-200">
                <img
                  src={welcomeAvatar}
                  alt="Viet Dang"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-900">Viet Dang</span>
                  <span className="text-xs text-gray-500">1:06 PM</span>
                </div>

                <div className="text-gray-800 leading-relaxed space-y-4 text-[15px]">
                  <p>Hey {"{Name}"}, welcome to ATP! 🎉</p>
                  <p>
                    I'm Viet Dang from the Student Experience team — super
                    excited to have you here!
                  </p>
                  <p>
                    To get you started, we’ve gifted you 50 free credits so you can explore and watch everything on the platform. 🎁
                  </p>
                  <p>
                    If you’ve got a question, idea, or found a bug, just email us anytime at{" "}
                    <span className="text-primary font-medium cursor-pointer hover:underline">
                      wecare@atp-global.com.au
                    </span>{" "}
                    — we’re here for you.
                  </p>
                  <p>Let's make your career journey amazing! 🚀</p>
                  <p>Cheers!</p>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={() => setIsWelcomeOpen(false)}
            className="mt-6 bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            Got it <span className="text-lg leading-none">→</span>
          </button>
        </DialogContent>
      </Dialog>

      {/* Main Content */}
      <main className="flex-1 min-w-0">
        {/* Header */}
        <header className="h-20 bg-white border-b border-gray-100 sticky top-0 z-10 px-8 flex items-center justify-between">
          <div className="flex items-center gap-4 flex-1 max-w-xl">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search videos, topics, or mentors..."
                className="pl-10 bg-secondary/30 border-transparent focus:bg-white transition-all rounded-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-6 pl-8">
            <button className="relative text-gray-500 hover:text-primary transition-colors">
              <HelpCircle className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-[1px] bg-gray-200"></div>
            <div className="text-right hidden md:block">
              <div className="text-xs text-gray-500">Student Success</div>
              <div className="text-sm font-bold text-primary">
                MasterClasses
              </div>
            </div>
          </div>
        </header>

        <div className="p-8 max-w-7xl mx-auto space-y-8">
          {/* Page Title & Filters */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                Career Development Library
              </h1>
              <p className="text-gray-500">
                Curated content to accelerate your professional growth.
              </p>
            </div>

            <div className="flex items-center gap-3 bg-white p-1.5 rounded-full border border-gray-100 shadow-sm">
              <button
                onClick={() => setActiveTab("all")}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeTab === "all"
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-500 hover:text-primary",
                )}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("full")}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeTab === "full"
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-500 hover:text-primary",
                )}
              >
                Full Masterclasses
              </button>
              <button
                onClick={() => setActiveTab("shorts")}
                className={clsx(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all",
                  activeTab === "shorts"
                    ? "bg-primary text-white shadow-md"
                    : "text-gray-500 hover:text-primary",
                )}
              >
                Quick Tips
              </button>
            </div>
          </div>

          {/* Featured Hero Video */}
          {(activeTab === "all" || activeTab === "full") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-[21/9] group cursor-pointer shadow-xl"
            >
              <img
                src={masterclass1}
                alt="Featured"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wide mb-4">
                  Featured Masterclass
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  Mastering the Australian Interview Process
                </h2>
                <p className="text-gray-300 mb-8 line-clamp-2">
                  Join Sarah Jenkins, HR Director at TechCorp, as she breaks
                  down exactly what Australian employers are looking for in
                  cultural fit interviews.
                </p>
                <div className="flex items-center gap-4">
                  <Button className="rounded-full bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                    <Play className="w-5 h-5 mr-2 fill-current" /> Watch Now
                  </Button>
                  <span className="text-white/60 text-sm font-medium">
                    45 min duration
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {/* Quick Tips Section (Shorts) */}
          {(activeTab === "all" || activeTab === "shorts") && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </span>
                  Quick Tips
                </h3>
                <button className="text-sm font-medium text-primary hover:underline">
                  View all shorts
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {shortVideos.map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ y: -5 }}
                    className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md"
                  >
                    <img
                      src={video.image}
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white">
                        <Play className="w-6 h-6 fill-current" />
                      </div>
                    </div>

                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <h4 className="text-white font-bold leading-tight mb-1">
                        {video.title}
                      </h4>
                      <span className="text-xs text-gray-300">
                        {video.duration}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Full Length Section */}
          {(activeTab === "all" || activeTab === "full") && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                    <PlayCircle className="w-5 h-5" />
                  </span>
                  Latest Masterclasses
                </h3>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-8 rounded-full text-xs"
                  >
                    Recent
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 rounded-full text-xs text-gray-500"
                  >
                    Popular
                  </Button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {fullVideos.map((video) => (
                  <Link href={`/video/${video.id}`} key={video.id}>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all"
                    >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={video.image}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-bold rounded-md">
                          {video.duration}
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                          <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center shadow-lg">
                            <Play className="w-5 h-5 fill-current ml-1" />
                          </div>
                        </div>
                      </div>

                      <div className="p-5">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-0.5 rounded-full bg-secondary text-primary text-[10px] font-bold uppercase tracking-wide">
                            {video.category}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h4>

                        <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-50">
                          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            {/* Placeholder avatar */}
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                              {video.author[0]}
                            </div>
                          </div>
                          <div className="text-xs">
                            <div className="font-bold text-gray-900">
                              {video.author}
                            </div>
                            <div className="text-gray-500">{video.role}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
