import PropTypes from 'prop-types'
import { Card,Flex,Text,Image,UnorderedList,ListItem } from '@chakra-ui/react'

const HouseDetail = ({name,houseColours,founder,animal,element,ghost,commonRoom,heads,traits,color_cod,img}) => {
    return(
        <>
        <div className='houseDetail'>
            <Flex className='houseDetail__container' bg={color_cod}>
                <Card className='houseDetail__container__card1'>
                    <Text color={color_cod} className='houseDetail__container__card1__title'>{name.toUpperCase()}</Text>
                    <Text color={color_cod} className='houseDetail__container__card1__text'>House color: <span className='houseDetail__container__card1__text_black'>{houseColours}</span></Text>
                    <Text color={color_cod} className='houseDetail__container__card1__text'>Founder:  <span className='houseDetail__container__card1__text_black'>{founder}</span></Text>
                    <Text color={color_cod} className='houseDetail__container__card1__text'>Animal: <span className='houseDetail__container__card1__text_black'>{animal}</span></Text>
                    <Text color={color_cod} className='houseDetail__container__card1__text'>Element: <span className='houseDetail__container__card1__text_black'>{element}</span></Text>
                    <Text color={color_cod} className='houseDetail__container__card1__text'>Ghost: <span className='houseDetail__container__card1__text_black'>{ghost}</span></Text>
                    <Text color={color_cod} className='houseDetail__container__card1__text'>Common Room: <span className='houseDetail__container__card1__text_black'>{commonRoom}</span></Text>
                    <Image className='houseDetail__container__card1__image' src={img}/>
                </Card>
                <Card className='houseDetail__container__card2'>
                    <div>
                        <Text color={color_cod} className='houseDetail__container__card2__text1'>Traits:</Text>
                        <UnorderedList>
                            {traits?.map((trait)=>
                                <ListItem color={color_cod} className='houseDetail__container__card2__ul__li' key={trait.id}><span className="houseDetail__container__card1__text_black">{trait.name}</span></ListItem>
                            )}
                        </UnorderedList>
                    </div>
                    <div>
                        <Text color={color_cod} className='houseDetail__container__card2__text2'>Heads:</Text>
                        <UnorderedList>
                            {heads?.map((head)=>
                                <ListItem color={color_cod} className='houseDetail__container__card2__ul__li' key={head.id}><span className='houseDetail__container__card1__text_black'>{head.firstName} {head.lastName}</span></ListItem>
                            )}
                        </UnorderedList>
                    </div>
                </Card>
            </Flex>
        </div>
        </>
    )
}
HouseDetail.propTypes = {
    name: PropTypes.string.isRequired,
    houseColours: PropTypes.string.isRequired,
    founder: PropTypes.string.isRequired,
    animal: PropTypes.string.isRequired,
    element: PropTypes.string.isRequired,
    ghost: PropTypes.string.isRequired,
    commonRoom: PropTypes.string.isRequired,
    heads: PropTypes.array.isRequired,
    traits: PropTypes.array.isRequired,
    color_cod: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
};
export default HouseDetail