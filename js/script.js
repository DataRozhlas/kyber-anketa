import "./targetblank";  // pro otvírání odkazů v novém okně
import flexibility from "flexibility";

function Rendruj(data, dodivu) {
  $(data).each(function(i) {
      var respondentDiv = $("<div class='respondent'></div>");
      $(respondentDiv).append("<img class='portret' src='https://data.irozhlas.cz/kyber-anketa/img/" + this.f + "'>");
      $(respondentDiv).append("<p class='jmeno'><strong>" + this.j + " " + this.p + "</strong>, " + this.s + "</p>");
      if (!this.o1) {$(respondentDiv).append("<p class='veta'><span class='bezodpovedi'>bez odpovědi</span>")};
      if (this.o1) {$(respondentDiv).append("<p class='veta'><span class='cislo' title='Použil/a jste někdy pracovní e-mail k soukromým účelům?'>1</span>" + this.o1 + "</p>")};
      if (this.o2) {$(respondentDiv).append("<p class='veta'><span class='cislo' title='Změnil/a jste v souvislosti s aférou v Německu své chování na internetu?'>2</span>" + this.o2 + "</p>")};
      if (this.o3) {$(respondentDiv).append("<p class='veta'><span class='cislo' title='Kolik hesel na internetu používáte?'>3</span>" + this.o3 + "</p>")};
      if (this.o4) {$(respondentDiv).append("<p class='veta'><span class='cislo' title='Používáte správce hesel?'>4</span>" + this.o4 + "</p>")};
      respondentDiv.appendTo(dodivu)
     });
}

$(document).ready(function() {
  $.getJSON("https://data.irozhlas.cz/kyber-anketa/data/snemovna.json", function(data) {
    Rendruj(data, "#anketa1");  
  });
  $.getJSON("https://data.irozhlas.cz/kyber-anketa/data/senat.json", function(data) {
    Rendruj(data, "#anketa2");
  }); 
  flexibility(document.getElementById("anketa1"));
  flexibility(document.getElementById("anketa2"));
}); 
