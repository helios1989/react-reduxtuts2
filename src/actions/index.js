
export function selectBook(book) {
    alert('this is selected');
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "BOOK_SELECTED",
      payload: book
    };
  }

  export function clickMe(book) {
    alert('click me is clicked');
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property.
    return {
      type: "BOOK_SELECTED",
      payload: book
    };
  }