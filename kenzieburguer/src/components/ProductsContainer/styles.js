import styled from "styled-components";


export const StyledProductsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        align-items: center;
    }

    li {
        display: flex;
        flex-direction: column;
        width: 15rem;
        height: 20rem;
        background-color: red;
        .imagem {
        width: 100%;
        height: 30%;
        }
        .texts{
        display: flex;
        flex-direction: column;
        }
    }



`