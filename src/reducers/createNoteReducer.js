import { CREATE_TITLE, UPDATE_SUBTITLE } from '../actions/header';

const initialState = {
  title: 'Title',
  body: 'Body'
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case CREATE_TITLE:
      return { ...state, title: payload };
    case UPDATE_SUBTITLE:
      return { ...state, subtitle: payload };
    default: 
      return state;
  }
}
//Another way to write without destructoring
// export default function reducer(state = initalState, action ) {
//   switch(action.type) {
//     case NOTE_CREATE_TITLE:
//       return {
//         ...state,
//         title: action.payload
//       };
//   }
// }
