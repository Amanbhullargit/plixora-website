export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  title: string;
  subtitle: string;
  badgeMetric: string;
  image: string;
  metrics: string;
  description: string;
  results: string[];
  category: string;
}

export interface ClientLogo {
  id: string;
  name: string;
  styleClass: string;
}

export type ModalType = 'about' | 'services' | 'case-study' | 'contact' | 'ai-planner' | null;

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

export interface ToastMessage {
  id: string;
  title: string;
  message: string;
  type: 'success' | 'info' | 'error';
}
