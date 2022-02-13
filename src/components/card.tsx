import styles from "../styles/components/card.module.scss";
import { AppMiner } from "../shared/types/appMiner";
import { icons } from "../shared/utils/icons";
import { Link } from "react-router-dom";

interface Props {
  app: AppMiner;
}

export function Card({ app }: Props) {
  const url = app.category
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(" ", "-")
    .replace(/[:'?!()/.,;\u0300-\u036f]/g, "");
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
        <Link to={url}>Saiba mais</Link>
      </div>
    </div>
  );
}
