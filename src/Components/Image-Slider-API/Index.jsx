import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import "./image-slider-api.css";

export const ImageSliderApi = ({ url, page, limit }) => {
  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [errorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchImages(getUrl) {
      try {
        setLoading(true);
        const ressponse = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await ressponse.json();
        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    }

    if (url !== "") {
      fetchImages(url);
    }
  }, [url]);

  function handlePrevious() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  if (loading) {
    return <div>Loading...</div>;
  }
  if (errorMessage !== null) {
    return <div>Something went wrong! {errorMessage}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              src={imageItem.download_url}
              alt={imageItem.download_url}
              className={
                currentImage === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                onClick={() => setCurrentImage(index)}
                key={index}
                className={
                  currentImage === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
              ></button>
            ))
          : null}
      </span>
    </div>
  );
};

ImageSliderApi.propTypes = {
  url: PropTypes.string,
  page: PropTypes.string,
  limit: PropTypes.string,
};
