import React, { useState } from 'react';

const DuplicateRemover = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const removeDuplicates = () => {
    const items = input.split('\n').map(item => item.trim()).filter(Boolean);
    const uniqueItems = [...new Set(items)];
    setOutput(uniqueItems.join('\n'));
  };

  return (
    <div className="space-y-4 mt-10">
      <h2 className="text-2xl font-semibold text-white">🗑️ Duplicate Remover</h2>

      <textarea
        rows="4"
        className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400 resize-none backdrop-blur-md"
        placeholder="Enter each item on a new line..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></textarea>

      <button
        onClick={removeDuplicates}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
      >
        Remove Duplicates
      </button>

      {output && (
        <textarea
          rows="4"
          readOnly
          className="w-full bg-white/10 text-gray-100 border border-white/10 rounded-lg p-4 placeholder-gray-400 resize-none backdrop-blur-md"
          value={output}
        />
      )}
    </div>
  );
};

export default DuplicateRemover;
