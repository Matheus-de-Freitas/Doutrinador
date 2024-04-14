import Header from './assets/components/Header.jsx'
import Sinopse from './assets/components/Sinopse.jsx'
import Critica from './assets/components/Critica.jsx'
import Quadrinhos from './assets/components/Quadrinhos.jsx'

export default function App() {
  return(
    <section className='bg-black text-amber-100 px-9'>  
      
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