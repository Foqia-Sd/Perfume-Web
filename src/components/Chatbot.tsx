"use client"

import React, { useState, useRef, useEffect } from 'react';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && panelRef.current) {
      panelRef.current.scrollTop = panelRef.current.scrollHeight;
    }
  }, [messages, open]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    setMessages((msgs) => [...msgs, { role: 'user', text: input }]);
    setLoading(true);
    setError(null);
    const userMessage = input;
    setInput('');
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'API error');
      }
      const data = await res.json();
      setMessages((msgs) => [...msgs, { role: 'assistant', text: data.reply }]);
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!open && (
        <button
          className="bg-black text-white rounded-full shadow-lg p-4 hover:bg-gray-800 transition"
          aria-label="Open chat"
          onClick={() => setOpen(true)}
        >
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#fff"/><path d="M7 10.5a5 5 0 0110 0c0 2.485-2.239 4.5-5 4.5-.69 0-1.35-.13-1.95-.36L7 17v-6.5z" fill="#000"/></svg>
        </button>
      )}
      {/* Chat Panel */}
      {open && (
        <div className="w-80 max-w-xs bg-white rounded-xl shadow-2xl flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-black text-white">
            <span className="font-semibold">Redolence Arabia</span>
            <button onClick={() => setOpen(false)} aria-label="Close chat" className="text-white hover:text-gray-300">
              ×
            </button>
          </div>
          {/* Messages */}
          <div ref={panelRef} className="flex-1 overflow-y-auto px-4 py-2 space-y-2 bg-gray-50" style={{ maxHeight: 320 }}>
            {messages.length === 0 && (
              <div className="text-gray-400 text-sm text-center mt-8">Ask me anything about our perfumes, offers, or shipping!</div>
            )}
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`px-3 py-2 rounded-lg text-sm max-w-[80%] ${msg.role === 'user' ? 'bg-black text-white' : 'bg-gray-200 text-gray-900'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="px-3 py-2 rounded-lg text-sm bg-gray-200 text-gray-900 animate-pulse">Bot is typing...</div>
              </div>
            )}
            {error && (
              <div className="text-red-500 text-xs text-center mt-2">{error}</div>
            )}
          </div>
          {/* Input */}
          <div className="flex items-center border-t border-gray-200 px-2 py-2 bg-white">
            <input
              type="text"
              className="flex-1 px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black text-sm"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading}
              aria-label="Type your message"
            />
            <button
              className="ml-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition disabled:opacity-50"
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot; 