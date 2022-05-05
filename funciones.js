    const HOJA = SpreadsheetApp.openById('1C35y55O8feQZdgQ9UpCPU_2tngA3TPIRcettEm2pSI0').getActiveSheet();

    function doGet(datos) {
        return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');
    }

    function doPost(datos) {
        return HtmlService.createTemplateFromFile('web').evaluate().setTitle('Agenda');

    }

    function obtenerDatosHTML(nombre) {
        return HtmlService.createHtmlOutputFromFile(nombre).getContent();
    }

    function obtenerContactos() {
        return HOJA.getDataRange().getValues();
    }

    function insertarContacto(nombre, correo) {

        HOJA.appendRow([nombre, correo]);
    }