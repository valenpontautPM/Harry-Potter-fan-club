//This component is the loader while we wait for data to load

import { AbsoluteCenter } from "@chakra-ui/react"
import loading from '../img/witch_on_broom.gif'

const Loading = () => {
  return(
    <AbsoluteCenter>
      <img src={loading} alt='loading...'/>
    </AbsoluteCenter>
  )
}

export default Loading