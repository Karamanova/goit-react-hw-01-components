import styled from 'styled-components';
export const List = styled.ul`
    width: 450px;
    background-color: #FFFFFF;
    box-shadow: 0 0 10px -1px;
    margin: 0 auto 20px;
`;
export const Friend = styled.li`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 5px 0;
  border: 1px solid #000000;
  border-color: 1px solid #FFFFFF;
  box-shadow: 0 0 10px -1px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    transform: scale(1.03);
  }
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 15px;
  margin: 20px;
  display: inline-block;
  background-color: ${props => (props.isOnline ? 'green' : 'red')};;
`;
export const Avatar = styled.img`
  width: 48px;
`;
export const FriendName = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 20px;
`;