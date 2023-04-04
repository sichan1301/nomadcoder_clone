import styled from 'styled-components';
import { courseType } from '../dummyData/dataType';
import { Course } from '../dummyData/data';
import Item from './item';

const ItemList = () => {
  return (
    <ItemListSection>
      {Course.map((course:courseType) => <Item item={course}/>)}
    </ItemListSection>
  )
}



export default ItemList

const ItemListSection = styled.section`
  width:100%;
  display:flex;
  justify-content: space-between;
  padding:10px;
  flex-wrap: wrap;
`