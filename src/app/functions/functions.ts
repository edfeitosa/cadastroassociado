export class Functions {
    // limpa string
    accentless(palavra): any {
    let comAcento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ ";
    let semAcento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    let nova = "";
    for (let i = 0; i < palavra.length; i++) {
        if (comAcento.search(palavra.substr(i,1)) >= 0) {
        nova += semAcento.substr(comAcento.search(palavra.substr(i,1)), 1);
        }
        else {
        nova += palavra.substr(i,1); 
        }
    }
    return nova.toLowerCase();
    }

    // dimensões dos componentes
    dimensions(sizes): any {
    let reply;
    for (let i = 0; i < sizes.length; i++ ) {
        let sizeSmart = (sizes[i].smart <= 12) ? "col-xs-" + sizes[i].smart : "col-xs-12";
        let sizeTablet = (sizes[i].tablet <= 12) ? "col-sm-" + sizes[i].tablet : "col-sm-2";
        let sizeSmall = (sizes[i].small <= 12) ? "col-md-" + sizes[i].small : "col-md-2";
        let sizeLarge = (sizes[i].large <= 12) ? "col-lg-" + sizes[i].large : "col-lg-2";
        return " " + sizeSmart + " " + sizeTablet + " " + sizeSmall + " " + sizeLarge + " ";
    }
    return reply;
    }

    // formata padrão de data solicitado
    dateFormat(valor, format): any {
    let reply;
    var res = valor.split("/");
    switch (format) {
        case "br" : reply = res[0] + "/" + res[1] + "/" + res[2]; break;
        case "us" : reply = res[2] + "-" + res[1] + "-" + res[0]; break;
    }
    return reply;
    }

    // prepara data atual
    actualDate(format): any {
    let reply;
    let date = new Date();
    let day = date.getDate().toString();
    if (day.length == 1) { day = "0" + day; }
    let month = (date.getMonth() + 1).toString();
    if (month.length == 1) { month = "0" + month; }
    let year = date.getFullYear();
    switch (format) {
        case "br" : reply = day + "/" + month + "/" + year; break;
        case "us" : reply = year + "-" + month + "-" + day; break;
    }
    return reply;
    }

    // informa dia da semana a partir de data
    day(value): any {
    let reply;
    let date = new Date(this.dateFormat(value, "us"));
    let day = date.getDay();
    let week = new Array(6);
    week[0] = 'Segunda';
    week[1] = 'Terça';
    week[2] = 'Quarta';
    week[3] = 'Quinta';
    week[4] = 'Sexta';
    week[5] = 'Sábado';
    week[6] = 'Domingo';
    if (this.actualDate("br") == this.dateFormat(value, "br")) {
        reply = "Hoje";
    } else {
        reply = week[day];
    }
    return reply;
    }

    // formato de moeda
    numberForReal(numero) {
    numero = numero.toFixed(2).split('.');
    numero[0] = numero[0].split(/(?=(?:...)*$)/).join('.');
    return numero.join(',');
    }
}