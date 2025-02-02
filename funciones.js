function descargarCV(){
    var enlace = document.createElement('a');
    enlace.href = "document/cv.pdf"
    enlace.download = "cv_EdgarDaniel.pdf";
    enlace.click();
}