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

const BackGroung = styled.div`
    background: #E5E5E5;
    min-height: 100vh;
    width: 100%;
    padding: 100px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const DayBt = styled.button`
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    font-size: 20px;
    line-height: 25px;
    color: #DBDBDB;
    margin: 8px 5px 10px 0;
    ${props => {
        if(props.clicked === true){
            return `
            background: #CFCFCF;
            border: 1px solid #CFCFCF;
            color: #FFFFFF;
            `; 
        }
    }}
    ${props => {
        if(props.disabled !== true){
            return `
            cursor: pointer;
            `;
        }
    }}
`;

export { DayBt, BackGroung, Auth, TemplateButton, TemplateInput};