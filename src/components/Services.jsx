import data from "@/data"

export default function Services() {
    return (
        <section className="service-wrapper" id="services">
            <h2 className="service-h2">Hizmetlerimiz</h2>
            <div className="service">
                {data[1].services.map((item, index) => (
                    <article className="service-top" key={index}>
                        <img src={item.image} alt={item.image}></img>
                        <h4 className="service-top-h4">{item.service}</h4>
                        <p className="service-top-p">{item.about}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}