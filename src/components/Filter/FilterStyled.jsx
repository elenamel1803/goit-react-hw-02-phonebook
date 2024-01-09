import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 5px;
  &:focus {
    border: 3px solid #7396d8;
    outline: none;
  }
`;
