import { Container,Flex, Spacer,Box,Text,Stack } from '@chakra-ui/react'
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
    return (
        <>
        <Container className="navbar__container">
            <Flex>
                <Box>
                    <Link to={`/`} onClick={handleVisitNavLink("Home")}><div className='navbar__flex__box__title'>Harry Potter<span className='navbar__flex__box__title__colored'> fan club</span></div></Link>
                </Box>
                <Spacer/>
                <Stack className="navbar__flex__stack" direction='row' spacing={9} align='end'>
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
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/wizards' ? 'bold-text' : ''}`} variant='link'>
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
                    <Link to={`/spoils`} onClick={handleVisitNavLink("Spoils")}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/spoils' ? 'bold-text' : ''}`} variant='link'>
                            Spoils
                        </Text>
                    </Link>
                    <Link to={`/feedback`} onClick={handleVisitNavLink("Feedback")}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/feedback' ? 'bold-text' : ''}`}>
                            Feedback
                        </Text>
                    </Link>
                </Stack>
            </Flex>
        </Container>
        </>
    )
}

export default NavBar