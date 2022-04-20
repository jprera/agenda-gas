function doGet() {
    return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
}

function obtenerDatosHTML(nombre) {
    return HtmlService.createHtmlOutputFromFile(nombre).getContent();
}

function obtenerContactos() {
    let hoja = SpreadsheetApp.openById('1C35y55O8feQZdgQ9UpCPU_2tngA3TPIRcettEm2pSI0').getActiveSheet();
    let datos = hoja.getDataRange().getValues();
    return datos;

}