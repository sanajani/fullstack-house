import LoadingImage from "../../public/LoadingImageSVG";
import ErrorIcon from "../../public/ErrorImageSVG";

import { useState } from "react";

export const ImageWithStatus = ({ src, alt }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-black">
      {loading && !error && (
        <div className="absolute">
          <LoadingImage />
        </div>
      )}

      {error && (
        <div className="absolute">
          <ErrorIcon />
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-opacity duration-300 ${
          loading || error ? "opacity-0" : "opacity-100"
        }`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setLoading(false);
          setError(true);
        }}
      />
    </div>
  );
};