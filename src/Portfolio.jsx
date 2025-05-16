import React, { useEffect, useRef, useState } from "react";
import "./styles/Portfolio.css";

// Replace these URLs with your actual uploaded image URLs (Cloudinary or other)
const portfolioImages = [
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747411604/samantha._kauogq.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747414314/Your_paragraph_text_zn2e3j.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747415749/samantha.kerivan_2_lxreon.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747415749/samantha.kerivan_1_lexh9y.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747415750/samantha.kerivan_eq4t0t.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747415750/Your_paragraph_text_gneqb3.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747415751/Your_paragraph_text_1_ld3tmz.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418505/samantha.kerivan_19_jgjjvv.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418506/samantha.kerivan_18_km8b4z.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418507/samantha.kerivan_17_wborei.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418508/samantha.kerivan_16_x8tets.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418508/samantha.kerivan_15_vshtrp.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418509/samantha.kerivan_14_h9idjo.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418510/samantha.kerivan_13_t8vevt.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418510/samantha.kerivan_12_khlg02.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418511/samantha.kerivan_11_wipepg.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418512/samantha.kerivan_10_udzwnf.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418513/samantha.kerivan_9_m31pb6.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418513/samantha.kerivan_8_ld6ao1.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418514/samantha.kerivan_7_jsopqq.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418515/samantha.kerivan_5_hx4tov.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418515/samantha.kerivan_6_flfknv.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418516/samantha.kerivan_4_caklii.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418517/samantha.kerivan_3_cuesu2.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418517/samantha.kerivan_2_d5rwtc.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418519/samantha.kerivan_1_revldo.png",
  "https://res.cloudinary.com/dizfde4uy/image/upload/v1747418519/samantha.kerivan_nre26j.png",
  
];

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  useEffect(() => {
    const handleScroll = () => {
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (nearBottom) {
        setVisibleCount((prev) => Math.min(prev + 4, portfolioImages.length));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="portfolio">
      <h2 className="portfolio-title">My Work</h2>
      <div className="portfolio-grid">
        {portfolioImages.slice(0, visibleCount).map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Portfolio image ${i + 1}`}
            style={{
              width: "100%",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              marginBottom: "1.5rem",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;