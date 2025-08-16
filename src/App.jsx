import { Suspense, lazy } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Loading from './components/Loading';
import './index.css';

// Lazy load all components for optimal performance
const Navbar = lazy(() => import('./components/Navbar'));
const Header = lazy(() => import('./components/Header'));
const Fillings = lazy(() => import('./components/Fillings'));
const Candybar = lazy(() => import('./components/Candybar'));
const PartnerProjects = lazy(() => import('./components/PartnerProjects'));
const WeddingsCakes = lazy(() => import('./components/WeddingsCakes'));
const BirthdayCakes = lazy(() => import('./components/BirthdayCakes'));
const Contacts = lazy(() => import('./components/Contacts'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <ErrorBoundary>
      <div className="app">
        {/* Navigation */}
        <Suspense fallback={<Loading message="Loading navigation..." />}>
          <Navbar />
        </Suspense>

        {/* Main Content */}
        <main className="main-content">
          <Suspense fallback={<Loading message="Loading header..." />}>
            <Header />
          </Suspense>

          <Suspense fallback={<Loading message="Loading content..." />}>
            <Fillings />
          </Suspense>

          <Suspense fallback={<Loading message="Loading content..." />}>
            <Candybar />
          </Suspense>

          <Suspense fallback={<Loading message="Loading projects..." />}>
            <PartnerProjects />
          </Suspense>

          <Suspense fallback={<Loading message="Loading cakes..." />}>
            <WeddingsCakes />
          </Suspense>

          <Suspense fallback={<Loading message="Loading cakes..." />}>
            <BirthdayCakes />
          </Suspense>

          <Suspense fallback={<Loading message="Loading contacts..." />}>
            <Contacts />
          </Suspense>
        </main>

        {/* Footer */}
        <Suspense fallback={<Loading message="Loading footer..." />}>
          <Footer />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
