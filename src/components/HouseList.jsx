import House from './House'
import { Grid, Center, useBreakpointValue } from '@chakra-ui/react'
import PropTypes from 'prop-types'

const HouseList = ({houses}) => {
    const default_color_house = "#B06E3F"
    const default_img_house = "/img/default.png"
    const dicc_color_house = {
        "Gryffindor" : "#990000",
        "Ravenclaw" : "#2376AD",
        "Slytherin" : "#1F8A70",
        "Hufflepuff" : "#DAAF00"
    }
    const dicc_img_house = {
        "Gryffindor" : "/img/gryffindor.png",
        "Ravenclaw" : "/img/ravenclaw.png",
        "Slytherin" : "/img/slytherin.png",
        "Hufflepuff" : "/img/hufflepuff.png"
    }
    const columns = useBreakpointValue({ base: 1, lg: 2 });
    return(
        <Center>        
            <Grid templateColumns={`repeat(${columns}, 1fr)`}>
            {houses?.map((house)=>(
                <House
                key={house.id}
                id={house.id}
                name={house.name}
                color_cod={dicc_color_house[house.name] ? dicc_color_house[house.name] : default_color_house}
                img={dicc_img_house[house.name] ? dicc_img_house[house.name] : default_img_house}/>
            ))}
            </Grid>            
        </Center>
    )
}

HouseList.propTypes = {
    houses: PropTypes.array.isRequired
};

export default HouseList