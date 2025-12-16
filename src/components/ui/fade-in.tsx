"use client"

import { motion } from "framer-motion"

interface FadeInProps {
    children: React.ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right"
}

export function FadeIn({ children, className, delay = 0, direction = "up" }: FadeInProps) {
    const directions = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
    }

    return (
        <motion.div
            initial={{
                opacity: 0,
                ...directions[direction]
            }}
            whileInView={{
                opacity: 1,
                x: 0,
                y: 0
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: delay
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInStagger({ children, className, faster = false }: { children: React.ReactNode, className?: string, faster?: boolean }) {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ staggerChildren: faster ? 0.1 : 0.2 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export function FadeInItem({ children, className }: { children: React.ReactNode, className?: string }) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5 }}
            className={className}
        >
            {children}
        </motion.div>
    )
}
