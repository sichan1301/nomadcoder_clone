import './App.css';
import styled from 'styled-components';
import ItemList from './components/itemList';
import Option from './components/option';
import Tech from './components/tech';

function App() {
  
  return (
    <Main>
      <Inner>
        <Title>All Courses</Title>
        <SubTitle>초급부터 고급까지! <br />니꼬쌤과 함께 풀스택으로 성장하세요!</SubTitle>
        <SelectSection>
          <Option />
          <Tech />
        </SelectSection>
        <ItemList />
      </Inner>
    </Main>
  );
}

export default App;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height:100%;
  background-color: #222c3b;
`

const Inner = styled.div`
  width:75%;
  margin:0 auto;
`

const SelectSection = styled.section`
  display: flex;
  margin-bottom:50px;
`

const Title = styled.p`
  color:#fff;
  margin:150px 0 10px 0;
  font-size:50px;
  font-weight: 700;
  text-align: center;
`
const SubTitle = styled.p`
  color:#fff;
  margin:0;
  font-size:20px;
  text-align: center;
`;

