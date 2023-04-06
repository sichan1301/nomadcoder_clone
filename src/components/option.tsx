import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { OPTION,RootState } from '../store';

const Option = () => {
  const {price,level} = useSelector((state:RootState)=> state)
  const dispatch = useDispatch()

  const handelClick  = (e:React.MouseEvent,a:object) => {
    dispatch(OPTION(a)) 
  }

  const displayLevelButton = level === "" ? "Level" : "x";
  const displayPriceButton = price === "" ? "Price" : "x";

  return(
    <OptionArticle>
      <CategoryButton isFiltered = {level !== ""} onClick ={(e)=>{handelClick(e, {level:''})}}>{displayLevelButton}</CategoryButton>
      <ButtonDiv>
        <Button onClick = {(e)=>{handelClick(e, {level:'초급'})}}>초급</Button>
        <Button onClick = {(e)=>{handelClick(e, {level:'중급'})}}>중급</Button>
        <Button onClick = {(e)=>{handelClick(e, {level:'고급'})}}>고급</Button>
      </ButtonDiv>

      <CategoryButton isFiltered = {price !== ""} onClick ={(e)=>{handelClick(e, {price:''})}} >{displayPriceButton}</CategoryButton>
      <ButtonDiv>
        <Button onClick = {(e)=>{handelClick(e, {price:'무료'})}}>무료</Button>
        <Button onClick = {(e)=>{handelClick(e, {level:'유료'})}}>유료</Button>
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