import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=12967ab15b234a9b99b045a30c3ab584"
    let data = await fetch(url);
    let parseData = await data.json()
    this.setState({articles: parseData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col col-xs-12 col-sm-6 col-md-4 col-lg-3" key={element.url}>
                <NewsItem  title={element.title?element.title.slice(0,45): ""} description={element.description?element.description.slice(0,88): ""} imageUrl={element.urlToImage} newsUrl={element.url} />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" className="btn btn-dark">Previous</button>
        <button type="button" className="btn btn-dark">Next</button>
        </div>
      </div>
    );
  }
}

export default News;
