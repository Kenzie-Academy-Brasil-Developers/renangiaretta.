import styled from 'styled-components';


export const StyledProductCard = styled.li`

    display        : flex;
    flex-direction : column;
    justify-content: flex-start;
    width          : 25rem;
    height         : 30rem;
    border         : 0.2rem solid var(--color-grey-100);
    border-radius  : 0.8rem;

    :hover{
        border: 0.2rem solid var(--color-primary);
    }
    .img-container {
        display         : flex;
        justify-content : center;
        align-items     : center;
        width           : 100%;
        height          : 40%;
        background-color: #F5F5F5;
        border-radius   : 0.8rem 0.8rem 0 0;
        
        >img {
            object-fit: contain;
            width     : 100%;
            height    : 100%;
        }
    }
    .texts{
        display       : flex;
        flex-direction: column;
        gap           : 1rem;
        margin        : 1rem 0 1rem 2rem;
        >h1{
            color: var(--color-grey-600);
        }
        >h2{
            font-weight: 400;
            font-size  : 1.2rem;
            line-height: 1.6rem;
            color      : var(--color-grey-300);
        }
        >span{
            font-weight: 600;
            font-size  : 1.4rem;
            line-height: 2.4rem;
            color      : var(--color-primary);
        }
    }
    button{
        width      : 15rem;
        height     : 6rem;
        margin-left: 2rem;
        border-radius   : 8px;
        background-color: #BDBDBD;
        margin-bottom   : 3rem;
        color           : #999999;
        font-weight     : 600;
        font-size       : 1.4rem;
        line-height     : 1.6rem;
        color           : var(--color-grey-0);
        :hover {
            background-color: var(--color-primary);
        }
    }

`