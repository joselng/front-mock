import styled from 'styled-components'

export const Overlay = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
    background-color: ${({ theme }) => theme.colors.secondary.blackBlue};
    opacity: 0.6;
`

export const ModalFrame = styled.div<{ width: string }>`
    width: min(90vw, ${(props) => (props.width ? props.width : '800px')});
    max-height: 90vh;
    background-color: ${({ theme }) => theme.colors.greyScale.white};
    border-radius: 6px;
    z-index: 20;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0px 7px 10px rgba(0, 0, 0, 0.16);
    padding: 56px 48px 32px;
    overflow-y: auto;
    box-sizing: border-box;
`

export const CloseModalContainer = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: 0;
`

export const CloseModal = styled.button`
    height: 20px;
    width: 20px;
    padding: 0;
`
