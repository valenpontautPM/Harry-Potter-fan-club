import { Container,Flex,Image,Text } from "@chakra-ui/react"
import shield from '../../public/img/hogwarts.png'
const HomeContainer = () => {
    return(
        <Container className="container">
            <Flex className="home__container__flex">
                <div className='home__container__flex__div'>
                    <Text className="home__container__flex__div__title">Welcome to the Wizarding World Fan Club! </Text>
                    <Text className="home__container__flex__div__bodytext">Step into the magical world of Harry Potter and join fellow fans in celebrating J.K. Rowling&apos;s famous series. Explore Hogwarts houses, meet wizards, discover potions, ingredients, and spells, and share your thoughts in our feedback section</Text>
                    <Text className="home__container__flex__div__endtext">Your journey into the magical world awaits!</Text>
                </div>
                <Image className='home__container__flex__image' src={shield}/>
            </Flex>
        </Container>
    )
}

export default HomeContainer