import { Container,Flex, Spacer,Box,Text,Stack } from '@chakra-ui/react'
import { Link, useLocation } from 'react-router-dom';

const NavBar = () => {
    const location = useLocation();

    return (
        <>
        <Container className="navbar__container">
            <Flex>
                <Box>
                    <Link to={`/`}><div className='navbar__flex__box__title'>Harry Potter<span className='navbar__flex__box__title__colored'> fan club</span></div></Link>
                </Box>
                <Spacer/>
                <Stack className="navbar__flex__stack" direction='row' spacing={9} align='end'>
                    <Link to={`/`}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/' ? 'bold-text' : ''}`} variant='link'>
                            Home
                        </Text>
                    </Link>
                    <Link to={`/houses`}>
                        <Text className={`navbar__flex__stack__link ${/^\/houses/.test(location.pathname) ? 'bold-text' : ''}`} variant='link'>
                            Houses
                        </Text>
                    </Link>
                    <Link to={`/wizards`}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/wizards' ? 'bold-text' : ''}`} variant='link'>
                            Wizards
                        </Text>
                    </Link>
                    <Link to={`/elixirs`}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/elixirs' ? 'bold-text' : ''}`} variant='link'>
                            Elixirs
                        </Text>
                    </Link>
                    <Link to={`/ingredients`}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/ingredients' ? 'bold-text' : ''}`} variant='link'>
                            Ingredients
                        </Text>
                    </Link>
                    <Link to={`/spoils`}>
                        <Text className={`navbar__flex__stack__link ${location.pathname === '/spoils' ? 'bold-text' : ''}`} variant='link'>
                            Spoils
                        </Text>
                    </Link>
                    <Link to={`/feedback`}>
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