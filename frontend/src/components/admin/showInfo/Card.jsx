import CardBody from "./CardBody"
import CardButtons from "./CardButtons"
import CardHeader from "./CardHeader"

const Card = ({cardItem}) => {
  return (
    <div className="rounded-lg p-3 shadow-2xl">
        <CardHeader name={cardItem.name} email={cardItem.email} />
        <CardBody info={cardItem.info} />
        <CardButtons/>
    </div>
  )
}

export default Card