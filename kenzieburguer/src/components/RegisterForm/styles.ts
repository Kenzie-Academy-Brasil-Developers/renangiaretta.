import styled from 'styled-components';

export const StyledRegisterForm = styled.div`
    @media (max-width: 900) {
            display       : flex;
            flex-direction: column;
            margin: 0 auto;
        }
    margin-top      : 7rem;
    display         : flex;
    justify-content : center;
    align-items     : center;
    flex-direction  : column;
    width           : 50rem;
    padding-top     : 2rem;
    background-color: #FFFFFF;
    border          : 0.2rem solid var(--color-grey-100);
    border-radius   : 0.5rem;
    gap             : 2rem;
    
    div {
        width          : 90%;
        display        : flex;
        justify-content: space-between;
        gap            : 0.5rem;
        >label {
            color: var(--color-grey-600);
            font-weight: 700;
            font-size  : 1.8rem;
            line-height: 2.4rem;
        }
    }
    form {
        display        : flex;
        width          : 90%;
        flex-direction : column;
        justify-content: center;
        align-items    : center;
        gap            : 3rem;
        margin         : 0 auto;
        
        >span {
            display   : flex;
            width     : 70%;
            text-align: center;
        }
        >div{
            display       : flex;
            flex-direction: column;
        }
    }
    input {
        width        : 100%;
        height       : 6rem;
        border       : 2px solid #333333;
        border-radius: 0.5rem;
    }
    a {
        text-decoration: none;
        border-bottom  : 1px solid var(--color-grey-300) ;
        font-weight    : 600;
        font-size      : 1.5rem;
        line-height    : 2.2rem;
        color          : var(--color-grey-600);
    }



`