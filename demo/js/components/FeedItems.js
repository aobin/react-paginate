import React, {Component} from 'react';
import ReactDOM  from "react-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

export class FeedItems extends Component
{
  constructor(props)
  {
    super(props);
  }

  componentDidMount()
  {

  }

  render()
  {
    let {feedDocument} = this.props;

    let items = feedDocument.data.map(
      function (item, index) {
        return (
          <section className="rss-section show-inline">
            <img className="rss-section-img" src="images/img_1.png"/>
            <div className="rss-section-content">
              <h3>{item.title}</h3>
              <span><a href="#">265</a> Likes</span>
              <span><a href="#"> 84</a> Comments</span>
            </div>
          </section>
        );
      }
    );

    return (
      <div id="project-comments" className="rss-block">
        <h2 className="rss-title">My Inspirations</h2>

          {items}

      </div>
    );
  }
};

export default connect
(
  state => state
)(FeedItems)
