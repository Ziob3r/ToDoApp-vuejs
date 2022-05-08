import { createStore } from "vuex";

// const store = createStore({
//   state: {
//     count: 1,
//   },
//   mutations: {
//     increment(state, n) {
//       // mutate state
//       state.count += n;
//     },
//   },
// });
const store = createStore({
  state: {
    tasks: [
      {
        id: 1,
        name: "Zrobic coś takiego a nie innego",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        finish: false,
      },
      {
        id: 2,
        name: "Wynieść śmieci",
        details:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        finish: false,
      },
    ],
  },
  actions: {
    increment(context, item) {
      console.log("increment- actions");
      context.commit("increment", item);
    },
    addNewElement(context, item) {
      console.log("increment- actions2");
      context.commit("ADD_NEW_ELEMENT", item);
    },
  },
  mutations: {
    increment(state, item) {
      // mutate state
      console.log("increment- mutations");
      state.tasks[item.id].name = item.name;
    },
    ADD_NEW_ELEMENT(state, task) {
      console.log("increment- mutations2");
      const lastID = state.tasks.length;
      console.log(lastID);

      // task.id = lastId + 1;
      const newLocalTask = {
        id: state.tasks.length + 1,
        name: task.name,
        details: task.details,
        finish: task.finish,
      };
      console.log(newLocalTask);
      state.tasks.push(newLocalTask);
    },
  },
});
export default store;

// export default createStore({
//   state: {
//     products: [
//       {
//         id: 1,
//         name: "Chelsea Shoes",
//         price: 200,
//         shortdesc: "Best Drip in the Market",
//         url: "images/chelsea-shoes.png",
//       },
//       {
//         id: 2,
//         name: "Kimono",
//         price: 50,
//         shortdesc: "Classy, Stylish, Dope",
//         url: "images/kimono.png",
//       },
//     ],
//     mutations: {
//       addProductItem(state) {
//         console.log(state);
//       },
//       updateCartItem(state, updatedItem) {
//         state.cart = state.cart.map((cartItem) => {
//           if (cartItem.id == updatedItem.id) {
//             return updatedItem;
//           }

//           return cartItem;
//         });
//       },
//       removeCartItem(state, item) {
//         state.cart = state.cart.filter((cartItem) => {
//           return cartItem.id != item.id;
//         });
//       },
//     },
//   },
// });
