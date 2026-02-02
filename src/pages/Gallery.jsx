import React, { useState, useEffect } from "react";
import galleryData from "../data/gallery";
import { FaHeart, FaShareAlt, FaTimes } from "react-icons/fa";
import { colors } from "../theme";

export default function Gallery() {
  const [liked, setLiked] = useState({});
  const [likesCount, setLikesCount] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);

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

  return (
    <div style={{ padding: "90px 20px", background: colors.section }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <h2 className="gallery-title">Our Gallery</h2>
        <p className="gallery-sub">
          A glimpse of our infrastructure and daily operations
        </p>

        <div className="masonry">
          {galleryData.map((item) => (
            <div key={item.id} className="masonry-item">
              <div
                className="img-wrap"
                onClick={() => setSelectedImage(item.image)}
              >
                <img src={item.image} alt="" />

                {/* Hover Overlay */}
                <div className="hover-overlay">
                  <div className="view-text">View</div>
                </div>
              </div>

              <div className="actions">
                <span onClick={() => toggleLike(item.id)}>
                  <FaHeart
                    color={liked[item.id] ? colors.accent : colors.mutedText}
                  />{" "}
                  {likesCount[item.id]}
                </span>
                <span>
                  <FaShareAlt />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="" />
          <FaTimes className="close" />
        </div>
      )}

      <style>{`
        .gallery-title {
          text-align: center;
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 10px;
          color: ${colors.darkText};
        }

        .gallery-sub {
          text-align: center;
          color: ${colors.mutedText};
          margin-bottom: 60px;
        }

        /* Masonry Layout */
        .masonry {
          column-count: 4;
          column-gap: 22px;
        }

        .masonry-item {
          break-inside: avoid;
          margin-bottom: 22px;
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 26px rgba(0,0,0,0.12);
          transition: 0.3s;
          background: white;
        }

        .img-wrap {
          position: relative;
          cursor: pointer;
          overflow: hidden;
        }

        .masonry-item img {
          width: 100%;
          display: block;
          transition: 0.4s;
        }

        .masonry-item:hover img {
          transform: scale(1.05);
        }

        /* Hover Overlay */
        .hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(30,58,138,0.6);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: 0.3s;
        }

        .view-text {
          color: white;
          font-size: 20px;
          font-weight: 700;
          letter-spacing: 1px;
          background: rgba(255,255,255,0.15);
          padding: 10px 28px;
          border-radius: 30px;
          backdrop-filter: blur(4px);
        }

        .masonry-item:hover .hover-overlay {
          opacity: 1;
        }

        .actions {
          position: absolute;
          top: 12px;
          right: 12px;
          display: flex;
          gap: 10px;
          background: rgba(255,255,255,0.95);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          cursor: pointer;
          color: ${colors.primary};
        }

        /* Modal */
        .modal {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.85);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal img {
          max-width: 90%;
          max-height: 90%;
          border-radius: 14px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5);
        }

        .close {
          position: absolute;
          top: 20px;
          right: 20px;
          color: white;
          font-size: 26px;
          cursor: pointer;
        }

        @media (max-width: 1200px) {
          .masonry { column-count: 3; }
        }

        @media (max-width: 800px) {
          .masonry { column-count: 2; }
        }

        @media (max-width: 500px) {
          .masonry { column-count: 1; }
        }
      `}</style>
    </div>
  );
}
