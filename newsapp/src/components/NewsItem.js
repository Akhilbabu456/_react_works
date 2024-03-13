import React, { Component } from "react";

export class NewsItem extends Component {
  
  render() {
   let {title, description, imageUrl, newsUrl} = this.props
    return (
      <div className="my-3">
        <div className="card m-3" style={{width: "20rem"}}>
          <img src={imageUrl? imageUrl:"https://static.toiimg.com/thumb/msid-108435839,imgsize-557227,width-400,resizemode-4/108435839.jpg"} className="card-img-top" alt="..." style={{backgroundSize: "cover", height: "12rem"}}/>
          <div className="card-body">
            <h5 className="card-title">{title? title: "He gets upset quickly’: Manohar Lal Khattar "}...</h5>
            <p className="card-text">
              {description? description: "Anil Vij, who served as home minister in Manohar Lal Khattar's government, was not prese"}...
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
