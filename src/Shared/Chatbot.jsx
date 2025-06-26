// ChatBotWidget.jsx
import { useState } from "react";
import axios from "axios";
import { FaCommentDots, FaTimes } from "react-icons/fa";

// const API_KEY = "AIzaSyAEJn_Dk69mKiOWroMv7haBImz3k2yBYa8";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const generateAnswer = async () => {
    if (!input.trim()) return;
    setLoading(true);
    setOutput("");

    try {
      const response = await axios.post(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAEJn_Dk69mKiOWroMv7haBImz3k2yBYa8`,
        {
          contents: [{ parts: [{ text: input }] }],
        }
      );

      const answer = response.data.candidates?.[0].content.parts?.[0].text;
      setOutput(answer || "No answer returned.");
      setInput("");
    } catch (error) {
      setOutput("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Toggle Button */}
    <button
  onClick={toggleChat}
  className={`text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
    isOpen ? "bg-transparent " : "bg-blue-500 hover:bg-blue-700"
  }`}
>
  {isOpen ? <></> : <FaCommentDots size={28} />}
</button>


      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 bg-white rounded-lg shadow-lg mt-4 p-4">
         <div className="flex items-center justify-between">
           <h2 className="text-lg font-semibold mb-2">🤖 AI Assistant</h2>
          <div onClick={toggleChat}>
           <FaTimes size={20} className="mb-1" />
          </div>
         </div>
          <div className="space-y-2 overflow-y-auto">
            {output && (
              <div className="bg-gray-100 p-2 rounded text-sm h-80 whitespace-pre-wrap overflow-y-auto ">
                {output}
              </div>
            )}
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  generateAnswer();
                }
              }}
              placeholder="Ask something..."
              className="w-full border px-3 py-2 rounded"
            />

            <button
              onClick={generateAnswer}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
              disabled={loading}
            >
              {loading ? "Loading..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
