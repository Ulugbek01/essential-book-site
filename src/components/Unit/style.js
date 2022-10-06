import styled from "styled-components";

export const Container = styled.div`
    max-width: 1280px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 80px;

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

export const Navbar = styled.nav`
    width: 100%;
    padding: 10px 0;
    position: fixed;
    left: 0;
    top: 0;
    background-color: #fff;
    padding-left: 5px;

    & .title {
        font-size: 22px;
        margin-left: 15px;
    }
`;

