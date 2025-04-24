import React, { useState } from 'react';

const FindReplace = () => {
  const [text, setText] = useState('');
  const [find, setFind] = useState('');
  const [replace, setReplace] = useState('');
  const [result, setResult] = useState('');

  const handleReplace = () => {
    if (!find) return;
    const regex = new RegExp(find, 'g');
    setResult(text.replace(regex, replace));
  };

  return (
    <div className="space-y-4 mt-10">
      <h2 className="text-2xl font-semibold text-white">🔍 Find & Replace</h2>

      <textarea
        rows="4"
        className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md resize-none"
        placeholder="Enter your text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Find..."
          className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
          value={find}
          onChange={(e) => setFind(e.target.value)}
        />
        <input
          type="text"
          placeholder="Replace with..."
          className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-3 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 backdrop-blur-md"
          value={replace}
          onChange={(e) => setReplace(e.target.value)}
        />
      </div>

      <button
        onClick={handleReplace}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
      >
        Replace All
      </button>

      {result && (
        <textarea
          rows="4"
          readOnly
          className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-4 placeholder-gray-400 resize-none backdrop-blur-md"
          value={result}
        />
      )}
    </div>
  );
};

export default FindReplace;
