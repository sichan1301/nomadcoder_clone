import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { tech } from '../dummyData/data';
import { RootState, TECH, FILTER } from '../store';

const Tech = () => {
  const state = useSelector((state:RootState)=> state)
  const dispatch = useDispatch()

  const handleClick = (tech?:string) =>{
    tech !== undefined ? dispatch(TECH(tech)) : dispatch(TECH(undefined))
    dispatch(FILTER())
  }

  const displayTechButton = state.tech === undefined ? "Tech" : "x";

  return(
    <TechArticle>
      <Title onClick={() => handleClick()} isFiltered={state.tech !== undefined}>{displayTechButton}</Title>
      <TechDiv>
        {tech.map(tech => <TechButton onClick={()=>handleClick(tech)}>{tech}</TechButton>)}
      </TechDiv>
    </TechArticle>
  )
}

export default Tech

const TechArticle = styled.article`
  width:60%;
`
type TitleProps = {
  isFiltered : boolean
}

const Title = styled.p<TitleProps>`
  border-radius:${props => props.isFiltered ? `50%`:`0`};
  background-color:${props => props.isFiltered ? `#fff`:`transparent`};
  color:${props => props.isFiltered ? `black`:`#fff`};
  border:none;
  font-size:20px;
  width:30px;
  height:30px;
  cursor:pointer;
  margin:20px auto;
  text-align:center;
`

const TechDiv = styled.div`
  display:flex;
  justify-content:center;
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