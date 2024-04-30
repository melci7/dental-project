import { useState } from "react"
import person from "../assets/person2.png"
import logo from "../assets/main-logo.svg"
function Top() {

    const [color, setColor] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    function changeColor() {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changeColor)

    return (
        <div className='container'>
            <div className="header-container">
                <header className={color ? "header header-bg" : "header"}>
                    <div className='wrapper-top'>
                        <div className="logo-container">
                            <img src={logo} alt="Logo" />
                            <span className="logo-text">VAN DİŞ KLİNİĞİ</span>
                        </div>
                        <nav className="header-nav">
                            <ul className={showMenu ? "header-ul show-menu" : "header-ul"}>
                                <li className="list-item"><a className="list-item-link" href="#">ANA SAYFA</a></li>
                                <li className="list-item"><a className="list-item-link" href="#">HAKKIMIZDA</a></li>
                                <li className="list-item"><a className="list-item-link" href="#">HİZMETLER</a> </li>
                                <li className="list-item"><a className="list-item-link" href="#">İLETİŞİM</a></li>
                            </ul>
                            <a className="header-call" href="tel:+905453293325" title="Bizi Arayın">Bizi Arayın</a>
                            <div className={showMenu ? "menu-btn active" : "menu-btn"} onClick={() => setShowMenu(prevValue => !prevValue)}>
                                <span className="top-line"></span>
                                <span className="bottom-line"></span>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            <section className='section-one'>
                <div className='wrapper'>
                    <div className="section-one-text">
                        <h1 className="h1">Sağlıklı Gülüşler için Buradayız</h1>
                        <p className='subtext'>Kliniğimizde, her hastamıza bireyselleştirilmiş bir yaklaşımla sağlıklı ve güzel bir gülümseme sunmayı amaçlıyoruz. Uzun yıllara dayanan deneyimimiz ve uzmanlığımızla, hastalarımızın konforlu ve güvenli bir ortamda tedavi olmalarını sağlıyoruz.</p>
                    </div>
                    <img className='person-img' src={person} alt='person' />
                </div>
            </section>
        </div>
    )
}

export default Top

