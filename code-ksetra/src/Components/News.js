import React from 'react'
import NewsItem from './NewsItem'
import Navbar from './Navbar'


function News() {
  return (
    <div>
      <Navbar/>
      
       
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
