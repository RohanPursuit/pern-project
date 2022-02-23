import AllProductsComponent from "../component/AllProductsComponent";
import chevrolet from "../videos/chevrolet.mp4"
import epicAd from "../videos/epicAd.mp4"
import {useState, useEffect} from "react"
import axios from 'axios'
import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card"
import Ratio from "react-bootstrap/Ratio"
import "../styles/Home.css"
const URL = process.env.REACT_APP_API_URL
const videoArr = [epicAd, chevrolet]

function Home() {
    const [featured, setFeatured] = useState([])
    const [index, setIndex] = useState(0)

    /**
     * add state for video[]
     * OnEnded play next video
     */
    const playNextAd = () => {
        if(index < videoArr.length-1){
            setIndex(index+1)
        } else {
            setIndex(0)
        }
    }

    useEffect(() => {
        axios.get(`${URL}/products`)
        .then(({data}) => {
            console.log(data)
            setFeatured(data.payload.filter(({featured}) => featured))
        })
        .catch(console.log)
    }, [setFeatured])

    return (
        <div className="Home">
            <div className="Video-ad">
                <div className="grad"></div>
                <video onEnded={playNextAd} src={videoArr[index]} autoPlay muted></video>
            </div>
            <div className="Home-content">
                <div className="Featured-main">
                    {featured.map(product=> {
                        return (
                            <Card.Link className="Featured-card" to={"/products/" + product.id} key={product.id}>
                                <Card >
                                    <Card.Body>
                                    <Card.Title>{product.name}</Card.Title>
                                    </Card.Body>
                                    <Ratio aspectRatio="1x1">
                                    <Card.Img variant="top" src={product.image} alt={product.description} />
                                    </Ratio>
                                    
                                </Card>
                            </Card.Link>
                        )
                    })}
                </div>
                {/* <AllProductsComponent setFeatured={setFeatured}/> */}
            </div>
            
        </div>
    )
}

export default Home;