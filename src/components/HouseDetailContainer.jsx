import { useEffect, useState } from 'react'; 
import Loading from './Loading';
import HouseDetail from './HouseDetail';
import { useParams } from 'react-router-dom'

const HousesDetailContainer = () => {
    const default_color_house = "#B06E3F"
    const default_img_house = "../src/img/default.png"
    const dicc_color_house = {
        "Gryffindor" : "#990000",
        "Ravenclaw" : "#2376AD",
        "Slytherin" : "#1F8A70",
        "Hufflepuff" : "#DAAF00"
    }
    const dicc_img_house = {
        "Gryffindor" : "../src/img/gryffindor.png",
        "Ravenclaw" : "../src/img/ravenclaw.png",
        "Slytherin" : "../src/img/slytherin.png",
        "Hufflepuff" : "../src/img/hufflepuff.png"
    }
    const {id}= useParams();
    const [house, setHouses] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://wizard-world-api.herokuapp.com/Houses/'+id);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setHouses(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }
        fetchData();
    }, [id]);
    return (
        <div className='container__houseDetail'>
            {loading ? 
                <Loading/> 
            : 
                <HouseDetail
                key={house.id}
                name={house.name}
                houseColours={house.houseColours}
                founder={house.founder}
                animal={house.animal}
                element={house.element}
                ghost={house.ghost}
                commonRoom={house.commonRoom}
                heads={house.heads}
                traits={house.traits}
                color_cod={dicc_color_house[house.name] ? dicc_color_house[house.name] : default_color_house}
                img={dicc_img_house[house.name] ? dicc_img_house[house.name] : default_img_house}/>
            }
        </div>
    )

}

export default HousesDetailContainer