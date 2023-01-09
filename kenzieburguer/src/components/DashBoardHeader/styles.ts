import styled from 'styled-components';


export const StyledDashBoardHeader = styled.div`

@media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10rem;
    width: 100%;

    .header-container {
        flex-direction: column;
        height: auto;
        .placeholder-text{
            width: auto;
            height: 4.5rem;
            margin-top: 0.5rem;
        }
    }
    }
    display: flex; 
    justify-content: center;
    align-items: center;
    width: 100%; 
    height: 8rem;
    background-color: #F5F5F5;
    .header-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 90%;
        >img{
            width: 12rem;
            height: 3rem;
        }
        input{
            width: 36.5rem;
            height: 6rem;
            border: 0.2rem solid var(--color-grey-100);
            border-radius: 0.8rem;
        }
        .user-interactions-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 2rem;
        }
    }
    
`