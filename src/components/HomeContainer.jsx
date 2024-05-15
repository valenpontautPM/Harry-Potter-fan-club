import { Container,Flex,Image,Text } from "@chakra-ui/react"
import { Link } from 'react-router-dom';
import shield from '../../public/img/hogwarts.png'
import * as amplitude from '@amplitude/analytics-browser';
const AMPLITUDE_API_KEY = "986ab970a868fbebc01877a2b9d342ab"
amplitude.init(AMPLITUDE_API_KEY, {
    defaultTracking: true,
});

const HomeContainer = () => {
    const handleClickVisitFeedback = () => {
        amplitude.track('Click Visit Feedback', {from: "home"});
      };
    return(
        <Container className="container">
            <Flex className="home__container__flex">
                <div className='home__container__flex__div'>
                    <Text className="home__container__flex__div__title">Welcome to the Wizarding World Fan Club! </Text>
                    <Text className="home__container__flex__div__bodytext">Step into the magical world of Harry Potter and join fellow fans in celebrating J.K. Rowling&apos;s famous series. Explore Hogwarts houses, meet wizards, discover potions, ingredients, and spells, and share your thoughts in our <Link className="home__link" to={`/feedback`} onClick={handleClickVisitFeedback}>feedback section</Link></Text>
                    <Text className="home__container__flex__div__endtext">Your journey into the magical world awaits!</Text>
                </div>
                <Image className='home__container__flex__image' src={shield}/>
            </Flex>
        </Container>
    )
}

export default HomeContainer