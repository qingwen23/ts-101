/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-unused-vars */

// establish the type
// type RestaurantType = Record<string, string>;
type RestaurantType = {
  name: string;
  address: string;
  cuisine: string;
  priceRange: string;
  starRating?: number;
  reviewComments?: string;
  badges?: string;
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
    }
  | {
      type: 'DISPLAY_REVIEW';
      payload: {
        starRatingNumber: number;
      };
    }
  | {
      type: 'ADD_REVIEW';
      payload: {
        name: string;
        starRating: number;
        reviewComments: string;
        badges: string;
      };
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

type RestaurantWithReviewType = {
  starRating: number;
  reviewComments: string;
  badges: string;
} & RestaurantType;

// const restaurantsWithReview: RestaurantWithReviewType[] = [
//   {
//     name: 'McD',
//     address: 'Kuala Lumpur',
//     cuisine: 'Fast Food',
//     priceRange: '$$',
//     starRating: 4,
//     reviewComments: 'Taste Good',
//     badges: 'Compliment',
//   },
//   {
//     name: 'KFC',
//     address: 'Selangor',
//     cuisine: 'Fast Food',
//     priceRange: '$$',
//     starRating: 3,
//     reviewComments: 'Taste Good',
//     badges: 'Compliment',
//   },
// ];

let tempRestaurants: RestaurantType[] = [];
// let tempRestaurantsWithReview: RestaurantType[] = [];

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
      tempRestaurants = restaurants.filter(
        (r) => r.cuisine === action.payload.cuisine,
      );
      return tempRestaurants;
    case 'RANDOM_PICK':
      if (action.payload.priceRange) {
        const budget: number = action.payload.priceRange.length;
        tempRestaurants = restaurants.filter(
          (r) => r.priceRange.length <= budget,
        );
      } else if (action.payload.cuisine) {
        tempRestaurants = restaurants.filter(
          (r) => r.cuisine === action.payload.cuisine,
        );
      } else {
        tempRestaurants = restaurants;
      }
      return tempRestaurants.length > 0
        ? tempRestaurants[Math.floor(Math.random() * tempRestaurants.length)]
        : tempRestaurants;

    case 'DISPLAY_REVIEW':
      tempRestaurants = [];
      restaurants.forEach((r) => {
        if (
          typeof r.starRating === 'number' &&
          r.starRating >= action.payload.starRatingNumber
        ) {
          tempRestaurants.push(r);
        }
      });
      return tempRestaurants;
    case 'ADD_REVIEW':
      if (action.payload.name) {
        // add review comments etc.
        // update the restaurant data
        restaurants = restaurants.map((r) => {
          if (r.name === action.payload.name) {
            return {
              name: r.name,
              address: r.address,
              cuisine: r.cuisine,
              priceRange: r.priceRange,
              starRating: action.payload?.starRating ?? r.starRating,
              reviewComments: action.payload?.reviewComments ?? r.reviewComments,
              badges: action.payload?.badges ?? r.badges,
            };
          }
          return r;
        });
        return restaurants;
      }
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

console.log(
  'Random Pick (Price Range):',
  reducer({
    type: 'RANDOM_PICK',
    payload: {
      priceRange: '$$',
    },
  }),
);

console.log(
  'Random Pick (Cuisine):',
  reducer({
    type: 'RANDOM_PICK',
    payload: {
      cuisine: 'Mexican',
    },
  }),
);

console.log(
  'Random Pick:',
  reducer({
    type: 'RANDOM_PICK',
    payload: {},
  }),
);

// Review
// Support restaurant reviews.
// Star rating
// Review comments
// Compliments/complaint badges
// Display all restaurants above a certain star rating
console.log(
  'after adding review',
  reducer({
    type: 'ADD_REVIEW',
    payload: {
      name: 'The Brew House',
      starRating: 2,
      reviewComments: 'Taste OK [Updated]',
      badges: 'Complaint',
    },
  }),
);

console.log(
  'after adding review',
  reducer({
    type: 'ADD_REVIEW',
    payload: {
      name: 'Tacos Tuesday 2',
      starRating: 4,
      reviewComments: 'Taste OK [Updated]',
      badges: 'Complaint',
    },
  }),
);

console.log(
  'display restaurants with review:',
  reducer({
    type: 'DISPLAY_REVIEW',
    payload: {
      starRatingNumber: 4,
    },
  }),
);
