import styled from 'styled-components';


export const StyledButtonPrimary = styled.button`

        width           : 90%;
        height          : 6rem;
        border-radius   : 8px;
        background-color: var(--color-primary);
        color           : #FFFFFF;
        :hover {
                background-color: #93D7AF;
        }

        `
        export const StyledButtonSecondary = styled.button`
        width           : 100%;
        padding         : 0 2rem;
        height          : 6rem;
        border-radius   : 8px;
        background-color: var(--color-grey-100);
        margin-bottom   : 3rem;
        color           : #999999;
        :hover {
                background-color: var(--color-grey-300);
                color           : var(--color-grey-0);
        }

        `