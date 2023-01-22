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
