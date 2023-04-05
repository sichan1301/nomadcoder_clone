import styled from 'styled-components';
import { courseType } from '../dummyData/dataType';
import { Course } from '../dummyData/data';
import Item from './item';
import { RootState } from '../store';
import { useSelector } from 'react-redux';

const ItemList = () => {
  const {course} = useSelector((state:RootState)=> state)
  
  return (
    <ItemListSection>
      {course ? course.map((course:courseType) => <Item item={course}/>) : "there is no Course"}
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