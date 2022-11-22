import yup from 'src/helpers/yup'

export const loginSchema = yup.object({
    documentNumber: yup
        .string()
        .required('Preencha o número do documento')
        .when('documentType', {
            is: 'CPF',
            then: yup.string().min(14, 'Documento inválido'),
            otherwise: yup.string().min(18, 'Documento inválido'),
        })
        .document('Documento inválido'),
    password: yup.string().required('Preencha a senha'),
})

export const step1schema = yup.object({
    documentNumber: yup.string().required().min(14).document(),
    societyName: yup.string().required(),
})

export const step2schema = yup.object({
    terms: yup.boolean().required().oneOf([true]),
})

export const step3schema = yup
    .object({
        institution: yup.string().required('O campo Instituição Financeira é obrigatório'),
        bank: yup.boolean(),
        insurer: yup.boolean(),
        others: yup.boolean(),
    })
    .test('oneSelected', 'Selecione uma opção', (obj, { createError }) => {
        if (obj.bank || obj.insurer || obj.others) {
            return true
        }

        return createError({
            path: 'others',
            message: 'Selecione uma opção',
        })
    })
