function shop(products)
{
    const numberOfProducts = parseInt(products[0],10); 
    const allProducts = products.slice (1, numberOfProducts + 1);
    const allCommands = products.slice (numberOfProducts + 1);

   //console.log(numberOfProducts,allProducts,allCommands);  // така може да проверяваме какво сме направили

    for (const rawCommand of allCommands)
    {
        const commandComponents = rawCommand.split (' ');  // При команда 'Swap 1 4' ще стане =>  'Swap' ,'1', '4'
        const nameCommand = commandComponents[0];          // При команда 'Swap 1 4' ще стане => 'Swap'

        if (nameCommand === 'Sell')
        {
            //"Sell" command – you must remove the product at the first position in the array and print: "{product name} product sold!"

            const firstProduct = allProducts.shift();                    // Премахваме първия продукт
            console.log(`${firstProduct} product sold!`);
        }

        else if (nameCommand === 'Add')    // Пример 'Add Yogurt' трябва да разделим командата и продукта ('Add ' са 4  елемента )
        {

         // "Add {product name}" – place the given product name at the end of the array

         const nameOfProduct = rawCommand.slice(4);   // ще вземе съдържанието на стринга след 4 елемент 'Add Yogurt' => 'Yogurt'
         allProducts.push(nameOfProduct);             // Сложи продукта най -отзад на масива
         
        }

        else if (nameCommand === 'Swap')
        {
          //"Swap {start index} {end index}" – swap the products in the given index range and print: "Swapped!"

          const startIndex = parseInt(commandComponents[1],10);   // пример 'Swap 1 4' ще вземе => '1' запазено като ЧИСЛО
          const endIndex = parseInt(commandComponents[2],10);   // пример 'Swap 1 4' ще вземе => '4' запазено като ЧИСЛО

          //Check if the given indexes are valid.

          if (isNaN(startIndex) || startIndex < 0 || startIndex > allProducts.length) // isNaN() проверява дали НЕ Е число
          {
            continue;   // Ако някое от условията е ВЯРНО пропусни тази итерация и премини към следващата
          }

          if (isNaN(endIndex) || endIndex < 0 || endIndex > allProducts.length) 
          {
            continue;
          }

          // Разменяме продуктите на startIndex и endIndex
              [allProducts[endIndex], allProducts[startIndex]] = [allProducts[startIndex] , allProducts[endIndex]]

         console.log('Swapped!');
        }

        else if (nameCommand === 'End')
        {
            break;
        }
    }

    //: "Products left: {product1}, {product2}, {product3}, …" 
    //In case there are no products left, print: "The shop is empty". 

    if (allProducts.length)  // след 'End' ако има още продукти 
    {
         //"Products left: {product1}, {product2}, {product3}, …" 
         console.log(`Products left: ${allProducts.join(', ')}`);
    }

    else 
    {
          //In case there are no products left, print: "The shop is empty". 
          console.log(`The shop is empty`);
    }
}

  shop(['3', 'Apple', 'Banana', 'Orange', 'Sell', 'End', 'Swap 0 1'])
//shop(['5', 'Milk', 'Eggs', 'Bread', 'Cheese', 'Butter', 'Add Yogurt', 'Swap 1 4', 'End']) 
//shop(['3', 'Shampoo', 'Soap', 'Toothpaste', 'Sell', 'Sell', 'Sell', 'End'])