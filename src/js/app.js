// /* eslint-disable no-console */

// // state
// let restaurants = [
//   {
//     name: 'McD',
//     address: 'Kuala Lumpur',
//     cuisine: 'Fast Food',
//     priceRange: '$$',
//   },
// ];

// // reducer
// const reducer = (action) => {
//   switch (action.type) {
//     case 'ADD_RESTAURANT':
//       restaurants.push(action.payload);
//       break;
//     case 'UPDATE_RESTAURANT':
//       restaurants = restaurants.map((r) => {
//         if (
//           r.name === action.payload.name ||
//           r.address === action.payload.address ||
//           r.cuisine === action.payload.cuisine ||
//           r.priceRange === action.payload.priceRange
//         ) {
//           return {
//             name: action.payload?.name ?? r.name,
//             address: action.payload?.address ?? r.address,
//             cuisine: action.payload?.cuisine ?? r.cuisine,
//             priceRange: action.payload?.priceRange ?? r.priceRange,
//           };
//         }
//         return r;
//       });
//       break;
//     case 'DELETE_RESTAURANT':
//       restaurants = restaurants.filter((r) => r.name !== action.payload.name); // return a new array
//       break;
//     case 'SEARCH_RESTAURANT':
//       break;
//     case 'DISPLAY_RESTAURANT':
//       break;
//     case 'RANDOM_PICK':
//       break;
//     default:
//       throw new Error('Invalid action type');
//   }
// };

// reducer({
//   type: 'ADD_RESTAURANT',
//   payload: {
//     name: 'Tacos Tuesday 1',
//     address: '123 Food Street 1',
//     cuisine: 'Mexican',
//     priceRange: '$',
//   },
// });

// reducer({
//   type: 'ADD_RESTAURANT',
//   payload: {
//     name: 'Tacos Tuesday 2',
//     address: '123 Food Street 2',
//     cuisine: 'Mexican',
//     priceRange: '$',
//   },
// });

// reducer({
//   type: 'DELETE_RESTAURANT',
//   payload: {
//     name: 'Tacos Tuesday 1',
//   },
// });

// console.log('print: ', restaurants);

// reducer({
//   type: 'UPDATE_RESTAURANT',
//   payload: {
//     name: 'McD KL',
//     address: 'Kuala Lumpur',
//   },
// });

// console.log('print updated: ', restaurants);
