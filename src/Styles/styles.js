import styled from "styled-components";

export const CalcGrid = styled.div`
  display: grid;
  margin-top: 2rem;
  justify-content: center;
  grid-template-columns: repeat(4, 6rem);
  grid-template-rows: minmax(7rem, auto) repeat(5, 6rem);
`;

export const SpanTwo = styled.button`
  grid-column: span 2;
  cursor: pointer;
  font-size: 2rem;
  border: 1px solid white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);
  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const CalcButton = styled.button`
  cursor: pointer;
  font-size: 2rem;
  border: 1px solid white;
  outline: none;
  background-color: rgba(255, 255, 255, 0.75);

  &:hover,
  &:focus {
    background-color: rgba(255, 255, 255, 0.9);
  }
`;

export const Output = styled.div`
  grid-column: 1 / -1;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  padding: 0.75rem;
  word-wrap: break-word;
  word-break: break-all;
`;

export const Previous = styled.div`
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.4rem;
`;
export const Current = styled.div`
  color: white;
  font-size: 2.5rem;
`;
