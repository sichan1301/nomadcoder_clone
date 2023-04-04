import { courseType } from "../dummyData/dataType"
import styled from 'styled-components';

type ItemPropsType = {
  item:courseType
}

const Item = ({item}:ItemPropsType) => {

  const imgSrc = item.price=== "유료" ? "cost.jpg" : "free.jpg"
  return(
    <ItemArticle>
      <ImgDiv>
        <Img src ={require(`../../public/img/${imgSrc}`)}  />
      </ImgDiv>

      <ItemDiv>
        <Title>{item.title}</Title>
        <SubTitle>{item.subTitle}</SubTitle>
      </ItemDiv>
    </ItemArticle>
  )
}


export default Item 

const ItemArticle = styled.article`
  width:30%;
`

const ImgDiv = styled.div`
  width:100%;
  height:250px;
`

const Img = styled.img`
  width:100%;
  height:100%;
  border-radius:20px;
`

const ItemDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width:90%;
`

const Title = styled.p`
  font-size : 20px;
  color:#fff;
`

const SubTitle = styled.p`
  color:#fff;
  font-size: 16px;
`