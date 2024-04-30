import data from "@/data"

export default function Services() {
    return (
        <div className="service-wrapper">
            <h2 className="service-h2">Hizmetlerimiz</h2>
            <div className="service">
                {data[1].services.map((item, index) => (
                    <div className="service-top" key={index}>
                        <img src={item.image}></img>
                        <h4 className="service-top-h4">{item.service}</h4>
                        <p className="service-top-p">{item.about}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}