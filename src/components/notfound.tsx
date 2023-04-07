import { useDispatch } from "react-redux"
import styled from "styled-components"
import { FILTER } from "../store"


const NotFound = () => {

  const dispatch = useDispatch()

  const handleClick = () =>{
    dispatch(FILTER({price:"",level:"",tech:""}))
  }

  return (
    <NotFoundSection>
     <MainBox>
        <Title>there is no Course</Title>
        <SubTitle>There are no courses with your filter criteria</SubTitle>
        <ClearButton onClick = {handleClick}>Clear all filters</ClearButton>
      </MainBox> 
    </NotFoundSection>
  )
}


export default NotFound

const NotFoundSection = styled.section`
  width:100%;
  height:100vh;  
`

const MainBox = styled.div`
  background-color:#4d545f;
  padding:20px;
  border-radius:15px;
  width:100%;
`

const Title = styled.p`
  font-size:20px;
  margin: 0 0 15px;
  color:#fff;
`

const SubTitle = styled(Title)`
  font-size:16px;
`

const ClearButton = styled.button`
  border:none;
  padding:10px;
  border-radius:10px;
  cursor:pointer;
`
