import styled from 'styled-components';


export const StyledProductsContainer = styled.div`
    @media (max-width: 900px) {
        ul {
            /* margin: 0 auto; */
            justify-content: center;

        }
    }
    display        : flex;
    flex-wrap      : wrap;
    align-items    : center;
    justify-content: center;
    width          : 90%;
    ul {
        display    : flex;
        width      : 100%;
        flex-wrap  : wrap;
        gap        : 5.4rem;
        align-items: center;
        margin-top : 3rem;
    }

`