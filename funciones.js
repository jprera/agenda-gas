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

    function insertarContacto(nombre, apellidos, correo, telf) {

        HOJA.appendRow([nombre, apellidos, correo, telf]);
    }

    function borrarContacto(numFila) {
        HOJA.deleteRow(numFila);
    }

    function modificarContacto(numFila, datos) {
        let celdas = HOJA.getRange('A' + numFila + ':D' + numFila);
        celdas.setValues([
            [datos.nombre, datos.apellidos, datos.correo, datos.telf]
        ]);
    }