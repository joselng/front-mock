import React from 'react'

import { Container, Content } from './styles'

interface DefaultProps {
    children: React.ReactNode
    icon: string
    title: string
    subTitle?: string
    description: string
}

const Default = ({ children, icon, title, subTitle, description }: DefaultProps) => {
    return (
        <Container>
            <Content>
                <img src={icon} alt="Informações" />
                <span>{title}</span>
                {subTitle && <span>{subTitle}</span>}
                <p>{description}</p>
            </Content>
            {children}
        </Container>
    )
}

export default Default
