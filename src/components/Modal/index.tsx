import React from 'react'

import Close from 'src/assets/close.png'

import { Overlay, ModalFrame, CloseModal, CloseModalContainer } from './style'

interface Props {
    children: React.ReactNode
    isVisible: boolean
    width?: string
    hideCloseButton?: boolean
    toggleModal?: () => void
}

function Modal({ children, isVisible, width, hideCloseButton, toggleModal }: Props) {
    if (!isVisible) return null

    return (
        <>
            <Overlay />
            <ModalFrame width={width}>
                {!hideCloseButton && (
                    <CloseModalContainer>
                        <CloseModal type="button" onClick={toggleModal}>
                            <img src={Close} />
                        </CloseModal>
                    </CloseModalContainer>
                )}

                {children}
            </ModalFrame>
        </>
    )
}

export default Modal
