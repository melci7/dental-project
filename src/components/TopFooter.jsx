import personTwo from "../assets/person-two.jpg"
import personThree from "../assets/person-three.jpg"
import smileyFace from "../assets/smiley-face.svg"
export default function TopFooter() {
    return (
        <section className="top-footer">
            <div className="img-person">
                <img className="img-person-two" src={personTwo}></img>
                <img className="img-person-three" src={personThree}></img>
            </div>
            <div className="smiley-face-container">
                <img className="smiley-face" src={smileyFace}></img>
                <h2>Sağlıklı bir gülümseme korunmaya değer.</h2>
                <a className="header-call" href="tel:+905453293325" title="Bizi Arayın">Bizi Arayın</a>
            </div>
        </section>
    )
}