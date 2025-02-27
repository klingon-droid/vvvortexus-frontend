"use client";

import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import Link from "next/link";
import { useState } from "react";
import { Copy, Check } from "lucide-react";

export function TypewriterEffectSmoothDemo() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("coming soon");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const words = [
    {
      text: "Prompt",
    },
    {
      text: "at",
    },
    {
      text: "the speed of",
    },
    {
      image: "/solana.png",
    },
    {
      text: "with",
    },
    {
      text: "Vortexus",
      className: "text-violet-500 dark:text-violet-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]">
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <Link href="/Chat">
          <button className="w-40 h-10 rounded-xl bg-violet-500 border border-transparent text-white text-sm">
            Vortexus Web
          </button>
        </Link>
        <Link href="https://t.me/vvvortexus_bot">
          <button className="w-40 h-10 rounded-xl bg-violet-500 text-white border-transparent text-sm">
            Vortexus Telegram
          </button>
        </Link>
      </div>
      <div className="mt-6 text-center text-xl md:text-2xl font-medium text-violet-400 flex items-center justify-center gap-2">
        <span>Solana address: </span>
        <div 
          onClick={handleCopy}
          className="inline-flex items-center gap-1 text-violet-300 hover:text-violet-200 cursor-pointer transition-colors duration-300"
        >
          <span>COMING SOON</span>
          {copied ? (
            <Check className="w-5 h-5 text-green-400" />
          ) : (
            <Copy className="w-5 h-5" />
          )}
        </div>
      </div>
    </div>
  );
}
