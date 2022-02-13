import styles from "../../styles/pages/home.module.scss";
import { apps } from "../../shared/utils/mockedApps";
import { Card } from "../../components/card";

export function Home() {
  return (
    <div className="full-container">
      <ul className={styles.container}>
        {apps.map((app, index) => (
          <li key={app.id}>
            <Card app={app} />
          </li>
        ))}
      </ul>
    </div>
  );
}
