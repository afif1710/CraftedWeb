import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/marketplace/Header';
import Footer from '@/components/marketplace/Footer';
import { Shield, Check, Lock, Mail } from 'lucide-react';

const License: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    // Navigate back to main app for these pages
    if (['home', 'templates', 'how-it-works', 'about', 'contact'].includes(page)) {
      navigate('/', { state: { target: page } });
    } else {
       navigate('/');
    }
  };

  // Since we are outside AppLayout, we might need a way to pass the target page to AppLayout
  // However, simpler is just to navigate to root. The user can navigate from there.
  // Actually, let's just navigate to root for simplicity as per plan. 
  // If we wanted to be fancy we could use query params or state, but "Do not alter routing logic" suggests minimal intrusion.
  // Wait, if I navigate to '/', AppLayout will render 'home' by default. 
  // If I want to go to 'contact', I can't easily trigger the state change in AppLayout from here without a context or URL param info.
  // But the prompt says "Do NOT alter routing logic". 
  // So I will just navigate to '/', effectively resetting the app state. This is acceptable for a "static" page like License.

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header currentPage="license" onNavigate={(page) => navigate('/')} />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Legal</span>
            </div>
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Terms & License
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clear, simple licensing for all our templates.
            </p>
          </div>

          <div className="grid gap-12 max-w-4xl mx-auto">
            
            {/* Section 1 - Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <div className="bg-card rounded-2xl border border-border p-8">
                <p className="text-muted-foreground leading-relaxed">
                  When you purchase a template from CraftedWeb Studio, you are purchasing a license to use the product, not the intellectual property rights to the product itself. CraftedWeb Studio retains all intellectual property rights. Templates are licensed, not sold.
                </p>
              </div>
            </div>

            {/* Section 2 - Standard License */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Standard License</h2>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">Non-Exclusive</span>
              </div>
              
              <div className="bg-card rounded-2xl border border-border p-8">
                <ul className="grid gap-4">
                  {[
                    "Use for one (1) personal or client project",
                    "Full customization allowed",
                    "Commercial use allowed",
                    "Non-exclusive license",
                    "No resale or redistribution of source code",
                    "No claiming template as your own product"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-green-500" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section 3 - Exclusive License */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Exclusive License</h2>
                <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">Custom Agreement</span>
              </div>
              
              <div className="bg-gradient-to-br from-card to-accent/5 rounded-2xl border border-accent/20 p-8">
                <ul className="grid gap-4 mb-8">
                  {[
                    "Template removed from marketplace",
                    "Full commercial ownership transferred",
                    "Custom agreement signed",
                    "Pricing starts at $800",
                    "Contact required before purchase"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Lock className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center gap-2 text-sm text-muted-foreground p-4 bg-background/50 rounded-xl border border-border/50">
                  <Mail className="w-4 h-4" />
                  For exclusivity inquiries, please contact us directly.
                </div>
              </div>
            </div>

            {/* Section 4 - Contact */}
            <div className="text-center pt-8 border-t border-border">
              <p className="text-muted-foreground">
                For licensing questions, contact us via the <a href="/" onClick={(e) => { e.preventDefault(); navigate('/', { state: { target: 'contact' } }); }} className="text-primary hover:underline font-medium">Contact page</a>.
              </p>
            </div>

          </div>
        </div>
      </main>

      <Footer onNavigate={(page) => navigate('/')} onSelectCategory={() => navigate('/')} />
    </div>
  );
};

export default License;
