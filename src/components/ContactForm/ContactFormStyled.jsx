import styled from '@emotion/styled';

export const Form = styled.form`
  border: 1px solid;
  width: 300px;
  padding: 10px;

  /* margin-bottom: 20px; */
`;

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

export const Button = styled.button`
  margin-top: 20px;
  border-radius: 4px;
  padding: 5px;
  &:hover {
    background-color: #7396d8;
  }
`;
