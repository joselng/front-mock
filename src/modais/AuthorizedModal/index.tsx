import React from 'react'

import iconCheck from 'src/assets/icons/icon-check.svg'
import Modal from 'src/components/Modal'

import Default from '../Default'
import LogosContent from '../Default/LogosContent'

interface AuthorizedModalProps {
    isVisible: boolean
    text: string
}

const AuthorizedModal = ({ isVisible, text }: AuthorizedModalProps) => {
    return (
        <Modal isVisible={isVisible} hideCloseButton>
            <Default
                icon={iconCheck}
                title={text.charAt(0).toLocaleUpperCase() + text.substring(1)}
                subTitle="Open Insurance"
                description={`Você ${text} o compatilhamento de dados.`}
            >
                <LogosContent />
            </Default>
        </Modal>
    )
}

export default AuthorizedModal
