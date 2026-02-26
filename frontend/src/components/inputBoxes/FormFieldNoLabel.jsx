import { AnimatePresence, motion } from "motion/react"

const FormFieldNoLabel = ({children, error,wrapperClass=''}) => {
  return (
    <div className={`w-full1 ${wrapperClass}`}>
        {children}
        <AnimatePresence>
        { error &&
        <motion.p className="text-sm text-red-500"
            initial={{opacity:0, y:-5}}
            animate={{opacity:1, y: 5}}
            exit={{opacity:0, y: -5}}
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