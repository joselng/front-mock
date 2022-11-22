import React from 'react'

import { Button, Divider, FlexContainer } from '@mapfre/reactjs-ui-components'
import warningIcon from 'src/assets/icons/icon-warning.svg'
import Modal from 'src/components/Modal'

import Default from '../Default'
import { DataContainer, DateContainer } from './styles'

const registrationData = [
    'Identificação',
    'Qualificação',
    'Poderes dos representantes',
    'Tipo de produtos e/ou serviço do contrato vigente',
]

const productData = [
    'Dados da Apólice',
    'Dados de Movimentação de Prêmio',
    'Dados de Movimentação de Sinistro',
    'Dados de Endeosso',
]

interface AuthorizeDataModalProps {
    isVisible: boolean
    toggleModal: (open: boolean) => void
    handleAccept: (e) => void
}

const AuthorizeDataModal = ({ isVisible, toggleModal, handleAccept }: AuthorizeDataModalProps) => {
    const handleAuthorizeDataModal = (e) => {
        toggleModal(false)
        handleAccept(e)
    }

    return (
        <Modal isVisible={isVisible} toggleModal={() => toggleModal(false)}>
            <Default
                icon={warningIcon}
                title="Atenção"
                subTitle="Solicitação de Compartilhamento de dados Open Insurance"
                description={`Identificamos que foi solicitado um compartilhamento 
            de dados em seu CPF/CNPJ referente ao Seguro de Automóveis pela 
            empresa Porto Seguro Serviço de Seguros Gerais.`}
            >
                <Divider />

                <DataContainer>
                    <div>
                        <span>Dados cadastrais</span>
                        <ul>
                            {registrationData.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <span>Dados do produto</span>
                        <ul>
                            {productData.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </DataContainer>

                <Divider />

                <DateContainer>
                    <div>
                        <span>Data de Início do Compartilhamento</span>
                        <span>04/07/2022</span>
                    </div>
                    <div>
                        <span>Prazo de Compartilhamento</span>
                        <span>6 meses</span>
                    </div>
                </DateContainer>

                <Divider />

                <FlexContainer alignItems="center" justifyContent="center" gap={1} marginTop={2}>
                    <Button secondary label="Recusar o compartilhamento" onClick={(e) => handleAuthorizeDataModal(e)} />
                    <Button label="Autorizar compartilhamento" onClick={(e) => handleAuthorizeDataModal(e)} />
                </FlexContainer>
            </Default>
        </Modal>
    )
}

export default AuthorizeDataModal
