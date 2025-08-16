import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './i18n'
import App from './App.jsx'

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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
