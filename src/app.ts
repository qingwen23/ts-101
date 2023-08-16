/* eslint-disable no-console */

// establish the type
// type RestaurantType = Record<string, string>;
type RestaurantType = {
  name: string;
  address: string;
  cuisine: string;
  priceRange: string;
};

type ActionType =
  | {
      type: 'ADD_RESTAURANT';
      payload: RestaurantType;
    }
  | {
      type: 'DELETE_RESTAURANT';
      payload: {
        name: string;
      };
    }
  | {
      type:
        | 'UPDATE_RESTAURANT'
        | 'SEARCH_RESTAURANT'
        | 'DISPLAY_RESTAURANT'
        | 'RANDOM_PICK';
      payload: Partial<RestaurantType>;
    };

type SearchResultType =
  | {
      name: string;
      address: string;
      cuisine: string;
      priceRange: string;
    }
  | undefined;

// state
let restaurants: RestaurantType[] = [
  {
    name: 'McD',
    address: 'Kuala Lumpur',
    cuisine: 'Fast Food',
    priceRange: '$$',
  },
  {
    name: 'KFC',
    address: 'Selangor',
    cuisine: 'Fast Food',
    priceRange: '$$',
  },
  {
    name: 'The Brew House',
    address: 'KLCC',
    cuisine: 'Western',
    priceRange: '$$$',
  },
];

// reducer
const reducer = (action: ActionType) => {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      restaurants.push(action.payload);
      return restaurants;
    case 'UPDATE_RESTAURANT':
      restaurants = restaurants.map((r) => {
        if (
          r.name === action.payload.name ||
          r.address === action.payload.address ||
          r.cuisine === action.payload.cuisine ||
          r.priceRange === action.payload.priceRange
        ) {
          return {
            name: action.payload?.name ?? r.name,
            address: action.payload?.address ?? r.address,
            cuisine: action.payload?.cuisine ?? r.cuisine,
            priceRange: action.payload?.priceRange ?? r.priceRange,
          };
        }
        return r;
      });
      return restaurants;
    case 'DELETE_RESTAURANT':
      restaurants = restaurants.filter((r) => r.name !== action.payload.name); // return a new array
      return restaurants;
    case 'SEARCH_RESTAURANT': // search by name
      const tempSearchResult: SearchResultType = restaurants.find(
        (r) => r.name === action.payload.name,
      );
      return tempSearchResult;
    case 'DISPLAY_RESTAURANT': // display by cuisine type
      let tempRestaurants: RestaurantType[] = [];
      tempRestaurants = restaurants.filter(
        (r) => r.cuisine === action.payload.cuisine,
      );
      return tempRestaurants;
    case 'RANDOM_PICK':
      return restaurants;
    default:
      throw new Error('Invalid action type');
  }
};

reducer({
  type: 'ADD_RESTAURANT',
  payload: {
    name: 'Tacos Tuesday 1',
    address: '123 Food Street 1',
    cuisine: 'Mexican',
    priceRange: '$',
  },
});

reducer({
  type: 'ADD_RESTAURANT',
  payload: {
    name: 'Tacos Tuesday 2',
    address: '123 Food Street 2',
    cuisine: 'Mexican',
    priceRange: '$',
  },
});

reducer({
  type: 'DELETE_RESTAURANT',
  payload: {
    name: 'Tacos Tuesday 1',
  },
});

// console.log('print: ', restaurants);

reducer({
  type: 'UPDATE_RESTAURANT',
  payload: {
    name: 'McD KL',
    address: 'Kuala Lumpur',
  },
});

console.log(
  'search result:',
  reducer({
    type: 'SEARCH_RESTAURANT',
    payload: {
      name: 'McD KL',
    },
  }),
);

console.log(
  'display:',
  reducer({
    type: 'DISPLAY_RESTAURANT',
    payload: {
      cuisine: 'Fast Food',
    },
  }),
);

// Review
// Support restaurant reviews.
// Star rating
// Review comments
// Compliments/complaint badges
// Display all restaurants above a certain star rating
