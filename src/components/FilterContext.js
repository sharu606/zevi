import { createContext } from "react";

const FilterContext = createContext({
  mango: 0,
  hm: 0,
  500: 0,
  3000: 0,
  rating: {
    1: 0,
    3: 0,
    4: 0,
    5: 0,
    2: 0,
  },
});

export default FilterContext;
