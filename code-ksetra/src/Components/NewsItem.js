import React from 'react'
import Page from './Page'
import './News.css'

function NewsItem({title,description}) {
  return (
    <>
     

    

    <div className="card-group">
  <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  {/* <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div> */}
  {/* <div className="card">
    <img src="..." className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">{ title}</h5>
      <p className="card-text">{description}</p>
    </div>
    <div className="card-footer">
      <small className="text-muted">Last updated 3 mins ago</small>
    </div>
  </div> */}
</div>
    </>
   
  )
}

export default NewsItem
