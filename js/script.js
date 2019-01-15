import "./targetblank";  // pro otvírání odkazů v novém okně

function Rendruj(data, dodivu) {
  $(data).each(function(i) {
      $("<div class='respondent'></div>").appendTo(dodivu);
      $(".respondent").last().append("<img class='portret' src='" + this.f + "'>");
      $(".respondent").last().append("<p class='jmeno'><strong>" + this.j + " " + this.p + "</strong>, " + this.s + "</p>");
      $(".respondent").last().append("<p class='veta'></p>");
      if (!this.o1) {$(".veta").last().append("<span class='bezodpovedi'>bez odpovědi</span>")};
      if (this.o1) {$(".veta").last().append("<span class='cislo' title='Použil/a jste někdy pracovní e-mail k soukromým účelům?'>1</span>" + this.o1)};
      if (this.o2) {$(".veta").last().append(" <span class='cislo' title='Změnil/a jste v souvislosti s aférou v Německu své chování na internetu?'>2</span>" + this.o2)};
      if (this.o3) {$(".veta").last().append(" <span class='cislo' title='Kolik hesel na internetu používáte?'>3</span>" + this.o3)};
      if (this.o4) {$(".veta").last().append(" <span class='cislo' title='Používáte správce hesel?'>4</span>" + this.o4)};
     });
  $('.veta').readmore({
  		collapsedHeight: 140,
  		lessLink: '<a href="#">Méně</a>',
  		moreLink: '<a href="#">Více</a>',
	});
}

$(document).ready(function() {
  $.getJSON( "./../data/snemovna.json", function(data) {
    Rendruj(data, "#anketa1");  
  });
}); 