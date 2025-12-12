import React, { useState } from 'react';
import { Sparkles, Copy, RefreshCw } from 'lucide-react';

const NewYearPromptGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [copied, setCopied] = useState(false);

  const subjects = [
    'diverse group celebrating', 'elegant party setup', 'champagne toast', 
    'fireworks display', 'family gathering', 'office celebration',
    'couple kissing at midnight', 'children celebrating', 'pet wearing party hat',
    'countdown clock', 'resolution planning', 'goal setting workspace',
    'fitness preparation', 'healthy meal prep', 'meditation and wellness',
    'travel planning', 'budget planning', 'calendar marking',
    'sparkler lights', 'confetti explosion', 'balloon decorations',
    'city skyline at night', 'home party', 'virtual celebration',
    'restaurant dining', 'rooftop party', 'beach celebration'
  ];

  const styles = [
    'photorealistic', 'cinematic', 'bright and cheerful', 'elegant and luxurious',
    'minimalist modern', 'warm and cozy', 'vibrant and energetic', 'soft and dreamy',
    'professional corporate', 'casual lifestyle', 'festive and colorful'
  ];

  const settings = [
    'indoor luxury venue', 'modern home interior', 'outdoor night scene',
    'elegant restaurant', 'rooftop with city view', 'cozy living room',
    'professional office space', 'beachfront location', 'mountain resort',
    'urban loft', 'garden party setup', 'hotel ballroom'
  ];

  const compositions = [
    'close-up detail shot', 'wide angle group shot', 'overhead flat lay',
    'medium shot with bokeh background', 'dynamic action shot', 'symmetrical composition',
    'candid lifestyle moment', 'product-focused still life', 'environmental portrait'
  ];

  const lighting = [
    'golden hour glow', 'dramatic rim lighting', 'soft natural light',
    'colorful party lights', 'sparkler bokeh', 'neon accents',
    'warm candlelight', 'professional studio lighting', 'moody atmospheric'
  ];

  const elements = [
    '"2026" prominently displayed', 'gold and silver accents', 'champagne glasses',
    'confetti in motion', 'fireworks in background', 'elegant decorations',
    'festive table setting', 'party favors', 'resolution journal',
    'clock showing midnight', 'celebration props', 'elegant typography'
  ];

  const demographics = [
    'millennials', 'Gen Z young adults', 'families with children',
    'senior couples', 'business professionals', 'multicultural group',
    'diverse age ranges', 'friends in 20s-30s', 'multi-generational family'
  ];

  const emotions = [
    'joyful and excited', 'hopeful and optimistic', 'elegant and sophisticated',
    'warm and intimate', 'energetic and festive', 'peaceful and reflective',
    'confident and ambitious', 'grateful and content'
  ];

  const generatePrompt = () => {
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    const style = styles[Math.floor(Math.random() * styles.length)];
    const setting = settings[Math.floor(Math.random() * settings.length)];
    const composition = compositions[Math.floor(Math.random() * compositions.length)];
    const light = lighting[Math.floor(Math.random() * lighting.length)];
    const element = elements[Math.floor(Math.random() * elements.length)];
    const demographic = demographics[Math.floor(Math.random() * demographics.length)];
    const emotion = emotions[Math.floor(Math.random() * emotions.length)];

    const generatedPrompt = `Create a high-quality ${style} stock photograph for New Year 2026 featuring ${subject} with ${demographic}. Setting: ${setting}. Composition: ${composition} with ${light}. Include ${element}. Mood: ${emotion}. Professional stock photography quality, 8K resolution, commercially viable, copy space available, sharp focus, perfect for marketing and advertising materials.`;

    setPrompt(generatedPrompt);
    setCopied(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-10 h-10 text-yellow-300" />
            <h1 className="text-4xl font-bold text-white">New Year 2026</h1>
            <Sparkles className="w-10 h-10 text-yellow-300" />
          </div>
          <h2 className="text-2xl text-purple-200">AI Image Prompt Generator</h2>
          <p className="text-purple-300 mt-2">Generate unique stock-worthy prompts instantly</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <button
            onClick={generatePrompt}
            className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 font-bold py-4 px-8 rounded-xl text-xl transition-all transform hover:scale-105 shadow-lg flex items-center justify-center gap-3 mb-6"
          >
            <RefreshCw className="w-6 h-6" />
            Generate New Prompt
          </button>

          {prompt && (
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
                <p className="text-white leading-relaxed text-lg">{prompt}</p>
              </div>

              <button
                onClick={copyToClipboard}
                className="w-full bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all flex items-center justify-center gap-2 border border-white/20"
              >
                <Copy className="w-5 h-5" />
                {copied ? 'Copied!' : 'Copy to Clipboard'}
              </button>

              <div className="bg-green-500/20 backdrop-blur rounded-xl p-4 border border-green-400/30">
                <h3 className="text-green-300 font-semibold mb-2">💡 Pro Tips:</h3>
                <ul className="text-green-100 text-sm space-y-1">
                  <li>• Use this prompt with Midjourney, DALL-E 3, or Stable Diffusion</li>
                  <li>• Generate 10-20 variations for diverse portfolio</li>
                  <li>• Each prompt creates commercially viable images</li>
                  <li>• Covers all demographics and use cases automatically</li>
                </ul>
              </div>
            </div>
          )}

          {!prompt && (
            <div className="text-center py-12">
              <p className="text-purple-200 text-lg">Click the button above to generate your first prompt!</p>
              <p className="text-purple-300 text-sm mt-2">Each click creates a unique, market-ready concept</p>
            </div>
          )}
        </div>

        <div className="mt-8 bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10">
          <h3 className="text-white font-semibold text-lg mb-3">✨ What This Generates:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-purple-200 text-sm">
            <div>• Party & celebration scenes</div>
            <div>• Corporate & business themes</div>
            <div>• Family & lifestyle moments</div>
            <div>• Goals & resolutions concepts</div>
            <div>• Decorations & aesthetics</div>
            <div>• Diverse demographics</div>
            <div>• Multiple composition styles</div>
            <div>• Professional lighting setups</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewYearPromptGenerator;
