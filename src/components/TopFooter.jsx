import personTwo from "../assets/photo2.jpg"
import personThree from "../assets/photo3.jpg"
import smileyFace from "../assets/smiley-face.svg"

export default function TopFooter() {
    return (
        <section className="top-footer">
            <div className="img-person">
                <img className="img-person-two" src={personTwo} alt="Person Two"></img>
                <img className="img-person-three" src={personThree} alt="Person Three"></img>
            </div>
            <div className="smiley-face-container">
                <img className="smiley-face" src={smileyFace} alt="Smiley Face"></img>
                <h2>Sağlıklı bir gülümseme korunmaya değer.</h2>
                <a className="header-call" href="tel:+905453293325" title="Bizi Arayın">Bizi Arayın</a>
            </div>
        </section>
    )
}
