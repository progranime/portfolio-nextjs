export type TimelineProps = {
    items: {
        id: number
        title: string
        subtitle: string
        description?: string
        lists?: string[]
    }[]
    className?: string
}
