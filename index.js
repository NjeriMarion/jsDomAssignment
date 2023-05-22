
document.body.style.fontSize = '20px';
document.body.style.lineHeight = '30px';
document.body.style.padding = '2% 0 0 5%';


// change the document backgroundcolour to silver
document.body.style.backgroundColor = 'silver';


// change the font colour for h1 title tag to green
document.getElementById('title').style.color = '#2b8a3e';
document.getElementById('title').style.borderBottom = 'double 5px';
document.getElementById('title').style.margin = '0 35% 5% 27%';
let para = document.querySelector('p')
para.style.fontSize= '30px';
para.style.fontWeight= '900';


// change the font case for h3 title tags to uppercase
document.querySelector('h3').style.textTransform = 'uppercase';
document.getElementById('h3').style.textTransform = 'uppercase';


// add one more fruit to the fruits list
let additionalFruits = document.createElement('li');
additionalFruits.innerHTML = "Kiwi";
document.getElementById('fruitlist').appendChild(additionalFruits);
document.getElementById('fruitlist').style.listStyle = 'none';


// add one more vegetable to the vegetables list
let additionalVeges = document.createElement('li');
additionalVeges.innerHTML = "Brocolli";
document.getElementById('VegList').appendChild(additionalVeges);
document.getElementById('VegList').style.listStyle = 'none';
