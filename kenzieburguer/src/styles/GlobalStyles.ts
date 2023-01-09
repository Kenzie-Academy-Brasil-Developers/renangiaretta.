import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root{
    --color-primary    : #27AE60;
    --color-secondary  : #EB5757;
    --color-grey-0     : #F5F5F5;
    --color-grey-100   : #E0E0E0;
    --color-grey-300   : #828282;
    --color-grey-600   : #333333;
    --color-success    : #168821;
    --color-negative   : #E60000;
    --color-warning    : #FFCD07;
    --color-information: #155BCB;
    font-size          : 62.5%;
}
        
    @media (max-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

    * {
        margin    : 0;
        padding   : 0;
        outline   : 0;
        box-sizing: border-box;
    }

    body, html {
        justify-content: center;
        width          : 100vw;
        height         : 100vh;
    }

    body {
        font-size: 1.6rem;
    }

    h1, h2, h3, h4, h5, h6, p, strong, label {
        font-family: 'Inter', sans-serif;
        color      : white;
    }
    ul {
        list-style: none;
    }
    button {
        cursor: pointer;
        border: none;
    }

    .title1 {
        font-weight: 700;
        font-size  : 1.8rem;
        line-height: 2.4rem;
    }
    .title2 {
        font-weight: 600;
        font-size  : 1.6rem;
        color      : var(--color-grey-0);
        line-height: 2.8rem;
    }
    .title3 {
        font-weight: 400;
        font-size  : 1.2rem;
        line-height: 2.2rem;
        color      : var(--color-grey-1);
    }
    .title4 {
        font-weight: 600;
        font-size  : 1.6rem;
        line-height: 2.8rem;
    }
    .title5 {
        font-weight: 500;
        font-size  : 1.4rem;
        line-height: 2.2rem;
        
    }
    .error{
        color: red;
    }
    .placeholder-text {
        padding-left: 1.5rem;
        font-weight : 400;
        font-size   : 1.6rem;
        line-height : 1.9rem;
    }
    .buttonText {
        font-weight: 500;
        font-size  : 1.6rem;
        line-height: 2.639rem;
    }
`