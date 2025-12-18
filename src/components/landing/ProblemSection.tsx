export default function ProblemSection() {
    return (
        <section className="py-20 px-6 bg-white relative">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-700 via-red-600 to-green-700"></div>
            
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-red-700">Você também se sente perdida na hora de organizar a Ceia?</h2>
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                    <p>
                        O Natal está chegando e, em vez de alegria, você sente aquela <span className="font-bold">ansiedade</span>? Não sabe por onde começar, o que cozinhar ou tem medo de errar os pontos tradicionais como o peru ou o tender?
                    </p>
                    <div className="bg-red-50 p-6 rounded-2xl border-l-4 border-red-600 italic">
                        "Falta de tempo, receitas complicadas demais e aquele cansaço de repetir sempre as mesmas coisas ano após ano..."
                    </div>
                    <p>
                        Nós entendemos. A ceia deveria ser um momento de união, não de exaustão na cozinha. Você merece celebrar com sua família sem passar o dia todo estressada e gastando fortunas em ingredientes caros.
                    </p>
                </div>
            </div>
        </section>
    );
}
