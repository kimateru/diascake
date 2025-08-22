import { useState, useEffect, Suspense } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import SEOHead from './components/SEOHead';
import './index.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

// Lazy load heavy sections
const Fillings = () => import('./components/Fillings');
const Candybar = () => import('./components/Candybar');
const PartnerProjects = () => import('./components/PartnerProjects');
const WeddingsCakes = () => import('./components/WeddingsCakes');
const BirthdayCakes = () => import('./components/BirthdayCakes');
const BentoCakes = () => import('./components/BentoCakes');
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
      <SEOHead />
      <div className="app">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="main-content">
          <Header />

          <LazySection loader={Fillings} fallback={<Loading message="Loading Fillings..." />} />
          <LazySection loader={BirthdayCakes} fallback={<Loading message="Loading Birthday Cakes..." />} />
          <LazySection loader={BentoCakes} fallback={<Loading message="Loading Bento Cakes..." />} />
          <LazySection loader={WeddingsCakes} fallback={<Loading message="Loading Wedding Cakes..." />} />
          <LazySection loader={Candybar} fallback={<Loading message="Loading Candybar..." />} />
          <LazySection loader={PartnerProjects} fallback={<Loading message="Loading Projects..." />} />
          <LazySection loader={Contacts} fallback={<Loading message="Loading Contacts..." />} />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
