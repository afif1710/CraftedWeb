
import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';

interface IndexProps {
  initialPage?: 'home' | 'templates' | 'about' | 'contact' | 'how-it-works';
}

const Index: React.FC<IndexProps> = ({ initialPage }) => {
  return (
    <AppProvider>
      <AppLayout initialPage={initialPage} />
    </AppProvider>
  );
};

export default Index;
