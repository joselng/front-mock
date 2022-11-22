import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.secondary.light02};

    padding: 2rem 0;
`

export const TextBetweenLogos = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 32px 0;
    padding: 0.5rem 0;

    background: ${({ theme }) => theme.colors.statuses.informativeBackground};

    img {
        width: 1.5rem;
        height: 1.5rem;
    }

    span {
        width: 280px;
        color: ${({ theme }) => theme.colors.statuses.informative};
    }
`
