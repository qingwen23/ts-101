# Your first type

## Basic types

### Strings
```ts
const name: string = 'vong';
```

### Numbers
```ts
const age: number = 300;
```

### Booleans
```ts
const isOld: boolean = false;
```

### Arrays
```ts
const hobbies: string[] = ['eating', 'sleeping', 'breathing'];
```

### Simple Objects
```ts
const menu: Record<string, number> = {
  friedRice: 10,
  friedChicken: 15,
}
```

## Custom types
There are two ways to declare custom types in TypeScript.

1. `type`
```ts
type MenuItem = {
  name: string;
  price: number;
}
```

2. `interface`
```ts
interface MenuItem {
  name: string;
  price: number;
}
```

### What's the difference? 🤷

#### Extending
For `type`s you extend by
```ts
type BaseMenuItem = {
  name: string;
  price: number;
};

type MilkTeaMenuItem = BaseMenuItem & {
  sugarLevels: string[];
}
```

For `interface`s you extend by
```ts
interface BaseMenuItem {
  name: string;
  price: number;
}

interface MilkTeaMenuItem extends BaseMenuItem {
  sugarLevels: string[];
}
```

`type`s are useful when dealing with generics.

### Which one should I use? 🤔

Generally, try to use `type`s wherever you can and use `interface`s when you need to extend objects.

## String literals
As the name suggests, these are types where we narrow down the value of a string to literally the value specified.
```ts
type AddRestaurantAction = {
  type: 'ADD_RESTAURANT';
  payload: {
    name: 'KFC',
    address: '123 Chicken Street',
    priceRange: '$'
  };
};
```

## Union Types
`type`s are useful when you want to declare union types like:
```ts
type ActionType = 'ADD_RESTAURANT' | 'DELETE_RESTAURANT';
```

## Exercise
Let's type your state and all your actions.
