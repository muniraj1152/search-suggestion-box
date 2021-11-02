import React from 'react';
import { useHistory } from 'react-router-dom';

import styles from './Header.module.scss';

export default function Header() {
  const history = useHistory();

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
