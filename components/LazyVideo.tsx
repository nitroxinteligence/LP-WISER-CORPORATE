"use client";

import { useEffect, useRef, useState } from "react";

interface LazyVideoProps {
  src: string;
  poster?: string;
  className?: string;
}

export function LazyVideo({ src, poster, className = "" }: LazyVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Carregar quando 200px antes de entrar na tela
          if (entry.isIntersecting) {
            setShouldLoad(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "100px" } // Otimizado: reduzido de 200px
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInteraction = async () => {
    if (!videoRef.current || !shouldLoad) return;

    try {
      if (isPlaying) {
        videoRef.current.pause();
        videoRef.current.muted = true;
        setIsPlaying(false);
      } else {
        videoRef.current.muted = false;
        await videoRef.current.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error("Video playback error:", error);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative cursor-pointer ${className}`}
      onClick={handleInteraction}
      onMouseEnter={handleInteraction}
      onMouseLeave={() => {
        if (videoRef.current && isPlaying) {
          videoRef.current.pause();
          videoRef.current.muted = true;
          setIsPlaying(false);
        }
      }}
    >
      {shouldLoad ? (
        <video
          ref={videoRef}
          loop
          playsInline
          muted
          preload="auto"
          poster={poster}
          className="w-full h-full object-cover rounded-[11px]"
        >
          <source src={src} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
      ) : (
        // Placeholder enquanto não carrega
        <div className="w-full h-full bg-gradient-to-br from-[#151B25] to-[#000000] flex items-center justify-center rounded-[11px]">
          <div className="animate-pulse">
            <div className="w-12 h-12 border-3 border-white/10 border-t-white/40 rounded-full animate-spin" />
          </div>
        </div>
      )}
    </div>
  );
}
