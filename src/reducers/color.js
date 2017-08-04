const initialState = 'red';

function randomColor() {
  const colors = ['red', 'blue', 'yellow', 'green', 'orange', 'purple', 'grey', '#456'];
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'RANDOM_COLOR' : {
      return randomColor();
    }
    // this thing is also triggered on an increment state change,
    // therefore default needs to be state
    default: {
      return state;
    }
  }
}
