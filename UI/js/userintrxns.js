//get a reference to the main div
let main = document.getElementById('main');
let main2 = document.getElementById('main2');

//create elements common on both forms i.e. password,email and submit button
let sign_up_form = document.createElement('form');
let login_form = document.createElement('form');
let edit_form = document.createElement('form');
let submit_button = document.createElement('input');
let landing = document.getElementById('landing');
let data_table = document.createElement('table');
submit_button.setAttribute('type','submit');

//some order data for user and admin tables
let orders = {
    '1':{'Drink':'Coke','Food':'Pizza','Dessert':'N/A'},
    '2':{'Drink':'N/A','Food':'N/A','Dessert':'Ice Cream'},
    '3':{'Drink':'Pepsi','Food':'Cheeseburger','Dessert':'Pie'},
    '4':{'Drink':'Fanta','Food':'N/A','Dessert':'N/A'},
    '5':{'Drink':'Coke','Food':'N/A','Dessert':'Cake'},
    '6':{'Drink':'N/A','Food':'Pizza','Dessert':'Ice Cream'}
};

//create the password label and input
let passwordLabel = document.createElement('label');
passwordLabel.setAttribute('for','password');
passwordLabel.innerHTML="password:";
let passwordInput = document.createElement('input');
passwordInput.setAttribute('type','password');
passwordInput.setAttribute('id','password');

//create the email label and input field
let emailLabel = document.createElement('label');
emailLabel.setAttribute('for','email');
emailLabel.innerHTML = "email:";
let emailInput = document.createElement('input');
emailInput.setAttribute('type','email');
emailInput.setAttribute('id','email');

function show_sign_up_form()
{
    //clear the landing div
    let landing = document.getElementById('landing');
    landing.innerHTML = ""; 
    
    //give the sign-up form attributes including a reference to function that handles post
    sign_up_form.setAttribute('id','sign_up_form');
    sign_up_form.setAttribute('action','sign_up()')

    //attach name label and text field to the form
    //create the name label and textfield
    let nameLabel = document.createElement('label');
    nameLabel.setAttribute('for','name');
    nameLabel.innerHTML = "Name:";
    let nameInput = document.createElement('input');
    nameInput.setAttribute('type','text');
    nameInput.setAttribute('id','name');
    //attach name elements to form
    sign_up_form.appendChild(nameLabel);
    sign_up_form.appendChild(nameInput);

    //create the phone label and input field
    let phoneLabel = document.createElement('label');
    phoneLabel.setAttribute('for','phone');
    phoneLabel.innerHTML = "Mobile Phone:"
    let phoneInput = document.createElement('input');
    phoneInput.setAttribute('type','tel');
    phoneInput.setAttribute('id','phone');
    
    //attach phone elements to form
    sign_up_form.appendChild(phoneLabel);
    sign_up_form.appendChild(phoneInput);
    
    //attach email elements
    sign_up_form.appendChild(emailLabel);
    sign_up_form.appendChild(emailInput);

    //attach the password elements
    sign_up_form.appendChild(passwordLabel);
    sign_up_form.appendChild(passwordInput);

    //attach submit button to form
    sign_up_form.appendChild(submit_button);
    
    //finally append the sign-up form to the main div
    main.appendChild(sign_up_form);
}

function show_login_form()
{
    //let landing = document.getElementById('landing');
    landing.innerHTML = ""; 
    //give the sign-up form attributes including a reference to function that handles post
    login_form.setAttribute('id','login_form');
    login_form.setAttribute('action','login()');
    login_form.appendChild(emailLabel);
    login_form.appendChild(emailInput);
    login_form.appendChild(passwordLabel);
    login_form.appendChild(passwordInput);
    login_form.appendChild(submit_button);
    main.appendChild(login_form);
    
}

function show_item_search_form()
{
    //let landing = document.getElementById('landing');
    landing.innerHTML = ""; 
    edit_form.setAttribute('id','search_form');
    edit_form.setAttribute('action','search()');
    let searchLabel = document.createElement('label');
    let searchInput = document.createElement('input');
    searchLabel.innerHTML = "Search Item";
    searchInput.setAttribute('type','text');
    edit_form.appendChild(searchLabel);
    edit_form.appendChild(searchInput);
    edit_form.appendChild(submit_button);
    main.appendChild(edit_form);
}

function show_orders_table()
{
    landing.innerHTML = "";
    let th1 = document.createElement('th');
    let th2 = document.createElement('th');
    let th3 = document.createElement('th');
    let th4 = document.createElement('th');
    th1.innerHTML = "order_id";
    th2.innerHTML = "drink_name";
    th3.innerHTML = "food_name";
    th4.innerHTML = "dessert";
    data_table.appendChild(th1);
    data_table.appendChild(th2);
    data_table.appendChild(th3);
    data_table.appendChild(th4);
    let tr = document.createElement('tr');
    for(let i = 0; i <= orders.length; i++)
    {
           let el = document.createElement("td");
           let el2 = document.createElement("td");
           let el3 = document.createElement("td");
           let el4 = document.createElement("td");
           el.innerHTML = i;
           tr.appendChild(el);
           el2.innerHTML = orders[i].Drink;
           tr.appendChild(el2);
           el3.innerHTML = orders[i].Food;
           tr.appendChild(el3);
           el4.innerHTML = orders[i].Dessert;
           tr.appendChild(el4);
           data_table.appendChild(tr);
           //tr.innerHTML = "";
        }
        main2.appendChild(data_table);

}