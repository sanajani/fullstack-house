import { AnimatePresence, motion } from "motion/react"

const FormField = ({label, error, children, lableStyle="", className=''}) => {
  return (
    <div className={`${className}`}>
        <label className={`mb-1 text-sm font-medium block ${lableStyle}`}>{label}</label>
        {children}
        <div className='h-4'>
            <AnimatePresence>
                {error && <motion.p className="mt-1 text-[10px] md:text-sm text-red-600"
                    initial={{opacity: 0, y: -5}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -5}}
                    transition={{duration: 0.2}}
                >{error.message}</motion.p>}
            </AnimatePresence>
        </div>
    </div>
  )
}

export default FormField