
import FormFieldNoLabel from "./FormFieldNoLabel";
const baseStyle = "border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500";

const InputField = ({
    as = 'input',
    error,
    name,
    register,
    wrapperClass='',
    children,
    className='',
    ...props
}) => {
    const Component = as;
  return (
    <FormFieldNoLabel error={error} wrapperClass={wrapperClass}>
        <Component 
        className={`${baseStyle} ${className}`}
        {...(register && name ? register(name) : {})}
        {...props}
        >
          {children}
        </Component>
    </FormFieldNoLabel>
  )
}

export default InputField;
