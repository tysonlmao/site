export function openTab(statName) {
    var i;
    var x = document.getElementsByClassName("statistic-duels");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    document.getElementById(statName).style.display = "block";
  }