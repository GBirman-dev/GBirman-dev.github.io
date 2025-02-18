'use client';

import { videos } from "@/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function VideoCarousel() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRefs = useRef([]);

  const previousVideo = () => {
    setCurrentVideo((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((video) => video?.pause());

    // Play the active video
    const activeVideo = videoRefs.current[currentVideo];
    if (activeVideo) {
      activeVideo.currentTime = 0; // Reset time
      activeVideo.play();
    }
  }, [currentVideo]);

  return (
    <div className="relative w-full rounded-lg h-full overflow-hidden">
      {/* Video Container */}
      <div
        className="flex relative transition-transform py-5 duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentVideo * 100}%)` }}
      >
        {videos.map((video, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={video.video}
              muted
              className="w-full h-auto rounded-lg object-cover"
            />
            <Link
              href={video.link}
              className="absolute -bottom-[90px] left-1/2 py-[5px] my-5 md:px-[44px] px-[30px] border text-garnet border-garnet rounded-lg font-medium bg-white/80 hover:bg-white transition-colors -translate-x-1/2"
            >
              Visit Website
            </Link>
          </div>
        ))}
      </div>

      {/* Chevron Buttons */}
      <div className="flex items-center justify-center gap-5 mt-3 px-4">
        <ChevronLeft
          onClick={previousVideo}
          className="w-10 h-10 text-primary/40 cursor-pointer hover:text-primary p-1"
        />
        <Link
          href="/"
          target="_blank"
          className="py-[8px] md:px-[44px] px-[30px] text-transparent  rounded-lg font-medium bg-white/80 hover:bg-white transition-colors"
        >
          Visit website
        </Link>
        <ChevronRight
          onClick={nextVideo}
          className="w-10 h-10 text-primary/40 cursor-pointer hover:text-primary p-1"
        />
      </div>
    </div>
  );
}
