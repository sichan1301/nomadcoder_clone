import styled from 'styled-components';

const Option = () => {

  const handleClick = () => {
    
  }

  return(
    <OptionArticle>
      <Category>Level</Category>
      <ButtonDiv>
        <Button>초급</Button>
        <Button>중급</Button>
        <Button>고급</Button>
      </ButtonDiv>

      <Category>Price</Category>
      <ButtonDiv>
        <Button>무료</Button>
        <Button>유료</Button>
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