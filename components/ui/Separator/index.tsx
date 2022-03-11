import { SeparatorProps } from 'shared/types/separator.types'

import styles from 'styles/components/_separator.module.scss'

function Separator({ children }: SeparatorProps) {
    return <div className={styles.separator}>{children}</div>
}

export default Separator
