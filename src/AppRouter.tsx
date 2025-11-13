import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/common/ScrollToTop';
import { CookieConsent } from './components/common/CookieConsent';
import AuthCallback from './components/auth/AuthCallback';


// Lazy load pages for better performance
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const HowItWorksPage = lazy(() => import('./pages/HowItWorksPage').then(m => ({ default: m.HowItWorksPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));
const RefundPolicyPage = lazy(() => import('./pages/RefundPolicyPage').then(m => ({ default: m.RefundPolicyPage })));
import BecomePartnerPage from './pages/BecomePartnerPage';
const SpaMassagePage = lazy(() => import('./pages/SpaMassagePage').then(m => ({ default: m.SpaMassagePage })));
const BridalMakeupPage = lazy(() => import('./pages/BridalMakeupPage').then(m => ({ default: m.BridalMakeupPage })));
const BeautySalonPage = lazy(() => import('./pages/BeautySalonPage').then(m => ({ default: m.BeautySalonPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));
const App = lazy(() => import('./App'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen bg-white flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <CookieConsent />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/refund-policy" element={<RefundPolicyPage />} />
          <Route path="/become-a-partner" element={<BecomePartnerPage />} />
          <Route path="/spa-massage" element={<SpaMassagePage />} />
          <Route path="/bridal-makeup" element={<BridalMakeupPage />} />
          <Route path="/beauty-salon" element={<BeautySalonPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/app/*" element={<App />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};