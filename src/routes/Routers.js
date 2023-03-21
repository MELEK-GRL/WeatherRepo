import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../page/home/Home'


export default function Routers() {
  return (
  <Routes>
    <Route path='/' element={<Navigate to='/WeatherRepo'/>}/>
    <Route path='/WeatherRepo' element={<Home/>}/>
  </Routes>
  )
}
