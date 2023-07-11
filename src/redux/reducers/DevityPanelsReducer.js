const initialState = {
    MaximizedWidgetId : null
}

export default function DevityPanelsReducer(state=initialState, action)
{
    switch (action.type) {
    case "setMaximizedWidgetId":
        return {
            ...state,
            MaximizedWidgetId: action.payload
        }
    default:
        return state;
    }
}