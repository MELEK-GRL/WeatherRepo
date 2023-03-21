import winter from '../assets/img/winter.jpg'
import sun from '../assets/img/sun.jpg'
import autumn from '../assets/img/autumn.jpeg'
import spring from '../assets/img/spring.jpg'
import {MdCloudySnowing} from 'react-icons/md'
import {RiSunCloudyFill} from 'react-icons/ri'
import {RiMoonCloudyFill} from 'react-icons/ri'

const imageData=[
    {
        id:1,
        img:winter,
        title:<MdCloudySnowing size={12}/>
    },
    {
        id:2,
        img:sun,
        title:<RiSunCloudyFill size={12}/>
    },
    {
        id:3,
        img:autumn,   
        title:<MdCloudySnowing size={12}/>
    },
    {
        id:4,
        img:spring,
        title:<RiMoonCloudyFill size={12}/>
    },
]

export default imageData