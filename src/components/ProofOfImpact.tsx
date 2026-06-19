import { useState } from "react";
import { Play, Users, MapPin, Award, Video, Eye, Calendar, Sparkles } from "lucide-react";
import { EventOpportunity } from "../types";
import { initialEvents } from "../data";

export default function ProofOfImpact() {
  // Deduplicate using videoUrl filter so there are absolutely no duplicate videos in our system!
  const completedEvents = initialEvents
    .filter((evt) => evt.status === "completed")
    .filter((evt) => evt.title !== "What AI Engineers Actually Do..." && evt.title !== "Agentic AI X Data Analytics")
    .filter((evt, idx, self) => self.findIndex((e) => e.videoUrl === evt.videoUrl) === idx);

  const [activeEvent, setActiveEvent] = useState<EventOpportunity>(completedEvents[0]);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const getYoutubeThumbnail = (embedUrl?: string) => {
    if (!embedUrl) return "";
    const parts = embedUrl.split("/embed/");
    if (parts.length > 1) {
      const id = parts[1].split("?")[0];
      return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
    }
    return "";
  };

  return (
    <section id="gallery" className="py-20 bg-transparent border-b border-zinc-900/10 duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title & Description Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 pt-10">
          <span className="text-xs font-bold font-mono tracking-widest text-[#00BCFF] dark:text-cyan-400 uppercase bg-blue-500/10 dark:bg-cyan-950/40 border border-blue-500/20 dark:border-cyan-900/40 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-3 shadow-[0_2px_10px_rgba(6,182,212,0.05)] dark:shadow-none animate-bounce">
            <Sparkles className="h-3 w-3 animate-pulse text-[#00BCFF] dark:text-cyan-450" /> BACKTOBASE LIVE CHRONICLE
          </span>
          <h2 className="text-4xl sm:text-5xl font-sans font-extrabold text-zinc-100 tracking-tight leading-none">
            Moments from the Ecosystem. <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-teal-500 to-indigo-700 dark:from-cyan-400 dark:via-teal-300 dark:to-indigo-400 glow-text-cyan">Our Live Gallery & Gigs.</span>
          </h2>
          <p className="mt-5 text-xs sm:text-sm text-zinc-350 font-sans leading-relaxed">
            Real metrics, concrete student feedback, and actionable technical takeaways. Explore our event audit trails that prove theoretical learning is broken. We involve you to learn by doing.
          </p>
        </div>

        {/* Highlight Stats Panels */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="glass-card-premium p-5 rounded-2xl text-center shadow-sm hover:border-cyan-500/25 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-cyan-500 dark:text-cyan-400">1,250+</p>
            <p className="text-[9px] text-zinc-400 font-mono uppercase tracking-wider mt-1.5">Students Reached</p>
          </div>
          <div className="glass-card-premium p-5 rounded-2xl text-center shadow-sm hover:border-amber-500/25 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-amber-500 dark:text-amber-400">12+</p>
            <p className="text-[9px] text-zinc-400 font-mono uppercase tracking-wider mt-1.5">Colleges Backed</p>
          </div>
          <div className="glass-card-premium p-5 rounded-2xl text-center shadow-sm hover:border-purple-500/25 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-purple-500 dark:text-purple-400">20+</p>
            <p className="text-[9px] text-zinc-400 font-mono uppercase tracking-wider mt-1.5">Industry Mentors</p>
          </div>
          <div className="glass-card-premium p-5 rounded-2xl text-center shadow-sm hover:border-emerald-500/25 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <p className="text-2xl sm:text-3xl font-mono font-bold text-emerald-500 dark:text-emerald-400">85%</p>
            <p className="text-[9px] text-zinc-400 font-mono uppercase tracking-wider mt-1.5">Placement Conversion</p>
          </div>
        </div>

        {/* Mobile-Friendly Tabs Selector - Only visible on screens < lg */}
        <div className="lg:hidden mb-6">
          <p className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase mb-3 px-1">
            Tap to Switch Event Audit
          </p>
          <div className="flex gap-2.5 overflow-x-auto pb-3 snap-x scrollbar-none scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0">
            {completedEvents.map((evt) => {
              const isActive = evt.id === activeEvent.id;
              const isB2B = evt.title.includes("BacktoBase");
              const editionLabel = isB2B 
                ? evt.title.replace("BacktoBase ", "B2B ") 
                : evt.title;
              return (
                <button
                  key={evt.id}
                  onClick={() => {
                    setActiveEvent(evt);
                    setIsPlayingVideo(false);
                  }}
                  className={`shrink-0 snap-align-start px-4 py-2.5 rounded-xl font-sans text-xs font-bold border transition-all duration-200 ${
                    isActive
                      ? "bg-amber-100/80 active:bg-amber-100 dark:bg-cyan-950/80 border-amber-500/50 dark:border-cyan-500/60 text-amber-700 dark:text-cyan-400 shadow-md"
                      : "bg-zinc-900 border-zinc-850 text-zinc-400 hover:text-zinc-100"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {editionLabel}
                    {isActive && <Sparkles className="h-3 w-3 text-amber-500 dark:text-cyan-400 animate-pulse" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Master Selector Layout for Verified Audit Trail reports */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Completed Event Cards list - Desktop ONLY */}
          <div className="hidden lg:block lg:col-span-4 space-y-3">
            <h3 className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase px-1 mb-1">
              Select Completed Event Audit
            </h3>
            <div className="space-y-2 max-h-[580px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-zinc-850 scrollbar-track-transparent">
              {completedEvents.map((evt) => {
                const isActive = evt.id === activeEvent.id;
                return (
                  <button
                    key={evt.id}
                    onClick={() => {
                      setActiveEvent(evt);
                      setIsPlayingVideo(false);
                    }}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex flex-col ${
                      isActive
                        ? "bg-cyan-500/[0.08] dark:bg-cyan-500/[0.05] border-cyan-500/50 shadow-sm pl-5 relative"
                        : "bg-zinc-900 border-zinc-850 hover:bg-zinc-800/35 hover:border-zinc-800"
                    }`}
                  >
                    {isActive && (
                      <div className="absolute left-0 top-3 bottom-3 w-1 bg-amber-500 dark:bg-cyan-500 rounded-r-md shadow-[0_0_8px_rgba(245,158,11,0.6)] dark:shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                    )}
                    <div className="flex justify-between items-center text-[9px] font-mono text-zinc-450">
                      <span className={`font-bold uppercase ${isActive ? "text-amber-600 dark:text-cyan-450" : ""}`}>
                        {evt.category}
                      </span>
                      <span>{evt.date}</span>
                    </div>
                    <h4 className={`mt-1 font-bold text-xs sm:text-sm leading-snug transition-colors ${isActive ? "text-amber-600 dark:text-white" : "text-zinc-200"}`}>
                      {evt.title}
                    </h4>
                    {evt.venuePartner && (
                      <span className="mt-1 text-[10px] text-zinc-400 flex items-center gap-1 font-sans">
                        <Award className="h-3 w-3 text-amber-500 dark:text-indigo-400 shrink-0" />
                        {evt.venuePartner}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Impact Report (Video, Outcomes, Feedback) */}
          <div className="lg:col-span-8 bg-zinc-900 border border-zinc-850 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-[0_4px_30px_rgba(0,0,0,0.3)]">
            
            {/* Header info */}
            <div className="border-b border-zinc-850 pb-4 mb-4">
              <span className="text-[9px] font-bold font-mono tracking-wider text-amber-500 dark:text-cyan-400 bg-amber-500/10 dark:bg-cyan-950/40 border border-amber-500/20 dark:border-cyan-900/30 px-2.5 py-1 rounded uppercase">
                Active Audit Report
              </span>
              <h3 className="mt-2 text-lg sm:text-2xl font-extrabold text-zinc-100 leading-tight">
                {activeEvent.title}
              </h3>
              
              <div className="mt-3.5 grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 text-xs text-zinc-450 text-zinc-400 font-sans">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="truncate">{activeEvent.place}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-4 w-4 text-indigo-400 shrink-0" />
                  <span>100% Student Participation Logs</span>
                </div>
                <div className="flex items-center gap-2 col-span-1 sm:col-span-2">
                  <Users className="h-4 w-4 text-purple-400 shrink-0" />
                  <span><strong>Guides / Speakers:</strong> {activeEvent.speakerNames.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-amber-500 shrink-0" />
                  <span><strong>Conducted:</strong> {activeEvent.time}</span>
                </div>
                {activeEvent.founderName && (
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-cyan-400 shrink-0 animate-pulse" />
                    <span><strong>Founder:</strong> {activeEvent.founderName}</span>
                  </div>
                )}
                {activeEvent.venuePartner && (
                  <div className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-indigo-400 shrink-0" />
                    <span><strong>Venue Partner:</strong> {activeEvent.venuePartner}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Video Highlight & Media Section */}
            {activeEvent.videoUrl && (
              <div className="mb-6">
                <p className="text-[10px] font-bold tracking-wider text-zinc-450 uppercase mb-2.5 flex items-center gap-1.5 font-mono">
                  <Video className="h-3.5 w-3.5 text-rose-500" /> Short Session Video Recap
                </p>
                <div className="relative rounded-2xl overflow-hidden aspect-video bg-black group border border-zinc-850 shadow-inner">
                  {!isPlayingVideo ? (
                    <div 
                      className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transition-all bg-cover bg-center"
                      style={{ 
                        backgroundImage: activeEvent.thumbnailUrl 
                          ? `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.82)), url(${activeEvent.thumbnailUrl})`
                          : `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.82)), url(${getYoutubeThumbnail(activeEvent.videoUrl)})` 
                      }}
                    >
                      <div className="flex flex-col items-center gap-3.5 z-20">
                        <button
                          onClick={() => {
                            setIsPlayingVideo(true);
                          }}
                          className="h-14 w-14 rounded-full bg-cyan-400 hover:bg-cyan-350 text-zinc-950 flex items-center justify-center hover:scale-110 active:scale-95 transition-all shadow-lg shadow-cyan-500/20 glow-cyan cursor-pointer"
                          title="Play Highlights"
                        >
                          <Play className="h-6 w-6 ml-0.5 text-zinc-950 fill-current" />
                        </button>
                      </div>

                      <p className="mt-3 text-[10px] text-zinc-400 font-sans font-medium px-4 max-w-sm z-10 select-none">
                        View short dynamic highlights of speaker pitches on {activeEvent.title}
                      </p>
                    </div>
                  ) : (
                    <iframe
                      src={`${activeEvent.videoUrl}?autoplay=1&mute=1`}
                      title="Completed event highlights"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  )}
                  <div className="absolute top-2.5 right-2.5 bg-zinc-950/90 dark:bg-zinc-950 border border-zinc-850 px-2.5 py-1 rounded-md text-[9px] text-zinc-100 font-mono flex items-center gap-1.5 shadow-md">
                    <span className="relative h-1.5 w-1.5 inline-block">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-rose-500"></span>
                    </span>
                    Live Player Mode
                  </div>
                </div>
              </div>
            )}

            {/* Key Outcomes */}
            <div className="mb-6">
              <h4 className="text-[10px] font-bold tracking-wider text-zinc-450 uppercase mb-2.5 flex items-center gap-1.5 font-mono">
                <Award className="h-4 w-4 text-cyan-550 dark:text-cyan-400" /> Key Student Outcomes
              </h4>
              <ul className="space-y-2">
                {activeEvent.keyOutcomes.map((out, idx) => (
                  <li key={idx} className="text-xs text-zinc-200 flex items-start gap-2.5 leading-relaxed">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 dark:bg-cyan-400 mt-1.5 shrink-0 shadow-sm"></span>
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>



            {/* Feedback Shorts has been removed from individual event details to prevent duplication as requested */}

          </div>

        </div>

        {/* Global Unified Verified Student Feedback Section */}
        <div className="mt-16 pt-12 border-t border-zinc-900">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-[10px] font-bold font-mono tracking-widest text-cyan-500 dark:text-cyan-400 uppercase bg-cyan-950/40 border border-cyan-900/30 px-2.5 py-1 rounded">
              VERIFIED RESIDENCY FEEDBACK
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-sans font-extrabold text-zinc-100 flex items-center justify-center gap-2">
              <Video className="h-5 w-5 text-rose-500 animate-pulse" /> BacktoBase Editions Feedback
            </h3>
            <p className="mt-2 text-xs text-zinc-400 font-sans">
              Watch raw response snapshots, technical code feedback, and session ratings straight from attendees.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
            {[
              {
                url: "https://www.youtube.com/embed/D6OTEvJCgSg",
                title: "Student Experience Recap",
                tag: "B2B Edition 1"
              },
              {
                url: "https://www.youtube.com/embed/54qOPlyPZA4",
                title: "Ecosystem Impact Takeaway",
                tag: "B2B Edition 1"
              },
              {
                url: "https://www.youtube.com/embed/2i4_NrmpYP4",
                title: "Residency Hands-on Live Feedback",
                tag: "B2B Showcase Review"
              },
              {
                url: "https://www.youtube.com/embed/801vo1p_OK0",
                title: "Placement Preparation Verdict",
                tag: "B2B Student Reflection"
              },
              {
                url: "https://www.youtube.com/embed/l8iPuABR3Sk",
                title: "Career Building Session Review",
                tag: "B2B Real Feedback"
              }
            ].map((video, idx) => (
              <div key={idx} className="flex flex-col h-full bg-zinc-900/40 border border-zinc-850/60 p-2.5 rounded-2xl hover:border-zinc-800 transition-all group">
                <div className="relative rounded-xl overflow-hidden aspect-[9/16] bg-black border border-zinc-850 shadow-lg group-hover:scale-[1.01] transition-transform">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-3 px-1">
                  <span className="text-[9px] font-mono text-cyan-500 dark:text-cyan-400 uppercase tracking-wider block">
                    {video.tag}
                  </span>
                  <p className="text-[11px] font-bold text-zinc-200 mt-0.5 line-clamp-1 leading-tight">
                    {video.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
