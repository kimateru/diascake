import { useState, useEffect, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import SEOHead from './components/SEOHead';
import StructuredData from './components/StructuredData';
import Sitemap from './components/Sitemap';
import PerformanceMonitor from './components/PerformanceMonitor';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';


// Lazy load heavy sections
const Candybar = () => import('./components/Candybar');
const PartnerProjects = () => import('./components/PartnerProjects');
const WeddingsCakes = () => import('./components/WeddingsCakes');
const BirthdayCakes = () => import('./components/BirthdayCakes');
const BentoCakes = () => import('./components/BentoCakes');
const Testimonials = () => import('./components/Testimonials');
const Contacts = () => import('./components/Contacts');

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

          <LazySection loader={BirthdayCakes} fallback={<Loading message="Loading Birthday Cakes..." type="grid" />} />
          <LazySection loader={BentoCakes} fallback={<Loading message="Loading Bento Cakes..." type="bento" />} />
          <LazySection loader={WeddingsCakes} fallback={<Loading message="Loading Wedding Cakes..." type="grid" />} />
          <LazySection loader={Candybar} fallback={<Loading message="Loading Candybar..." type="grid" />} />
          <LazySection loader={PartnerProjects} fallback={<Loading message="Loading Projects..." type="grid" />} />
          <LazySection loader={Testimonials} fallback={<Loading message="Loading Testimonials..." type="text" />} />
          <LazySection loader={Contacts} fallback={<Loading message="Loading Contacts..." type="text" />} />
        </main>

        {/* Footer */}
        <Footer />
    </div>
    </ErrorBoundary>
  );
}

export default App;
