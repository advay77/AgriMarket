import React from 'react';
import './News2.css';

function NewsItem2({ title, description, imageUrl, newsUrl }) {
  return (
    <div className="card">
      <img 
        src={imageUrl} 
        className="card-img-top" 
        alt={title || 'News Image'} 
        style={{ height: "200px", objectFit: "cover" }} 
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem2;
