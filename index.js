function myFunction(){
  document.getElementById("btn2").style.borderRadius="12px";
  document.body.style.backgroundImage = "url('background.jpg')";
}

function changeColor(obj){
  if (obj.style.color =='blue'){
    obj.style.color='black';
  }
  else{
    obj.style.color='blue';
  }
}