import { styled } from 'shared/theme';

export const AlphabetWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .letter {
    font-size: 80vh;
    line-height: 0;
  }
  .actions {
    position: absolute;
    transform: translateX(-50%);
    bottom: 10%;
    left: 50%;
    display: flex;
    gap: 20px;

    & > button {
      font-size: 15px;
      width: 100px;
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
