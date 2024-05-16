import Header from '../components/Header.jsx'
import Sinopse from '../components/Sinopse.jsx'
import Critica from '../components/Critica.jsx'
import Quadrinhos from '../components/Quadrinhos.jsx'

export default function Doutrinador() {
  return (
    <section className='bg-black text-amber-100'>  
      
    <header>
      <Header />
    </header>

    <main>
      <Sinopse />
      <Quadrinhos />
      <Critica />
    </main>

  </section>
  )
}
