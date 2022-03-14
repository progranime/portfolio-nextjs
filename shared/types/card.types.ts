export type CardProps = {
    image?: string
    title?: string
    subtitle?: string
    description?: string
    className?: string
    link?: {
        href: string
        target?: string
    }
    icon?: any
    children?: React.ReactNode
}
