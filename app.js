import { getUser, signOut } from './services/auth-service.js';
import { protectPage } from './utils.js';
import createUser from './components/User.js';
import { getAllItems, addItem } from './shopping-service.js';
import createAddItem from './components/AddItem.js';

const form = document.querySelector('#add-item-form');


// State
let user = null;
let items = [];

// Action Handlers
async function handlePageLoad() {
    user = getUser();
    protectPage(user);

    items = await getAllItems();

    display();
}

async function handleSignOut() {
    signOut();
}


async function handleAdd(item) {
    const item = await addItem({
        description: item,
        complete: false 
    });
    items.push(item);
    
    display();
}

// Components 
const User = createUser(
    document.querySelector('#user'),
    { handleSignOut }
);

const AddItem = createAddItem(document.querySelector()) 

function display() {
    User({ user });

}


handlePageLoad();
