import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

const HomeTemplateBlock = styled.div``;

const HomeTemplate = () => {
  return  <HomeTemplateBlock>
            <Routes>
              <Route path='/account/*' element={<div>계정 관리</div>}>
                <Route path='user' element={<div>유저 관리</div>}></Route>
                <Route path='admin' element={<div>관리자 관리</div>}></Route> 
                <Route path='develop' element={<div>개발자 관리</div>}></Route> 
              </Route> 
              <Route path='/menu/*' element={<div>메뉴 관리</div>}>
                <Route path='user' element={<div>유저 메뉴 관리</div>}></Route>
                <Route path='admin' element={<div>관리자 메뉴 관리</div>}></Route>
                <Route path='develop' element={<div>개발자 메뉴 관리</div>}></Route>
              </Route>
            </Routes>
          </HomeTemplateBlock>;
}

export default HomeTemplate;
