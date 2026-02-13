import DropzoneUI from "./DropZoneUI"
import { Controller } from "react-hook-form"

const DropZone = ({ control, errors }) => {
  return (
    <Controller
        name="media"
        control={control}
        render={({field}) => {
            return <DropzoneUI field={field} errors={errors} />
        }}
    />
  )
}

export default DropZone