var cartList = [];
module.exports = {
  /**
  * Get carts
  */
  getCarts: async (options) => {
    
    var data, status;
    if (!(cartList == undefined || cartList == 0)) {
      data = cartList;
      status = '200';
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Create a user&apos;s cart
  * @param options.cartID ID of the cart 
  */
  postCarts: async (options) => {
    var cartIdentification = (+options.cartID), data, status;

    // Verifies that the cartID passed thru the query param is an integer, if not then status 400
    if (Number.isInteger(cartIdentification)) {
      if (cartList.length == 0) {
        data = {
          "cartID": options.cartID,
          "cartTime": "0",
          "customerID": "123456789",
          "orderID": "0",
          "productID": "0",
          "productModifier": "0",
          "quantity": "0",
        };
      }
      else {
        var newCusID = (+cartList[cartList.length-1].customerID) + 1, newOrID = (+cartList[cartList.length-1].orderID) + 1;
        data = {
          "cartID": options.cartID,
          "cartTime": "0",
          "customerID": newCusID.toString(),
          "orderID": newOrID.toString(),
          "productID": "0",
          "productModifier": "0",
          "quantity": "0",
        };
      }
        
        status = '200';

        // Add the newly created cart to the "database"
        cartList.push(data);
    }
    else {
      status = '400';
      data = "Unexpected Error! Cart not created due to invalid cartID.";
    }

    return {
      status: status,
      data: data
    };
  },

  /**
  * Update all carts
  */
  putCarts: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data, status, newID, newTime;
    // checking if carts exist in cart list
    if (!(cartList == undefined || cartList == 0)) {
      // loop thru list of carts and modify all carts
      for (var i = 0; i < cartList.length; i++) {
        newID = (+cartList[i].cartID) + 1;
        newTime = (+cartList[i].cartTime) + 1;
        cartList[i].cartID = newID;
        cartList[i].cartTime = newTime;
      }
      data = cartList;
      status = '200';
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Delete all carts
  */
  deleteCarts: async (options) => {
    // This effectively deletes all the entries from the "database"
    cartList.length = 0;

    if (cartList.length == 0) {
      var data = "All carts successfully deleted.",
        status = '200';
    }
    else {
      var data = "An error occured while deleting all carts.",
        status = '400';
    }

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Get cart based on ID
  * @param options.cartID ID of the cart 
  */
  getCartID: async (options) => {
    var data, status;
    if (!(cartList == undefined || cartList == 0)) {
      // Finds correct cartID in list (if available)
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].cartID == options.cartID) {
          data = cartList[i];
          status = '200';
          break;
        }
        else {
          data = "Error: Cart not found in database with specified cartID!";
          status = '400';
        }
      }
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }

    // If the cartID is found in the list, it will return that specific cart's data in JSON format.
    // Otherwise, the error message will be returned with a status code of 400.
    return {
      status: status,
      data: data
    };  
  },

  /**
  * Delete cart based on ID
  * @param options.cartID ID of the cart 
  */
  deleteCartID: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data, status;
    if (!(cartList == undefined || cartList == 0)) {
      // Finds correct cartID in list (if available)
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].cartID == options.cartID) {
          cartList.splice(i, 1);
          data = "Successfully Deleted Specified Cart";
          status = '200';
          break;
        }
        else {
          data = "Error: Cart not found in database with specified cartID!";
          status = '400';
        }
      }
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Track Cart Status
  * @param options.cartID ID of the cart
  */
  getCartIDCartTime: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data, status;
    if (!(cartList == undefined || cartList == 0)) {
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].cartID == options.cartID) {
          data = cartList[i].cartTime;
          status = '200';
          break;
        }
        else {
          data = "Error: Cart not found in database with specified cartID!";
          status = '400';
        }
      }
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Product Modification
  * @param options.cartID ID of the cart   * @param options.productID ID of the product   * @param options.productModifier Amount of product 
  */
  postCartIDProductIDProductModifier: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data, status;
    if (!(cartList == undefined || cartList == 0)) {
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].cartID == options.cartID) {
          cartList[i].productID = options.productID;
          cartList[i].productModifier = options.productModifier;
          cartList[i].quantity++;
          data = cartList[i];
          status = '200';
          break;
        }
        else {
          data = "Error: Cart ID Invalid";
          status = '400';
        }
      }
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }
    
    return {
      status: status,
      data: data
    };  
  },

  /**
  * Delete from cart
  * @param options.cartID ID of the cart   * @param options.productID ID of the product   * @param options.productModifier Amount of product 
  */
  deleteCartIDProductIDProductModifier: async (options) => {
    var data, status;
    if (!(cartList == undefined || cartList == 0)) {
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].cartID == options.cartID) {
          if (cartList[i].productID == options.productID) {
            cartList[i].productID = "0";
            cartList[i].productModifier = "0";
            cartList[i].quantity = "0";
            data = "Item Deleted From Cart";
            status = '200';
            break;
          }
          else {
            data = "Error: Product ID Invalid";
            status = '400';
          }
        }
        else {
          data = "Error: Cart ID Invalid";
          status = '400';
        }
      }
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }

    return {
      status: status,
      data: data
    };  
  },

  /**
  * Update Product Quantity
  * @param options.cartID ID of the cart   * @param options.productID ID of the product   * @param options.productModifier Modification of product @param options.quantity
  */
  putCartIDProductIDProductModifierQuantity: async (options) => {
    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500


    // loop thru list of carts and modify all carts
    var data, status;
    if (!(cartList == undefined || cartList == 0)) {
      for (var i = 0; i < cartList.length; i++) {
        if (cartList[i].cartID == options.cartID) {
          if (cartList[i].productID == options.productID) {
            if (cartList[i].productModifier == options.productModifier) {
              // update the product quantity in cart list
              cartList[i].quantity = options.quantity;
              data = cartList[i];
              status = '200';
              break;
            }
            else {
              data = "Error: Product Modifer Invalid";
              status = '400';
            }
          }
          else {
            data = "Error: Product ID Invalid";
            status = '400';
          }
        }
        else {
          data = "Error: Cart ID Invalid";
          status = '400';
        }
      }
    }
    else {
      data = "Error: Cart List Empty";
      status = '400';
    }

    return {
      status: status,
      data: data
    };  
  },
};
