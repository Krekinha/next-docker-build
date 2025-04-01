'use client';

import { useState, useEffect } from "react";

export default function ThemeButton() {
  // Inicialize com uma string vazia para evitar erro de hidratação
  const [time, setTime] = useState('');
  const [isGreen, setIsGreen] = useState(true);
  
  // Atualiza o relógio apenas no lado do cliente
  useEffect(() => {
    // Definir o tempo inicial imediatamente após a montagem do componente
    setTime(new Date().toLocaleTimeString());
    
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  // Alterna entre verde e azul
  const toggleColor = () => {
    setIsGreen(!isGreen);
  };
  
  return (
    <div className="flex items-center gap-4">
      <button
        onClick={toggleColor}
        className="rounded-full px-3 py-1 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800
        shadow-md hover:shadow-lg focus:shadow-lg ease-linear transition-all 
        cursor-pointer duration-150 select-none"
      >
        Change
      </button>
      <span 
        className={`font-mono text-lg ${isGreen ? 'text-green-500' : 'text-pink-500'}`}
      >
        {time}
      </span>
    </div>
  );
}