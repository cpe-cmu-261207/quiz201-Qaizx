const author = document.querySelector("#author")
const calculation = document.querySelector("#calculation")
const btn_toggle = document.querySelector("#toggle");
const length = document.getElementById('length')
const color = document.querySelector('#color')

// define more constants and variables here

btn_toggle.onclick = () => {
  if( btn_toggle.innerHTML === "Show Calculation"){
    btn_toggle.innerHTML = "Show Author"
  } 
  else btn_toggle.innerHTML = "Show Calculation"
}

// more codes for Search and Reset buttons here
