import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
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
  Clock,
  Play,
  HelpCircle,
  Lock,
  Coins,
  Loader2,
  Search,
  PlayCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { clsx } from "clsx";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getVideos, checkPurchaseStatus } from "@/services/videoService";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";
import Sidebar from "@/components/Sidebar";
import PurchaseVideoDialog from "@/components/PurchaseVideoDialog";
import TopUpDialog from "@/components/TopUpDialog";

// Mock Assets (replacing with generated ones later)
import masterclass1 from "@assets/generated_images/interview_masterclass_thumbnail.png";
import short1 from "@assets/generated_images/quick_career_tip_vertical.png";
import welcomeAvatar from "@assets/generated_images/pixel_art_avatar_of_asian_male_in_suit.png";

// Helper function to generate slug from title
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
};

// Helper function to create video URL with slug and id
const createVideoUrl = (video: any, type: 'full' | 'short'): string => {
  const slug = generateSlug(video.title);
  const basePath = type === 'full' ? '/video' : '/quick-tips';
  return `${basePath}/${slug}-${video.id}`;
};

export default function StudentPortal() {
  const [location, setLocation] = useLocation();
  const [activeTab, setActiveTab] = useState<"all" | "full" | "shorts">("all");
  const { member, refreshMember } = useAuth();
  const userCredits = member?.total_credit || 0;
  const queryClient = useQueryClient();
  const [checkingPurchase, setCheckingPurchase] = useState(false);
  const [isTopUpOpen, setIsTopUpOpen] = useState(false);
  const quickTipsScrollRef = useRef<HTMLDivElement>(null);
  const masterclassesScrollRef = useRef<HTMLDivElement>(null);

  // Check if user has seen welcome message
  const hasSeenWelcome = localStorage.getItem('atp_welcome_seen') === 'true';
  const [isWelcomeOpen, setIsWelcomeOpen] = useState(!hasSeenWelcome);

  // Purchase Dialog State
  const [purchaseDialog, setPurchaseDialog] = useState<{
    isOpen: boolean;
    video: any | null;
    type: 'full' | 'short';
  }>({
    isOpen: false,
    video: null,
    type: 'full'
  });

  // Fetch videos from API
  const { data: videosData, isLoading: isLoadingVideos, error: videosError } = useQuery({
    queryKey: ['videos'],
    queryFn: () => getVideos(),
  });

  // Extract videos from the new flat response structure
  const allVideos = videosData?.videos || [];

  const fullVideos = allVideos.filter(video => !video.is_short);
  const shortVideos = allVideos.filter(video => video.is_short);

  const handleVideoClick = async (video: any, type: 'full' | 'short') => {
    setCheckingPurchase(true);
    try {
      // Check if video is already purchased
      const purchaseStatus = await checkPurchaseStatus(video.id);
      
      if (purchaseStatus.purchased) {
        // Already purchased, navigate directly to video player with slug-id format
        const videoUrl = createVideoUrl(video, type);
        setLocation(videoUrl);
      } else {
        // Not purchased, show purchase dialog
        setPurchaseDialog({
          isOpen: true,
          video,
          type
        });
      }
    } catch (error: any) {
      console.error('Error checking purchase status:', error);
      // If error, show purchase dialog as fallback
      setPurchaseDialog({
        isOpen: true,
        video,
        type
      });
    } finally {
      setCheckingPurchase(false);
    }
  };

  const handlePurchaseSuccess = () => {
    // Navigate to video player with slug-id format after successful purchase
    if (purchaseDialog.video) {
      const videoUrl = createVideoUrl(purchaseDialog.video, purchaseDialog.type);
      setLocation(videoUrl);
    }
  };

  const handleCloseWelcome = () => {
    localStorage.setItem('atp_welcome_seen', 'true');
    setIsWelcomeOpen(false);
  };

  const scrollQuickTips = (direction: 'left' | 'right') => {
    if (quickTipsScrollRef.current) {
      const container = quickTipsScrollRef.current;
      const containerWidth = container.clientWidth;
      // Scroll by approximately 1 item width (2 items on mobile, 4 items on desktop)
      // Each item is roughly 50% on mobile, 25% on desktop, plus gap
      const isMobile = containerWidth < 768;
      const scrollAmount = isMobile 
        ? containerWidth * 0.5 + 24 // 50% width + gap
        : containerWidth * 0.25 + 18; // 25% width + gap
      
      const currentScroll = container.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  const scrollMasterclasses = (direction: 'left' | 'right') => {
    if (masterclassesScrollRef.current) {
      const container = masterclassesScrollRef.current;
      const containerWidth = container.clientWidth;
      // Scroll by approximately 1 item width (1 item on mobile, 3 items on desktop)
      // Each item is roughly 100% on mobile, 33.33% on desktop, plus gap
      const isMobile = containerWidth < 1024;
      const scrollAmount = isMobile 
        ? containerWidth * 0.9 + 32 // ~100% width + gap
        : containerWidth * 0.333 + 21; // ~33.33% width + gap (3 items)
      
      const currentScroll = container.scrollLeft;
      const newScroll = direction === 'left' 
        ? currentScroll - scrollAmount 
        : currentScroll + scrollAmount;
      
      container.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30 font-sans text-foreground flex">
      {/* Sidebar */}
      <Sidebar activePage="videos" />

      {/* Loading Overlay */}
      {checkingPurchase && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-xl">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
            <p className="text-sm font-medium text-gray-600">Checking video status...</p>
          </div>
        </div>
      )}

      {/* Welcome Dialog */}
      <Dialog open={isWelcomeOpen} onOpenChange={setIsWelcomeOpen}>
        <DialogContent className="bg-transparent border-0 shadow-none p-0 max-w-xl w-full flex flex-col items-center justify-center focus:outline-none">
          <DialogTitle className="sr-only">Welcome to ATP</DialogTitle>
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
                  <p>Hey {member?.full_name}, welcome to ATP! 🎉</p>
                  <p>
                    I'm Viet Dang from the Student Experience team — super
                    excited to have you here!
                  </p>
                  <p>
                    To get you started, we’ve gifted you <span className="font-extrabold text-amber-600 text-lg">10 free credits</span> so you can explore and watch everything on the platform. 🎁
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
            onClick={handleCloseWelcome}
            className="mt-6 bg-gradient-to-r from-primary to-red-600 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-full font-medium text-sm shadow-lg shadow-red-200 transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            Got it <span className="text-lg leading-none">→</span>
          </button>
        </DialogContent>
      </Dialog>
      
      {/* Purchase Dialog */}
      <PurchaseVideoDialog
        open={purchaseDialog.isOpen}
        onOpenChange={(open) => setPurchaseDialog(prev => ({ ...prev, isOpen: open }))}
        video={purchaseDialog.video}
        type={purchaseDialog.type}
        onSuccess={handlePurchaseSuccess}
      />

      {/* Top Up Dialog */}
      <TopUpDialog
        open={isTopUpOpen}
        onOpenChange={setIsTopUpOpen}
        onSuccess={() => {
          refreshMember();
        }}
      />

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
          {(activeTab === "all" || activeTab === "full") && fullVideos.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="relative rounded-3xl overflow-hidden bg-gray-900 aspect-[21/9] group cursor-pointer shadow-xl"
              onClick={() => handleVideoClick(fullVideos[0], 'full')}
            >
              <img
                src={fullVideos[0].thumbnail_url || masterclass1}
                alt="Featured"
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute top-6 right-6 z-9">
                 <div className="bg-black/60 backdrop-blur-md text-white px-4 py-2 rounded-full flex items-center gap-2 font-bold border border-white/10">
                    <Coins className="w-4 h-4 text-amber-400 fill-current" />
                    {fullVideos[0].price_credit} credits
                 </div>
              </div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-2/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent text-white text-xs font-bold uppercase tracking-wide mb-4">
                  Featured Masterclass
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                  {fullVideos[0].title}
                </h2>
                <p className="text-gray-300 mb-8 line-clamp-2">
                  {fullVideos[0].description || 'Watch this featured masterclass to enhance your career development.'}
                </p>
                <div className="flex items-center gap-4">
                  <Button className="rounded-full bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
                    <Play className="w-5 h-5 mr-2 fill-current" /> Watch Now
                  </Button>
                  <span className="text-white/60 text-sm font-medium">
                    {fullVideos[0].duration ? `${Math.floor(fullVideos[0].duration / 60)} min` : '45 min'} duration
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
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollQuickTips('left')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollQuickTips('right')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div
                  ref={quickTipsScrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                >
                  {isLoadingVideos ? (
                    <div className="w-full flex justify-center items-center py-12">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                  ) : shortVideos.length === 0 ? (
                    <div className="w-full text-center py-12 text-gray-500">
                      No short videos available yet.
                    </div>
                  ) : (
                    shortVideos.map((video) => (
                      <motion.div
                        key={video.id}
                        whileHover={{ y: -5 }}
                        className="group relative aspect-[9/16] rounded-2xl overflow-hidden cursor-pointer shadow-md flex-shrink-0 w-[calc(50%-12px)] md:w-[calc(25%-18px)]"
                        onClick={() => handleVideoClick(video, 'short')}
                      >
                        <img
                          src={video.thumbnail_url || short1}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80" />
                        
                        <div className="absolute top-3 right-3 z-9">
                           <div className="bg-black/60 backdrop-blur-md text-white px-2.5 py-1 rounded-full flex items-center gap-1.5 text-xs font-bold border border-white/10">
                              <Coins className="w-3 h-3 text-amber-400 fill-current" />
                              {video.price_credit}
                           </div>
                        </div>

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
                            {video.duration ? `${video.duration} sec` : '45 sec'}
                          </span>
                        </div>
                      </motion.div>
                    ))
                  )}
                </div>
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
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => scrollMasterclasses('left')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Scroll left"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => scrollMasterclasses('right')}
                    className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                    aria-label="Scroll right"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div
                  ref={masterclassesScrollRef}
                  className="flex gap-8 overflow-x-auto scrollbar-hide scroll-smooth pb-2"
                >
                  {isLoadingVideos ? (
                    <div className="w-full flex justify-center items-center py-12">
                      <Loader2 className="w-8 h-8 animate-spin text-primary" />
                    </div>
                  ) : fullVideos.length === 0 ? (
                    <div className="w-full text-center py-12 text-gray-500">
                      No full masterclass videos available yet.
                    </div>
                  ) : (
                    fullVideos.map((video) => (
                      <motion.div
                        key={video.id}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 group cursor-pointer hover:shadow-md transition-all flex-shrink-0 w-[calc(100%-16px)] lg:w-[calc(33.333%-21px)]"
                        onClick={() => handleVideoClick(video, 'full')}
                      >
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={video.thumbnail_url || masterclass1}
                          alt={video.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3 z-9">
                           <div className="bg-black/60 backdrop-blur-md text-white px-3 py-1.5 rounded-full flex items-center gap-1.5 text-xs font-bold border border-white/10">
                              <Coins className="w-3 h-3 text-amber-400 fill-current" />
                              {video.price_credit}
                           </div>
                        </div>
                        <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-sm text-white text-xs font-bold rounded-md">
                          {video.duration ? `${Math.floor(video.duration / 60)} min` : 'N/A'}
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
                            {video.category?.name || 'Career Development'}
                          </span>
                        </div>
                        <h4 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                          {video.title}
                        </h4>

                        <div className="flex items-center gap-3 pt-4 mt-4 border-t border-gray-50">
                          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                            {/* Placeholder avatar */}
                            <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary text-xs font-bold">
                              {video.mentor ? video.mentor[0] : 'M'}
                            </div>
                          </div>
                          <div className="text-xs">
                            <div className="font-bold text-gray-900">
                              {video.mentor || 'Mentor'}
                            </div>
                            <div className="text-gray-500">Career Coach</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}