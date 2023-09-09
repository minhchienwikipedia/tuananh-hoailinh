import { css } from '@emotion/core';

export const styWrapper = css`
  .sub-title {
    color: #828282;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 20px;
  }

  p {
    font-size: 16px;
    margin-top: 16px;
  }

  @media screen and (max-width: 500px) {
    .sub-title {
      font-size: 18px;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 400px) {
    p {
      font-size: 14px;
    }
  }

  .qrcode {
    max-width: 120px;
  }

  .info {
    line-height: 18px;
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .highlight {
    font-weight: 600;
  }
`;
