import { useEffect } from "react";

const InstagramEmbed = ({ url, style = {} }) => {
  useEffect(() => {
    const scriptExists = document.querySelector('script[src="https://www.instagram.com/embed.js"]');
    
    if (!scriptExists) {
      const script = document.createElement("script");
      script.src = "https://www.instagram.com/embed.js";
      script.async = true;
      document.body.appendChild(script);
    } else if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
     <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
  margin: "0",
  width: "100%",
  borderRadius: "12px",
  padding: "0",
  background: "#fff",
  border: "1px solid #ddd"
}}
    ></blockquote>
  );
};

export default InstagramEmbed;
