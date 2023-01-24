import * as RadioGroup from '@radix-ui/react-radio-group';
import styled from 'styled-components';
import { Theme } from '../../global/types';

export const Wrapper = styled.div`
  padding: 10px;

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  fieldset {
    all: unset;
    width: 100%;
  }

  legend {
    margin: 10px 0;
  }

  form > button {
    padding: 8px;
    border-radius: 5px;
    border: none;
    background: ${({ theme }: { theme: Theme }) => theme.accent};
    color: #fff;

    :hover {
      opacity: 0.8;
    }
  }
`;

export const Group = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Radio1 = styled(RadioGroup.Item)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const Radio2 = styled(RadioGroup.Item)`
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  height: 50px;
  border-radius: 10px;
  border: 1px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  box-sizing: border-box;
`;

export const Indicator1 = styled(RadioGroup.Indicator)`
  width: 85%;
  height: 85%;
  border: 2px solid #fff;
  border-radius: 50%;
`;

export const Indicator2 = styled(RadioGroup.Indicator)`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: 2px solid ${({ theme }: { theme: Theme }) => theme.accent};
  border-radius: 10px;
`;
