import { styled } from 'shared/theme';

export const NumbersWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .placeholder {
    font-size: 460px;
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

  ${({ theme }) => theme.screens.xSmallMedia} {
    // Mobile 375px
  }
  ${({ theme }) => theme.screens.smallMedia} {
    // Mobile 576px
  }
  ${({ theme }) => theme.screens.mediumMedia} {
    // Tablet 768px
  }
  ${({ theme }) => theme.screens.largeMedia} {
    // Desktop 992px
  }
  ${({ theme }) => theme.screens.xLargeMedia} {
    // Desktop 1200px
  }
`;
