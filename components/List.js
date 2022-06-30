

export default function createItemList(root) {

    return ({ itemList }) => {
        root.innerHTML = '';

        for (const item of itemList) {
            const li = ListItems(item);

            root.append(li);
        }
    };
}

function ListItems(item) {

    const li = document.createElement('li');
    li.classList.add('single-item');
    
    const ingredient = document.createElement('p');
    ingredient.classList.add('ingredient');
    ingredient.textContent = item.item;
    
    const quantity = document.createElement('p');
    quantity.classList.add('quantity');
    quantity.textContent = item.quantity;
    
    li.append(ingredient, quantity);
    
    
    
    return li;
}
