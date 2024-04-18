import doutrinador from "/doutrinador.jpg"

export default function Sinopse() {
    return(
        <section className="pb-20">

            <div>
                <h2 className="text-4xl mb-5">Sinopse</h2>
            </div>

            <div className="flex gap-10 itens-center">

                <div>

                    <p className="pb-2">"O Doutrinador" é uma série intensa que mergulha nas profundezas sombrias da sociedade brasileira, explorando questões de corrupção, injustiça e desigualdade. Ambientada em um Brasil contemporâneo, onde a criminalidade e a impunidade são endêmicas, a narrativa segue Miguel Montessantos, um homem comum que se transforma em um vigilante implacável conhecido como o Doutrinador.</p>

                    <p className="pb-2">Miguel, inicialmente, é um policial dedicado, cujo mundo é virado de cabeça para baixo quando sua família é tragicamente vítima da violência e corrupção que permeiam as estruturas do poder. Consumido pela dor e pela raiva, Miguel decide não mais confiar no sistema que falhou em salbar sua filha e, em vez disso, se arma com uma vontade inflexível de buscar vingança contra aqueles que se beneficiam do caos e da impunidade.</p>
                    
                    <p className="pb-2">Assumindo a identidade do Doutrinador, Miguel mergulha em uma jornada obscura e perigosa, onde ele se torna um justiceiro determinado a fazer justiça com as próprias mãos. Equipado com habilidades excepcionais e uma determinação inabalável, ele embarca em uma cruzada solitária para punir os corruptos, os poderosos e os opressores que afligem a sociedade brasileira.</p>
                    
                    <p className="pb-2">Enquanto Miguel persegue os vilões que controlam os corredores do poder, ele se vê envolto em um jogo mortal de gato e rato, enfrentando inimigos poderosos e enfrentando dilemas éticos complexos. Ele é confrontado com a dura realidade de que a linha entre justiça e vingança pode ser tênue, e suas ações têm consequências que vão além do que ele poderia imaginar.</p>
                    
                </div>

              

                <div className='flex '>
                    <img className="max-w-128"src={doutrinador} alt="" />
                </div>

            </div> 

        </section>
    )
}