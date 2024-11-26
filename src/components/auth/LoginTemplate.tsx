import styled from 'styled-components';
import CommonComponents from '../common/CommonComponents';

const LoginTemplateBlock = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(30, 30, 30, 0.9);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    color: white;
  }
  input {
    margin-top: 10px;
  }
`;

const LoginTemplate = () => {
  return <LoginTemplateBlock>
          <h1>ADMIN</h1>
          <CommonComponents.Input placeholder='ID'/>
          <CommonComponents.Input placeholder='PW'/>
        </LoginTemplateBlock>;
}

export default LoginTemplate;
