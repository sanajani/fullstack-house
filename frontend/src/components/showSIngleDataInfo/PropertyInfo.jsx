import TitleAndDesc from './TitleAndDesc';
import Location from './Location';
import Details from './Details';
import Amenities from './Amenities';
import Price from './Price';
import AgentInfo from './AgentInfo';
const PropertyInfo = ({showSingleProperty}) => {
  return (
    <div className='mt-4 p-2 space-y-6 max-w-6xl mx-auto w-full md:w-[85%]'>

  {/* title section */}
  <TitleAndDesc showSingleProperty={showSingleProperty}/>

  {/* location */}
  <Location showSingleProperty={showSingleProperty} />

  {/* details */}
  <Details showSingleProperty={showSingleProperty}/>

  {/* amenities */}
  <Amenities showSingleProperty={showSingleProperty}/>


  {/* price */}
  <Price showSingleProperty={showSingleProperty}/>

  {/* agent */}
  <AgentInfo showSingleProperty={showSingleProperty} />

</div>
  )
}

export default PropertyInfo