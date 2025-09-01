import React, { useState } from 'react';

const Summary: React.FC = () => {
  const [selectedUMF, setSelectedUMF] = useState<string>('10+');
  const [tasteProfile, setTasteProfile] = useState<number>(50);

  console.log(selectedUMF)

  const umfOptions = [
    { value: '10+', label: 'UMF™ 10+', selected: true },
    { value: '15+', label: 'UMF™ 15+', selected: false },
    { value: '20+', label: 'UMF™ 20+', selected: false },
    { value: '24+', label: 'UMF™ 24+', selected: false },
    { value: '26+', label: 'UMF™ 26+', selected: false },
    { value: '28+', label: 'UMF™ 28+', selected: false },
    { value: '30+', label: 'UMF™ 30+', selected: false }
  ];

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTasteProfile(Number(e.target.value));
  };

  return (
    <div className="max-w-sm mx-auto bg-white border-r border-gray-300">
      {/* Delivery Section */}
      <div className="px-4 py-4 border-b border-gray-300">
        <h3 className="text-xs font-semibold text-gray-800 tracking-wide mb-3">DELIVERY</h3>
        <div className="flex justify-between items-start">
          <div className="text-xs text-gray-600">
            FREE DELIVERY ON ORDERS OVER $30
          </div>
          <div className="text-right text-xs">
            <div className="text-gray-500 mb-0.5">ESTIMATED DELIVERY DATE:</div>
            <div className="text-gray-800 font-medium">Jun 9 - Jun 13 to</div>
          </div>
        </div>
      </div>

      {/* After Pay Section */}
      <div className="px-4 py-4 border-b border-gray-300">
        <h3 className="text-xs font-semibold text-gray-800 tracking-wide mb-3">AFTER PAY</h3>
        <div className="flex items-center text-xs">
          <span className="text-gray-600 mr-1">or 4 interest-free payments of $13.97 with</span>
          <div className="inline-flex items-center">
            <span className="bg-black text-white px-1.5 py-0.5 text-xs font-bold">
              Afterpay
            </span>
            <span className="ml-1 text-gray-400 text-sm">ⓘ</span>
          </div>
        </div>
      </div>

      {/* UMF Scale Section */}
      <div className="px-4 py-4 border-b border-gray-300">
        <h3 className="text-xs font-semibold text-gray-800 tracking-wide mb-4">UMF™ SCALE</h3>
        <div className="grid grid-cols-4 gap-2">
          {umfOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => setSelectedUMF(option.value)}
              className={`px-2 py-2 text-xs border text-center transition-all ${
                option.value === '10+'
                  ? 'border-teal-400 bg-teal-50 text-teal-700 font-medium'
                  : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Taste Profile Section */}
      <div className="px-4 py-4">
        <h3 className="text-xs font-semibold text-gray-800 tracking-wide mb-4">TASTE PROFILE</h3>
        <div className="relative">
          <div className="flex justify-between text-xs text-gray-600 mb-3">
            <span>Clean & Intense</span>
            <span>Bold & Intense</span>
          </div>
          <div className="relative">
            {/* Slider track */}
            <div className="h-1 bg-gradient-to-r from-gray-300 via-orange-300 to-orange-400 rounded-full"></div>
            
            {/* Slider thumb */}
            <div
              className="absolute w-4 h-4 bg-white border-2 border-gray-800 rounded-full shadow-sm cursor-pointer transform -translate-y-1.5"
              style={{ 
                left: `${tasteProfile}%`, 
                transform: 'translateX(-50%) translateY(-6px)' 
              }}
            />
            
            {/* Hidden range input for functionality */}
            <input
              type="range"
              min="0"
              max="100"
              value={tasteProfile}
              onChange={handleSliderChange}
              className="absolute inset-0 w-full h-4 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;