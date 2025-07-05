import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { FAQ_DATA } from "../lib/constants";

const FAQ = () => (
  <section id="faq" className="py-20 bg-secondary/30">
    <div className="container mx-auto px-4 max-w-4xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-muted-foreground">
          Common questions about therapy sessions and policies
        </p>
      </div>

      <Accordion type="single" collapsible className="space-y-4">
        {FAQ_DATA.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`item-${index}`}
            className="bg-card rounded-lg px-6 border shadow-sm"
          >
            <AccordionTrigger className="text-left font-semibold text-card-foreground hover:no-underline py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQ;