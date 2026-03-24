import React, { useRef, useEffect, useState } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';

const AboutVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);

  // 1. Progress Bar Logic
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  // 2. Intersection Observer for Autoplay/Stop
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => console.log("Autoplay blocked"));
          setIsPlaying(true);
        } else {
          videoRef.current?.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation(); // Prevent triggering play/pause if you add that later
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section ref={containerRef} className="py-16 md:py-24 px-4 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-semibold tracking-wider uppercase text-sm mb-2 block">
              Behind the Scenes
            </span>
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
              Experience Our <br /> Showroom
            </h2>
          </div>
          <p className="text-lg text-slate-600 max-w-sm border-l-2 border-blue-600 pl-4">
            Join our CEO for an exclusive walkthrough of our latest innovations.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative group rounded-3xl overflow-hidden bg-black shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] transform transition-all duration-700 ease-out hover:scale-[1.005]">
          
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            muted={isMuted}
            playsInline
            loop
            className="w-full aspect-video object-cover brightness-90 group-hover:brightness-100 transition-all duration-500"
          >
            <source src="https://res.cloudinary.com/dsa0chszi/video/upload/v1774353327/Bosch_Final_fvajhk.mp4" type="video/mp4" />
          </video>

          {/* Top Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

          {/* Play/Pause Status Indicator (Center) */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className={`p-6 rounded-full bg-white/10 backdrop-blur-md transition-opacity duration-300 ${isPlaying ? 'opacity-0' : 'opacity-100'}`}>
                <Play className="w-12 h-12 text-white fill-white" />
             </div>
          </div>

          {/* Control Bar (Bottom) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex items-center justify-between z-20">
            
            {/* Status & Toggle */}
            <div className="flex items-center gap-4">
               <button 
                onClick={toggleMute}
                className="group/btn relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/10 hover:bg-white/20 backdrop-blur-xl border border-white/20 rounded-full transition-all active:scale-90"
               >
                 {isMuted ? (
                   <VolumeX className="w-5 h-5 md:w-6 md:h-6 text-white" />
                 ) : (
                   <Volume2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
                 )}
                 {/* Tooltip */}
                 <span className="absolute -top-10 scale-0 group-hover/btn:scale-100 transition-transform bg-white text-black text-[10px] font-bold py-1 px-2 rounded tracking-widest uppercase">
                    {isMuted ? 'Unmute' : 'Mute'}
                 </span>
               </button>
               
               <div className="hidden md:block">
                 <p className="text-white text-sm font-medium">Inside the Showroom</p>
                 <p className="text-white/60 text-xs">CEO Guided Tour</p>
               </div>
            </div>

            {/* Custom Progress Bar */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-white/10 overflow-hidden">
               <div 
                 className="h-full bg-blue-500 transition-all duration-150 ease-linear shadow-[0_0_15px_rgba(59,130,246,0.8)]"
                 style={{ width: `${progress}%` }}
               />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutVideo;