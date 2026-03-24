import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, MessageSquare, Clock, Send, Check, MapPin, Phone, Copy } from 'lucide-react';
import { toast } from 'sonner';

interface ContactPageProps {
  onNavigate?: (page: string) => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Credentials:
      // template id = template_9ynhhy8
      // service id = service_4j3kw55
      // public key = aC2pB2xmli0gnp1tM

      const payload = {
        service_id: 'service_4j3kw55',
        template_id: 'template_9ynhhy8',
        user_id: 'aC2pB2xmli0gnp1tM',
        template_params: {
          name: formData.name,
          from_name: formData.name,
          email: formData.email,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          reply_to: formData.email,
        },
      };

      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        toast.success('Your message has been sent successfully!');
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        const errorData = await response.text();
        throw new Error(errorData || 'Failed to send');
      }
    } catch (error: any) {
      console.error('Email Error Details:', error);
      const errorMessage = error?.message || 'Please try again later.';
      toast.error(`Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'craftedwebstudio@gmail.com',
      description: 'For general inquiries and support'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '24-48 hours',
      description: 'We respond within business days'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      value: 'Coming Soon',
      description: 'Real-time support on the way'
    }
  ];

  return (
    <section className="relative pt-16 pb-24 min-h-screen bg-obsidian overflow-hidden">
      {/* ── Ambient background glow blobs ── */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-purple-600/[0.07] rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-[40%] right-[5%] w-[400px] h-[400px] bg-solar-gold/[0.05] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 left-[30%] w-[350px] h-[350px] bg-violet-500/[0.06] rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Notice Banner */}
        <div className="max-w-4xl mx-auto mb-10 animate-fade-up">
          <div 
            className="relative rounded-2xl p-6 md:p-7 overflow-hidden group border border-solar-gold/20"
            style={{
              background: 'linear-gradient(135deg, rgba(244, 185, 97, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
              boxShadow: '0 10px 40px -15px rgba(244, 185, 97, 0.1)',
            }}
          >
            {/* Subtle multi-color gradient side edge */}
            <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-purple-500/50 via-solar-gold/50 to-purple-500/50" />
            
            <div className="relative z-10 flex items-start gap-4 text-sm md:text-base leading-relaxed text-white/70">
              <span className="text-lg md:text-xl shrink-0">✨</span>
              <p>
                <span className="text-purple-300 font-bold">Kindly Note:</span> Due to the digital nature of our products, we cannot offer refunds once files are downloaded. Please review our{' '}
                <button 
                  onClick={() => onNavigate?.('faq')}
                  className="text-solar-gold font-medium hover:underline transition-all focus:outline-none"
                >
                  FAQ
                </button>
                ,{' '}
                <button 
                  onClick={() => onNavigate?.('license')}
                  className="text-solar-gold font-medium hover:underline transition-all focus:outline-none"
                >
                  Terms & License
                </button>
                {' '}and <span className="text-solar-gold font-medium">Demo Videos</span> thoroughly before purchasing. Thank you! 🙏
              </p>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-6 animate-fade-up">
            Get in Touch
          </h1>
          <p className="text-sm md:text-base text-white/60 max-w-2xl mx-auto leading-relaxed animate-fade-up stagger-1">
            Have a question or prefer to purchase manually? While the fastest way to get your template is via{' '}
            <span className="text-purple-300 font-medium">Gumroad</span>, we also accept manual payments. 
            Kindly email us at{' '}
            <a 
              href="mailto:craftedwebstudio@gmail.com"
              className="text-purple-300 font-medium hover:underline transition-all"
            >
              craftedwebstudio@gmail.com
            </a>
            {' '}with it and typically respond within 24-48 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto items-stretch">

          {/* ─── Left: Contact Info ─── */}
          <div className="lg:w-[36%] relative perspective-[1200px]">
            {/* Tilted stacked layers */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.04] bg-[#0E0E12] -rotate-[3deg] scale-[0.97] translate-x-2 translate-y-2 shadow-[0_8px_60px_-12px_rgba(139,92,246,0.15)]" />
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.06] bg-[#12121A] rotate-[1.5deg] scale-[0.985] translate-x-1 translate-y-1 shadow-[0_4px_40px_-8px_rgba(244,185,97,0.08)]" />

            {/* Main card */}
            <div
              className="relative rounded-[2rem] p-9 h-full overflow-hidden"
              style={{
                background: 'linear-gradient(160deg, rgba(30,28,38,1) 0%, rgba(18,17,24,1) 50%, rgba(22,20,30,1) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 80px -20px rgba(139,92,246,0.18), 0 0 0 1px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Internal warm glow */}
              <div className="absolute -top-10 -right-10 w-44 h-44 bg-solar-gold/[0.08] rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/[0.10] rounded-full blur-[70px] pointer-events-none" />

              <div className="relative z-10 space-y-9">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex flex-col">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{
                        background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
                        border: '1px solid rgba(244,185,97,0.15)',
                        boxShadow: '0 0 20px rgba(244,185,97,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
                      }}
                    >
                      <info.icon className="w-5 h-5 text-solar-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1 tracking-tight">{info.title}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-purple-300/90 text-sm font-medium">{info.value}</p>
                      {info.title === 'Email Us' && (
                        <button
                          onClick={() => handleCopyEmail(info.value)}
                          className="p-1 text-white/30 hover:text-white transition-colors"
                          title="Copy email address"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-green-500" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      )}
                    </div>
                    <p className="text-sm text-white/30 leading-relaxed">{info.description}</p>
                  </div>
                ))}

                {/* FAQ Link */}
                <div 
                  className="pt-4 cursor-pointer group/faq"
                  onClick={() => onNavigate?.('how-it-works')}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                    style={{
                      background: 'linear-gradient(145deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.01) 100%)',
                      border: '1px solid rgba(244,185,97,0.15)',
                      boxShadow: '0 0 20px rgba(244,185,97,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
                    }}
                  >
                    <span className="text-solar-gold font-serif text-lg font-bold">?</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1 tracking-tight">Check our FAQ first</h3>
                  <p className="text-sm text-white/30 leading-relaxed">
                    Many common questions are answered in our FAQ section on each template page.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ─── Right: Contact Form ─── */}
          <div className="lg:w-[64%] relative perspective-[1200px]">
            {/* Tilted stacked layers */}
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.04] bg-[#0E0E12] rotate-[2.5deg] scale-[0.97] -translate-x-1 translate-y-2 shadow-[0_8px_60px_-12px_rgba(139,92,246,0.12)]" />
            <div className="absolute inset-0 rounded-[2rem] border border-white/[0.06] bg-[#12121A] -rotate-[1deg] scale-[0.985] translate-y-1 shadow-[0_4px_40px_-8px_rgba(139,92,246,0.06)]" />

            {/* Main card */}
            <div
              className="relative rounded-[2rem] p-10 md:p-12"
              style={{
                background: 'linear-gradient(160deg, rgba(30,28,38,1) 0%, rgba(18,17,24,1) 50%, rgba(22,20,30,1) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                boxShadow: '0 20px 80px -20px rgba(139,92,246,0.18), 0 0 0 1px rgba(139,92,246,0.06), inset 0 1px 0 rgba(255,255,255,0.04)',
              }}
            >
              {/* Internal glow */}
              <div className="absolute top-0 left-[30%] w-60 h-40 bg-purple-500/[0.06] rounded-full blur-[80px] pointer-events-none" />

              <h2 className="relative z-10 text-3xl font-serif text-white mb-10">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-20 relative z-10">
                  <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-500" />
                  </div>
                  <h3 className="text-2xl font-serif text-white mb-3">Message Sent!</h3>
                  <p className="text-white/40 max-w-sm mx-auto">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-7 relative z-10">
                  <div className="grid sm:grid-cols-2 gap-7">
                    <div className="space-y-2.5">
                      <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl text-white placeholder:text-white/15 focus:outline-none transition-all duration-300 ${
                          errors.name ? 'border-red-500/40' : ''
                        }`}
                        style={{
                          background: 'rgba(0,0,0,0.35)',
                          border: errors.name ? '1.5px solid rgba(239,68,68,0.4)' : '1.5px solid rgba(139,92,246,0.20)',
                          boxShadow: '0 0 15px rgba(139,92,246,0.04), inset 0 1px 0 rgba(255,255,255,0.02)',
                        }}
                        onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.5)'; e.target.style.boxShadow = '0 0 25px rgba(139,92,246,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor = errors.name ? 'rgba(239,68,68,0.4)' : 'rgba(139,92,246,0.20)'; e.target.style.boxShadow = '0 0 15px rgba(139,92,246,0.04)'; }}
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2.5">
                      <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-5 py-3.5 rounded-xl text-white placeholder:text-white/15 focus:outline-none transition-all duration-300`}
                        style={{
                          background: 'rgba(0,0,0,0.35)',
                          border: errors.email ? '1.5px solid rgba(239,68,68,0.4)' : '1.5px solid rgba(139,92,246,0.20)',
                          boxShadow: '0 0 15px rgba(139,92,246,0.04), inset 0 1px 0 rgba(255,255,255,0.02)',
                        }}
                        onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.5)'; e.target.style.boxShadow = '0 0 25px rgba(139,92,246,0.12)'; }}
                        onBlur={e => { e.target.style.borderColor = errors.email ? 'rgba(239,68,68,0.4)' : 'rgba(139,92,246,0.20)'; e.target.style.boxShadow = '0 0 15px rgba(139,92,246,0.04)'; }}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Subject *</label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-5 py-3.5 rounded-xl text-white appearance-none focus:outline-none transition-all duration-300"
                        style={{
                          background: 'rgba(0,0,0,0.35)',
                          border: errors.subject ? '1.5px solid rgba(239,68,68,0.4)' : '1.5px solid rgba(139,92,246,0.20)',
                          boxShadow: '0 0 15px rgba(139,92,246,0.04), inset 0 1px 0 rgba(255,255,255,0.02)',
                        }}
                      >
                        <option value="" className="bg-[#111115]">Select a subject</option>
                        <option value="general" className="bg-[#111115]">General Inquiry</option>
                        <option value="support" className="bg-[#111115]">Technical Support</option>
                        <option value="purchase" className="bg-[#111115]">Purchase Question</option>
                        <option value="custom" className="bg-[#111115]">Custom Project</option>
                        <option value="other" className="bg-[#111115]">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/25">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="block text-xs font-bold text-white/40 uppercase tracking-[0.15em] ml-1">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl text-white placeholder:text-white/20 focus:outline-none transition-all duration-300 resize-none"
                      style={{
                        background: 'rgba(0,0,0,0.35)',
                        border: errors.message ? '1.5px solid rgba(239,68,68,0.4)' : '1.5px solid rgba(139,92,246,0.20)',
                        boxShadow: '0 0 15px rgba(139,92,246,0.04), inset 0 1px 0 rgba(255,255,255,0.02)',
                      }}
                      onFocus={e => { e.target.style.borderColor = 'rgba(139,92,246,0.5)'; e.target.style.boxShadow = '0 0 25px rgba(139,92,246,0.12)'; }}
                      onBlur={e => { e.target.style.borderColor = errors.message ? 'rgba(239,68,68,0.4)' : 'rgba(139,92,246,0.20)'; e.target.style.boxShadow = '0 0 15px rgba(139,92,246,0.04)'; }}
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-8 rounded-xl font-bold text-lg transition-all duration-300 disabled:opacity-50 active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(135deg, #C4B5FD 0%, #DDD6FE 50%, #C4B5FD 100%)',
                      color: '#0A0A0F',
                      boxShadow: '0 8px 40px rgba(139,92,246,0.25), 0 0 0 1px rgba(196,181,253,0.3)',
                    }}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
