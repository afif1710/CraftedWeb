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
      value: 'masteraf646@gmail.com',
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
    <>
      <div className="w-full bg-gradient-to-r from-violet-500/10 via-purple-500/10 to-pink-500/10 border-b border-primary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
          <p className="text-sm lg:text-base font-medium text-muted-foreground">
            <span className="mr-2">✨</span>
            <span className="font-bold text-primary">Kindly Note:</span> Due to the digital nature of our products, we cannot offer refunds once files are downloaded. 
            <br className="sm:hidden" />  
            Please review our <span className="text-foreground underline decoration-dotted underline-offset-4 cursor-help" title="Check the FAQ section in 'How it Works' page">FAQ</span>, <button onClick={() => navigate('/license')} className="text-foreground underline decoration-dotted underline-offset-4 cursor-pointer hover:text-primary transition-colors" title="View Terms & License">Terms & License</button> and <span className="text-foreground underline decoration-dotted underline-offset-4 cursor-help" title="Watch demo videos on template pages">Demo Videos</span> thoroughly before purchasing. Thank you! 🙏
          </p>
        </div>
      </div>
      <section className="py-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a question or looking to purchase? To buy a template, kindly email us at{' '}
            <a 
              href="mailto:masteraf646@gmail.com"
              className="text-primary font-bold underline decoration-primary/30 underline-offset-4 hover:decoration-primary transition-colors"
            >
              masteraf646@gmail.com
            </a>
            {' '}with the <span className="text-primary font-bold">Template ID</span>, or submit the form below. 
            We're here to help and typically respond within 24-48 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl border border-border p-6 hover-lift"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{info.title}</h3>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-primary font-medium">{info.value}</p>
                  {info.title === 'Email Us' && (
                    <button
                      onClick={() => handleCopyEmail(info.value)}
                      className="p-1.5 text-muted-foreground hover:text-primary hover:bg-cyan-200 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
                      title="Copy email address"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-green-500" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{info.description}</p>
              </div>
            ))}

            {/* FAQ Link */}
            <button 
              onClick={() => {
                if (onNavigate) {
                  onNavigate('how-it-works');
                  // Scroll to FAQ section after navigation
                  setTimeout(() => {
                    const faqSection = document.getElementById('faq');
                    if (faqSection) {
                      faqSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }, 100);
                }
              }}
              className="w-full text-left bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20 transition-all duration-300 hover:scale-[1.02] hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 cursor-pointer"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Check our FAQ first
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Many common questions are answered in our FAQ section on each template page.
              </p>
            </button>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl border border-border p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${
                          errors.name ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${
                          errors.email ? 'border-red-500' : 'border-border'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all ${
                        errors.subject ? 'border-red-500' : 'border-border'
                      }`}
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="purchase">Purchase Question</option>
                      <option value="custom">Custom Project</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="mt-1 text-sm text-red-500">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className={`w-full px-4 py-3 bg-background border rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none ${
                        errors.message ? 'border-red-500' : 'border-border'
                      }`}
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 bg-primary text-primary-foreground rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      </section>
    </>
  );
};

export default ContactPage;
