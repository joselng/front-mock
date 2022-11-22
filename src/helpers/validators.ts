export const documentValid = (document: string) => {
    const cleanDocument = document.replace(/[^\d]+/g, '')
    return cleanDocument.length === 11 ? validateCPF(cleanDocument) : validateCNPJ(cleanDocument)
}

export const validateCPF = (cpf: string) => {
    const cleanCPF = cpf.replace(/[^\d]+/g, '')

    if (cleanCPF === '') return false

    // Elimina CPFs invalidos conhecidos
    if (
        cleanCPF.length !== 11 ||
        cleanCPF === '00000000000' ||
        cleanCPF === '11111111111' ||
        cleanCPF === '22222222222' ||
        cleanCPF === '33333333333' ||
        cleanCPF === '44444444444' ||
        cleanCPF === '55555555555' ||
        cleanCPF === '66666666666' ||
        cleanCPF === '77777777777' ||
        cleanCPF === '88888888888' ||
        cleanCPF === '99999999999'
    )
        return false

    // Valida 1o digito
    let add = 0
    for (let i = 0; i < 9; i++) add += parseInt(cleanCPF.charAt(i)) * (10 - i)
    let rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(cleanCPF.charAt(9))) return false

    // Valida 2o digito
    add = 0
    for (let i = 0; i < 10; i++) add += parseInt(cleanCPF.charAt(i)) * (11 - i)
    rev = 11 - (add % 11)
    if (rev === 10 || rev === 11) rev = 0
    if (rev !== parseInt(cleanCPF.charAt(10))) return false

    return true
}

export const validateCNPJ = (cnpj: string) => {
    const cleanCNPJ = cnpj.replace(/[^\d]+/g, '')

    if (cleanCNPJ === '') return false

    if (cleanCNPJ.length !== 14) return false

    // Elimina CNPJs invalidos conhecidos
    if (
        cleanCNPJ === '00000000000000' ||
        cleanCNPJ === '11111111111111' ||
        cleanCNPJ === '22222222222222' ||
        cleanCNPJ === '33333333333333' ||
        cleanCNPJ === '44444444444444' ||
        cleanCNPJ === '55555555555555' ||
        cleanCNPJ === '66666666666666' ||
        cleanCNPJ === '77777777777777' ||
        cleanCNPJ === '88888888888888' ||
        cleanCNPJ === '99999999999999'
    )
        return false

    // Valida DVs
    let tamanho = cleanCNPJ.length - 2
    let numeros = cleanCNPJ.substring(0, tamanho)
    const digitos = String(cleanCNPJ.substring(tamanho))
    let soma = 0
    let pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
        soma += Number(numeros.charAt(tamanho - i)) * pos--
        if (pos < 2) pos = 9
    }
    let resultado = String(soma % 11 < 2 ? 0 : 11 - (soma % 11))
    if (resultado !== digitos.charAt(0)) return false

    tamanho = tamanho + 1
    numeros = cleanCNPJ.substring(0, tamanho)
    soma = 0
    pos = tamanho - 7
    for (let i = tamanho; i >= 1; i--) {
        soma += Number(numeros.charAt(tamanho - i)) * pos--
        if (pos < 2) pos = 9
    }
    resultado = String(soma % 11 < 2 ? 0 : 11 - (soma % 11))
    if (resultado !== digitos.charAt(1)) return false

    return true
}
