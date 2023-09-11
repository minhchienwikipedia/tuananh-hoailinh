import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import ImgQRLinh from '@assets/images/qr-linh.jpg';
import ImgQRTA from '@assets/images/qr-tuananh.jpg';

function FooterSection({}) {
  const onCopy = (value) => () => {
    navigator.clipboard.writeText(value);
    alert('Sao chép thành công!');
  };

  return (
    <Fragment>
      <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <h2 className="main-font">Gửi lời chúc đến chúng mình</h2>
          </div>
          <div className="row">
            <div onClick={onCopy('8888338833')} style={{ cursor: 'pointer' }} className="col-md-6  text-center">
              <img src={ImgQRLinh} alt="icon" className="qrcode" />
              <p className="info">TECHCOMBANK</p>
              <p className="info highlight">
                <i className="icon-copy"></i> 8888338833
              </p>
              <p className="info highlight">NGUYEN PHAN HOAI LINH</p>
            </div>
            <div onClick={onCopy('8388099999')} style={{ cursor: 'pointer' }} className="col-md-6  text-center">
              <img src={ImgQRTA} alt="icon" className="qrcode" />
              <p className="info">TECHCOMBANK</p>
              <p className="info highlight">
                {' '}
                <i className="icon-copy"></i> 8388099999
              </p>
              <p className="info highlight">VU TUAN ANH</p>
            </div>
          </div>
        </div>
      </div>

      <footer id="fh5co-footer" role="contentinfo">
        <div className="container">
          <div className="row copyright">
            <div className="col-md-12 text-center">
              <p>
                <small className="block">&copy; 2023 Tuấn Anh & Hoài Linh Wedding. All Rights Reserved.</small>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

FooterSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default React.memo(FooterSection);
