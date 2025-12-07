import { useState, useEffect } from "react";
import { useLocation, useRoute } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  MoreHorizontal, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX,
  ChevronUp,
  ChevronDown,
  Send
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { clsx } from "clsx";

// Mock Assets (matching Student Portal)
import short1 from "@assets/generated_images/quick_career_tip_vertical.png";
import short2 from "@assets/generated_images/networking_tip_vertical.png";
import studentPortrait from "@assets/generated_images/friendly_female_student_portrait.png";

// Mock Data
const QUICK_TIPS = [
  {
    id: 101,
    title: "The Perfect Handshake",
    description: "First impressions matter! Here is how to nail that professional handshake every time. Firm but not crushing, eye contact, and a confident smile.",
    author: "Sarah Jenkins",
    role: "HR Director",
    avatar: "SJ",
    likes: 1240,
    comments: 45,
    shares: 89,
    image: short1,
  },
  {
    id: 102,
    title: "Elevator Pitch 101",
    description: "You have 30 seconds to impress. Here is the template for a killer elevator pitch that gets you hired.",
    author: "David Chen",
    role: "Senior Recruiter",
    avatar: "DC",
    likes: 892,
    comments: 23,
    shares: 112,
    image: short2,
  },
  {
    id: 103,
    title: "Dress for Success",
    description: "Business casual vs. Professional? We break down the dress code for modern Australian workplaces.",
    author: "Emily Wilson",
    role: "Career Coach",
    avatar: "EW",
    likes: 2100,
    comments: 156,
    shares: 340,
    image: short1,
  },
  {
    id: 104,
    title: "Zoom Etiquette",
    description: "Stop doing these 3 things on Zoom calls! #careeradvice #remote #workfromhome",
    author: "Michael Brown",
    role: "Tech Lead",
    avatar: "MB",
    likes: 3400,
    comments: 230,
    shares: 560,
    image: short2,
  }
];

