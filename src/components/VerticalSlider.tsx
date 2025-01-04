// src/components/VerticalSlider.tsx

'use client';

import React from 'react';

interface VerticalSliderProps {
  value: number;
  min: number;
  max: number;
  onChange: (value: number) => void;
}

const VerticalSlider: React.FC<VerticalSliderProps> = ({ value, min, max, onChange }) => {
  return (
<div className="grid grid-rows-[auto_1fr] gap-8 place-items-center h-[400px] p-8 rounded-xl bg-gray-100 dark:bg-gray-800 shadow-soft">
  <div className="text-xl font-medium text-gray-700 dark:text-gray-200">
    {value} 分
  </div>
  <div className="slider-container relative">
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="slider-vertical"
      aria-label="タイマー設定スライダー"
    />
  </div>
  <style jsx>{`
    .shadow-soft {
      box-shadow: 20px 20px 60px #d1d1d1,
                 -20px -20px 60px #ffffff;
    }
    
    .slider-container {
      height: 300px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      border-radius: 1rem;
      background: #f3f4f6;
      box-shadow: inset 5px 5px 10px #d1d1d1,
                 inset -5px -5px 10px #ffffff;
    }

    /* ダークモード用 */
    @media (prefers-color-scheme: dark) {
      .slider-container {
        background: #1f2937;
        box-shadow: inset 5px 5px 10px #0f1623,
                   inset -5px -5px 10px #2f3c4b;
      }
    }

    .slider-vertical {
      -webkit-appearance: none;
      width: 300px;
      height: 10px;
      border-radius: 5px;
      background: transparent;
      transform: rotate(-90deg);
      cursor: pointer;
    }

    .slider-vertical::-webkit-slider-runnable-track {
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(145deg, #e6e7eb, #ffffff);
      box-shadow: inset 2px 2px 5px #d1d1d1,
                 inset -2px -2px 5px #ffffff;
    }

    .slider-vertical::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: #3b82f6;
      margin-top: -10px;
      box-shadow: 2px 2px 5px #d1d1d1,
                 -2px -2px 5px #ffffff;
      transition: all 0.3s ease;
    }

    .slider-vertical::-moz-range-track {
      width: 100%;
      height: 10px;
      border-radius: 5px;
      background: linear-gradient(145deg, #e6e7eb, #ffffff);
      box-shadow: inset 2px 2px 5px #d1d1d1,
                 inset -2px -2px 5px #ffffff;
    }

    .slider-vertical::-moz-range-thumb {
      width: 30px;
      height: 30px;
      border: none;
      border-radius: 50%;
      background: #3b82f6;
      box-shadow: 2px 2px 5px #d1d1d1,
                 -2px -2px 5px #ffffff;
      transition: all 0.3s ease;
    }

    .slider-vertical:hover::-webkit-slider-thumb {
      background: #2563eb;
      transform: scale(1.1);
    }

    .slider-vertical:hover::-moz-range-thumb {
      background: #2563eb;
      transform: scale(1.1);
    }

    .slider-vertical:focus {
      outline: none;
    }

    /* ダークモード対応 */
    @media (prefers-color-scheme: dark) {
      .slider-vertical::-webkit-slider-runnable-track {
        background: linear-gradient(145deg, #1a2433, #2f3c4b);
        box-shadow: inset 2px 2px 5px #0f1623,
                   inset -2px -2px 5px #2f3c4b;
      }

      .slider-vertical::-moz-range-track {
        background: linear-gradient(145deg, #1a2433, #2f3c4b);
        box-shadow: inset 2px 2px 5px #0f1623,
                   inset -2px -2px 5px #2f3c4b;
      }

      .slider-vertical::-webkit-slider-thumb,
      .slider-vertical::-moz-range-thumb {
        box-shadow: 2px 2px 5px #0f1623,
                   -2px -2px 5px #2f3c4b;
      }
    }

    @media (max-width: 640px) {
      .slider-container {
        height: 250px;
        padding: 1.5rem;
      }
      
      .slider-vertical {
        width: 250px;
      }
    }
  `}</style>
</div>
  );
};

export default VerticalSlider;
