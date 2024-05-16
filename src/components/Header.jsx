import imgHeader from "/img-header.png"

import { Link } from "react-router-dom"
export default function Header() {
    return (
        <div className="fixed flex justify-between items-center pt-12 bg-black">
            <Link className="w-128" to='/'> <img src={imgHeader} alt="" /></Link>
            <nav>
                <ul className="text-xl font-light flex gap-12">
                    <a href="#sinopse">Sinopse</a>
                    <a href="#quadrinhos">Quadrinhos</a>
                    <a href="#critica">Críticas Sociais</a>
                    <Link to="/personagens">Personagens</Link>
                </ul>
            </nav>
        </div>

    )
}