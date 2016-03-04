/**
 * Created by zhangqiang on 2016/2/23.
 */
import { combineReducers } from 'redux';
import  { listComments , listCommentsScore} from "./commentReducer";
const rootReducer = combineReducers({
    commentList:listComments,
    CommentsScoreList:listCommentsScore,
});
export default rootReducer;