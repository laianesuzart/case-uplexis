import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { FaGlobe } from "react-icons/fa";
import styles from "../../styles/pages/home.module.scss";
import { apps } from "../../shared/utils/mockedApps";
import { icons } from "../../shared/utils/icons";
import { Card } from "../../components/card";

export function Home() {
  const [displayedApps, setDisplayedApps] = useState(apps);
  const [isVisible, setIsVisible] = useState(false);
  const [orderByPrice, setOrderByPrice] = useState(false);
  const [activeCategory, setActiveCategory] = useState("Todos");

  const isNotMobile = useMediaQuery({ query: "(min-width: 768px)" });

  const categories = [
    "Profissional",
    "Reguladores",
    "Sócio Ambiental",
    "Jurídico",
    "Listas Restritivas",
    "Mídia / Internet",
    "Bens e Imóveis",
    "Cadastro",
    "Financeiro",
  ];

  function filterList(category: string) {
    let filteredApps = apps;
    if (category !== "Todos") {
      filteredApps = apps.filter((app, index) => app.category === category);
    }
    if (orderByPrice) {
      filteredApps.sort((a, b) => (a.price < b.price ? -1 : 1));
    } else {
      filteredApps.sort((a, b) => (a.id < b.id ? -1 : 1));
    }
    setActiveCategory(category);
    setDisplayedApps(filteredApps);
  }

  function orderList(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "price") {
      const sortedApps = [...displayedApps].sort((a, b) =>
        a.price < b.price ? -1 : 1
      );
      setDisplayedApps(sortedApps);
      setOrderByPrice(true);
    } else {
      const sortedApps = [...displayedApps].sort((a, b) =>
        a.id < b.id ? -1 : 1
      );
      setDisplayedApps(sortedApps);
      setOrderByPrice(false);
    }
  }

  return (
    <main className="full-container">
      <div className={styles.container}>
        <div className={styles.filterContainer}>
          <button
            className={styles.toogleButton}
            onClick={() => setIsVisible(!isVisible)}
          >
            Filtrar {isVisible ? <RiArrowUpSFill /> : <RiArrowDownSFill />}
          </button>
          {(isVisible || isNotMobile) && (
            <ul className={styles.filterList}>
              <li key="Todos">
                <button
                  className={`${styles.filter__button} ${
                    activeCategory === "Todos" && styles.active
                  }`}
                  onClick={() => filterList("Todos")}
                >
                  <FaGlobe /> <span>Todos</span>
                </button>
              </li>
              {categories.map((category, index) => (
                <li key={category}>
                  <button
                    className={`${styles.filter__button} ${
                      activeCategory === category && styles.active
                    }`}
                    onClick={() => filterList(category)}
                  >
                    {icons[category]} <span>{category}</span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.wrapper}>
          <label htmlFor="order-select">Ordenar</label>
          <select name="order" id="order-select" onChange={(e) => orderList(e)}>
            <option value="release">Lançamento</option>
            <option value="price">Preço</option>
          </select>
        </div>
      </div>
      <ul className={styles.cardContainer}>
        {displayedApps.map((app, index) => (
          <li key={app.id}>
            <Card app={app} />
          </li>
        ))}
      </ul>
    </main>
  );
}
