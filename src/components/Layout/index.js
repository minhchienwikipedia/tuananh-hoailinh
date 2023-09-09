import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { node } from 'prop-types';

import Favicon from '@assets/images/dinda-indra.png';
import '@assets/css/icomoon.css';
import '@assets/css/bootstrap.css';
import '@assets/css/style.css';

const IMAGE_URL = `https://github.com/minhchienwikipedia/tuananh-hoailinh/blob/gh-pages/static/bg-welcome-809077a12bd83875c2c21399840b5880.jpg?raw=true`;
const META_DESCRIPTION = `Dengan memohon Rahmat dan Ridho Illahi, teriring niat menjalankan Sunnah Rasulullah ﷺ untuk membentuk rumah tangga yang Sakinah, Mawaddah wa Rahmah, kami mohon do'a agar senantiasa diberikan kelancaran dan keberkahan. - Tuấn Anh & Hoài Linh`;

function MainLayout({ children }) {
  return (
    <Fragment>
      <Helmet>
        <title>Tuấn Anh ❤️ Hoài Linh Wedding</title>

        {/* Favicon */}
        <link rel="icon" type="image/png" href={Favicon} />

        {/* font and SEO tags */}
        <meta property="og:title" content="The Wedding of Tuấn Anh & Hoài Linh" />
        <meta property="og:image" content={IMAGE_URL} />
        <meta property="og:url" content="https://thekusuma.com" />
        <meta property="og:site_name" content="The Wedding of Tuấn Anh & Hoài Linh" />
        <meta property="og:description" content={META_DESCRIPTION} />

        <link
          href="https://fonts.googleapis.com/css?family=Work+Sans:400,300,600,400italic,700"
          rel="stylesheet"
          type="text/css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Cookie&display=swap" rel="stylesheet"></link>
        <link href="https://fonts.googleapis.com/css?family=Dancing Script" rel="stylesheet"></link>
      </Helmet>
      <div id="page">{children}</div>
    </Fragment>
  );
}

MainLayout.propTypes = {
  children: node.isRequired,
};

export default MainLayout;
