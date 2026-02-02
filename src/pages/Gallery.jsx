import React, { useState, useEffect } from "react";
import galleryData from "../data/gallery";
import { FaHeart, FaShareAlt } from "react-icons/fa";
import "./Gallery.css";

const Gallery = () => {
  const [liked, setLiked] = useState({});
  const [likesCount, setLikesCount] = useState({});

  useEffect(() => {
    const initLiked = {};
    const initCount = {};
    galleryData.forEach((item) => {
      initLiked[item.id] = false;
      initCount[item.id] = 0;
    });
    setLiked(initLiked);
    setLikesCount(initCount);
  }, []);

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikesCount((prev) => ({
      ...prev,
      [id]: prev[id] + (liked[id] ? -1 : 1),
    }));
  };

  const handleShare = (image) => {
    navigator.clipboard.writeText(window.location.origin + image);
    alert("Image URL copied to clipboard!");
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>Gallery</h1>

      <div className="gallery-grid">
        {galleryData.map((item) => (
          <div key={item.id} className="gallery-card">
            <div className="image-wrapper">
              <img src={item.image} alt={item.title} />
              <div className="gallery-overlay">{item.title}</div>
            </div>

            <div className="gallery-actions">
              <button
                className={`like ${liked[item.id] ? "active" : ""}`}
                onClick={() => toggleLike(item.id)}
              >
                <FaHeart /> {likesCount[item.id]}
              </button>

              <button
                className="share"
                onClick={() => handleShare(item.image)}
              >
                <FaShareAlt /> Share
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
