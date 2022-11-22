import React, { Component } from "react";
import newsCover from "./newsCover.jpg";
export class Newsitem extends Component {
    render() {
        let { newsTitle, imageUrl, newsDescription, newsUrl, publishedAt, source, mode } =
            this.props;

        return (
            <div className="card my-3 newsCard" style={{
                boxShadow: mode ? "4px 4px 4px 4px rgba(3,3,3,.3)" : "4px 4px 4px 4px rgba(142,143,145,.1)",
                borderRadius: "5px", backgroundColor: mode ? "#15284c" : "white",
                overflow: "hidden", border: "none"
            }}>
                <div className={`text-bg-${mode ? "light" : "dark"} sourceBadge`} >
                    {source}
                </div>
                <img
                    src={imageUrl ? imageUrl : newsCover}
                    className="card-img-top"
                    alt="..."

                />
                <div className="card-body">
                    <h5 className="card-title">{newsTitle}</h5>
                    <div className="card-text" style={{ margin: "4px" }}>
                        <small className="text-muted">
                            {new Date(publishedAt).toGMTString()}
                        </small>
                    </div>
                    <p className="card-text">
                        {newsDescription ? newsDescription.slice(0, 88) : newsDescription}
                    </p>
                    <a
                        href={newsUrl}
                        className="btn btn-primary btn-sm"
                        target="_blank"
                        rel="noreferrer"
                        style={{ borderRadius: "2px" }}
                    >
                        Read More
                    </a>
                </div>
            </ div>
        );
    }
}
export default Newsitem;
