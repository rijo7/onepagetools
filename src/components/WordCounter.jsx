import React, { useState } from 'react';

const WordCounter = () => {
  const [text, setText] = useState('');

  const wordCount = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-white">📝 Word Counter</h2>
      
      <textarea
        rows="6"
        className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none backdrop-blur-md"
        placeholder="Type or paste your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="flex justify-between text-sm text-gray-400 font-medium">
        <p>Words: <span className="text-white">{wordCount}</span></p>
        <p>Characters: <span className="text-white">{charCount}</span></p>
      </div>
    </div>
  );
};

export default WordCounter;
