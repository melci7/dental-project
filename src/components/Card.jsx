import data from "@/data"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Card() {
    return (
        <Carousel className="carousel">
            <div className="arrow-container">
                <CarouselPrevious className="arrow prev-arrow" />
                <CarouselNext className="arrow next-arrow" />
            </div>

            <CarouselContent className="card">
                {data[0].comments.map((item, index) => (
                    <CarouselItem key={index} className="card-container">
                        <div className="quote-icon">
                            <svg className={`svg-${index % 4}`} xmlns="http://www.w3.org/2000/svg" width="23" height="18" viewBox="0 0 23 18" fill="none">
                                <path d="M7.55556 0C5.81778 0 0 5.06222 0 11.8622C0 15.7911 2.41778 17.6044 5.21333 17.6044C7.85778 17.6044 9.82222 15.7911 9.82222 13.3733C9.82222 10.88 8.16 9.06667 5.51556 9.06667C5.21333 9.06667 4.98667 9.06667 4.76 9.14222C4.38222 9.21778 4.23111 9.06667 4.30667 8.68889C5.36444 4.00444 8.61333 1.73778 8.61333 1.05778C8.61333 0.453332 8.00889 0 7.55556 0ZM12.8444 11.8622C12.8444 15.7911 15.2622 17.6044 18.0578 17.6044C20.7022 17.6044 22.6667 15.7911 22.6667 13.3733C22.6667 10.88 21.0044 9.06667 18.36 9.06667C18.0578 9.06667 17.8311 9.06667 17.6044 9.14222C17.2267 9.21778 17.0756 9.06667 17.1511 8.68889C18.2089 4.00444 21.4578 1.73778 21.4578 1.05778C21.4578 0.453332 20.8533 0 20.4 0C18.6622 0 12.8444 5.06222 12.8444 11.8622Z"></path>
                            </svg>
                        </div>
                        <div className="card-text">
                            <p className="card-text-p">{item.comment}</p>
                            <h4 className="card-text-h4">{item.owner}</h4>
                        </div>

                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}