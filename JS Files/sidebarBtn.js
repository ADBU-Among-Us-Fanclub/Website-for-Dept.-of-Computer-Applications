//sidebar function
function activateBlockDisplay() {
    var x = document.getElementById("leenks");
    var content = document.getElementById("content");
    var subHeader = document.getElementById("sub-header");
    var def = document.getElementsByClassName("default")[0];
    var btn = document.getElementById("sidebarBtn");
    if (x.className === "navLinks"){
      x.className += " responsive";
      content.className += " responsive";
      subHeader.className += " responsive";
      btn.className = "blacked";
    }
    else{
      x.className = "navLinks";
      content.className = "content";
      subHeader.className = "sub-header";
      def.className = "default";
      btn.className = "";
    }
    //alert('hi');
}

//leftbar functions
function openleftbar(){
    document.getElementById("leftbarjs").style.width = "280px";
}
  
function closeleftbar(){
    document.getElementById("leftbarjs").style.width = "0";
}
