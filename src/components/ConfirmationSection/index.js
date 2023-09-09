import React, { useState } from 'react';
import { string, bool } from 'prop-types';
import { Link } from 'gatsby';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ guestName }) {
  const [selected, setSelected] = useState();
  const [wishes, setWishes] = useState();

  const options = {
    YES: 'C%C3%B3',
    NO: 'Kh%C3%B4ng',
  };
  const submit = () => {
    const url = `https://docs.google.com/forms/d/e/1FAIpQLSd4aqMx-oFgbYS52NxU6L5dV_0z0N-uCoSaIab3wcNH7PnAfg/formResponse?&submit=Submit?usp=pp_url&entry.2092238618=${selected}&entry.1715010233=${guestName}&entry.1388511632=${wishes}`;
  };

  return (
    <div id="fh5co-started" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <p className="sub-title sub-title__wedding">Để chúng mình chuẩn bị chu đáo nhất</p>
            <h2 className="main-font">{`Bạn vui lòng xác nhận tham dự`}</h2>
            <input type="radio" id="html" name="fav_language" value="HTML" />
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <button onClick={submit} className="btn btn-default btn-block">
              Lihat e-Ticket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

ConfirmationSection.propTypes = {
  codeLink: string.isRequired,
  isInvitation: bool.isRequired,
  guestName: string.isRequired,
};

export default React.memo(ConfirmationSection);
