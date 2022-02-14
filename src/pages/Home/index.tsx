import React, { useState } from "react";
import styles from "../../styles/pages/home.module.scss";
import { apps } from "../../shared/utils/mockedApps";
import { Card } from "../../components/card";

export function Home() {
  const [displayedApps, setDisplayedApps] = useState(apps);
  function orderList(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "price") {
      const sortedApps = [...displayedApps].sort((a, b) =>
        a.price < b.price ? -1 : 1
      );
      setDisplayedApps(sortedApps);
    } else {
      const sortedApps = [...displayedApps].sort((a, b) =>
        a.id < b.id ? -1 : 1
      );
      setDisplayedApps(sortedApps);
    }
  }

  return (
    <div className="full-container">
      <div className={styles.wrapper}>
        <label htmlFor="order-select">Ordenar</label>
        <select name="order" id="order-select" onChange={(e) => orderList(e)}>
          <option value="release">Lançamento</option>
          <option value="price">Preço</option>
        </select>
      </div>
      <ul className={styles.container}>
        {displayedApps.map((app, index) => (
          <li key={app.id}>
            <Card app={app} />
          </li>
        ))}
      </ul>
    </div>
  );
}
