function printEvenNums() {
  //get the start and end range from user
  var start = parseInt(document.getElementById("start").value);
  var end = parseInt(document.getElementById("end").value);
  var evenNums = "<br>";

  for (i = start; i <= end; i++) {
    if (i % 2 == 0) {
      evenNums += i + "<br>";
    }
  }

  document.getElementById("result").innerHTML = evenNums;
}
