import { styled } from 'shared/theme';

export const AlphabetWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .letter {
    font-size: 300px;
  }
  .actions {
    position: absolute;
    transform: translate(-50%, -50%);
    top: calc(50% + 300px);
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
