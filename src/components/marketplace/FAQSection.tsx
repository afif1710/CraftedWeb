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
    answer: "No. We'll help with the initial setup in your local machine. After that we'll give you roadmap (if you want) on how you can customize it with your own Brand info easily by yourself. If you want us to customize, then we can do that as well for small service charge based on the size of your contents and requirements."
  },
  {
    question: "Can I use the templates for client projects?",
    answer: "Yes! You establish full ownership of the template for the specific project you purchased it for. You can use it for your own business or a client's website with the necessary customization required (as no one wants to have the exact same website as others)."
  },
  {
    question: "Do you offer support if I get stuck?",
    answer: "Absolutely. We offer free support for initial setup issues and minor bug fixes(i.e website is not responsive) for the first 3 days after purchase. If you need more extensive customization or feature additions(i.e new pages, new features, theme change, SEO Optimization etc), we also offer paid customization services and the cost varies based on your requirements."
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
    question: "Can I ask to see the Template's features again before buying?",
    answer: "Absolutely. We already have a video demo for each template on the product page. You can watch it to see the template's features in action. If you want to see more, you can ask us and we'll be happy to show you again what is missing in the template and what is not (i.e which button works and which are just placeholders)."
  },
  {
    question: "What are the payment methods do you accept?",
    answer: "We accept payments through multiple methods including international bank transfer(Through Nsave), payoneer, crypto currency(BTC, ETH, USDT), Nsave and Bkash."
  },
  {
    question: "What to do if I like a template?",
    answer: "If you like a template, all you need to do is take Screenshot of the template and contact with us via email, and we'll reply to you as soon as possible whether it's a normal query about the template, demo video or you wanna purchase the template."
  }
];

export function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto mb-20">
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
