export const getStockStatus = (quantity) => {
    if (quantity > 5) {
      return { text: `In Stock: ${quantity}`, color: "lightgreen", className: "inStock" };
    } else if (quantity > 0 && quantity <= 5) {
      return { text: `Low Stock: ${quantity}`, color: "orange", className: "lowStock" };
    } else {
      return { text: "No Stock", color: "red", className: "noStock" };
    }
  };
  