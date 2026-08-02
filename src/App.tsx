import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedWork } from './components/FeaturedWork';
import { ClientsSection } from './components/ClientsSection';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { Toast } from './components/Toast';
import { ModalType, CaseStudy, ContactFormData, ToastMessage } from './types';

export default function App() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [initialService, setInitialService] = useState<string>('Influencer Marketing');
  const [activeSection, setActiveSection] = useState<string>('home');
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Intersection observer to track active navbar section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'work', 'clients', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const addToast = (title: string, message: string, type: 'success' | 'info' | 'error' = 'success') => {
    const id = Date.now().toString();
    const newToast: ToastMessage = { id, title, message, type };
    setToasts((prev) => [...prev, newToast]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 5000);
  };

  const handleDismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  const handleOpenModal = (type: ModalType, serviceName?: string) => {
    if (serviceName) {
      setInitialService(serviceName);
    }
    setActiveModal(type);
  };

  const handleOpenCaseStudy = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
    setActiveModal('case-study');
  };

  const handleSubmitContact = (data: ContactFormData) => {
    setActiveModal(null);
    addToast(
      'Brief Transmitted',
      `Thank you ${data.fullName || 'Partner'}! Your campaign inquiry for "${data.service}" has been dispatched to our strategy leadership team. We will reply within 2 hours.`,
      'success'
    );
  };

  const handleSelectServiceAndContact = (service: string, budget: string) => {
    setInitialService(service);
    setActiveModal('contact');
    addToast(
      'Blueprint Loaded',
      `Loaded campaign parameter "${service}" with budget "${budget}". Complete your details to receive full media plan deck.`,
      'info'
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#ebe1d6] font-outfit selection:bg-[#f5bd5e]/30 selection:text-[#f5bd5e] relative">
      {/* Navigation */}
      <Navbar onOpenModal={handleOpenModal} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main>
        <Hero onOpenModal={handleOpenModal} />
        <AboutUs onOpenModal={handleOpenModal} />
        <ServicesSection onOpenModal={handleOpenModal} />
        <FeaturedWork
          onOpenCaseStudy={handleOpenCaseStudy}
          onOpenModal={handleOpenModal}
        />
        <ClientsSection />
      </main>

      {/* Footer */}
      <Footer onOpenModal={handleOpenModal} />

      {/* Interactive Modals */}
      <Modals
        activeModal={activeModal}
        selectedCaseStudy={selectedCaseStudy}
        initialServiceSelection={initialService}
        onClose={() => setActiveModal(null)}
        onSubmitContact={handleSubmitContact}
        onSelectServiceAndContact={handleSelectServiceAndContact}
      />

      {/* Toast System */}
      <Toast toasts={toasts} onDismiss={handleDismissToast} />
    </div>
  );
}
