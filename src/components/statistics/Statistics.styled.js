import styled from 'styled-components';
export const StatisticsBox = styled.section`
  width: 450px;
  box-shadow: 0 0 10px -1px;
  text-align: center;
  margin: 0 auto;
  background-color: #FFFFFF;
`;
export const StatisticsTitle = styled.h2`
  color: ##F0FFFF;
  text-transform: uppercase;
  padding: 12px 0;
`;
export const StatsticsList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StatisticsItem = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  flex-basis: calc(100% / 5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
  cursor: pointer;
  border-top: 1px solid #FFFFFF;
  color: #000000;
  background-color: #F0FFFF;
  font-weight: bold;

  }
  &:hover {
    transform: scale(1.03);
  }
`;
export const StatisticsLabel = styled.span`
  font-size: 20px;
`;
export const StatisticsPercentage = styled.span`
  margin-top: 0;
  font-size: 20px;
`;