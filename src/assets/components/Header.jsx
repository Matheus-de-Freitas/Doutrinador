import imgHeader from "/img-header.png"

export default function Header() {
    return (
        <div className="flex justify-center py-7">
            <img src={imgHeader} alt="" />
        </div>
    )
}