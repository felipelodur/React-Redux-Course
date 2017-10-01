export function selectBook(book){
    // this is an ActionCreator
    // it returns an action
    // an action is an object with a type property.
    console.log('Hey');
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}