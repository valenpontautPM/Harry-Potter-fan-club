import { Container, Card, Button, Text,  Image } from '@chakra-ui/react'
import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const House = ({id, name, color_cod, img}) => {
    return (
        <Container className='house__container'>  
          <Card className='house__container__card' bg={color_cod}>
            <Text className='house__container__card__title'>{name.toUpperCase()}</Text>
            <Image className='house__container__card__image' src={img}/>
            <Link className='house__container__card__button' to={`/houses/${id}`}>
              <Button color={color_cod}>
                Visit House
              </Button>
            </Link>
          </Card>
        </Container>  
      )
}

House.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    color_cod: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};

export default House