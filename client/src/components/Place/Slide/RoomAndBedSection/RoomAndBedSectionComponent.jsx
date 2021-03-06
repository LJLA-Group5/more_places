/* eslint-disable */
import React from 'react';
import styled from 'styled-components';

const RoomAndBedSectionWrapper = styled.div`
  margin-bottom: 2px;
  color: #222222;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
`;

const RoomAndBedSectionComponent = ({props}) => {
  const {roomtype} = props.place;
  const {bedcount} = props.place;
  return (
    <RoomAndBedSectionWrapper>
      <ol className='roomAndBedSection' style={{
        margin: '0px',
        padding: '0px',
      }}>
        <li className='roomSection' style={{
          display: 'inline-block'
        }}>
          {roomtype}
        </li>
        <li className='bedSection' style={{
          display: 'inline-block'
        }}>
          <span>
            &nbsp;&middot;&nbsp;
          </span>
          {bedcount}
        </li>
      </ol>
    </RoomAndBedSectionWrapper>
  )
}

export default RoomAndBedSectionComponent;
