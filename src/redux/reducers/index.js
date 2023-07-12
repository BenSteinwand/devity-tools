import { combineReducers } from "redux";
import UserProfileReducer from "./UserProfileReducer";
import WidgetNotesReducer from "./WidgetNotesReducer";
import DevityPanelsReducer from "./DevityPanelsReducer";

export default combineReducers({ 
    UserProfileReducer,
    WidgetNotesReducer,
    DevityPanelsReducer
});