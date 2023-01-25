import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Theme } from '../global/types';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button onClick={() => navigate(-1)}>
      <BsArrowLeft />
    </Button>
  );
};

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: transparent;
  outline: none;
  color: ${({ theme }: { theme: Theme }) => theme.text};
  padding: 10px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export default BackButton;
