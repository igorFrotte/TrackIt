import styled from "styled-components";

const Auth = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 70px;

    svg {
        margin-bottom: 30px;
    }
    form {
        width: 300px;
    }
    input {
        margin-bottom: 8px;
    }
    p {
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #52B6FF;
        margin-top: 25px;
    }
    ${props => {
        if(props.disabled === true){
            return `
                input {
                    background: #F2F2F2;
                    color: #AFAFAF;
                }
                button {
                    opacity: 0.7;
                    cursor: initial;
                }
            `; 
        }
    }}
`;

const TemplateButton = styled.button`
    width: ${props => props.width}px;
    height: ${props => props.height}px;
    background: #52B6FF;
    border-radius: 5px;
    font-size: 20px;
    line-height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    cursor: pointer;

    svg {
        margin-top: 30px;
    }
`;

const TemplateInput = styled.input`
    width: 300px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;

    &::placeholder {
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`;

export {Auth, TemplateButton, TemplateInput};