import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 24px;

    > img {
        height: 3rem;
        width: 3rem;
    }

    span:nth-child(2) {
        margin: 2rem 0 0.5rem;

        font-weight: 500;
        font-size: 1.6rem;
        line-height: 36px;
        text-align: center;

        color: ${({ theme }) => theme.colors.secondary.blackBlue};
    }

    span:nth-child(3) {
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 28px;
        text-align: center;

        color: ${({ theme }) => theme.colors.secondary.darkBlue};
    }

    p {
        font-weight: 400;
        font-size: 1rem;
        line-height: 21px;
        text-align: center;

        color: ${({ theme }) => theme.colors.secondary.darkBlue};
        margin-top: 32px;
    }
`
