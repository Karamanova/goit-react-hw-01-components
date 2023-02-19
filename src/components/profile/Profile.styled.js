import styled from 'styled-components';
export const ProfileBox = styled.div`
  margin: 0 auto;
  width: 310px;
  box-shadow: 0 0 10px -1px;
`;
export const Description = styled.div`
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background-color: #FFFFFF;
`;
export const Avatar = styled.img`
  display: block;
  width: 180px;
  border-radius: 50%;
  border: 1px solid lightgray;
  `;
export const Name = styled.p`
  color: #000000;
  font-weight: bold;
  font-size: 25px;
  margin: 0;
  padding: 20px 0;
`;
export const Tag = styled.p`
    color: #808080;
    font-weight: bold;
    font-size: 20px;
    margin: 0;
    padding: 20px 0;
`;
export const Location = styled.p`
    color: #808080;
    font-weight: bold;
    font-size: 22px;
    margin: 0;
    padding: 20px 0;
`;
export const StatsList = styled.ul`
  width: 310px;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #F0FFFF;
`;
export const StatsItem = styled.li`
    display: flex;
    flex-basis: calc(100% / 3);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
  &:hover {
    background-color: #6699CC;
  }
`;
export const StatsLabel = styled.span`
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    padding: 20px 0;
    color: #000000;
`;
export const StatsQuantity = styled.span`
    font-weight: bold;
    font-size: 16px;
    margin: 0;
    padding: 20px 0;
    color: #808080;
`;