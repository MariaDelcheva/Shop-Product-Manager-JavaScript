# Shop Product Manager 🛒 (JavaScript)

This project simulates a basic product management system for a shop. Written in **JavaScript**, the program reads a list of products and processes a series of commands to simulate selling, adding, or rearranging products in a virtual shop.

---

## 📋 Task Description

Annie accidentally mixed up the order of the products in the shop, which confused the customers. Your task is to restore order by building a program that will interpret commands and manage the product list correctly.

The function is named `shop(products)` and takes a single array of strings as input.

### Input Structure

1. First element: An integer `n` — the number of products.
2. Next `n` elements: The names of the products.
3. Remaining elements: Commands to be executed until the `"End"` command is received.

---

## ✅ Supported Commands

- `Sell`  
  → Removes the product at the first position and prints:  
  `"ProductName product sold!"`

- `Add {product name}`  
  → Adds the specified product to the end of the list.

- `Swap {index1} {index2}`  
  → Swaps the products at the given indices, if valid. Prints:  
  `"Swapped!"`

- `End`  
  → Terminates the session and prints the final result:
    - If there are products left:  
      `"Products left: product1, product2, product3, ..."`
    - If no products are left:  
      `"The shop is empty"`

### ⚠️ Command Validation

- Invalid commands (e.g., wrong keyword or missing arguments) are ignored.
- Index validation is required before executing a swap.

---

## 🧪 Example

```js
shop(['3', 'Apple', 'Banana', 'Orange', 'Sell', 'Swap 0 1', 'End']);
```

### Output:

```
Apple product sold!
Swapped!
Products left: Orange, Banana
```

---

## 🛠️ Technologies Used

- JavaScript
- Node.js
- Visual Studio Code

---

## 🚀 How to Run the Project

Follow these steps to run the program locally:

1. **Create a new file**  
   Save your code in a file named `shop.js`

2. **Open a terminal**  
   Navigate to the folder where the file is saved:

   ```bash
   cd path/to/your/project
   ```

3. **Run the script with Node.js**  

   ```bash
   node shop.js
   ```

> ✅ Ensure that Node.js is installed and added to your system PATH.

---

## 📌 Notes

- The function should be written in a modular and readable manner.
- Example inputs and expected outputs are good for testing.
- Only the function definition should be submitted to automatic judging platforms.
- Navigation in terminal can be done with:
  - `cd folder-name` to move into a folder
  - `cd ..` to go up one level
  - `TAB` to auto-complete folder names

---

## 📚 Educational Purpose

This project is perfect for practicing:

- Array manipulation
- Control flow (conditionals, loops)
- String operations
- Defensive programming (validations)
- Basic I/O handling in JavaScript
