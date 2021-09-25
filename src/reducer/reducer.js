const favoriteReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_FAVORITES":
            return {
                ...state,
                favorites: [...state.favorites, action.payload],
            };
        case "REMOVE_FROM_FAVORITES": {
            const pastState = { ...state };
            const filtered = pastState.favorites.filter((item) => item.id !== action.payload.id);
            return {
                ...state,
                favorites: filtered,
            };
        }
        default:
            return state;
    }
};

export default favoriteReducer;
