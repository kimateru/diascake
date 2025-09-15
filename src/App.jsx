import { useState, useEffect, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import Sitemap from './components/Sitemap';
import PerformanceMonitor from './components/PerformanceMonitor';
import Candybar from './components/Candybar';
import Testimonials from './components/Testimonials';
import BentoCakes from './components/BentoCakes';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import BirthdayCakes from './components/BirthdayCakes';
import WeddingsCakes from './components/WeddingsCakes';
import Contacts from './components/Contacts';
import PartnerProjects from './components/PartnerProjects';


// Lazy load only the heaviest sections
// const PartnerProjects = () => import('./components/PartnerProjects');
// const BirthdayCakes = () => import('./components/BirthdayCakes');
// const WeddingsCakes = () => import('./components/WeddingsCakes');
// const Contacts = () => import('./components/Contacts');


function App() {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <SEOHead />
      <StructuredData />
      <Sitemap />
      <div className="app">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="main-content" role="main">
          <Header />

          <BirthdayCakes />
          <BentoCakes />
          <WeddingsCakes />
          <Candybar />
          <PartnerProjects />
          <Testimonials />
          <Contacts />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
