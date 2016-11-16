import React, {Component} from 'react';
import ReactDOM  from "react-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {changeOffset,loadFeedDocumentFromServer} from "../actions/FeedDocumentAction";
import FeedItems from "./FeedItems";
import ReactPaginate from "react-paginate";

export class FeedDocument extends Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      data: [],
      offset: 0
    }
  }

  componentDidMount()
  {
    this.props.loadFeedDocumentFromServer(this.props.feedDocument.url,this.props.feedDocument.limit,this.props.feedDocument.offset);
  }

  handlePageClick = (data) =>
  {
    let selected = data.selected;
    console.log("selected: "+selected);
    let offset = Math.ceil(selected * this.props.feedDocument.limit);
    this.props.loadFeedDocumentFromServer(this.props.feedDocument.url,this.props.feedDocument.limit,offset);
    console.log("this.props.feedDocument.offset: "+this.props.feedDocument.offset);
    this.props.changeOffset(offset);
  };

  render()
  {
    return (
      <div className="commentBox">
        <FeedItems />
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={this.props.feedDocument.pageNum}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={4}
                       clickCallback={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"}/>
      </div>
    );
  }
};

export default connect
(
  state => state,
  dispatch => bindActionCreators
  (
    {
      ...{changeOffset,loadFeedDocumentFromServer},
    },
    dispatch
  )
)(FeedDocument)