export default function QuickTips() {
  const [location, setLocation] = useLocation();
  const [match, params] = useRoute("/quick-tips/:id");
  const currentId = params?.id ? parseInt(params.id) : 101;
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [comment, setComment] = useState("");

  // Sync URL id with index
  useEffect(() => {
    const index = QUICK_TIPS.findIndex(t => t.id === currentId);
    if (index !== -1) {
      setCurrentIndex(index);
    }
  }, [currentId]);

  const currentTip = QUICK_TIPS[currentIndex];

  const handleNext = () => {
    if (currentIndex < QUICK_TIPS.length - 1) {
      const nextId = QUICK_TIPS[currentIndex + 1].id;
      setLocation(`/quick-tips/${nextId}`);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevId = QUICK_TIPS[currentIndex - 1].id;
      setLocation(`/quick-tips/${prevId}`);
    }
  };

  return (
    <div className="h-screen bg-black text-white overflow-hidden flex font-sans">
      {/* Left Side - Back Navigation & Branding (Desktop) */}
      <div className="hidden lg:flex flex-col justify-between p-8 w-64 shrink-0 z-10">
        <div className="cursor-pointer" onClick={() => setLocation("/student-portal")}>
          <div className="flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Portal</span>
          </div>
          <h1 className="text-3xl font-serif font-bold text-white">Quick Tips</h1>
          <p className="text-white/60 mt-2 text-sm">Bite-sized career advice to keep you ahead.</p>
        </div>
        
        <div className="space-y-4">
           <div className="p-4 rounded-xl bg-white/5 border border-white/10">
             <h3 className="font-bold text-sm mb-2">Your Progress</h3>
             <div className="flex gap-1 h-1 mb-2">
               {QUICK_TIPS.map((_, idx) => (
                 <div 
                   key={idx} 
                   className={clsx(
                     "flex-1 rounded-full transition-colors", 
                     idx <= currentIndex ? "bg-primary" : "bg-white/20"
                   )} 
                 />
               ))}
             </div>
             <p className="text-xs text-white/50">{currentIndex + 1} of {QUICK_TIPS.length} tips watched</p>
           </div>
        </div>
      </div>

      {/* Main Content Area - Centered Player */}
      <div className="flex-1 relative flex items-center justify-center bg-[#0a0a0a]">
        {/* Mobile Back Button */}
        <button 
          onClick={() => setLocation("/student-portal")}
          className="lg:hidden absolute top-4 left-4 z-50 p-2 rounded-full bg-black/20 backdrop-blur-md text-white"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        {/* Navigation Buttons (Desktop) */}
        <div className="hidden lg:flex flex-col gap-4 absolute right-12 top-1/2 -translate-y-1/2 z-20">
           <Button 
             variant="ghost" 
             size="icon" 
             onClick={handlePrev}
             disabled={currentIndex === 0}
             className="rounded-full text-white hover:bg-white/10 disabled:opacity-30"
           >
             <ChevronUp className="w-8 h-8" />
           </Button>
           <Button 
             variant="ghost" 
             size="icon" 
             onClick={handleNext}
             disabled={currentIndex === QUICK_TIPS.length - 1}
             className="rounded-full text-white hover:bg-white/10 disabled:opacity-30"
           >
             <ChevronDown className="w-8 h-8" />
           </Button>
        </div>

        {/* Video Container (Phone Aspect Ratio) */}
        <div className="relative w-full h-full md:h-[85vh] md:w-[calc(85vh*9/16)] md:rounded-[2rem] overflow-hidden bg-gray-900 shadow-2xl border border-white/5">
          {/* Video/Image Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTip.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0"
            >
              <img 
                src={currentTip.image} 
                alt={currentTip.title} 
                className="w-full h-full object-cover opacity-90"
              />
              {/* Simulated Video Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
              
              {/* Play/Pause Overlay (Center) */}
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[2px]">
                  <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center cursor-pointer hover:scale-110 transition-transform" onClick={() => setIsPlaying(true)}>
                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                  </div>
                </div>
              )}
              
              {/* Click to toggle play */}
              <div 
                className="absolute inset-0 z-10" 
                onClick={() => setIsPlaying(!isPlaying)}
              />
            </motion.div>
          </AnimatePresence>

          {/* Top Controls */}
          <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-start z-20 bg-gradient-to-b from-black/60 to-transparent">
             <div className="flex items-center gap-3">
               <Avatar className="w-10 h-10 border-2 border-white/20">
                 <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${currentTip.avatar}`} />
                 <AvatarFallback>{currentTip.avatar}</AvatarFallback>
               </Avatar>
               <div>
                 <div className="font-bold text-sm text-white shadow-black drop-shadow-md">{currentTip.author}</div>
                 <div className="text-xs text-white/80 shadow-black drop-shadow-md">{currentTip.role}</div>
               </div>
               <Button variant="secondary" size="sm" className="h-7 text-xs bg-primary text-white hover:bg-primary/90 border-0 ml-2">
                 Follow
               </Button>
             </div>
             
             <div className="flex gap-4">
               <button onClick={() => setIsMuted(!isMuted)} className="text-white hover:text-primary transition-colors">
                 {isMuted ? <VolumeX className="w-6 h-6 drop-shadow-md" /> : <Volume2 className="w-6 h-6 drop-shadow-md" />}
               </button>
               <button className="text-white hover:text-primary transition-colors">
                 <MoreHorizontal className="w-6 h-6 drop-shadow-md" />
               </button>
             </div>
          </div>

          {/* Right Action Bar (Floating) */}
          <div className="absolute right-4 bottom-32 flex flex-col gap-6 z-30 items-center">
             <div className="flex flex-col items-center gap-1">
               <button 
                 onClick={(e) => { e.stopPropagation(); setIsLiked(!isLiked); }}
                 className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all active:scale-90 group"
               >
                 <Heart className={clsx("w-7 h-7 drop-shadow-md transition-colors", isLiked ? "fill-red-500 text-red-500" : "text-white group-hover:text-red-500")} />
               </button>
               <span className="text-xs font-bold text-white drop-shadow-md">{currentTip.likes}</span>
             </div>

             <div className="flex flex-col items-center gap-1">
               <button 
                 className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all active:scale-90"
               >
                 <MessageCircle className="w-7 h-7 text-white drop-shadow-md" />
               </button>
               <span className="text-xs font-bold text-white drop-shadow-md">{currentTip.comments}</span>
             </div>

             <div className="flex flex-col items-center gap-1">
               <button 
                 onClick={(e) => { e.stopPropagation(); setIsSaved(!isSaved); }}
                 className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all active:scale-90"
               >
                 <Bookmark className={clsx("w-7 h-7 drop-shadow-md transition-colors", isSaved ? "fill-amber-400 text-amber-400" : "text-white")} />
               </button>
               <span className="text-xs font-bold text-white drop-shadow-md">Save</span>
             </div>

             <div className="flex flex-col items-center gap-1">
               <button 
                 className="p-3 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 transition-all active:scale-90"
               >
                 <Share2 className="w-7 h-7 text-white drop-shadow-md" />
               </button>
               <span className="text-xs font-bold text-white drop-shadow-md">{currentTip.shares}</span>
             </div>
          </div>

          {/* Bottom Details */}
          <div className="absolute bottom-0 left-0 right-0 p-6 pt-24 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-20">
             <div className="pr-16">
               <h2 className="text-xl font-bold text-white mb-2 drop-shadow-md">{currentTip.title}</h2>
               <p className="text-white/90 text-sm leading-relaxed mb-4 line-clamp-2 drop-shadow-md">
                 {currentTip.description}
               </p>
               
               {/* Comment Input */}
               <div className="flex items-center gap-3 mt-4">
                 <Avatar className="w-8 h-8 border border-white/20">
                   <AvatarImage src={studentPortrait} />
                   <AvatarFallback>ME</AvatarFallback>
                 </Avatar>
                 <div className="flex-1 relative">
                   <Input 
                     placeholder="Add a comment..." 
                     value={comment}
                     onChange={(e) => setComment(e.target.value)}
                     className="bg-white/10 border-white/10 text-white placeholder:text-white/50 h-10 pr-10 rounded-full focus:bg-white/20 focus:border-white/30 transition-all"
                   />
                   {comment && (
                     <button className="absolute right-3 top-1/2 -translate-y-1/2 text-primary hover:text-primary/80">
                       <Send className="w-4 h-4" />
                     </button>
                   )}
                 </div>
               </div>
             </div>
             
             {/* Progress Bar */}
             <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
               <div className="h-full bg-primary w-1/3 relative">
                 <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-md transform scale-0 group-hover:scale-100" />
               </div>
             </div>
          </div>
        </div>

        {/* Right Side - Coming Up (Desktop) */}
        <div className="hidden xl:block w-80 h-[85vh] ml-8 rounded-[2rem] bg-white/5 border border-white/10 p-6 overflow-y-auto">
           <h3 className="font-serif font-bold text-xl mb-6">Up Next</h3>
           <div className="space-y-4">
             {QUICK_TIPS.map((tip, idx) => (
               <div 
                 key={tip.id}
                 onClick={() => setLocation(`/quick-tips/${tip.id}`)}
                 className={clsx(
                   "flex gap-3 p-3 rounded-xl cursor-pointer transition-all hover:bg-white/10 group",
                   currentId === tip.id ? "bg-white/10 ring-1 ring-primary/50" : ""
                 )}
               >
                 <div className="w-20 aspect-[9/16] rounded-lg overflow-hidden relative shrink-0">
                   <img src={tip.image} alt="" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                   {currentId === tip.id && (
                     <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                     </div>
                   )}
                 </div>
                 <div className="flex-1 min-w-0 py-1">
                   <h4 className={clsx("font-bold text-sm mb-1 truncate", currentId === tip.id ? "text-primary" : "text-white")}>
                     {tip.title}
                   </h4>
                   <div className="flex items-center gap-2 mb-2">
                     <Avatar className="w-4 h-4">
                       <AvatarFallback className="text-[8px]">{tip.avatar}</AvatarFallback>
                     </Avatar>
                     <span className="text-xs text-white/50 truncate">{tip.author}</span>
                   </div>
                   <div className="flex items-center gap-3 text-xs text-white/40">
                     <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {tip.likes}</span>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
}
