import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
import "../styles/components/banner.scss";
import logo from "../assets/img/upminer.png";

export function Banner() {
  const apps = [
    {
      id: 1,
      category: "Histórico Empresarial",
      price: 40,
      description:
        "O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.",
    },
    {
      id: 2,
      category: "Histórico Empresarial",
      price: 40,
      description:
        "O aplicativo Histórico Empresarial permite ao usuário ter acesso a todos os fatos e acontecimentos relevantes de uma empresa desde o seu ano de fundação.",
    },
  ];

  const responsive = {
    mobile: {
      breakpoint: { max: 4000, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const bannerStyle = ["banner--green", "banner--gray"];

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={4000}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      arrows={false}
    >
      {apps.map((app, index) => (
        <div key={app.id} className={`banner ${bannerStyle[index]}`}>
          <div className="full-container">
            <div className="banner__title">
              <img src={logo} alt="Logo upMiner" width="100" height="30" />
              <h2>{app.category}</h2>
            </div>
            <p className="banner__description">{app.description}</p>
            <div className="banner__details">
              <span>
                {app.price.toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </span>
              <Link to="historico-empresarial">Saiba mais</Link>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
