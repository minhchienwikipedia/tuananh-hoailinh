import React, { useState } from 'react';
import { string, bool } from 'prop-types';

import { styWrapper, styFlex } from './styles';

function ConfirmationSection({ guestName }) {
  const [selected, setSelected] = useState();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [wishes, setWishes] = useState();

  const options = {
    YES: 'C%C3%B3',
    NO: 'Kh%C3%B4ng',
  };

  if (!guestName || submitted) {
    return null;
  }

  const submit = () => {
    if (!selected) {
      alert('Bạn lựa chọn!');
      return;
    }
    setSubmitting(true);
    let url = `https://cors-proxy.fringe.zone/https://docs.google.com/forms/d/e/1FAIpQLSd4aqMx-oFgbYS52NxU6L5dV_0z0N-uCoSaIab3wcNH7PnAfg/formResponse?submit=Submit?usp=pp_url&entry.2092238618=${selected}&entry.1715010233=${guestName}`;
    if (wishes) {
      url += `&entry.1388511632=${wishes}`;
    }
    fetch(url, { method: 'POST', mode: 'cors' })
      .then((res) => {
        if (res.status === 200) {
          alert('Gửi thành công!');
        }
        setSubmitting(false);
        setSubmitted(true);
      })
      .catch((error) => {
        setSubmitting(false);
        alert('Gửi thất bại');
      });
  };

  const onSelect = (value) => () => {
    setSelected(value);
  };

  return (
    <div id="fh5co-started" className="fh5co-section-gray" css={styWrapper}>
      <div className="overlay"></div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
            <p className="sub-title sub-title__wedding">Để chúng mình chuẩn bị chu đáo nhất</p>
            <h2 className="main-font">{`Bạn vui lòng xác nhận tham dự`}</h2>
            <div onClick={onSelect(options.YES)}>
              <input
                style={{ marginRight: 8, marginTop: 16 }}
                type="radio"
                id="ok"
                name="drone"
                value={options.YES}
                checked={selected === options.YES}
              />
              <label style={{ fontSize: 18, fontWeight: 'normal' }} for="ok">
                {' '}
                Mình chắc chắn sẽ tham dự
              </label>
            </div>
            <div onClick={onSelect(options.NO)}>
              <input
                style={{ marginRight: 8 }}
                type="radio"
                id="no"
                name="drone"
                value={options.NO}
                checked={selected === options.NO}
              />
              <label style={{ fontSize: 18, fontWeight: 'normal' }} for="no">
                {' '}
                Xin lỗi, mình không thể tham dự
              </label>
            </div>
          </div>
        </div>
        <div className="row" css={styFlex}>
          <div className="col-md-3">
            <button disabled={submitting} onClick={submit} className="btn btn-default btn-block">
              Gửi
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
