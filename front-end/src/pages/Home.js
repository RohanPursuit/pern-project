import AllProductsComponent from "../component/AllProductsComponent";
import chevrolet from "../videos/chevrolet.mp4"
import epicAd from "../videos/epicAd.mp4"
import {useState} from "react"
import {Link} from "react-router-dom"
import "../styles/Home.css"
const videoArr = [epicAd, chevrolet]

function Home() {
    const [featured, setFeatured] = useState([])
    // const [index, setIndex] = useState(0)
    const [index] = useState(0)

    /**
     * add state for video[]
     * OnEnded play next video
     */
    // const playNextAd = () => {
    //     if(index < videoArr.length-1){
    //         setIndex(index+1)
    //     } else {
    //         setIndex(0)
    //     }
    // }

    return (
        <div className="Home">
            <div className="Ad-main">
                {/* onEnded={playNextAd} */}
                <video src={videoArr[index]} autoPlay muted></video>
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
            </div>
            <AllProductsComponent setFeatured={setFeatured}/>
        </div>
    )
}

export default Home;