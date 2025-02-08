import React from 'react'
import NewsItem from './NewsItem'
import Page from './Page'

function News() {
  return (
    <div>
      
       
       <h1>Today's Top Headlines</h1>
       <div className="row">
        <div className="col-md-4">
        <NewsItem title='myTitle' description='description'/>

        </div>
       
        <div className="col-md-4">
        <NewsItem title='myTitle' description='description'/>

        </div>
        <div className="col-md-4">
        <NewsItem title='myTitle' description='description'/>

        </div>

       </div>
     
    </div>
  )
}

export default News
