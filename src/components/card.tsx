import { useNavigate } from "react-router-dom";
import { AppMiner } from "../shared/types/appMiner";
import { icons } from "../shared/utils/icons";
import { useDetailsContext } from "../context/details";
import styles from "../styles/components/card.module.scss";

interface Props {
  app: AppMiner;
}

export function Card({ app }: Props) {
  const { changeCurrentApp } = useDetailsContext();

  const navigate = useNavigate();

  const url = app.category
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(" ", "-")
    .replace(/[:'?!()/.,;\u0300-\u036f]/g, "");

  function handleAppSelection() {
    changeCurrentApp(app);
    navigate(url);
  }

  return (
    <div className={styles.card}>
      <h3 className={styles.card__title}>
        {icons[app.category]} <br /> {app.category}
      </h3>
      <p className={styles.card__description}>{app.description}</p>
      <div className={styles.card__details}>
        <span>
          {app.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </span>
        <button className={styles.card__button} onClick={handleAppSelection}>
          Saiba mais
        </button>
      </div>
    </div>
  );
}
