document.addEventListener('DOMContentLoaded', function() {
  let grid = document.querySelector('.grid')
  for (var i = 0; i < 25; i++) {
    let count = 0
    let i = document.createElement('div')
    for (var x = 0; x < 25; x++) {
      let x = document.createElement('div')
      x.className = 'each'
      i.appendChild(x)
      count += 1
    }
    grid.appendChild(i)
  }
  let body = document.querySelector('body')
  let colorGrid = document.createElement('div')
  colorGrid.className = 'selector'
  body.appendChild(colorGrid)
  for (var j = 0; j < 11; j++) {
    let count = 0
    let j = document.createElement('div')
    j.className = 'color-selector'
    colorGrid.appendChild(j)
  }
  // adding color to color grid
  var colorsArr = ['red', 'blue', 'green', 'black', 'orange', 'yellow', 'purple', 'brown', 'skin', 'skin-shadow', 'light-blue']
  var elements = document.getElementsByClassName('color-selector');
  var len = colorsArr.length;
  for (i = 0; i < elements.length; i++) {
    elements[i].className += ' ' + colorsArr[i % len];
  }
  // picking color with event color from palette
  let holder = null
  let red = document.getElementsByClassName('red')
  colorGrid.addEventListener("click", function() {
    console.log(red);
  })
  let chosenColor = '';
  function handleClick(event) {
    console.log(event.target)
    event.target.style.backgroundColor = chosenColor;
  }
  grid.addEventListener('click', handleClick);
  let selector = document.querySelector('.selector')
  function handleColorSelection(event) {
    // console.log('anything i want', event.target)
    chosenColor = event.target.classList[1];
  }
  selector.addEventListener('click', handleColorSelection)
})
