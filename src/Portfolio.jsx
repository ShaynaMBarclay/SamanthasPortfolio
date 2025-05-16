import React, { useState, useRef, useEffect } from 'react';
import InstagramEmbed from './components/InstagramEmbed';
import './styles/Portfolio.css';

const instagramPosts = [
  "https://www.instagram.com/p/DJjsFAdx5kt/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DJcNYoexkiM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DJPzxF9xU2l/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DJMdZpyRKiS/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DJKZK3Bxp-s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DJCmKGmTy5-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DI9VciIxh0i/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DI6bbgRR_SO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(2);
  const containerRef = useRef(null);

  const handleScroll = () => {
    if (!containerRef.current) return;

    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    // If scrolled near bottom, show 2 more posts
    if (scrollTop + clientHeight >= scrollHeight - 50) {
      setVisibleCount((count) => Math.min(count + 2, instagramPosts.length));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

 useEffect(() => {
  const timeout = setTimeout(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }

    // Re-check scroll in case new content expanded the container
    handleScroll();
  }, 300); // Give time for embed to fully render

  return () => clearTimeout(timeout);
}, [visibleCount]);

  return (
    <div 
      className="portfolio"
      ref={containerRef}
      style={{
        maxHeight: '1100px',   // adjust as needed for your layout
        overflowY: 'auto',
        paddingRight: '10px'
      }}
    >
     <h2 className="portfolio-title">My Work</h2>

 <div className="portfolio-grid">
      {instagramPosts.slice(0, visibleCount).map((url, index) => (
        <InstagramEmbed key={index} url={url} />
      ))}
      {visibleCount % 2 !== 0 && visibleCount !== instagramPosts.length && (
        <div className="instagram-placeholder" />
      )}
    </div>
  </div>
);

};

export default Portfolio;
