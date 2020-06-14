function activeOne(){
    
        document.getElementById("nirvana").style.order = "2";
        document.getElementById("rafa").style.order = "1";
        document.getElementById("puth").style.order = "3";


        document.getElementById("nirvana").style.width = "200px";
        document.getElementById("nirvana").style.height = "200px";

        document.getElementById("rafa").style.width = "150px";
        document.getElementById("rafa").style.height = "150px";
      
        
        document.getElementById("puth").style.width = "150px";
        document.getElementById("puth").style.height = "150px";

        document.getElementById("rafa").style.transition = "width 0.5s linear, height 0.5s linear";
        document.getElementById("nirvana").style.transition = "width 0.5s linear, height 0.5s linear";
}

function activeTwo(){
        document.getElementById("rafa").style.order = "2";
        document.getElementById("nirvana").style.order = "1";
        document.getElementById("puth").style.order = "3";

        document.getElementById("rafa").style.width = "200px";
        document.getElementById("rafa").style.height = "200px";

        document.getElementById("nirvana").style.width = "150px";
        document.getElementById("nirvana").style.height = "150px";

        document.getElementById("puth").style.width = "150px";
        document.getElementById("puth").style.height = "150px";

}

function activeThree(){
    document.getElementById("rafa").style.order = "3";
    document.getElementById("nirvana").style.order = "1";
    document.getElementById("puth").style.order = "2";

    document.getElementById("puth").style.width = "200px";
    document.getElementById("puth").style.height = "200px";

    document.getElementById("nirvana").style.width = "150px";
    document.getElementById("nirvana").style.height = "150px";

    document.getElementById("rafa").style.width = "150px";
    document.getElementById("rafa").style.height = "150px";
}