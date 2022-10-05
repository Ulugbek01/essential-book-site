import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    & .word-list__btn {
        width: 120px;
        background: #1DA362;
        padding: 7px;
        border-radius: 5px;
        text-align: center;
        color: white;
        font-weight: bold;
    }

    & .arrow svg {
        fill: #1DA362;
    }

    & .wordlist {
        display: flex;
        align-items: center;
        margin: 20px 0;
    }

    & .wordlist-image {
        width: 120px;
        height: 120px;
        border-radius: 50%;
        margin-right: 20px;
    }
    
    & .wordlist-image img{
        border-radius: 50%;
    }

    & .en-word {
        color: #1da362;
        font-weight: 700;
    }
    
    & .en-pron {
        color: #808080;
        margin-left: 5px;
        margin-right: 15px;
    }

    & .en-exam {
        display: flex;
    }

    & .en-exam .arrow {
        margin-right: 10px;
    }
`;