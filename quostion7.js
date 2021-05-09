window.onload = function(){

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200) {
        console.log(xhttp.response);
      }
}

  xhttp.open("GET", "http://www.example.com/api/get/1", true);
  xhttp.send();
//   console.log(xhttp);

}