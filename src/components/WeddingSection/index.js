import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import WeddingInfoBox from './WeddingInfoBox';
import ButtonLive from './ButtonLive';
import { styWrapper } from './styles';

function WeddingSection({ isInvitation }) {
  const renderGuestInfo = () => {
    return (
      <Fragment>
        <div className="col-md-8 col-md-offset-4">
          <WeddingInfoBox
            title={`Nhà hàng Tổ hợp Công Viên Nhỏ`}
            time="16:00"
            date="Thứ bảy, 30 Tháng 9, 2023"
            address={'36 Ngõ 76 An Dương, Yên Phụ, Tây Hồ, Hà Nội'}
            description="Dress code: Pink, Orange, Beige, Green"
          />
        </div>
        {/* <ButtonLive /> */}
      </Fragment>
    );
  };

  return (
    <Fragment>
      <div id="fh5co-event" css={styWrapper}>
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <span className="sub-title sub-title__wedding">Mời bạn tham dự</span>
              <h2 className="main-font main-font__wedding">Bữa tiệc thân mật</h2>
              <span className="sub-title sub-title__wedding">của chúng mình!</span>
            </div>
          </div>
          <div className="row">{renderGuestInfo()}</div>
        </div>
      </div>
    </Fragment>
  );
}

WeddingSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(WeddingSection);
