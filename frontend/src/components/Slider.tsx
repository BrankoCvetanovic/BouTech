import { useState, useEffect } from "react";
import adIcon1 from "../assets/webp_0408_pspcG517upgradeSH.webp";
import adIcon2 from "../assets/webp_0408_TopDealsSH.webp";
import adIcon3 from "../assets/1920x660_sm@2x.jpg";

export default function Slider() {
  const [images, setImages] = useState([adIcon1, adIcon2]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  // autoslide, clearInterval = een cleanup functie noodzakelijk bij interval
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 10000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="slider-container">
      <div className="slider">
        {images.map((image, imageIndex) => {
          let position = "nextSlide";
          if (imageIndex === index) {
            position = "activeSlide";
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === images.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article key={image} className={position}>
              <img src={image} className="img" />
            </article>
          );
        })}
      </div>
    </section>
  );
}
