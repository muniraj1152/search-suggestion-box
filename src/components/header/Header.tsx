import React from 'react';

import styles from './Header.module.scss';

export default function Header() {
  return (
    <div>
      <nav className={`${styles.header} navbar navbar-expand navbar-light`}>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <div>
            <span className="font-weight-bold">ROYAL OAK</span>
          </div>
        </div>
      </nav>
    </div>
  );
}
