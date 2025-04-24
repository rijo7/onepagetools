import React, { useState } from 'react';

const CaseConverter = () => {
  const [text, setText] = useState('');

  const handleCaseChange = (type) => {
    switch (type) {
      case 'upper':
        setText(text.toUpperCase());
        break;
      case 'lower':
        setText(text.toLowerCase());
        break;
      case 'title':
        setText(
          text
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ')
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">🔠 Case Converter</h2>

      <textarea
        rows="4"
        className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none backdrop-blur-md"
        placeholder="Enter text to convert case..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => handleCaseChange('upper')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          UPPERCASE
        </button>
        <button
          onClick={() => handleCaseChange('lower')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          lowercase
        </button>
        <button
          onClick={() => handleCaseChange('title')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
        >
          Title Case
        </button>
      </div>
    </div>
  );
};

export default CaseConverter;
