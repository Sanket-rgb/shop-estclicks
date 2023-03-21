export const addItemToCart = (name, price, quantity) => {
  const itemObject = {
    name: name,
    price: price,
    quantity: quantity,
  };

  const itemInstance = localStorage.getItem("cart");
  if (itemInstance === null) {
    localStorage.setItem("cart", JSON.stringify([itemObject]));
  } else {
    const itemList = JSON.parse(itemInstance);
    let itemFound = false;
    for (let i = 0; i < itemList.length; i++) {
      if (itemList[i].name === name) {
        itemFound = true;
        itemList[i].quantity = (+itemList[i].quantity + +quantity).toString();
      }
    }
    itemFound ? null : itemList.push(itemObject);

    localStorage.setItem("cart", JSON.stringify(itemList));
  }
};

export const decrementItemFromCart = (name) => {
  const itemList = JSON.parse(localStorage.getItem("cart"));

  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].name === name) {
      if (itemList[i].quantity === "1") {
        if (i === 0) {
          itemList.shift();
        } else {
          itemList.splice(i, i);
        }
      } else {
        itemList[i].quantity = (+itemList[i].quantity - 1).toString();
      }
    }
  }

  localStorage.setItem("cart", JSON.stringify(itemList));
};

export const deleteItemFromCart = (name) => {
  const itemList = JSON.parse(localStorage.getItem("cart"));

  for (let i = 0; i < itemList.length; i++) {
    if (itemList[i].name === name) {
      if (i === 0) {
        itemList.shift();
      } else {
        itemList.splice(i, i);
      }
    }
  }
  localStorage.setItem("cart", JSON.stringify(itemList));
};

export const localDBSize = () => {
  const cartList = localStorage.getItem("cart");
  let totalItems = 0;

  if (cartList) {
    const list = JSON.parse(cartList);

    for (let i = 0; i < list.length; i++) {
      totalItems = totalItems + +list[i].quantity;
    }
    return totalItems;
  } else {
    return totalItems;
  }
};

//   const itemQuantity = localStorage.getItem(key);

//   localStorage.setItem(key, +itemQuantity - 1);
