import { Container,Flex, Spacer,Box,Text} from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom';
import * as amplitude from '@amplitude/analytics-browser';
const AMPLITUDE_API_KEY = "986ab970a868fbebc01877a2b9d342ab"
amplitude.init(AMPLITUDE_API_KEY, {
    defaultTracking: true,
});

const NavBar = () => {
    const location = useLocation();
    const handleVisitNavLink = (name) => () => {
        amplitude.track('Visit NavLink', { nameLink: name });
    };
    const handleClickVisitFeedback = () => {
        amplitude.track('Click Visit Feedback', {from: "navbar"});
    };
    const handleCombinedClick = (name) => () => {
        handleVisitNavLink(name)();
        handleClickVisitFeedback();
    };
    return (
        <>
        <Container className="navbar__container">
            <Flex className='navbar__flex'>
                <Box>
                    <Link to={`/`} onClick={handleVisitNavLink("Home")}><div className='navbar__flex__box__title'>Harry Potter<span className='navbar__flex__box__title__colored'> fan club</span></div></Link>
                </Box>
                <Spacer/>
                <div className="navbar__flex__stack" >
                    <Link to={`/`} onClick={handleVisitNavLink("Home")}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/' ? 'bold-text' : ''}`} variant='link'>
                            Home
                        </Text>
                    </Link>
                    <Link to={`/houses`} onClick={handleVisitNavLink("Houses")}>
                        <Text className={`navbar__flex__stack__link ${/^\/houses/.test(location.pathname) ? 'bold-text' : ''}`} variant='link'>
                            Houses
                        </Text>
                    </Link>
                    <Link to={`/wizards`} onClick={handleVisitNavLink("Wizards")}>
                        <Text className={`navbar__flex__stack__link ${/^\/wizards/.test(location.pathname) ? 'bold-text' : ''}`} variant='link'>
                            Wizards
                        </Text>
                    </Link>
                    <Link to={`/elixirs`} onClick={handleVisitNavLink("Elixirs")}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/elixirs' ? 'bold-text' : ''}`} variant='link'>
                            Elixirs
                        </Text>
                    </Link>
                    <Link to={`/ingredients`} onClick={handleVisitNavLink("Ingredients")}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/ingredients' ? 'bold-text' : ''}`} variant='link'>
                            Ingredients
                        </Text>
                    </Link>
                    <Link to={`/spells`} onClick={handleVisitNavLink("Spells")}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/spells' ? 'bold-text' : ''}`} variant='link'>
                            Spells
                        </Text>
                    </Link>
                    <Link to={`/feedback`} onClick={handleCombinedClick("Feedback")}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/feedback' ? 'bold-text' : ''}`}>
                            Feedback
                        </Text>
                    </Link>
                </div>
            </Flex>
        </Container>
        </>
    )
}

export default NavBar