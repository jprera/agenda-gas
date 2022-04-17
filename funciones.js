function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}