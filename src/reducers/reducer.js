const initialState = {
  history: [
    {squares: Array(9).fill(null)}
  ],
  stepNumber: 0,
  xIsNext: true
}

export default function Reducer(state=initialState, action) {
  switch(action.type){
    case "TURN_CHANGE":
      let squares = action.squares
      const Return_Turn_Value = {
        history: action.history.concat([{squares: squares}]),
        stepNumber: action.history.length,
        xIsNext: !state.xIsNext
      }
      return Return_Turn_Value;
    case "JUMP_HISTORY":
      const Return_Jump_Value = {
        history: state.history,
        stepNumber: action.step,
        xIsNext: action.step % 2 ? false : true
      }
      return Return_Jump_Value;
    default:
      return state;
  }
}
