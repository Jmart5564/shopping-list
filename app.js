import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import { getAllItems, addItem } from './services/shopping-service.js';
import createAddItem from './components/AddItem.js';
import createItemList from './components/List.js';


// State
let user = null;
let list = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    list = await getAllItems();

    display();
}

async function handleSignOut() {
    signOut();
}


async function handleAdd(item, quantity) {
    const newItem = await addItem(item, quantity);

    list.push(newItem);
    
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const ItemList = createItemList(document.querySelector('.list'));

const AddItem = createAddItem(document.querySelector('#form'), { handleAdd }); 

function display() {
    User({ user });
    AddItem();
    ItemList({ list });

}


handlePageLoad();
