"use client"
import {motion} from 'framer-motion';
//======================================
export const Dots_v3 = () => (
    <div className="flex items-center justify-center space-x-2">
      <div className="size-4.0 animate-bounce rounded-full bg-current [animation-delay:-0.3s]"></div>
      <div className="size-4.0 animate-bounce rounded-full bg-current [animation-delay:-0.13s]"></div>
      <div className="size-4.0 animate-bounce rounded-full bg-current"></div>
    </div>
  );