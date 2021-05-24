let counter = 0;

function openPage(pageName, elmnt, color) {
  let id = document.getElementById("color-btn")
  console.log(id);

  if ( counter === 1 && color === "black"){
    console.log("counter is 1, color is black");
    color = "red";
    id.textContent = "this hurts my eyes";
    counter = 0;
  }

  if(id === "back to red please ..."){
    color = "red";
  }

  if (color === "black"){
    counter = 1;
    id.textContent = "back to red please ... ";
  }

  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";

  elmnt.style.backgroundColor = color;
  console.log(counter, color)

}

document.getElementById("defaultOpen").click();

function playAudio(url) {

  let id = document.getElementById("birds");
  new Audio(url).play();

}

function chooseLove() {
  var retVal = confirm("Do you choose Love not War?");
    if( retVal == true ) {
       alert("We can be friends");
       return true;
    } else {
       return false;
    }
}
