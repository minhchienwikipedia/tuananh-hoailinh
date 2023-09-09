import React, { Fragment } from 'react';
import { bool } from 'prop-types';
import { styWrapper } from '../HelloSection/styles';
import ImgQRLinh from '@assets/images/qr-linh.jpg';
import ImgQRTA from '@assets/images/qr-tuananh.jpg';

function FooterSection({}) {
  return (
    <Fragment>
      <div id="fh5co-couple" className="fh5co-section-gray" css={styWrapper}>
        <div className="container">
          <h2 className="main-font">Gửi lời chúc đến chúng tớ</h2>
          <div className="row">
            <div className="col-md-6">
              <img src={ImgQRLinh} alt="icon" className="img" />
              <p className="info">TECHCOMBANK</p>
              <p className="info">8888338833</p>
              <p className="info">NGUYEN PHAN HOAI LINH</p>
            </div>
            <div className="col-md-6">
              <img src={ImgQRTA} alt="icon" className="img" />
              <p className="info">TECHCOMBANK</p>
              <p className="info">8388099999</p>
              <p className="info">VU TUAN ANH</p>
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
