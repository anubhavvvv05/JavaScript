var arr = [{
    Team: 'CSK',
    primary: 'yellow',
    secondary: 'royalblue',
    Trophies: 5,
    FullName: 'Chennai Super Kings',
    Captain: 'Ruturaj Gaikwad',
},
{
    Team: 'RCB',
    primary: 'red',
    secondary: 'gold',
    Trophies: 1,
    FullName: 'Royal challengers bengluru',
    Captain: 'Rajat Patidar',
},
{
    Team: 'MI',
    primary: 'royalblue',
    secondary: 'gold',
    Trophies: 5,
    FullName: 'Mumbai Indians',
    Captain: 'Hardik Pandya',
}, 
{
    Team:'KKR',
    primary:'purple',
    secondary:'gold',
    Trophies: 3,
    FullName:'Kolkata Knight Riders',
    Captain:'Ajinkya Rahane',
},
 {
    Team:'SRH',
    primary:'orange',
    secondary:'black',
    Trophies: 1,
    FullName:'sunrisers Hyderabad',
    Captain:'Ishan Kishan',
}, 
{
    Team:'PBKS',
    primary:'red',
    secondary:'blue',
    Trophies: 0,
    FullName: 'punjab kings',
    Captain:'Rishabh Pant',
}, 
]




var btn = document.querySelector('button');
var h1 = document.querySelector('h1')
var main = document.querySelector('main')
var div = document.querySelector('div')

btn.addEventListener('click', function () {
    var winner = arr[Math.floor(Math.random()*arr.length)];

    h1.innerHTML = `
    <h4>${winner.FullName}</h4>
    <p>${winner.Captain}</p>
    <p><b>Trophies:</b> ${winner.Trophies}</p>
    
`;
     h1.style.color = winner.primary;

    main.style.backgroundColor = winner.primary
    div.style.backgroundColor = winner.secondary

    

})