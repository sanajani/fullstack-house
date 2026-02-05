import TitleAndDesc from './TitleAndDesc';
import Location from './Location';
import Details from './Details';
import Amenities from './Amenities';
import Price from './Price';
import AgentInfo from './AgentInfo';
const PropertyInfo = ({dummyProperties}) => {
  return (
    <div className='mt-4 p-2 space-y-6 max-w-6xl mx-auto w-full md:w-[85%]'>

  {/* title section */}
  <TitleAndDesc dummyProperties={dummyProperties}/>

  {/* location */}
  <Location dummyProperties={dummyProperties} />

  {/* details */}
  <Details dummyProperties={dummyProperties}/>

  {/* amenities */}
  <Amenities dummyProperties={dummyProperties}/>


  {/* price */}
  <Price dummyProperties={dummyProperties}/>

  {/* agent */}
  <AgentInfo dummyProperties={dummyProperties} />

</div>
  )
}

export default PropertyInfo