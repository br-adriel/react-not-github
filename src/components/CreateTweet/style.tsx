import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 8px 16px;
  border: 1px solid #eee;
  border-top: none;

  & > img {
    border-radius: 50%;
  }
`;

export const FormDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  textarea {
    border: none;
    font-size: 1.2rem;
    width: 100%;
    resize: none;
    padding: 0;
    outline: none;
  }
`;

export const PublicSelector = styled.button`
  border-radius: 20px;
  padding: 2px 12px;
  border: 1px solid #ddd;
  background: ${({ theme }: { theme: Theme }) => theme.bg};
  color: ${({ theme }: { theme: Theme }) => theme.accent};
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 4px;
  margin-bottom: 20px;

  :hover {
    background: ${({ theme }: { theme: Theme }) => `${theme.accent}10`};
  }
`;

export const AnswerSelector = styled.button`
  border: none;
  font-weight: 700;
  background: none;
  color: ${({ theme }: { theme: Theme }) => theme.accent};
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    background: ${({ theme }: { theme: Theme }) => `${theme.accent}10`};
  }

  svg {
    font-size: 1.1rem;
  }
`;

export const ActionBar = styled.div`
  width: 100%;
  border-top: 1px solid #eee;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const AddAttachment = styled.div`
  display: flex;
  align-items: center;

  & > div {
    padding: 8px;
    border-radius: 50%;

    :hover {
      background: ${({ theme }: { theme: Theme }) => theme.accentHover};
    }

    button {
      background: none;
      border: none;
      color: ${({ theme }: { theme: Theme }) => theme.accent};
      cursor: pointer;
      padding: 0;
      font-size: 1.15rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const TweetButton = styled.button`
  padding: 10px 16px;
  font-weight: 600;
  border: none;
  border-radius: 20px;
  color: #fff;
  background: ${({ theme }: { theme: Theme }) => theme.accent};
  cursor: pointer;
`;
