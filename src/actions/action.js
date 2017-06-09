export function turn_change(squares) {
  return {
    type: "TURN_CHANGE",
    squares: squares
  };
}

export function jump_history(step) {
  return {
    type: "JUMP_HISTORY",
    step: step
  };
}
