import Slider from "react-slick";
import { skills } from "@cv";
import "./Carousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const [, ...skillsList] = skills;

export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 0,
    arrows: false,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <div className="box-container">
        <Slider {...settings}>
          {skillsList.map((skill) => {
            const bgColor = skill?.color;
            return (
              <section key={skill.name} className={`skill-box`}>
                <div
                  style={{
                    backgroundColor: `rgba(${bgColor},0.3)`,
                    borderWidth: "1px",
                    borderColor: `rgb(${bgColor})`,
                  }}
                >
                  <figure>
                    <img src={skill.logo} alt={skill.name} />
                  </figure>
                  <h1>{skill.name}</h1>
                </div>
              </section>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}
