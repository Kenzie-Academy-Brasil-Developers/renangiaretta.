import styled from 'styled-components'

export const StyledCartModal = styled.div`       
    width           : 100%;
    height          : 100%;
    display         : flex;
    justify-content : center;
    align-items     : center;
    position        : fixed;
    top             : 0;
    left            : 0;
    z-index         : 10;
    background-color: rgba(0, 0, 0, 0.5);

    .modalContainer {
        width           : 50rem;
        min-height      : 26rem;
        background-color: var(--color-grey-0);
        border-radius   : 0.5rem;
        display         : flex;
        flex-direction  : column;
        justify-content : space-between;
    }
    .modal-header {
        width           : 100%;
        height          : 5.4rem;
        padding         : 1.3rem 2.2rem 1.3rem 2.2rem;
        display         : flex;
        justify-content : space-between;
        align-items     : center;
        color           : var(--color-grey-0);
        background-color: var(--color-primary);
        border-radius   : 0.5rem 0.5rem 0 0;
        >h4{
            font-weight: 700;
            font-size  : 1.8rem;
            line-height: 2.8rem;
            color      : var(--color-grey-0);
        }
        .close-btn {
            background-color: var(--color-primary);
            color: var(--color-grey-0);
            font-weight: 700;
            font-size: 2rem;
        }
    }
    ul {
        display       : flex;
        flex-direction: column;
        width         : 100%;
        overflow-y    : scroll;
        height        : 30rem;
        >li{
            width      : 100%;
            padding    : 1rem 0 1rem 2rem;
            display    : flex;
            align-items: center;
            gap        : 3rem;
            >img{
                background-color: var(--color-grey-100);
                border-radius   : 0.5rem;
                width           : 7rem;
        }
        h3 {
            color: var(--color-grey-600);
        }
        .product-interactions-container {
            display       : flex;
            flex-direction: column;
            gap           : 1rem;

        }
        .counter-container {
            display        : flex;
            align-items    : center;
            justify-content: space-between;
            gap            : 1.8rem;
            border         : 0.2rem solid var(--color-grey-100);
            border-radius  : 0.5rem;
            width          : 12rem;
            >span {
                font-weight: 700;
                font-size  : 2rem;
            }
            >button{
                width           : 2.8rem;
                height          : 2.8rem;
                color           : var(--color-negative);
                font-weight     : 800;
                font-size       : 2rem;
                background-color: var(--color-grey-100);
            }
        }
        
    }
    }
    .total-price {
        display        : flex;
        align-items    : center;
        justify-content: space-between;
        width          : 100%;
        height         : 6rem;
        border-top: 0.2rem solid var(--color-grey-100);
        padding   : 2rem;
        >h2 {
            font-weight: 700;
            font-size  : 2rem;
            color      : var(--color-grey-600);
        }
        >span {
            font-weight: 700;
            font-size  : 2rem;
            color      : var(--color-grey-300);
        }
        >button {
            
        }
    }
`
