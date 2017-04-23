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
      addParPerfil("usuario","Apr 23 - 5 min read");

      function addParPerfil(clase, texto) {
        var parPerfil = document.createElement("p");
        parPerfil.setAttribute("class", clase);
        divD.appendChild(parPerfil);
        parPerfil.appendChild(document.createTextNode(texto));
      }
    }; addDatosPerfil();
  }; addTop();

  /** Agregando centro**/
  function addCenter(titulo, parrafo){
    var center = document.createElement("section");
    container.appendChild(center);

    var title = document.createElement("h1");
    center.appendChild(title);
    title.appendChild(document.createTextNode(titulo));

    var parCenter = document.createElement("p");
    parCenter.setAttribute("class", "parrafo");
    center.appendChild(parCenter);
    parCenter.appendChild(document.createTextNode(parrafo));

  }; addCenter("Hazlo con estilo : Tipografías, iconos y sprite", "Te imaginas el mundo sin tipos de letra, tamaños, colores, o sin iconos , nada, nada sería iguaaaaaal!!!! Pero gracias a muchos desarrolladores y diseñadores, hoy contamos con una inimaginable gama de fuentes para nuestro desarrollos web, pero la pregunta que nos hacemos es, ¿existen reglas, hay una mejor forma de hacerlo, no sé que tipografía usar? Tengo muchas preguntas y pocas respuestas!! Vamos paso a paso…");


/** Agregando footer **/
  function addFooter(){
    var footer = document.createElement("footer");
    cuerpo.appendChild(footer);
    //footer.appendChild(document.createTextNode("~~ Coded by Ruth Salvador ~~"));

    function footerLeft(){
      var footLeft = document.createElement("nav");
      footer.appendChild(footLeft);

      addFootL("icon-heart");
      addFootL("icon-chat");

      function addFootL(clase) {
        var span = document.createElement("span");
        span.setAttribute("class", clase);
        footLeft.appendChild(span);
      }
    }; footerLeft();

    function footerRight(){
      var footRight = document.createElement("nav");
      footer.appendChild(footRight);

      addFootR("icon-twitter");
      addFootR("icon-facebook");
      addFootR("icon-marcador");

      function addFootR(clase) {
        var span = document.createElement("span");
        span.setAttribute("class", clase);
        footRight.appendChild(span);
      }


    }; footerRight();


  }; addFooter();

})
