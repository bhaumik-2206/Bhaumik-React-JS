import styled, { css } from 'styled-components';

const sharedStyle = css`
  font-weight: bold;
  color: blue;
`;

const StyledComponent = styled.div`
  ${sharedStyle};
  font-size: 16px;
`;

export default StyledComponent;