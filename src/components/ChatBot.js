import React, { useState, useRef, useEffect } from 'react';
import { getChatResponse } from '../config/gemini';
import { useNavigate } from 'react-router-dom';
import './ChatBot.css';

function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! I\'m Purnata Assistant. How can I help you today?'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isError, setIsError] = useState(false);
  const messagesEndRef = useRef(null);
  const navigate = useNavigate();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleQuickAction = (action) => {
    let userMessage = '';
    let botResponse = '';

    switch(action) {
      case 'donate':
        userMessage = 'I want to make a donation';
        botResponse = 'Thank you for your interest in supporting our cause! You can make a donation through our secure donation page. Would you like me to take you there?';
        navigate('/donate');
        break;
      case 'about':
        userMessage = 'Tell me about Purnata';
        botResponse = 'I\'m taking you to our About Us page where you can learn more about our mission and impact.';
        navigate('/about');
        break;
      case 'projects':
        userMessage = 'What projects does Purnata have?';
        botResponse = 'I\'m directing you to our Mumbai Projects page where you can explore our initiatives. You can also view our Kolkata projects from there.';
        navigate('/projects/mumbai');
        break;
      default:
        return;
    }

    // Add user message
    setMessages(prev => [...prev, { type: 'user', content: userMessage }]);
    
    // Add bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', content: botResponse }]);
    }, 500);
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Reset error state
    setIsError(false);

    // Add user message
    const userMessage = {
      type: 'user',
      content: inputMessage
    };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Get AI response
      const response = await getChatResponse(inputMessage);
      
      // Check if response indicates an error
      if (response.includes('I apologize, but')) {
        setIsError(true);
      }

      // Add bot response
      const botResponse = {
        type: 'bot',
        content: response
      };
      setMessages(prev => [...prev, botResponse]);
    } catch (error) {
      console.error('Error getting AI response:', error);
      setIsError(true);
      // Add error message
      const errorResponse = {
        type: 'bot',
        content: 'I apologize, but I encountered an error. Please try again or contact our support team for assistance.'
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="chatbot-container">
      {/* Chat Icon */}
      <button 
        className={`chat-icon ${isOpen ? 'active' : ''} ${isError ? 'error' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '×' : '💬'}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <img src="/logo-final.png" alt="Purnata Logo" className="chat-logo" />
            <h3>Purnata Assistant</h3>
          </div>

          <div className="quick-actions">
            <button onClick={() => handleQuickAction('donate')} className="quick-action-btn donate">
              <span className="icon">💝</span>
              Donate Now
            </button>
            <button onClick={() => handleQuickAction('about')} className="quick-action-btn about">
              <span className="icon">ℹ️</span>
              About Us
            </button>
            <button onClick={() => handleQuickAction('projects')} className="quick-action-btn projects">
              <span className="icon">📋</span>
              Our Projects
            </button>
          </div>

          <div className="messages-container">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`message ${message.type} ${message.content.includes('I apologize, but') ? 'error' : ''}`}
              >
                {message.type === 'bot' && (
                  <div className="bot-avatar">
                    <img src="/logo-final.png" alt="Bot" />
                  </div>
                )}
                <div className="message-content">
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="message bot">
                <div className="bot-avatar">
                  <img src="/logo-final.png" alt="Bot" />
                </div>
                <div className="message-content typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              disabled={isTyping}
            />
            <button type="submit" disabled={isTyping || !inputMessage.trim()}>
              <span className="send-icon">➤</span>
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default ChatBot; 