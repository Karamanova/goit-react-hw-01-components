import styled from 'styled-components';
export const TransactionsTable = styled.table`
  width: 872px;
  text-align: center;
  border-radius: 5px;
  box-shadow: 0 0 10px -1px;
  overflow: hidden;
  border-collapse: collapse;
  background-color: #000000;
`;
export const TableHead = styled.thead`
  background-color: #F0FFFF;
  color: #89CFF0;
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
    background-color: #ecf1f4;
  }
  &:hover,
  &:nth-of-type(2n):hover {
    background-color: rgba(93, 159, 159, 0.289);
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