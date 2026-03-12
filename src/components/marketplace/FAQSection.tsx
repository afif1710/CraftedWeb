import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is included in the template download?",
    answer: "You will receive the full source code for the template, including all React components, TypeScript files, and CSS styles. We also include a comprehensive setup guide to help you get started quickly in the README file."
  },
  {
    question: "Do I need to know extensive coding to use these templates?",
    answer: "No. Just follow along README file and you are good to go, you can also email us if you get stuck running the site locally. After that we'll give you roadmap (if you want) on how you can customize it with your own Brand info easily by yourself. If you want us to customize, then we can do that as well for small service charge based on the size of your contents and requirements."
  },
  {
    question: "Can I use the templates for client projects?",
    answer: "You receive a non-exclusive license to use the template for one project (your business or a client project). You may fully customize/edit it to match your brand. However, redistribution or resale of the exact template itself is not permitted."
  },
  {
    question: "Do you offer support if I get stuck?",
    answer: "Absolutely. We offer free support for initial setup issues and minor bug fixes which were told to be in the template initially (i.e website is not responsive) for the first time after running locally. If you need more extensive customization or feature additions(i.e new pages, new features, theme change, SEO Optimization etc), we also offer paid customization services and the cost varies based on your requirements."
  },
  {
    question: "Are the templates optimized for SEO?",
    answer: "Not particularly as the SEO depends on the content you fill in the template. However, we can help you with Basic SEO optimization as a paid service for a small service charge once you are fully done customzing your website with your Brand info. "
  },
  {
    question: "Can I request a refund?",
    answer: "Due to the digital nature of our products, we generally do not offer refunds. However, if you decide not to have the product even after payment before we delivered it to you, then we can refund you 100%. But once the template files are delivered, we cannot refund you."
  },
  {
    question: "What are the payment methods do you accept?",
    answer: "We accept major credit/debit cards, Apple Pay, and Google Pay through Gumroad for instant access. For manual purchases, we also accept International Bank Transfer, Payoneer, Crypto (BTC, ETH, USDT), and local options like Bkash."
  },
  {
    question: "What to do if I like a template?",
    answer: "The easiest way is to click the 'Buy with Gumroad' button for instant checkout. If you prefer manual payment or Exclusive access of the template or have specific questions, you can email us with the template ID, and we'll help you proceed manually."
  },
  {
    question: "What type of additional feature you can add to the template?",
    answer: "We can add almost any feature you want to the template. However, the cost and time required will vary depending on the complexity of the feature. Some examples of features we can add include: New Pages, New Sections, New Animations, New Features, Theme Change, SEO Optimization etc."
  }
];

export function FAQSection() {
  return (
    <div id="faq" className="max-w-3xl mx-auto mb-20">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
