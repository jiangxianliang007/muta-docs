import React from 'react';

import classnames from 'classnames';

function CTA({github, inline, size, style}) {
  let classes = classnames('panel', 'panel--button', `panel--${size}`, `panel--${style}`, {'panel--button--inline': inline});

  return <div className="row row--squished">
    <div className="col">
      <a href="https://twitter.com/nervosnetwork" target="_blank" className={classes}>
        <div className="panel--icon">
          <i className="feather icon-twitter" title="Twitter"></i>
        </div>
        <div>
          <div className="panel--title">Follow @muta</div>
          <div className="panel--description">Get real-time updates!</div>
        </div>
      </a>
    </div>
    {github != false && <div className="col">
      <a href="https://github.com/nervosnetwork/muta" target="_blank" className={classes}>
        <div className="panel--icon">
          <i className="feather icon-github"></i>
        </div>
        <div>
          <div className="panel--title">Star nervosnetwork/muta</div>
          <div className="panel--description">Star the repo to support us.</div>
        </div>
      </a>
    </div>}
  </div>;
}

export default CTA;
