# Restaurant App State Machine

We are going to build a state machine with a reducer in Javascript first, then Typescript.

A reducer is a function that takes in an action and modifies state accordingly.

For example, an action can be:
```js
{
  type: 'ADD_RESTAURANT',
  payload: {
    name: 'Tacos Tuesday',
    address: '123 Food Street',
    cuisine: 'Mexican',
    priceRange: '$'
  }
}
```

Then our reducer will update our state:
```js
const restaurants = [];

const reducer = (action) => {
  switch(action.type) {
    case 'ADD_RESTAURANT':
      restaurants.push(action.payload);
      break;
    // Other action types here
    default:
      throw new Error('Invalid action type');
  }
}
```
