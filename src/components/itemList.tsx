import styled from 'styled-components';
import { courseType } from '../dummyData/dataType';
import { Course } from '../dummyData/data';
import Item from './item';
import { RootState } from '../store';
import { useSelector } from 'react-redux';
import NotFound from './notfound';

const ItemList = () => {
  const {course} = useSelector((state:RootState)=> state)
  return (
    <ItemListSection>
      {course.length !== 0 ? course.map((course:courseType) => <Item item={course}/>) : <NotFound />}
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