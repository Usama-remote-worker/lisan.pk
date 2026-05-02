"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
    children: ReactNode
    width?: "fit-content" | "100%"
    delay?: number
}

export const ScrollReveal = ({ children, width = "100%", delay = 0 }: ScrollRevealProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ 
                duration: 0.8, 
                delay: delay,
                ease: [0.16, 1, 0.3, 1] as any 
            }}
            style={{ width }}
        >
            {children}
        </motion.div>
    )
}
