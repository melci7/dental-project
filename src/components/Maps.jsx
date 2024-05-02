import { useState } from "react"
import {
    APIProvider,
    Map,
    AdvancedMarker,
    InfoWindow,
} from "@vis.gl/react-google-maps"

export default function Maps() {
    const position = { lat: 38.4980463, lng: 43.3932124 }
    const [open, setOpen] = useState(false)

    return (
        <section className='location' id="location">
            <APIProvider apiKey={import.meta.env.VITE_map_apiKey}>
                <div className="map">
                    <Map defaultZoom={14.6} defaultCenter={position} mapId={import.meta.env.VITE_map_id}>
                        <AdvancedMarker position={position} onClick={() => setOpen(true)} aria-label="Diş Hekimi Gülüstan Çakan">

                        </AdvancedMarker>
                        {open && <InfoWindow position={position} onCloseClick={() => setOpen(false)}><p>Diş Hekimi Gülüstan Çakan</p></InfoWindow>}
                    </Map>
                </div>
            </APIProvider >
            <div className="location-text">
                <h2>Bizi Ziyaret Edin</h2>
                <p>Kliniğimiz, şehir merkezine yakınlığı ve kolay ulaşılabilirliğiyle hastalarımıza en iyi hizmeti sunmak için burada.</p>
            </div>
        </section>
    )
}