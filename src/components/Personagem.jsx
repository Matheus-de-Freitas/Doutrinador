import Header from "../components/Header";
import pDoutri from '/personagem-doutrinador.jpg'
import pDantao from "/personagem-dantao.jpg"
import pNina from "/nina-o-doutrinador.avif"
import pAntero from "/antero.png"
import pOliveira from "/oliveira.png"

export default function personagem() {
  return (
    <div className="bg-black text-amber-100 px-9 h-screen">
      <Header />

      <main>
        <div>
            <h2 className="text-4xl mb-5">Personagens</h2>
        </div>

        <div className="flex gap-12">
          <div>
              <h3 className="text-xl mb-5">Miguel/Doutrinador</h3>
              <img className="w-96" src={pDoutri} alt="" />
          </div>

          <div>
              <h3 className="text-xl mb-5">Dantão</h3>
              <img className="w-64" src={pDantao} alt="" />
          </div>
          
          <div>
              <h3 className="text-xl mb-5">Nina/Gutenberg</h3>
              <img className="w-96"src={pNina} alt="" />
          </div>

          <div>
              <h3 className="text-xl mb-5">Antero Gomes</h3>
              <img className="w-96" src={pAntero} alt="" />
          </div>

          <div>
              <h3 className="text-xl mb-5">Oliveira</h3>
              <img className="w-56" src={pOliveira} alt="" />
          </div>
        </div>

      </main>
    </div>
  )
}
