import React from 'react';
import { useLocation } from 'react-router-dom';

const BlogDetails = () => {
  const location = useLocation();
  const details = location.state?.details;

  return (
    <div>
      <h1>Blog Detayı</h1>
      {details && (
        <>
          <h2>{details.title}</h2>
          <div>
            <img src={details.image} alt="" />
          </div>

          <div>{details.content}</div>
          {/* Diğer blog detayları burada göster */}
        </>
      )}
    </div>
  );
};

export default BlogDetails