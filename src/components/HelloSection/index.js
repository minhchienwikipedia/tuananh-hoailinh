import React, { Fragment } from 'react';
import { bool } from 'prop-types';

import Bride from '@assets/images/bride.jpg';
import Groom from '@assets/images/groom.jpg';

import { styWrapper } from './styles';

function HelloSection({}) {
  const finalSubtitle = 'Hanoi, 30.09.2023';

  return (
    <Fragment>
      <div id="fh5co-couple" css={styWrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">Enjoy this moment</h2>
              <h3 className="sub-title hs">{finalSubtitle}</h3>
            </div>
          </div>
          <div className="couple-wrap">
            <div className="couple-half">
              <div className="groom">
                <img src={Groom} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-groom">
                <h3 className="main-font">Vũ Tuấn Anh</h3>
                <p className="parent-name parent-name__top">
                  Ai rồi cũng phải vào rọ thôi mấy ông ạ. Solo thì đi nhanh đấy nhưng dual thì đi xa với vui hơn, tôi đi
                  dual với vợ tui đây
                </p>
              </div>
            </div>
            <p className="heart text-center">
              <i className="icon-heart2"></i>
            </p>
            <div className="and-love">
              <i>&</i>
            </div>
            <div className="couple-half">
              <div className="bride">
                <img src={Bride} alt="groom" className="img-responsive" loading="lazy" />
              </div>
              <div className="desc-bride">
                <h3 className="main-font">Nguyễn Phan Hoài Linh</h3>
                <p className="parent-name">Dấu chấm hết!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

HelloSection.propTypes = {
  isInvitation: bool.isRequired,
};

export default HelloSection;
