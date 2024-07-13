import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>Are your BA's responsible?</AccordionTrigger>
        <AccordionContent>
          Yes, our Brand Ambassadors take pride on being responsible. They
          consistently meet targets, manage their tasks effectively, and take
          accountability for their work. Ensuring high-quality outcomes is very
          important to them.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>How much do you charge per project?</AccordionTrigger>
        <AccordionContent>
          Our rates vary depending on the scope, complexity, and duration of the
          project. We would be happy to discuss the specific details of your
          project to provide you with a tailored quote. Can we set up a time to
          talk more about your needs and requirements?
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Where are you located?</AccordionTrigger>
        <AccordionContent>
          Take a matatu number 46 at Kencom town then alight at Rubis stage
          valley Arcade.Take a left to Korosho Rd then ask for Daraja plus
          offices. (Hse. No. 4, Korosho Lane)
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
