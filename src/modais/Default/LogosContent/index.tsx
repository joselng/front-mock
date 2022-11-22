import React from 'react'

import arrowDown from 'src/assets/icons/icon-strong-arrow-down.svg'
import logo from 'src/assets/logo.svg'

import { Container, TextBetweenLogos } from './styles'

const LogosContent = () => {
    return (
        <Container>
            <img src={logo} alt="Mapfre" />
            <TextBetweenLogos>
                <img src={arrowDown} alt="Seta para baixo" />
                <span>Estamos lhe redirecionando para o ambiente da instituição selecionada.</span>
            </TextBetweenLogos>
            <img src={logo} alt="Porto" />
        </Container>
    )
}

export default LogosContent
