import $ from "jquery";

export const FeedDocumentActionType=
{
  LOAD_DATA:"LOAD_DATA",
  CHANGE_OFFSET:"CHANGE_OFFSET"
};

export function changeOffset(offset)
{
  return {type:FeedDocumentActionType.CHANGE_OFFSET, offset:offset};
}

export function loadData(returnedData)
{
  return {type:FeedDocumentActionType.LOAD_DATA, returnedData:returnedData};
}

export function loadFeedDocumentFromServer(url,limit,offset)
{
  console.log("loadFeedDocumentFromServer, url:"+url+"    limit: "+limit+"   offset: "+offset);

  return(dispatch)=>
  {
    return $.ajax
    (
      {
        url: url,
        jsonp:'callback',
        async:false,
        data: {limit:limit, offset:offset},
        dataType:'jsonp',
        type: 'GET',

        success: data =>
        {
          let responseData = {data: data.feedDocument.feedItems, pageNum: Math.ceil(data.meta.totalCount / data.meta.limit)};
          dispatch(loadData(responseData));
        },

        error: (xhr, status, err) =>
        {
          console.error(url, status, err.toString());
        }
      }
    );


  }
}
