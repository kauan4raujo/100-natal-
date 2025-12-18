import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "Como recebo o acesso?",
    answer: "O acesso é enviado automaticamente para o seu e-mail logo após a confirmação do pagamento. Se pagar via PIX, recebe em segundos!",
  },
  {
    question: "Posso acessar pelo celular?",
    answer: "Sim! O arquivo está em formato PDF de alta qualidade, otimizado para celulares, tablets e computadores.",
  },
  {
    question: "As receitas são fáceis?",
    answer: "Com certeza. Selecionamos receitas que usam ingredientes comuns e têm um passo a passo simples, perfeito para iniciantes.",
  },
  {
    question: "O acesso é realmente vitalício?",
    answer: "Sim, uma vez comprado, o guia é seu para sempre. Você pode baixar quantas vezes quiser.",
  },
];

export default function FaqSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl font-bold text-center mb-12 text-red-950">
          Dúvidas Frequentes
        </h2>
        <Accordion type="single" collapsible className="space-y-4">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-xl px-4">
              <AccordionTrigger className="font-bold text-left hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
