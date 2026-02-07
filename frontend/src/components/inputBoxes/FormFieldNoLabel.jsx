import { AnimatePresence, motion } from "motion/react"

const FormFieldNoLabel = ({children, error,className=''}) => {
  return (
    <div className={`w-full1 ${className}`}>
        {children}
        <AnimatePresence>
        { error &&
        <motion.p
            initial={{opacity:0, y:-5}}
            animate={{opacity:1, y: 5}}
            exit={{opacity0, y: -5}}
            transition={{duration: 0.2}}
        >
            {error.message}
        </motion.p>
        }
        </AnimatePresence>
    </div>
  )
}

export default FormFieldNoLabel