import Modal from 'react-bootstrap/Modal'

import styles from 'styles/components/_modal.module.scss'
import { MyModalProps } from 'shared/types/my-modal.types'
import classNames from 'classnames'

// use only config props to override default and for additional props of React Modal

function MyModal({ show, size, onHide, fullscreen, className, centered, backdrop, title, children, footer, ...rest }: MyModalProps) {
    return (
        <Modal
            show={show}
            size={size}
            onHide={onHide}
            fullscreen={fullscreen}
            className={classNames({
                [`${styles.modal}`]: true,
                [`${className}`]: className
            })}
            centered={centered}
            backdrop={backdrop}
            dialogClassName={styles['modal-dialog']}
            contentClassName={styles['modal-content']}
            {...rest}
        >
            <Modal.Header className={styles['modal-header']}>
                {title && <Modal.Title className={styles['modal-title']}>{title}</Modal.Title>}
                <button type='button' className={`btn-close ${styles.close}`} aria-label='Close' onClick={onHide}></button>
            </Modal.Header>
            <Modal.Body className={styles['modal-body']}>{children}</Modal.Body>
            <Modal.Footer className={styles['modal-footer']}>{footer}</Modal.Footer>
        </Modal>
    )
}

export default MyModal
