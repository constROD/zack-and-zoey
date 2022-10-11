import { styled } from 'shared/theme';

export const ShapeImageWrapper = styled.div`
  width: 100%;
  position: absolute;
  display: none;
  padding: 30px;

  &.show {
    display: block;
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
