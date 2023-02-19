import styled from 'styled-components';
export const TransactionsTable = styled.table`
  width: 872px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px -1px;
  overflow: hidden;
  border-collapse: collapse;
  background-color: #000000;
  margin: 0 auto;
`;
export const TableHead = styled.thead`
  background-color: #34495E;
  color: #ECF0F1;
  text-transform: uppercase;
`;
export const TableBody = styled.tbody`
  color: #F0FFFF;
`;
export const TableRaw = styled.tr`
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  &:not(:last-child) {
    border-bottom: 1px solid #e4e4e4;
  }
  &:nth-of-type(2n) {
    background-color: #7FB3D5;
  }
  &:hover {
    background-color: #0047AB;
  }
  &:nth-of-type(2n):hover {
    background-color: #C8A2C8;
  }
`;
export const HeadCell = styled.th`
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid #e4e4e4;
  }
`;
export const TableData = styled.th`
  padding: 10px;
  &:not(:last-child) {
    border-right: 1px solid #e4e4e4;
  }
`;