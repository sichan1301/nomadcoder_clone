import { courseType, levelType } from "../dummyData/dataType"
import styled from 'styled-components';

type ItemPropsType = {
  item:courseType
}

const Item = ({item}:ItemPropsType) => {

  const imgSrc = item.price === "유료" ? "cost.jpg" : "free.jpg"
  
  return(
    <ItemArticle>
      <ImgDiv>
        <a href = {item.link}>
          <Img src ={require(`../../public/img/${imgSrc}`)}  />

          <ItemDiv>
            <Title>{item.title}</Title>
            <SubTitle>{item.subTitle}</SubTitle>
          </ItemDiv>

          <ItemLevel level={item.level}>{item.level}</ItemLevel>
        </a>
      </ImgDiv>
    </ItemArticle>
  )
}


export default Item 

const ItemArticle = styled.article`
  width:31%;
`

const ImgDiv = styled.div`
  position:relative;
  width:100%;
  height:230px;
  margin-bottom:80px;
  cursor:pointer;
`

const Img = styled.img`
  width:100%;
  height:100%;
  border-radius:20px;
`

const ItemDiv = styled.div`
  position:absolute;
  bottom:0;
  left:50%;
  transform:translate(-50%,50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:80%;
  margin:0 auto;
  background-color:#1b222c;
  border-radius:20px;
  padding:20px;
`

const Title = styled.p`
  font-size : 20px;
  color:#fff;
  margin:0 0 10px 0;
`

const SubTitle = styled.p`
  color:#fff;
  font-size: 16px;
  margin:0;
`

type ItemLevelProps = {
  level:levelType
}

const ItemLevel = styled.p<ItemLevelProps>`
  position:absolute;
  top:5px;
  left:15px;
  font-size: 20px;
  padding:5px 10px;
  font-weight: 900;
  border-radius: 20px;
  background-color:${props => {
    switch(props.level) {
      case "초급":
        return `rgb(251, 251, 231)`;
      case "중급":
        return `rgb(230, 250, 236)`;
      case "고급":
        return `rgb(249, 224, 253)`;
    }
  }};

  color:${props => {
    switch(props.level) {
      case "초급":
        return `rgb(172, 169, 0)`;
      case "중급":
        return `rgb(3, 210, 51)`;
      case "고급":
        return `rgb(201, 6, 231)`;
    }
  }}
`