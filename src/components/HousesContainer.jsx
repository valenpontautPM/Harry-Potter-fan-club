import { Container } from '@chakra-ui/react'
import { useEffect, useState } from 'react'; 
import Loading from './Loading';
import HouseList from './HouseList';

const HousesContainer = () => {
    const [houses, setHouses] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://wizard-world-api.herokuapp.com/Houses');
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
    }, []);
    return (
        <Container className='container'>
          {loading ? <Loading/> : <HouseList houses={houses}/>}
        </Container>
    )
}

export default HousesContainer