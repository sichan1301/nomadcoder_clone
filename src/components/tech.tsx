import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { tech } from '../dummyData/data';
import { TECH } from '../store';

const Tech = () => {
  const dispatch = useDispatch()
  const handleTechClick = (tech:string) => {
    dispatch(TECH(tech))
  }

  return(
    <TechArticle>
      <Title>Tech</Title>
      <TechDiv>
        {tech.map(tech => <TechButton onClick={()=>handleTechClick(tech)}>{tech}</TechButton>)}
      </TechDiv>
    </TechArticle>
  )
}

export default Tech

const TechArticle = styled.article`
  width:60%;
`

const Title = styled.p`
  text-align: center;
  font-size:20px;
  color:#fff;
`

const TechDiv = styled.div`
  display:flex;
  flex-wrap:wrap;
`

const TechButton = styled.button`
  border:none;
  background-color: #fff;
  padding:0;
  font-size:12px;
  border:1px solid grey;
  margin:5px;
  border-radius: 50%;
  width:80px;
  height:80px;
  cursor:pointer;
`