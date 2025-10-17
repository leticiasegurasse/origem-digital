/**
 * Barrel export para facilitar imports do site
 */

// Pages
export { default as Home } from './pages/Home';

// Layouts
export { default as SiteLayout } from './layouts/SiteLayout';

// Components principais
export { default as Header } from './components/Header';
export { default as Footer } from './components/Footer';
export { default as AnnouncementBar } from './components/AnnouncementBar';
export { default as AnnouncementModal } from './components/AnnouncementModal';
export { default as WhatsAppButton } from './components/WhatsAppButton';

// Types
export type { Plan, CityPlans, City } from './types/plans';
export type { CoverageCheckResult, LeadForm } from './types/coverage';

