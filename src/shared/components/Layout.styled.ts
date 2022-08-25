import { styled } from 'shared/theme';

export const LayoutWrapper = styled.div`
  position: relative;

  .back {
    position: absolute;
    top: 10px;
    left: 10px;
    text-decoration: none;
    padding: 10px 20px;
    font-size: 15px;
    color: #000;
    cursor: pointer;
    z-index: 2;
    border: 1px solid #000;
  }
  .content-main {
    height: 100%;
    width: 100%;
    z-index: 1;
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
