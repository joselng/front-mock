const redirectTo = (uri: string) => {
    window.location.replace(uri)
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

const bffData = {
    consent_id: 'urn:mapfre:00901144-89cc-4092-9721-a6bb64e6b841',
    client_id: '6667',
    company_id: '2345678',
    company_name: 'Mapfre Seguros Gerais S.A.',
    company_logo_uri: 'https://www.mapfre.com.br/media/logo-mapfre-2.png',
    redirect_uri: 'www.google.com',
    company_client_id: '0b58b-4249-4156-8893-868',
    identification_document_type: 'CPF',
    identification_document_number: '86548493044',
    init_date_time: '2022-11-02T18:03:01.000Z',
    expiration_date_time: '2023-11-01T20:02:57.000Z',
    rejected_date_time: '2023-11-01T20:02:57.000Z',
    validity_period: 12,
    status: 'AUTHORISED',
    products: [
        {
            category_code: '1',
            category_name: 'PATRIMONIAL',
            consent_given_ind: true,
            subcategories: [
                {
                    subcategory_code: '2',
                    subcategory_name: 'RESIDENCIAL',
                    consent_given_ind: true,
                },
            ],
        },
    ],
}

export { redirectTo, putData, bffData }
