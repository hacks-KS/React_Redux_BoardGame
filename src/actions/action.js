export function turn_change(history, squares) {
  return {
    type: "TURN_CHANGE",
    history: history,
    squares: squares
  };
}

export function jump_history(step) {
  return {
    type: "JUMP_HISTORY",
    step: step
  };
}
