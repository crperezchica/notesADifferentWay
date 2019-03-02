//inital setup of reducer
const initalState = {
  tile: 'Title',
  body: 'My Body'
};

export default function reducer(state = initalState, action) {
  return state; //returning oringial state because no store
}
