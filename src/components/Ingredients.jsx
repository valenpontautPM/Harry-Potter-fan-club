import { Text } from "@chakra-ui/react"
import witch from '../img/witch_no_page.jpg'

const Ingredients = () => {
    return(
        <div className="no_page__div">
          <div className="no_page__div__div">
              <img className="no_page__div__div__image" src={witch} alt='Coming soon...'/>
              <Text className="no_page__div__div__text">Coming soon!</Text>
          </div>
        </div>
    )
}

export default Ingredients