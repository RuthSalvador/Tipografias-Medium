window.addEventListener("load", function(){
  var cuerpo = document.getElementById("body");

  /** Agregando header**/
  var header = document.createElement("header");
  cuerpo.appendChild(header);

  /** Agregando lado izquierdo**/
  function addLeft(){
    var divLeft = document.createElement("div");
    header.appendChild(divLeft);

    addSpanL("sprite medium");
    addSpanL("raya");
    addSpanL("sprite foto");
    addSpanL("icon-twitter");
    addSpanL("icon-facebook");
    addSpanL("follow");

    function addSpanL(clase) {
      var span = document.createElement("span");
      span.setAttribute("class", clase);
      divLeft.appendChild(span);
      //span.appendChild(document.createTextNode("x"));
    }
  }; addLeft();

  /** Agregando lado derecho**/
  function addRight(){
    var divRight = document.createElement("nav");
    header.appendChild(divRight);

    addSpanR("edit");
    addSpanR("icon-lupa");
    addSpanR("numero");
    addSpanR("sprite perfil");
    addSpanR("sprite logo");

    function addSpanR(clase) {
      var span = document.createElement("span");
      span.setAttribute("class", clase);
      divRight.appendChild(span);
    }
  }; addRight();

/** Agregando contenido **/
  var container = document.createElement("div");
  cuerpo.appendChild(container);

  /** Agregando lado superior**/
  function addTop(){
    var sectionTop = document.createElement("section");
    container.appendChild(sectionTop);

    function addPicPerfil(){
      var divP = document.createElement("div");
      divP.setAttribute("class", "sprite perfil");
      sectionTop.appendChild(divP);
    }; addPicPerfil();

    function addDatosPerfil(){
      var divD = document.createElement("div");
      divD.setAttribute("class", "datos-perfil");
      sectionTop.appendChild(divD);

      addParPerfil("usuario nombre","Ruth Salvador");
      addParPerfil("usuario","Jedi Apprentice at Laboratoria. Trabajando para ver a más mujeres en el mundo de la programación.");
      addParPerfil("usuario","Apr 23 - 5 min read")

      function addParPerfil(clase, texto) {
        var parPerfil = document.createElement("p");
        parPerfil.setAttribute("class", clase);
        divD.appendChild(parPerfil);
        parPerfil.appendChild(document.createTextNode(texto));
      }
    }; addDatosPerfil();
  }; addTop();


























})
