var conFoto = document.querySelector('.success');
var sinFoto = document.querySelector('.default');
var images = document.getElementById('images');
var overlay = document.querySelector('.overlay');
var resultado = document.querySelector('.resultado')

images.onchange = function () {
    var input = this.files[0]; 
    if (input) {
        conFoto.style.display="inline-block";
        sinFoto.style.display="none";
        document.getElementById('img_resultado').src = window.URL.createObjectURL(this.files[0]);
    } 

    else {
        conFoto.style.display="none";
        sinFoto.style.display="inline-block";
    }
};


function mostrar_resultado(){
	overlay.style.display="block";
    resultado.style.display="block";
	}
}



