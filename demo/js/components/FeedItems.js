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
          <li key={index}>{item.title}</li>
        );
      }
    );

    return (
      <div id="project-comments" className="commentList">
        <ul>
          {items}
        </ul>
      </div>
    );
  }
};

export default connect
(
  state => state
)(FeedItems)
