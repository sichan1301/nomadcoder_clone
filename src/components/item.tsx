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
        <ItemDiv>
          <Title>{item.title}</Title>
          <SubTitle>{item.subTitle}</SubTitle>
        </ItemDiv>
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