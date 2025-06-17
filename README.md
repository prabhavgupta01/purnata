# Purnata - Working Towards Wholeness for All

![Purnata Logo](public/logo-final.png)

## About

Purnata is a dedicated NGO working to prevent and combat human trafficking through comprehensive awareness programs, rescue operations, rehabilitation services, and community empowerment initiatives. Our mission is to create a world where every individual can live with dignity, free from exploitation.

## 🌟 Our Mission

We are committed to preventing human trafficking through:
- **Awareness** campaigns and education
- **Rescue** operations in collaboration with law enforcement
- **Rehabilitation** and reintegration services
- **Prevention** through addressing root causes
- **Community** empowerment and capacity building

## 🎯 Core Values

- **Dignity & Respect**: Treating every individual with utmost respect and preserving their dignity
- **Empowerment**: Building capacity and confidence in survivors through education and skill development
- **Holistic Approach**: Addressing social, emotional, physical, and spiritual needs comprehensively
- **Collaboration**: Working with civil society agencies and government bodies
- **Arts Integration**: Leveraging art forms for awareness and cultural preservation
- **Technology Integration**: Utilizing advanced technology for effective, rights-based responses

## 📍 Project Locations

### Mumbai, Maharashtra
- **ASHRAY Program**: Drop-In-Center and Day Care services for women and children
- **Prevention & Rescue**: Surveillance and rescue operations at railway stations
- **Rehabilitation Home**: Located in Asalpha with comprehensive support services
- **Training Center**: Six-month literacy programs and vocational education

### Kolkata, West Bengal
- **Barasat Hub Development**: Comprehensive facility including rehabilitation home, training center, and manufacturing unit
- **Basirhat Prevention Program**: Community awareness and ACT Groups (Active Communities Against Trafficking)
- **Root Cause Intervention**: Economic empowerment and educational support initiatives

## 🛠 Technology Stack

This web application is built using:

### Frontend
- **React** 18.2.0 - Modern JavaScript library for building user interfaces
- **React Router DOM** 6.21.3 - Client-side routing
- **Chart.js** 4.4.1 & **React-ChartJS-2** 5.2.0 - Data visualization
- **GSAP** 3.12.5 - Advanced animations
- **Google reCAPTCHA** 3.1.0 - Form security

### Backend
- **Node.js** with **Express** 5.1.0 - Server framework
- **MongoDB** with **Mongoose** 8.15.1 - Database and ODM
- **CORS** 2.8.5 - Cross-origin resource sharing

### AI Integration
- **Google Generative AI** 0.24.1 - Chatbot functionality powered by Gemini AI

### Styling & UI
- **CSS3** with modern features (Grid, Flexbox, Custom Properties)
- **Font Awesome** 6.0.0 - Icons
- **Responsive Design** - Mobile-first approach

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd purnata
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   GEMINI_API_KEY=your_google_ai_api_key
   PORT=5000
   ```

4. **Start the development server**
   ```bash
   # Start backend server
   node server.js
   
   # Start React development server (in a new terminal)
   npm start
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
purnata/
├── public/                 # Static assets
│   ├── favicon.ico
│   ├── logo-final.png
│   ├── purnata-bg.webp
│   └── manifest.json
├── src/                    # Source code
│   ├── components/         # React components
│   │   ├── AboutUs.js/.css
│   │   ├── MumbaiProjects.js/.css
│   │   ├── KolkataProjects.js/.css
│   │   ├── Statistics.js/.css
│   │   ├── Profile.js/.css
│   │   ├── ChatBot.js
│   │   └── ...
│   ├── config/            # Configuration files
│   │   └── gemini.js      # AI chatbot config
│   ├── context/           # React Context providers
│   ├── models/            # Data models
│   ├── routes/            # Frontend routing
│   ├── App.js             # Main App component
│   └── index.js           # Entry point
├── backend/               # Backend services
│   ├── models/           # Database models
│   └── routes/           # API routes
├── server.js             # Express server
└── package.json          # Dependencies and scripts
```

## ✨ Key Features

### 🤖 AI-Powered Chatbot
- **Purnata Assistant**: Empathetic chatbot powered by Google's Gemini AI
- Provides information about the organization and its mission
- Offers support and guidance to visitors
- Implemented in [`src/components/ChatBot.js`](src/components/ChatBot.js) with configuration in [`src/config/gemini.js`](src/config/gemini.js)

### 📊 Interactive Statistics
- Visual representation of impact metrics using Chart.js
- Real-time data visualization of rescue operations and rehabilitation statistics
- Responsive charts that work across all devices

### 🎨 Modern UI/UX
- **Dark theme** with red accent colors (#ff6b6b, #d31545)
- **Glassmorphism** design elements with subtle transparency effects
- **Smooth animations** powered by GSAP
- **Mobile-responsive** design with CSS Grid and Flexbox

### 🔐 User Management
- Authentication system with context-based state management
- User profiles and dashboard functionality
- Secure form handling with reCAPTCHA integration

### 📱 Responsive Design
- Optimized for desktop, tablet, and mobile devices
- Progressive Web App (PWA) ready with manifest.json
- Touch-friendly interface elements

## 🎨 Design System

### Color Palette
- **Primary Red**: #ff6b6b
- **Dark Red**: #d31545
- **Background**: #111111
- **Text**: #ffffff
- **Secondary Text**: rgba(255, 255, 255, 0.8)

### Typography
- **Font Family**: System fonts (-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto')
- **Responsive scaling** for different screen sizes
- **Accessible contrast ratios** for readability

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🤝 Contributing

We welcome contributions to help improve Purnata's digital presence and impact. Please read our contributing guidelines and code of conduct before submitting pull requests.

## 📞 Contact

For more information about Purnata's work or to get involved:
- Visit our website sections for detailed project information
- Use our AI chatbot for immediate assistance
- Contact us through the provided channels on our platform

## 📄 License

This project is part of Purnata's mission to end human trafficking. Please respect the organization's work and use this codebase responsibly.

---

**"Working towards wholeness for all"** - Purnata's commitment to creating a world free from human trafficking through technology, compassion, and community action.
