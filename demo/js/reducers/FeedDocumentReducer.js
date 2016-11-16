import {FeedDocumentActionType} from "../actions/FeedDocumentAction";


export const defaultFeedDocumentState=
{
  data:[],
  limit:2,
  offset:0,
  pageNum:0,
  url:"http://localhost:8080/feedItems"
};

function feedDocument(state=defaultFeedDocumentState,action)
{
  switch(action.type)
  {
    case FeedDocumentActionType.LOAD_DATA:
      return {...state, ...action.returnedData};
    case FeedDocumentActionType.CHANGE_OFFSET:
      return {...state,offset:action.offset};
  }
  return state;
}

export default feedDocument;
