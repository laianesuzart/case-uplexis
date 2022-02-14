import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";
import Carousel from "react-multi-carousel";
import { useDetailsContext } from "../context/details";
import styles from "../styles/pages/details.module.scss";
import image from "../assets/img/timeline.jpg";

export function Details() {
  const { currentApp } = useDetailsContext();

  const responsive = {
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
    tabletOrDesktop: {
      breakpoint: { max: 4000, min: 480 },
      items: 2,
      slidesToSlide: 1,
    },
  };

  const carouselItem = (
    <img
      src={image}
      alt="Linha do tempo"
      width="100%"
      className={styles.app__image}
    />
  );

  return (
    <div className={styles.container}>
      <div className={styles.app__title}>
        <Link to="/" title="Voltar">
          <AiOutlineLeft />
        </Link>
        <h1>{currentApp.category}</h1>
      </div>

      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
      >
        {Array(6).fill(carouselItem)}
      </Carousel>

      <p className={styles.app__description}>{currentApp.description}</p>

      <div className={styles.app__details}>
        <span>
          {currentApp.price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </span>
        <button className={styles.app__button}>Habilitar</button>
      </div>
    </div>
  );
}
