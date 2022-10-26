export const ValidationService = {
    cep(cep: string): boolean{
        return cep.replace(/\D/g, '').length ===8; 
    },
};

// essa expressão regular cep.replace(/\D/g, ''), o "/\D/""   pega tudo que não é numero
        