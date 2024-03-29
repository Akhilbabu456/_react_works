import React from "react";

const NewsItem =(props)=>{
  
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card m-3">
          <div style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: "0"
            }}>
              <span className="badge rounded-pill bg-danger" style={{left: "88%", zIndex: "1"}}>
               {source}
              </span>
          </div>
          <img
            src={
              imageUrl
                ? imageUrl
                : "https://static.toiimg.com/thumb/msid-108435839,imgsize-557227,width-400,resizemode-4/108435839.jpg"
            }
            className="card-img-top"
            alt="..."
            style={{ backgroundSize: "cover", height: "12rem" }}
          />
          
          <div className="card-body">
            <h5 className="card-title">
              {title ? title : "He gets upset quickly’: Manohar Lal Khattar "}..{" "}
              
            </h5>
            <p className="card-text">
              {description
                ? description
                : "Anil Vij, who served as home minister in Manohar Lal Khattar's government, was not prese"}
              ...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date).toGMTString()}{" "}
              </small>
            </p>
            <a href={newsUrl} target="_blank" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default NewsItem;
