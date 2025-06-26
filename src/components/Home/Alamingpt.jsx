import { useState } from "react";
import axios from "axios";
import e from "cors";

const Alamingpt = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const generateAnswer = async () => {
    if (!question.trim()) return;
    setLoading(true);

    try {
      const res = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDLjs3pniDkF5IBTJ1rxvFYAEz4QMBbt3I",
        { contents: [{ parts: [{ text: question }] }] }
      );

      const response =
        res.data.candidates?.[0]?.content.parts?.[0]?.text || "No answer";
      setAnswer(response);
      setQuestion("");
    } catch (err) {
      console.error(err);
      setAnswer("❌ ভুল হয়েছে বা নেটওয়ার্ক সমস্যা");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen
                 bg-gradient-to-br from-[#0f172a] via-[#1a2a6c] to-[#0f172a]
                 text-white px-4"
    >
      {/* --- title (unchanged) --- */}
      <h1
        className="text-4xl md:text-5xl font-extrabold mb-8
                   bg-clip-text text-transparent
                   bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500
                   animate-pulse"
      >
        Ask&nbsp;Me&nbsp;Sir
      </h1>

      {/* --- chat card --- */}
      <div
        className="w-full max-w-xl flex flex-col gap-5
                   rounded-3xl px-6 py-8
                   bg-white/10 backdrop-blur-md
                   border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.25)]"
      >
        {/* textarea */}
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              generateAnswer();
            }
          }}
          placeholder="Enter your question…"
          className="w-full h-40 resize-none
                     bg-transparent text-white placeholder:text-slate-400
                     rounded-xl p-4 border border-white/20
                     focus:outline-none focus:ring-2 focus:ring-cyan-400/70"
        />

        {/* send button */}
        <button
          onClick={generateAnswer}
          disabled={loading}
          className="self-end px-8 py-3 rounded-full font-semibold
                     transition-transform duration-200
                     bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500
                     hover:scale-105 active:scale-95
                     disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Thinking…" : "Send"}
        </button>

        {/* answer panel */}
        {answer && (
          <div
            className="relative max-h-60 overflow-y-auto p-5 text-white text-base leading-relaxed
             whitespace-pre-wrap rounded-2xl border border-white/20
             bg-white/10 backdrop-blur-sm shadow-inner
             font-light tracking-wide
             before:absolute before:inset-0 before:-z-10
             before:rounded-2xl
             before:bg-gradient-to-br before:from-transparent before:via-indigo-400/20 before:to-transparent
             scrollbar-thin scrollbar-thumb-cyan-400/50 scrollbar-track-transparent"
          >
            {answer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Alamingpt;
