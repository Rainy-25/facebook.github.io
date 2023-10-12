window.onload = (event) => {
 /* // Get the toggle switch input and status element
const toggleSwitch = document.getElementById('toggle');
const toggleStatus = document.getElementById('toggle-status');

// Add an event listener to the toggle switch
toggleSwitch.addEventListener('change', function() {
  if (toggleSwitch.checked) {
    toggleStatus.textContent = 'Add your ON state functionality here if needed Get the toggle switch input and status element Add an event listener to the toggle switch';
    // Add your ON state functionality here if needed
  } else {
    toggleStatus.textContent = 'Add you...';
    // Add your OFF state functionality here if needed
  }
});



function myfun () {
    let x = document.getElementById('mydiv');
    let z = document.body;
    z.classList.toggle('black');
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function myfn () {
   let v = document.getElementById('hello');
   v.innerHTML = "there..";

}
*/



  let m = document.getElementById('my-div');
  let btns = m.getElementsByClassName('btn');
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
      let act = document.getElementsByClassName("active");
      act[0].className = act[0].className.replace(" active", "");
      this.classList.add('active');
    });
  }

/*
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
*/
}