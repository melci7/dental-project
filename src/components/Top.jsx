import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import person from "../assets/personn.png";
import logo from "../assets/main-logo.svg";

function Top() {
    const [color, setColor] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        function changeColor() {
            if (window.scrollY >= 30) {
                setColor(true);
            } else {
                setColor(false);
            }
        }

        window.addEventListener("scroll", changeColor);

        return () => {
            window.removeEventListener("scroll", changeColor);
        };
    }, []);

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="container">
            <div className="header-container">
                <header className={color ? "header header-bg" : "header"}>
                    <div className="wrapper-top">
                        <a className="logo-container" href="">
                            <img src={logo} alt="Van Diş Kliniği Logo" />
                            <span className="logo-text">VAN DİŞ KLİNİĞİ</span>
                        </a>
                        <nav className="header-nav">
                            <ul className={showMenu ? "header-ul show-menu" : "header-ul"}>
                                <li className="list-item">
                                    <Link
                                        className="list-item-link"
                                        to="top"
                                        onClick={scrollToTop}
                                    >
                                        ANA SAYFA
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        className="list-item-link"
                                        to="services"
                                        smooth={true}
                                        duration={1000}
                                        offset={-100}
                                    >
                                        HİZMETLER
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        className="list-item-link"
                                        to="contact"
                                        smooth={true}
                                        duration={1500}
                                    >
                                        İLETİŞİM
                                    </Link>
                                </li>
                                <li className="list-item">
                                    <Link
                                        className="list-item-link"
                                        to="location"
                                        smooth={true}
                                        duration={1000}
                                        offset={-200}
                                    >
                                        KONUM
                                    </Link>
                                </li>
                            </ul>
                            <a
                                className="header-call"
                                href="tel:+905453293325"
                                title="Bizi Arayın"
                            >
                                Bizi Arayın
                            </a>
                            <div
                                className={showMenu ? "menu-btn active" : "menu-btn"}
                                onClick={() => setShowMenu((prevValue) => !prevValue)}
                                onKeyDown={(e) =>
                                    e.key === "Enter" && setShowMenu((prevValue) => !prevValue)
                                }
                                tabIndex="0"
                                role="button"
                                aria-label="Toggle Menu"
                            >
                                <span className="top-line"></span>
                                <span className="bottom-line"></span>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
            <section className="section-one" id="top">
                <div className="wrapper">
                    <div className="section-one-text">
                        <h1 className="h1">Sağlıklı Gülüşler için Uzman Ekibimizle Hizmetinizdeyiz</h1>
                        <p className="subtext">
                            Kliniğimizde, her hastamıza bireyselleştirilmiş bir yaklaşımla
                            sağlıklı ve güzel bir gülümseme sunmayı amaçlıyoruz. Uzun yıllara
                            dayanan deneyimimiz ve uzmanlığımızla, hastalarımızın konforlu ve
                            güvenli bir ortamda tedavi olmalarını sağlıyoruz.
                        </p>
                    </div>
                    <img className="person-img" src={person} alt="Van Diş Kliniği Personel" />
                </div>
            </section>
        </div>
    );
}

export default Top;
