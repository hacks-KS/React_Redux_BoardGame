const initialState = {
  history: Array(9).fill(null),
  stepNumber: 0,
  xIsNext: true
}

export default function Reducer(state=initialState, action) {
  switch(action.type){
    case "TURN_CHANGE":
      const Return_Value = {
        history: state.history.concat([{action.squares}]),
        stepNumber: state.history.length,
        xIsNext: !state.xIsNext
      }
      return Return_Value;
    case "JUMP_HISTORY":
      const Return_Value = {
        stepNumber: action.step,
        xIsNext: action.step % 2 ? false : true
      }
      return Return_Value;
    default:
      return state;
  }
}
