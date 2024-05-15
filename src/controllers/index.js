const ADD_ITEM = "ADD_ITEM";
const TOGGLE_ITEM = "TOGGLE_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

let nextTodoId = 0;

/**
 * 
  @param {string} text 
 @returns {object} 
 */
export const addItem = (text) => ({
  type: ADD_ITEM,
  payload: {
    id: nextTodoId++,
    text,
  },
});

/**
 * 
 * @param {number} id 
 * @returns {object} 
 */
export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  payload: { id },
});

/**
 * 
 * @param {number} id -
 * @returns {object} 
 */
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: { id },
});
