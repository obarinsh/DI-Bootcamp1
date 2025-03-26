
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'

function MyCarousel() {
    return (
        <Carousel>
            <div>
                <img src="japan.webp" alt="Japan" />
                <p className="legend">Japan</p>
            </div>
            <div>
                <img src="NY.webp" alt="New York" />
                <p className="legend">New York</p>
            </div>
            <div>
                <img src="HK.jpg" alt="Hong Kong" />
                <p className="legend">Hong Kong</p>
            </div>
            <div>
                <img src="macao.webp" alt="Macao" />
                <p className="legend">Macao</p>
            </div>

        </Carousel>
    )
}

export default MyCarousel