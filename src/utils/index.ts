const REDIRECT_TIME_IN_SECONDS = 3 * 1000

const redirectTo = (uri: string) => {
    setTimeout(() => {
        window.location.replace(uri)
    }, REDIRECT_TIME_IN_SECONDS)
}

const putData = {
    status: 'AUTHORISED',
    products: [
        'CAPITALIZACAO',
        'COMPREENSIVO_CONDOMINIO',
        'COMPREENSIVO_EMPRESARIAL',
        'FIANCA_LOCATICIA',
        'GARANTIA_ESTENDIDA',
        'GARANTIA_SEGURADO_SETOR_PRIVADO',
        'GARANTIA_SEGURADO_SETOR_PUBLICO',
        'GLOBAL_BANCOS',
        'LUCROS_CESSANTES',
        'RD_EQUIPAMENTOS_RISCOS_DIVERSOS',
        'RESIDENCIAL',
        'RESPONSABILIDADE_CIVIL_D_O',
        'RESPONSABILIDADE_CIVIL_E_O',
        'RESPONSABILIDADE_CIVIL_GERAL',
        'RESPONSABILIDADE_CIVIL_RISCOS_AMBIENTAIS',
        'RISCOS_ENGENHARIA',
        'RISCOS_FINANCEIROS_DIVERSOS',
        'RISCOS_NOMEADOS_OPERACIONAIS',
        'STOP_LOSS',
        'SEGURO_AUTO',
        'VIDA',
    ],
}

export { redirectTo, putData }
