import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { PRICE,LEVEL,RootState } from '../store';

const Option = () => {
  const {price,level} = useSelector((state:RootState)=> state)
  const dispatch = useDispatch()

  const handleLevelButtonClick = (e:React.MouseEvent) => {
    dispatch(LEVEL((e.target as HTMLButtonElement).name)) 
  }

  const handlePriceButtonClick = (e:React.MouseEvent) => {
    dispatch(PRICE((e.target as HTMLButtonElement).name))
  }
  
  const handleLevelCategoryButtonClick = () => {
    dispatch(LEVEL(undefined))
  }

  const handlePriceCategoryButtonClick = () => {
    dispatch(PRICE(undefined))
  }
  
  const displayLevelButton = level === undefined ? "Level" : "x";
  const displayPriceButton = price === undefined ? "Price" : "x";

  return(
    <OptionArticle>
      <CategoryButton isFiltered = {level !== undefined} onClick ={handleLevelCategoryButtonClick}>{displayLevelButton}</CategoryButton>
      <ButtonDiv>
        <Button name="초급" onClick = {handleLevelButtonClick}>초급</Button>
        <Button name="중급" onClick = {handleLevelButtonClick}>중급</Button>
        <Button name="고급" onClick = {handleLevelButtonClick}>고급</Button>
      </ButtonDiv>

      <CategoryButton isFiltered = {price !== undefined} onClick ={handlePriceCategoryButtonClick} >{displayPriceButton}</CategoryButton>
      <ButtonDiv>
        <Button name="무료" onClick = {handlePriceButtonClick}>무료</Button>
        <Button name="유료" onClick = {handlePriceButtonClick}>유료</Button>
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

type CategoryButtonProps = {
  isFiltered : boolean
}
const CategoryButton = styled.button<CategoryButtonProps>`
  border-radius:${props => props.isFiltered ? `50%`:`0`};
  background-color:${props => props.isFiltered ? `#fff`:`transparent`};
  color:${props => props.isFiltered ? `black`:`#fff`};
  border:none;
  cursor:pointer;
  font-size:20px;
  margin:0;
`

const ButtonDiv = styled.div`
  margin:0 0 20px 0; 
`

type ButtonProps = {
  name:string
}

const Button = styled.button<ButtonProps>`
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