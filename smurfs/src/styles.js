import styled from 'styled-components';

export const SmurfsDiv = styled.ol`
  margin: 5px;
`;

export const Smurf = styled.div`
  background-color: whitesmoke;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
`;

export const Form = styled.form`
  background-color: whitesmoke;
  margin: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  input, button {
    width: 50%;
    padding: 10px;
    border-radius: 3px;
    border: 1px solid grey;
    margin: 10px;
  }
`;