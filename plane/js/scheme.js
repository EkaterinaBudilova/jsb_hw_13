'use strict'
const xhr = new XMLHttpRequest();
const sel = document.getElementById('acSelect');
let id = sel.options[sel.selectedIndex].value;
console.log(id);
let path = 'https://neto-api.herokuapp.com/plane/'+id;
xhr.open("GET", path, true);
console.log(path);
xhr.send();
let res;

const plane = document.querySelector('h3.text-center');
const seats = document.getElementById('totalPax');

function onChange() {
  id = sel.options[sel.selectedIndex].value;
  console.log(id);
  path = 'https://neto-api.herokuapp.com/plane/'+id;
  xhr.open("GET", path, true);
  console.log(path);
  xhr.send();
}

sel.addEventListener('change', onChange);

function onLoad() {
  res = xhr.responseText;
  console.log(res);
  let rs = JSON.parse(res);
  console.log(rs);
  plane.textContent = rs.title;
  seats.textContent = rs.passengers;
  
}

xhr.addEventListener("load", onLoad);
