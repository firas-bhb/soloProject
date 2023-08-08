
var small = "Small"
var meduim = 'Meduim'
var large = 'Large'

var parst = JSON.parse(localStorage.getItem("pizza"))
console.log(parst)
var pizza = [
    {
        id: 1,
        name: 'champignon',
        price: 4500,

        img: 'pizza-champignons-des-bois--60841p78501.jpg',
        size: '',
        quantity: 0


    },
    {
        id: 2,
        name: 'neptune',
        price: 4800,
        size: large,
        img: 'i136025-pizza-legere.webp',
        size: '',
        quantity: 0

    },
    {
        id: 3,
        name: '4 seasons',
        price: 5000,
        size: large,
        img: '4saison.jpg',
        size: '',
        quantity: 0

    },
    {
        id: 4,
        name: 'fruits de mer',
        price: 7000,
        size: large,
        img: 'pizza-fruit-mer-1200.jpg',
        size: '',
        quantity: 0
    },
    {
        id: 5,
        name: '4 fromages',
        price: 5000,
        size: large,
        img: 'i91087-pizza-aux-quatre-fromages.jpg',
        size: '',
        quantity: 0

    },
    {
        id: 6,
        name: ' margherita',
        price: 4500,
        size: large,
        img: 'pizza-margherita.jpeg',
        size: '',
        quantity: 0

    },
    {
        id: 7,
        name: 'pepproni',
        price: 5000,

        img: 'pizza_pepperoni.jpg',
        size: '',
        quantity: 0


    }, {
        id: 8,
        name: 'chicago',
        price: 6000,

        img: 'pchicago.jpg',
        size: '',
        quantity: 0


    },
    {
        id: 9,
        name: 'sciilian',
        price: 7000,

        img: 'sciilian.jpg',
        size: '',
        quantity: 0


    },
    {
        id: 10,
        name: 'jambon',
        price: 4000,

        img: 'jambon.jpg',
        size: '',
        quantity: 0


    },
    {
        id: 11,
        name: 'ricotta',
        price: 7000,

        img: 'ricotta.jpg',
        size: '',
        quantity: 0


    },




]
// each
function each(coll, f) {
    if (Array.isArray(coll)) {
        for (var i = 0; i < coll.length; i++) {
            f(coll[i], i);
        }
    } else {
        for (var key in coll) {
            f(coll[key], key);
        }
    }
}


// map
function map(array, f) {
    var acc = [];
    each(array, function (element, i) {
        acc.push(f(element, i));
    });
    return acc;
}
// filter
function filter(array, predicate) {
    var acc = [];
    each(array, function(element) {
        if (predicate(element)) {
            acc.push(element);
        }
    });
    return acc;
}


//reduce
 function reduce(array, f, acc) { 
       if (acc === undefined) { 
             acc = array[0]; 
             array = array.slice(1); 
       } 
       each(array, function(element, i) { 
             acc = f(acc, element, i); 
       }); 
       return acc; 
 }




function addCards(a){

    each(a, function (element, i) {
    
        $('.container').append(`<div id=${element.id} class='pizza'>
        <img src="${element.img}" alt="Snow" >
        <p class="name">${element.name}</p>
        <p class="price">
           ${element.price}
        </p>
     <p>quantity: <input type="number" id=${element.id + 'input'}></p>
     
    <form">
      <label for="pizza">Choose a size:</label>
      <select id=${element.id + 'select'} name="size" id="size">
        <option value="Large">Large</option>
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
      </select>
      
      
      </form>
      <input type="button" onclick="onclickcard(${element.id})" value="Submit">
        </div>`)
    
    })
}
addCards(pizza)
var quantité = ""
var arr = []
function onclickcard(id) {
    var imput = $(`#${id + 'input'}`).val()
    var select = $(`#${id + 'select'}`).val()
    console.log("imput", imput)
    console.log("select", select)

    each(pizza, function (e) {
        if (id === e.id) {
            e.quantity = imput
            e.size = select
            arr.push(e)
        }
    })
    var item = JSON.stringify(arr)
    localStorage.setItem('pizza', item)
    console.log(item)
    
    $('#cost').text(resultat())

}
$("#qte").change(function (element) { quantité = element.value })
console.log(quantité);
console.log($('.qte').val())

var resultat=function(){
    var res=0
    for (var i=0;i<arr.length;i++){
        console.log(arr[i])
        if(arr[i].size===large){
    res+=arr[i].quantity*arr[i].price*3}
    else if(arr[i].size===meduim){
        res+=arr[i].quantity*arr[i].price*2}

    else {    res+=arr[i].quantity*arr[i].price}
}
    

    return res+"TND"
}
function serashh(){
    var searched = $('#input_Pizza').val()
    console.log("hiiiiiii")
    var arra =pizza.filter(function(e){
     return (e.name).toLowerCase() === searched.toLowerCase() })
     console.log(arra)
     $('.container').empty()
     addCards(arra)
 
 } 