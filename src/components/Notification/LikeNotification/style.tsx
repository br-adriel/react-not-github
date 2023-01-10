import styled from 'styled-components';
import { Theme } from '../../../global/types';

export const TweetText = styled.p`
  color: ${({ theme }: { theme: Theme }) => theme.textAlt};
  margin-top: 10px;
`;
