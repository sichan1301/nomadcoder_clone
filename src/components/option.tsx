import { useState } from 'react';
import styled from 'styled-components';

const Option = () => {

  const [level,setLevel] = useState("");
  const [price,setPrice] = useState("");

  const handleLevelButtonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    setLevel((e.target as HTMLButtonElement).name)
    console.log(level);
  }

  const handlePriceButtonClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    setPrice((e.target as HTMLButtonElement).name)
    console.log(level);
  }
  
  return(
    <OptionArticle>
      <Category>Level</Category>
      <ButtonDiv>
        <Button name="초급" onClick = {handleLevelButtonClick}>초급</Button>
        <Button name="중급" onClick = {handleLevelButtonClick}>중급</Button>
        <Button name="고급" onClick = {handleLevelButtonClick}>고급</Button>
      </ButtonDiv>

      <Category>Price</Category>
      <ButtonDiv>
        <Button name="초급" onClick = {handlePriceButtonClick}>무료</Button>
        <Button name="초급" onClick = {handlePriceButtonClick}>유료</Button>
      </ButtonDiv>
    </OptionArticle>
  )
}

export default Option

const OptionArticle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:50%;
`

const Category = styled.p`
  color:#fff;
  font-size:20px;
  margin:0;
`

const ButtonDiv = styled.div`
  margin:0 0 20px 0; 
`

const Button = styled.button`
  color:black;
  padding:5px 10px;
  font-size:16px;
  font-weight: 600;
  border-radius: 20px;
  background-color: #bbbbbb;
  margin:20px;
  border:none;
  width:70px;
  cursor:pointer;
`