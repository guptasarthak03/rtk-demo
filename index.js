const store = require("../rtk-demo/app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/iceCream/icecreamSlice").icecreamActions;
const fetchUsers = require('./features/users/userSlice').fetchUsers

console.log("initial state", store.getState());

unsubscribe = store.subscribe(() => {
    console.log('updated state', store.getState());
});

store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(3));

// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.ordered());
// store.dispatch(icecreamActions.restocked(2));

// unsubscribe();
