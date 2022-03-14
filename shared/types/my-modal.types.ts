// use pascal case for component props
export type MyModalProps = {
    show: boolean
    onHide: () => void
    children: React.ReactNode
    size?: 'sm' | 'lg' | 'xl'
    fullscreen?: true | 'sm-down' | 'md-down' | 'lg-down' | 'xl-down' | 'xxl-down'
    className?: string
    centered?: boolean
    backdrop?: 'static' | true | false
    title?: string
    footer?: React.ReactNode
}
