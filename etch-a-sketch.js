const container = document.querySelector('#container');

const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'Etch-A-Sketch';
container.appendChild(title); 

var numofsqline = 16;
makegrid(numofsqline);

function makegrid(numofsqline){
    var grid = document.createElement('div');
    grid.classList.add('grid');
    container.appendChild(grid);

    gridsize = 400;
    var numofsqtot = numofsqline * numofsqline;


    for (i=0; i<numofsqtot; i++){
        var square = document.createElement('div');
        square.classList.add('square') ;

        var squaredim = gridsize/numofsqline;
        square.style.width = squaredim + 'px';
        square.style.height = squaredim + 'px';

        console.log(squaredim);

        grid.appendChild(square);
        square.addEventListener("mouseover", mouseover);
    }


}
function mouseover (event){
    var mouseover = event.target;
    mouseover.classList.add("mouseover");
}

function reset(){
    location.reload();
}

function changegrid(){
    var numofsqline = window.prompt("What grid size do you want?", "16");

    var removegrid = document.querySelector('.grid');
    console.log(removegrid);
    removegrid.parentNode.removeChild(removegrid);


    if (numofsqline == null || numofsqline == ""){
        numfsq = 16;
        makegrid(numofsqline);
    }
    else if (isNaN(numofsqline)){
        numofsqline = 16;
        makegrid(numofsqline);
    }
    else {
        makegrid(numofsqline);
    }       

}





