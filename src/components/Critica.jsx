import imgCritica from "/img-critica.jpg"

export default function Critica() {
    return(
        <section id="critica">
            <div>
                <h2 className="text-4xl mb-5">Críticas Sociais</h2>
            </div>

            <div className="mb-5">
                <img src={imgCritica} alt="" />
            </div>

            <div>
                <p className="pb-2">A série "Doutrinador" emerge como uma poderosa crítica social, lançando um olhar incisivo sobre as entranhas da corrupção que permeiam as estruturas de poder no Brasil. Ao retratar um vigilante implacável que busca justiça em um sistema onde a impunidade reina, a narrativa destaca as feridas abertas da sociedade brasileira, expondo as falhas e os abusos que muitas vezes passam despercebidos.</p>

                <p className="pb-2">Em um país marcado pela corrupção endêmica, a série ressoa fortemente com um público que está cansado da impunidade e da injustiça. Ao seguir os passos de Miguel Montessantos, que se transforma no Doutrinador após ser vítima da corrupção e da violência, a narrativa oferece uma catarse emocional para aqueles que sentem a frustração e a raiva diante da ineficácia do sistema.</p>

                <p className="pb-2">Através das façanhas do Doutrinador, a série escancara as consequências devastadoras da corrupção, não apenas em nível individual, mas também em escala societal. Ela mostra como a corrupção permeia todas as camadas da sociedade, minando a confiança nas instituições e alimentando um ciclo vicioso de impunidade e desigualdade.</p>
            </div>

        </section>
    )
}