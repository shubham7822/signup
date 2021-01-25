export const initialState = {
  detail: [],
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case "EMP_DETAIL":
      return {
        detail: [...state.detail, action.item],
      };
    case "DELETE_LIST":
      let List = [...state.detail];
      let idx = state.detail.findIndex((item) => item.id === action.id);

      if (idx >= -1 || 0) {
        List.splice(idx, 1);
      }
      return {
        detail: List,
      };

    default:
      return state;
  }
}

export default reducer;
