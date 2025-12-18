const categories = [
  { emoji: '🍗', title: 'Pratos Principais', description: 'Chester suculento, peru dourado, tender com fios de ovos e bacalhoada especial.' },
  { emoji: '🍚', title: 'Acompanhamentos', description: 'Arroz natalino, farofas crocantes, purês gourmet e legumes glaceados.' },
  { emoji: '🥗', title: 'Salpicões e Saladas', description: 'O famoso salpicão clássico, saladas refrescantes e molhos exclusivos.' },
  { emoji: '🍰', title: 'Sobremesas Clássicas', description: 'Pavês, rabanadas, pudins, mousses e tortas que derretem na boca.' },
  { emoji: '🎄', title: 'Receitas Criativas', description: 'Toques modernos para quem quer inovar e surpreender os convidados.' },
  { emoji: '📱', title: 'Acesso Imediato', description: 'Receba no seu WhatsApp e E-mail em menos de 1 minuto após a compra.' },
];

export default function WhatsInsideSection() {
    return (
        <section className="py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-red-950">O cardápio mais completo do Brasil</h2>
                    <p className="text-gray-600 mt-4">Tudo o que você precisa em um único lugar</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-shadow">
                            <div className="text-4xl mb-4">{category.emoji}</div>
                            <h3 className="font-headline text-xl font-bold mb-2">{category.title}</h3>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                    ))}
                </div>
                <p className="text-center mt-12 font-bold text-red-600 text-lg">+ outras dezenas de receitas exclusivas!</p>
            </div>
        </section>
    );
}
