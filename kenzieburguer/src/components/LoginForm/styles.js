import styled from "styled-components";

export const StyledLoginForm = styled.div `
    @media (max-width: 900) {
        display: flex;
        flex-direction: column;
    }
    margin-top: 7rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50rem;
    height: 55rem;
    background-color: #FFFFFF;
    border: 0.2rem solid var(--color-grey-100);
    border-radius: 0.5rem;
    gap: 2rem;
    div {
        margin-top: 3rem;
        width: 90%;
    }
    form {
        display: flex;
        width: 90%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        margin: 0 auto;
        >span {
            display: flex;
            width: 70%;
            text-align: center;
        }
    }
    input {
        width: 100%;
        height: 6rem;
        border: 2px solid #333333;
        border-radius: 0.5rem;
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 90%;
        height: 6rem;
        border-radius: 8px;
        background-color: var(--color-grey-100);
        margin-bottom: 3rem;
        text-decoration: none;
        color: #999999;
        :hover {
            background-color: var(--color-grey-300);
            color: var(--color-grey-0);
        }
    }

`