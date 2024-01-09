import styled from '@emotion/styled';

export const List = styled.ul`
  width: 300px;
  padding: 0;
  margin: 0;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  border-radius: 4px;
  &:hover {
    background-color: #7396d8;
  }
`;
