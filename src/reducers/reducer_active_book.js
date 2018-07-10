// State argument is not application state, only the state
// this reducer is responsible for
// eslint-disable-next-line
const  actionDefault = { title: "Javascript: The Good Parts", pages: 101 };
export default function(state = actionDefault, action = actionDefault) {
    // eslint-disable-next-line
    switch (action.type) {
      case "BOOK_SELECTED":
        return action.payload;
      default:
        state = actionDefault;
    }
    
    return state;
}  