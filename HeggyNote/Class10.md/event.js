window.onload = function () {
  document.getElementById('myBtn').addEventListener('click', function(event){
    console.log(event.target);
  }, true), // true capturing delegation, left blank it is bubbling delegation model.

  document.getElementById('myBtn')
};

function myHandler()