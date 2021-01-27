import { ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY } from "../actions/action-type/cart-actions";

import { data } from "../../data";

const INITIAL_STATE = {
  items: data,
  addedItems: [],
  total: 0
}


function cartReducer(state = INITIAL_STATE, action) {
  if (action.type === ADD_TO_CART) {
    let addedItem = state.items.find(item => item.id === action.id)
    // Eklenen elemanlarda aynı eleman varsa o elenanın sayısını artırmak için
    let existed_item = state.addedItems.find(item => action.id === item.id);
    if (existed_item) {
      addedItem.inventory -= 1;
      addedItem.quantity += 1;
      return {
        ...state,
        addedItems: [...state.addedItems],
        total: state.total + addedItem.price
      }
    } else {
      addedItem.quantity = 1;
      addedItem.inventory -= 1;
      //calculating the total
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
    }

  }
  if (action.type === REMOVE_ITEM) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id);

    //calculating the total
    let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
    itemToRemove.inventory += itemToRemove.quantity;
    itemToRemove.quantity = 0;
    return {
      ...state,
      addedItems: new_items,
      total: newTotal
    }
  }
  if (action.type === ADD_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    addedItem.quantity += 1
    addedItem.inventory -= 1;
    let newTotal = state.total + addedItem.price
    return {
      ...state,
      total: newTotal
    }
  }
  if (action.type === SUB_QUANTITY) {
    let addedItem = state.items.find(item => item.id === action.id)
    //if the qt == 0 then it should be removed
    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id)
      let newTotal = state.total - addedItem.price
      addedItem.inventory += 1;
      addedItem.quantity = 0;
      return {
        ...state,
        addedItems: new_items,
        total: newTotal
      }
    }
    else {
      addedItem.quantity -= 1;
      addedItem.inventory += 1;
      let newTotal = state.total - addedItem.price
      return {
        ...state,
        total: newTotal
      }
    }

  }
  else {
    return state;
  }


}


export default cartReducer;