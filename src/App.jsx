import React from 'react';
import WordCounter from './components/WordCounter';
import CaseConverter from './components/CaseConverter';
import DuplicateRemover from './components/DuplicateRemover';
import FindReplace from './components/FindReplace';

function App() {
  return (
    <div className="min-h-screen bg-dark text-gray-200 font-sans flex justify-center items-center p-6">
      <div className="w-full max-w-4xl bg-card border border-white/10 backdrop-blur-md rounded-2xl shadow-xl p-10 space-y-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-white">OnePageTools</h1>
        <p className="text-lg text-gray-400 mt-2">Smart tools, one page.</p>
      </header>


        <section className="space-y-8">
          <WordCounter />
          <CaseConverter />
          <DuplicateRemover />
          <FindReplace />
        </section>
      </div>
    </div>
  );
}

export default App;
