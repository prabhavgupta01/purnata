import { GoogleGenerativeAI } from '@google/generative-ai';

// Initialize the Gemini API with your API key from environment variable
const API_KEY = process.env.REACT_APP_GEMINI_API_KEY || 'AIzaSyBXloRfVQW4TXDrihmDBMquuHmwdf_wot8';

// Initialize the Gemini API with error handling
let genAI;
let model;
let chat;

try {
  genAI = new GoogleGenerativeAI(API_KEY);
  // Use the correct model name for the current API version
  model = genAI.getGenerativeModel({ 
    model: "gemini-2.5-flash-preview-05-20",
    generationConfig: {
      maxOutputTokens: 8192,
      temperature: 0.7,
      topP: 0.8,
      topK: 40
    }
  });
  
  // Initialize chat history with correct parts array structure
  chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{
          text: "You are Purnata Assistant, a helpful chatbot for an NGO working to prevent human trafficking. Your responses should be empathetic, informative, and focused on helping people understand and support Purnata's mission. Keep responses concise and professional."
        }]
      },
      {
        role: "model",
        parts: [{
          text: "I understand my role as Purnata Assistant. I will provide empathetic, informative, and focused responses to help people understand Purnata's mission in preventing human trafficking. I will maintain a professional and supportive tone while keeping responses concise."
        }]
      }
    ]
  });
} catch (error) {
  console.error('Error initializing Gemini:', error);
}

export const getChatResponse = async (message) => {
  if (!genAI || !model || !chat) {
    return 'I apologize, but I am currently unable to process messages. Please try again later.';
  }

  try {
    const result = await chat.sendMessage([{ text: message }]);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error getting chat response:', error);
    
    // More specific error messages based on error type
    if (error.message?.includes('API key')) {
      return 'I apologize, but there seems to be an issue with the API configuration. Please contact support.';
    } else if (error.message?.includes('network')) {
      return 'I apologize, but I am having trouble connecting to the server. Please check your internet connection and try again.';
    } else if (error.message?.includes('not found')) {
      return 'I apologize, but there seems to be an issue with the AI model configuration. Please contact support.';
    } else {
      return 'I apologize, but I encountered an unexpected error. Please try again or contact our support team for assistance.';
    }
  }
};

export default chat; 