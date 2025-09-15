import { useState, useEffect, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import Sitemap from './components/Sitemap';
import PerformanceMonitor from './components/PerformanceMonitor';
import BentoCakes from './components/BentoCakes';
import BirthdayCakes from './components/BirthdayCakes';
import WeddingsCakes from './components/WeddingsCakes';
import Candybar from './components/Candybar';
import Testimonials from './components/Testimonials';
import Contacts from './components/Contacts';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


// Lazy load only the heaviest sections
const PartnerProjects = () => import('./components/PartnerProjects');

function LazySection({ loader, fallback }) {
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const element = document.getElementById(loader.name);
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        loader().then(module => setComponent(() => module.default));
        observer.disconnect();
      }
    }, { threshold: 0.25 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [loader]);

  return (
    <div id={loader.name}>
      {Component ? <Component /> : fallback}
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <PerformanceMonitor />
      <SEOHead />
      <StructuredData />
      <Sitemap />
      <div className="app">
        {/* Skip link for accessibility */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>

        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main id="main-content" className="main-content" role="main">
          <Header />

          <BirthdayCakes />
          <BentoCakes />
          <WeddingsCakes />
          <Candybar />
          <Suspense fallback={<Loading message="Loading Projects..." type="grid" />}>
            <PartnerProjects />
          </Suspense>
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
