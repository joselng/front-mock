import styled from 'styled-components'

export const DataContainer = styled.div`
    display: flex;
    gap: 32px;
    margin: 32px 0;

    > div {
        flex: 1;
        ul {
            margin-left: 24px;
        }

        span,
        li {
            font-weight: 400;
            font-size: 1rem;
            line-height: 21px;

            color: ${({ theme }) => theme.colors.secondary.darkBlue};
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
    }
`

export const DateContainer = styled.div`
    display: flex;
    gap: 32px;
    margin: 32px 0;

    > div {
        display: flex;
        flex-direction: column;

        span:first-child {
            font-weight: 400;
            font-size: 0.9rem;
            line-height: 18px;
            margin-bottom: 8px;

            color: ${({ theme }) => theme.colors.secondary.darkBlue};
        }

        span:last-child {
            font-weight: 400;
            font-size: 1rem;
            line-height: 24px;

            color: ${({ theme }) => theme.colors.secondary.blackBlue};
        }
    }

    @media (max-width: 720px) {
        flex-direction: column;
    }
`
