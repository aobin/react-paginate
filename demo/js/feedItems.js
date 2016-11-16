import React, {Component} from "react";
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";
import $ from "jquery";

window.React = React;


export class FeedItems extends Component
{
  render() {
    let items = this.props.data.map(
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

  loadCommentsFromServer()
  {
    $.ajax
    (
      {
        url: this.props.url,
        /* crossDomain: true,
        headers: { 'Access-Control-Allow-Origin': '*' },*/
        jsonp:'callback',
        data: {limit: this.props.perPage, offset: this.state.offset},
        /*dataType: 'json',*/
        dataType:'jsonp',
        type: 'GET',

        success: data => {
          this.setState({data: data.feedDocument.feedItems, pageNum: Math.ceil(data.meta.totalCount / data.meta.limit)});
        },

        error: (xhr, status, err) => {
          console.error(this.props.url, status, err.toString());
        }
      }
    );
  }

  componentDidMount() {
    this.loadCommentsFromServer();
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.perPage);

    this.setState(
      {offset: offset}, () => {
        this.loadCommentsFromServer();
      }
    );
  };

  render()
  {
    return (
      <div className="commentBox">
        <FeedItems data={this.state.data}/>
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageNum={this.state.pageNum}
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

ReactDOM.render(
  <FeedDocument url={'http://localhost:8080/feedItems'}
       perPage={2}/>,
  document.getElementById('feed-document')
);
