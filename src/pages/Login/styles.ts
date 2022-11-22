import background from 'src/assets/login-background.jpg'
import styled from 'styled-components'

export const LoginBackground = styled.div`
    width: 100vw;
    height: 100vh;

    background: url(${background}) center no-repeat;
    background-size: cover;

    display: flex;
    align-items: center;

    overflow: auto;
    box-sizing: border-box;
    padding: 2rem 0;

    @media (max-width: 767px) {
        padding: 1rem 0;
    }
`

export const LoginContainer = styled.div`
    border-radius: 8px;
    width: min(90%, 800px);
    margin: auto;
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.16);
    background-color: ${({ theme }) => theme.colors.greyScale.white};
    box-sizing: border-box;
    padding: 3.5rem 3rem 2rem;

    @media (max-width: 767px) {
        padding: 2rem 1.5rem 1.5rem;
    }
`

export const Logo = styled.img`
    width: min(60%, 256px);
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    width: min(100%, 450px);
    margin: 0 auto;
`
