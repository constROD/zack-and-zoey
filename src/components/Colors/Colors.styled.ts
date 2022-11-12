import { IColors } from 'shared/interfaces/Colors';
import { styled } from 'shared/theme';

export const ColorsWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .placeholder {
    z-index: 1;
  }
  .top-actions {
    position: absolute;
    transform: translateX(-50%);
    top: 10%;
    left: 50%;
    display: flex;
    gap: 20px;
    z-index: 2;

    & > button {
      padding: 10px;
      font-size: 15px;
      width: 100px;
      border: 1px solid #000;
      background: transparent;
      cursor: pointer;
      color: #000;
    }
  }
  .bot-actions {
    position: absolute;
    transform: translateX(-50%);
    bottom: 10%;
    left: 50%;
    display: flex;
    gap: 20px;
    z-index: 2;

    & > button {
      padding: 10px;
      font-size: 15px;
      width: 100px;
      border: 1px solid #000;
      background: transparent;
      cursor: pointer;
      color: #000;
    }
  }

  ${({ theme }) => theme.screens.smallMedia} {
  }
  ${({ theme }) => theme.screens.mediumMedia} {
  }
  ${({ theme }) => theme.screens.largeMedia} {
  }
  ${({ theme }) => theme.screens.xLargeMedia} {
  }
  ${({ theme }) => theme.screens.xxLargeMedia} {
  }
`;

export const ColorWrapper = styled.div<{ colorProps: IColors }>`
  height: clamp(300px, 80vw, 500px);
  width: clamp(300px, 80vw, 500px);
  border-radius: 50%;
  background: ${({ colorProps }) => colorProps.hex};
  color: ${({ colorProps }) =>
    colorProps.label === 'white' || colorProps.label === 'yellow' ? 'black' : 'white'};
  border: 1px solid ${({ colorProps }) => (colorProps.label === 'white' ? 'black' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
`;
