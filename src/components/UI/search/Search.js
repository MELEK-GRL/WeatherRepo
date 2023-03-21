import Jump from 'react-reveal/Jump';
import Zoom from 'react-reveal/Zoom';

export default function Search({setSearch,searchPressed}) {
  return (
    <Jump>
   <div className="flex w-full shadow-xl p-2">
     <div className='w-full h-fit flex border rounded-md p-[5px]'>
    <input
      type="text"
      placeholder="Search.."
      className='w-full text-[15px] px-1 font-semibold  text-gray-500 focus:outline-none'
      onChange={(e) => setSearch(e.target.value)}
    />
    <Zoom>
    <button className='buttons text-[14px] ' onClick={searchPressed}>Search</button>
    </Zoom>
  </div>
   </div>
   </Jump>
  )
}
