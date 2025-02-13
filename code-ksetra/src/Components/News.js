import React, { Component } from 'react';
import Navbar from './Navbar';
import NewsItem from './NewsItem';

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      loading: false,
    };
  }

  async componentDidMount() {
    console.log('Fetching agriculture news...');
    let url =
      'https://newsdata.io/api/1/news?apikey=pub_662709b114c686cad4b6fabefe2ed05fc276a&q=Agriculture&country=in&language=en';
    
    try {
      let response = await fetch(url);
      let data = await response.json();
      console.log(data);

      //  Filter only articles related to agriculture
      const agricultureNews = data.results.filter(article => 
        article.category && article.category.includes("top")
      );

      this.setState({ results: agricultureNews || [] });
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  }

  render() {
    console.log('Rendering Agriculture News...');
    return (
      <div className='news'>
        <Navbar />
        <h1 className="text-center my-9">Today's Top Agriculture News</h1>
        <div className="container">
          <div className="row">
            {this.state.results.length === 0 ? (
              <h4 className="text-center">No news available</h4>
            ) : (
              this.state.results.map((element, index) => {
                return (
                  <div className="col-md-4 mb-3" key={element.article_id || index}>
                    <NewsItem
                      title={element.title?element.title.slice(0,45)+".....":""}
                      description={element.description?element.description.slice(0,88)+"......":"" }
                      imageUrl={element.image_url || 'https://via.placeholder.com/150'}
                      newsUrl={element.link }
                    />
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}
