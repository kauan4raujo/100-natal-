const audience = [
    {
      emoji: '👩‍🍳',
      text: 'Vai preparar a ceia de Natal e quer um guia passo a passo.',
    },
    {
      emoji: '💰',
      text: 'Quer impressionar sua família sem gastar rios de dinheiro.',
    },
    {
      emoji: '⚡',
      text: 'Busca praticidade e organização para não ficar presa na cozinha.',
    },
    {
      emoji: '❤️',
      text: 'Ama o sabor de comida caseira feita com amor e tradição.',
    },
];

export default function ForWhomSection() {
    return (
        <section className="py-20 px-6 christmas-gradient text-white relative shadow-inner">
            <div className="max-w-4xl mx-auto">
                <h2 className="font-headline text-3xl font-bold text-center mb-12 text-white drop-shadow-md">Este guia foi feito para você que:</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    {audience.map((item, index) => (
                        <div key={index} className="flex items-start gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-colors duration-300">
                            <div className="text-3xl filter drop-shadow-sm">{item.emoji}</div>
                            <p className="text-red-50 text-lg font-medium">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
