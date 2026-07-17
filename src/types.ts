export type PageType = 'home' | 'about' | 'services' | 'process' | 'contact' | 'pricing';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features?: string[];
  image?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface QuoteRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: 'Pending' | 'Contacted';
  createdAt: string;
}
