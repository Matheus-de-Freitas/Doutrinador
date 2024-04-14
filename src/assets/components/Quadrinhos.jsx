import imgQuadrinhos from "/quadrinhos.png"
import imgQuadrinhos2 from "/quadrinhos2.jpg"

export default function Quadrinhos() {
    return(
        <section className="pb-20">
            <div>
                <h2 className="text-4xl mb-5" >Quadrinhos</h2>
            </div>

            <div>
                <p className="mb-14">O Doutrinador começou como um personagem dos quadrinhos nacionais, criado em 2013 pelo roteirista Luciano Cunha e pelo ilustrador Tiburcio. Desde então, ganhou vida não apenas nos quadrinhos, mas também em outras mídias, incluindo filmes e séries. Com sua origem nas páginas dos quadrinhos brasileiros, o Doutrinador se tornou um ícone da cultura pop nacional, destacando-se como um símbolo da luta contra a corrupção e a injustiça.</p>
            </div>

            <div className="flex justify-center w-100% gap-10">
                <img className="w-96" src={imgQuadrinhos} alt="" />
                <img className="w-96" src={imgQuadrinhos2} alt="" />
            </div>
        </section>
    )
}