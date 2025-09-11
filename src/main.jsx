import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Set initial HTML lang attribute with proper fallback logic
const getInitialLanguage = () => {
  const storedLang = localStorage.getItem('i18nextLng');
  if (storedLang && ['ru', 'ro'].includes(storedLang)) {
    return storedLang;
  }
  
  const browserLang = navigator.language || navigator.languages?.[0];
  if (browserLang && browserLang.toLowerCase().startsWith('ru')) {
    return 'ru';
  }
  
  // Default to Romanian for all other languages (including en-US)
  return 'ro';
};

const initialLanguage = getInitialLanguage();
document.documentElement.lang = initialLanguage;

// Initialize AOS with performance optimizations
AOS.init({
  duration: 600, // Faster animations for better performance
  easing: 'ease-out', // Simpler easing for better performance
  once: true, // Only animate once
  offset: 150, // Larger offset for earlier triggering
  delay: 0, // No delay
  throttleDelay: 99, // Throttle scroll events for performance
  debounceDelay: 50, // Debounce resize events
});

// Register Service Worker for better performance and caching
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
