import AllProductsComponent from "../component/AllProductsComponent";
import video from "../videos/Chevrolet.mp4"
import {useState} from "react"
import {Link} from "react-router-dom"
import "../styles/Home.css"

function Home() {
    const [featured, setFeatured] = useState([])

    return (
        <div className="Home">
            <div className="Ad-main">
                <video src={video} autoPlay muted></video>
            </div>
            <div className="Featured-main">
                {featured.map(product=> {
                    return (
                        <div className="Featured-card" key={product.id}>
                            <Link to={"/products/" + product.id}>
                                <h4>{product.name}</h4>
                                <img src={product.image} alt={product.description} />
                            </Link>
                        </div>
                    )
                })}
            </div>
            <AllProductsComponent setFeatured={setFeatured}/>
        </div>
    )
}

export default Home;