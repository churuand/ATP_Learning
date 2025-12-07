import { useLocation, useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  LayoutDashboard, 
  PlayCircle, 
  Calendar, 
  BookOpen, 
  User, 
  LogOut, 
  Search, 
  Bell, 
  ThumbsUp,
  ThumbsDown,
  Share2,
  MoreHorizontal,
  Play,
  Clock
} from "lucide-react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

// Mock Assets
import masterclass1 from "@assets/generated_images/interview_masterclass_thumbnail.png";
import masterclass2 from "@assets/generated_images/resume_workshop_thumbnail.png";
import short1 from "@assets/generated_images/quick_career_tip_vertical.png";
import short2 from "@assets/generated_images/networking_tip_vertical.png";
import studentPortrait from "@assets/generated_images/friendly_female_student_portrait.png"; 

export default function VideoPlayer() {
  const [match, params] = useRoute("/video/:id");
  const [location, setLocation] = useLocation();
  const videoId = params?.id;

  // Mock Data (Duplicated for mockup simplicity)
  const currentVideo = {
    id: 1,
    title: "Mastering the Australian Interview Process",
    author: "Sarah Jenkins",
    role: "HR Director",
    subscribers: "12.5k",
    views: "15k views",
    date: "2 days ago",
    description: "Join Sarah Jenkins, HR Director at TechCorp, as she breaks down exactly what Australian employers are looking for in cultural fit interviews. In this masterclass, we cover behavioral questions, the STAR method, and how to showcase your soft skills effectively.",
    image: masterclass1,
    tags: ["Interview", "Soft Skills"]
  };

  const recommendedVideos = [
    {
      id: 2,
      title: "Resume Workshop: Stand Out from the Crowd",
      author: "David Chen",
      views: "8.2k views",
      date: "5 days ago",
      duration: "32:10",
      image: masterclass2
    },
    {
      id: 3,
      title: "Networking Strategies for Introverts",
      author: "Emily Wilson",
      views: "5.1k views",
      date: "1 week ago",
      duration: "28:45",
      image: masterclass1 // Reusing
    },
    {
      id: 4,
      title: "Salary Negotiation Tactics",
      author: "Mark Thompson",
      views: "12k views",
      date: "2 weeks ago",
      duration: "15:20",
      image: masterclass2 // Reusing
    }
  ];

  const shorts = [
    { id: 101, title: "The Perfect Handshake", views: "50k", image: short1 },
    { id: 102, title: "Elevator Pitch 101", views: "32k", image: short2 },
    { id: 103, title: "Dress for Success", views: "18k", image: short1 },
    { id: 104, title: "Zoom Etiquette", views: "22k", image: short2 }
  ];

  const SidebarItem = ({ icon: Icon, label, active = false, onClick }: any) => (
    <button 
      onClick={onClick}
      className={clsx(
        "w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium text-sm",
        active 
          ? "bg-primary text-white shadow-lg shadow-primary/20" 
          : "text-gray-500 hover:bg-secondary hover:text-primary"
      )}
    >
      <Icon className="w-5 h-5" />
      {label}
    </button>
  );

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex">
      {/* Sidebar (Collapsed on smaller screens like YouTube) */}
      <aside className="w-20 lg:w-64 bg-white border-r border-gray-100 h-screen sticky top-0 hidden md:flex flex-col p-4 z-20 shrink-0">
        <div className="flex items-center gap-2 mb-8 px-2 justify-center lg:justify-start cursor-pointer" onClick={() => setLocation('/student-portal')}>
           <span className="text-2xl font-serif font-bold text-primary tracking-tight hidden lg:block">ATP Global.</span>
           <span className="text-2xl font-serif font-bold text-primary tracking-tight lg:hidden">ATP</span>
        </div>

        <div className="space-y-2 flex-1">
          <SidebarItem icon={PlayCircle} label={<span className="hidden lg:inline">Videos</span>} active />
          <SidebarItem icon={BookOpen} label={<span className="hidden lg:inline">Resources</span>} />
          <SidebarItem icon={Calendar} label={<span className="hidden lg:inline">Events</span>} />
          <SidebarItem icon={User} label={<span className="hidden lg:inline">Members</span>} />
        </div>

        <div className="mt-auto pt-6 border-t border-gray-100 flex justify-center lg:justify-start">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/10 cursor-pointer">
            <img src={studentPortrait} alt="Profile" className="w-full h-full object-cover" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 flex flex-col">
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-100 sticky top-0 z-10 px-4 lg:px-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4 flex-1 max-w-2xl mx-auto">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input 
                placeholder="Search" 
                className="pl-10 bg-secondary/30 border-transparent focus:bg-white transition-all rounded-full h-10"
              />
            </div>
            <Button size="icon" variant="ghost" className="rounded-full bg-secondary/30">
                <Search className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4 pl-4">
             <Button variant="ghost" size="icon" className="rounded-full">
                <Bell className="w-5 h-5 text-gray-600" />
             </Button>
             <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                <img src={studentPortrait} alt="Profile" className="w-full h-full object-cover" />
             </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto">
          <div className="max-w-[1800px] mx-auto p-4 lg:p-6 grid lg:grid-cols-[1fr_350px] xl:grid-cols-[1fr_400px] gap-6">
            
            {/* Left Column: Video Player & Info */}
            <div className="min-w-0">
              {/* Video Player */}
              <div className="aspect-video bg-black rounded-2xl overflow-hidden shadow-lg relative group">
                <img src={currentVideo.image} alt={currentVideo.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-current ml-1" />
                    </div>
                </div>
                {/* Fake Controls */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-black/80 to-transparent flex items-end px-4 pb-3 gap-4">
                    <Play className="w-5 h-5 text-white fill-current" />
                    <div className="flex-1 h-1 bg-white/30 rounded-full overflow-hidden">
                        <div className="w-1/3 h-full bg-primary"></div>
                    </div>
                    <span className="text-white text-xs">14:20 / 45:00</span>
                </div>
              </div>

              {/* Video Info */}
              <div className="mt-4">
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 line-clamp-2">{currentVideo.title}</h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-3">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-primary font-bold overflow-hidden">
                            {/* Placeholder avatar */}
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                                {currentVideo.author[0]}
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-gray-900 text-sm">{currentVideo.author}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
                        <div className="flex items-center bg-gray-100 rounded-full h-9">
                            <Button variant="ghost" className="rounded-l-full h-full px-4 hover:bg-gray-200 border-r border-gray-300 gap-2 text-gray-700">
                                <ThumbsUp className="w-4 h-4" /> 2.4k
                            </Button>
                            <Button variant="ghost" className="rounded-r-full h-full px-4 hover:bg-gray-200 text-gray-700">
                                <ThumbsDown className="w-4 h-4" />
                            </Button>
                        </div>
                        <Button variant="ghost" className="bg-gray-100 rounded-full h-9 px-4 gap-2 hover:bg-gray-200 text-gray-700">
                            <Share2 className="w-4 h-4" /> Share
                        </Button>
                    </div>
                </div>

                {/* Description Box */}
                <div className="mt-4 bg-secondary/30 rounded-xl p-4 text-sm hover:bg-secondary/50 transition-colors cursor-pointer">
                    <div className="font-bold text-gray-900 mb-2">{currentVideo.views} • {currentVideo.date}</div>
                    <p className="text-gray-700 leading-relaxed">
                        {currentVideo.description}
                        <span className="font-bold text-gray-900 block mt-1">...more</span>
                    </p>
                </div>

                {/* Comments Section Placeholder */}
                <div className="mt-6 hidden md:block">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">32 Comments</h3>
                    <div className="flex gap-4 mb-6">
                        <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 shrink-0">
                             <img src={studentPortrait} alt="User" className="w-full h-full object-cover" />
                        </div>
                        <Input placeholder="Add a comment..." className="border-0 border-b border-gray-300 rounded-none px-0 focus-visible:ring-0 focus-visible:border-gray-900 bg-transparent" />
                    </div>
                </div>
              </div>
            </div>

            {/* Right Column: Recommended & Shorts */}
            <div className="space-y-6">
                
                {/* Filter Chips */}
                <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    <Button size="sm" className="rounded-lg bg-black text-white hover:bg-gray-800 text-xs h-8">All</Button>
                    <Button size="sm" variant="secondary" className="rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs h-8">From Sarah Jenkins</Button>
                    <Button size="sm" variant="secondary" className="rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 text-xs h-8">Related</Button>
                </div>

                {/* Up Next List (Mixed with Shorts) */}
                <div className="flex flex-col gap-4">
                    {recommendedVideos.slice(0, 1).map((video) => (
                         <div key={video.id} className="flex gap-3 cursor-pointer group">
                            <div className="relative w-40 aspect-video rounded-xl overflow-hidden shrink-0">
                                <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:opacity-90" />
                                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded font-medium">{video.duration}</span>
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                                <h4 className="font-bold text-sm text-gray-900 line-clamp-2 group-hover:text-primary leading-tight">{video.title}</h4>
                                <div className="text-xs text-gray-500">{video.author}</div>
                                <div className="text-xs text-gray-500">{video.views} • {video.date}</div>
                            </div>
                        </div>
                    ))}

                    {/* Shorts Shelf */}
                    <div className="py-2 border-y border-gray-100 my-2">
                        <div className="flex items-center gap-2 mb-3">
                            <div className="w-6 h-6 bg-red-600 rounded-lg flex items-center justify-center">
                                <Play className="w-3 h-3 text-white fill-current" />
                            </div>
                            <span className="font-bold text-gray-900 text-sm">Shorts</span>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            {shorts.slice(0, 2).map((short) => (
                                <div key={short.id} className="aspect-[9/16] rounded-xl overflow-hidden relative group cursor-pointer">
                                    <img src={short.image} alt={short.title} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                                    <div className="absolute bottom-2 left-2 right-2">
                                        <h4 className="text-white text-xs font-bold line-clamp-2 mb-1 shadow-black drop-shadow-md">{short.title}</h4>
                                        <span className="text-white/80 text-[10px] shadow-black drop-shadow-md">{short.views} views</span>
                                    </div>
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <MoreHorizontal className="text-white w-4 h-4 drop-shadow-md" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {recommendedVideos.slice(1).map((video) => (
                         <div key={video.id} className="flex gap-3 cursor-pointer group">
                            <div className="relative w-40 aspect-video rounded-xl overflow-hidden shrink-0">
                                <img src={video.image} alt={video.title} className="w-full h-full object-cover group-hover:opacity-90" />
                                <span className="absolute bottom-1 right-1 bg-black/80 text-white text-[10px] px-1 rounded font-medium">{video.duration}</span>
                            </div>
                            <div className="flex flex-col gap-1 min-w-0">
                                <h4 className="font-bold text-sm text-gray-900 line-clamp-2 group-hover:text-primary leading-tight">{video.title}</h4>
                                <div className="text-xs text-gray-500">{video.author}</div>
                                <div className="text-xs text-gray-500">{video.views} • {video.date}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
