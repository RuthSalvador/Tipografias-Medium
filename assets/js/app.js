window.addEventListener("load", function(){
  var cuerpo = document.getElementById("body");

  /** Agregando header**/
  var header = document.createElement("header");
  cuerpo.appendChild(header);

  /** Agregando lado izquierdo**/
  function addLeft(){
    var divLeft = document.createElement("div");
    header.appendChild(divLeft);

    addSpan("sprite medium");
    addSpan("raya");
    addSpan("sprite foto");
    addSpan("icon-twitter");
    addSpan("icon-facebook");

    function addSpan(clase) {
      var span = document.createElement("span");
      span.setAttribute("class", clase);
      divLeft.appendChild(span);
    }
  }; addLeft();


})
