export class Combos {
    
    simnao(): any[] {
        let retorno = [];
        retorno.push(
            { value: "", option: "-- Todos --" },
            { value: "true", option: "Sim" },
            { value: "false", option: "Não" }
        );
        return retorno;
    }

    pessoa(): any[] {
        let retorno = [];
        retorno.push(
            { value: "", option: "-- Todos --" },
            { value: "PF", option: "Pessoa Física" },
            { value: "PJ", option: "Pessoa Jurídica" }
        );
        return retorno;
    }

    meses(): any[] {
        let retorno = [];
        retorno.push(
            { value: "", option: "-- Qualquer mês --"},
            { value: "1",  option: "Janeiro" },
            { value: "2",  option: "Fevereiro" },
            { value: "3",  option: "Março" },
            { value: "4",  option: "Abril" },
            { value: "5",  option: "Maio" },
            { value: "6",  option: "Junho" },
            { value: "7",  option: "Julho" },
            { value: "8",  option: "Agosto" },
            { value: "9",  option: "Setembro" },
            { value: "10", option: "Outubro" },
            { value: "11", option: "Novembro" },
            { value: "12", option: "Dezembro" }
        );
        return retorno;
    }

    estados(): any[] {
        let retorno = [];
        retorno.push(
            { value: "", option: "-- Qualquer Estado --" },
            { value: "AC", option: "Acre" },
            { value: "AL", option: "Alagoas" },
            { value: "AP", option: "Amapá" },
            { value: "AM", option: "Amazonas" },
            { value: "BA", option: "Bahia" },
            { value: "CE", option: "Ceará" },
            { value: "DF", option: "Distrito Federal" },
            { value: "ES", option: "Espírito Santo" }, 
            { value: "GO", option: "Goiás" },
            { value: "MA", option: "Maranhão" },
            { value: "MT", option: "Mato Grosso" },
            { value: "MS", option: "Mato Grosso do Sul" },
            { value: "MG", option: "Minas Gerais" },
            { value: "PA", option: "Pará" },
            { value: "PB", option: "Paraíba" },
            { value: "PR", option: "Paraná" },
            { value: "PE", option: "Pernambuco" },
            { value: "PI", option: "Piauí" },
            { value: "RJ", option: "Rio de Janeiro" },
            { value: "RN", option: "Rio Grande do Norte" },
            { value: "RS", option: "Rio Grande do Sul" },
            { value: "RO", option: "Rondônia" },
            { value: "RR", option: "Roraima" },
            { value: "SC", option: "Santa Catarina" },
            { value: "SP", option: "São Paulo" },
            { value: "SE", option: "Sergipe" },
            { value: "TO", option: "Tocantins" }
        );
    return retorno;
    }
}