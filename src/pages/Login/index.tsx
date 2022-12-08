import { useEffect, useRef, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Button, Divider, FlexContainer, HeaderText, Input } from '@mapfre/reactjs-ui-components'
import { useFormik } from 'formik'
import logo from 'src/assets/logo.svg'
import Link from 'src/components/Link'
import { loginSchema } from 'src/helpers/validation-schemas'
import AuthorizeDataModal from 'src/modais/AuthorizeDataModal'
import Authorized from 'src/modais/AuthorizedModal'
import { apiBFF } from 'src/services/api'
import { bffData, redirectTo } from 'src/utils'

import { LoginBackground, LoginContainer, LoginForm, Logo } from './styles'

interface BFFResponse {
    redirect_uri: string
    consent_id: string
    id_token: string
    created: string
    state: string
    code: string
    id: string
}

const Login = () => {
    const formik = useFormik({
        initialValues: {
            documentType: 'CPF',
            documentNumber: '',
            password: '',
        },
        validateOnBlur: false,
        validateOnChange: false,
        validationSchema: loginSchema,
        onSubmit: (values) => {
            const authenticated = values.documentNumber === '857.115.740-51' && values.password === 'mapfre@2022'
            if (authenticated) {
                setShowAuthorizeDataModal(true)
            } else {
                alert('Incorrect! Try again.')
            }
        },
    })

    const [searchParams] = useSearchParams()
    const documentNumberRef = useRef(null)

    useEffect(() => {
        documentNumberRef.current.focus()
    }, [])

    const [showNoAccountModal, setShowNoAccountModal] = useState(false)
    const [showAuthorizeDataModal, setShowAuthorizeDataModal] = useState(false)
    const [showAuthorizedModal, setShowAuthorizedModal] = useState(false)
    const [status, setStatus] = useState(false)

    const handleRegister = () => {
        setShowNoAccountModal(true)
    }

    const handleAccept = async (e: any) => {
        const consentId = searchParams.get('consent_id')
        const request = searchParams.get('request')

        const refused = e?.target?.innerHTML.includes('Recusar')
        if (refused) {
            setStatus(false)
            setShowAuthorizedModal(true)

            bffData.status = 'REJECTED'
            try {
                const { data } = await apiBFF.put<BFFResponse>(`${consentId}`, bffData, {
                    params: {
                        cache_id: request,
                    },
                })

                const redirectUri = data.redirect_uri
                const { consent_id: _, id, created, ...rest } = data

                const params = new URLSearchParams(rest).toString()

                // await api.delete(`${consentId}`)

                redirectTo(`${redirectUri}#${params}`)
            } catch (error) {
                console.log('catch do DELETE: ' + error?.message)
            }
            return
        }
        setStatus(true)
        setShowAuthorizedModal(true)
        try {
            const { data } = await apiBFF.put<BFFResponse>(`${consentId}?cache_id=${request}`, bffData)

            const redirectUri = data.redirect_uri
            const { consent_id: _, id, created, ...rest } = data

            const params = new URLSearchParams(rest).toString()

            redirectTo(`${redirectUri}#${params}`)
        } catch (error) {
            console.log('catch do PUT: ' + error?.message)
        }
    }

    return (
        <LoginBackground>
            {!showNoAccountModal && (
                <LoginContainer>
                    <FlexContainer justifyContent="center">
                        <Logo src={logo} alt="Mapfre" />
                    </FlexContainer>

                    <FlexContainer marginTop={2} justifyContent="center" textAlign="center">
                        <HeaderText text="Seja bem vindo ao Portal do Cliente" size={1.625} weight={500} />
                    </FlexContainer>

                    <FlexContainer marginTop={2}>
                        <LoginForm>
                            {/* <RadioGroup title="Tipo de documento">
                                <RadioItem
                                    id="documentTypeCPF"
                                    name="documentType"
                                    value="CPF"
                                    checked={formik.values.documentType === 'CPF'}
                                    onChange={handleDocumentTypeChange}
                                />
                                <RadioItem
                                    id="documentTypeCNPJ"
                                    name="documentType"
                                    value="CNPJ"
                                    onChange={handleDocumentTypeChange}
                                />
                            </RadioGroup> */}

                            <FlexContainer marginTop={1.5}>
                                <Input
                                    ref={documentNumberRef}
                                    label="Número do documento (CPF)"
                                    id="documentNumber"
                                    name="documentNumber"
                                    type="text"
                                    inputMode="numeric"
                                    autoComplete="username"
                                    value={formik.values.documentNumber}
                                    onChange={formik.handleChange}
                                    hasError={formik.errors.documentNumber?.length > 0}
                                    error={formik.errors.documentNumber}
                                    cpf={formik.values.documentType === 'CPF'}
                                    // cnpj={formik.values.documentType === 'CNPJ'}
                                />
                            </FlexContainer>

                            <FlexContainer marginTop={1.5}>
                                <Input
                                    label="Senha"
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    hasError={formik.errors.password?.length > 0}
                                    error={formik.errors.password}
                                />
                            </FlexContainer>

                            <FlexContainer marginTop={2} justifyContent="center">
                                <Link href="https://www.mapfre.com.br/para-voce/" target="_blank">
                                    Esqueci minha senha
                                </Link>
                            </FlexContainer>

                            <FlexContainer marginTop={2} justifyContent="center">
                                <Button
                                    width={500}
                                    type="submit"
                                    label="Entrar"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        formik.submitForm()
                                    }}
                                />
                            </FlexContainer>
                        </LoginForm>
                    </FlexContainer>

                    <FlexContainer marginTop={2}>
                        <Divider />
                    </FlexContainer>

                    <FlexContainer marginTop={2} justifyContent="center" textAlign="center">
                        <HeaderText text="Você é um cliente e ainda não tem uma conta?" size={1.625} weight={500} />
                    </FlexContainer>

                    <FlexContainer marginTop={2} justifyContent="center">
                        <Link href="#" onClick={handleRegister}>
                            Criar cadastro
                        </Link>
                    </FlexContainer>
                </LoginContainer>
            )}
            <AuthorizeDataModal
                isVisible={showAuthorizeDataModal}
                toggleModal={setShowAuthorizeDataModal}
                handleAccept={handleAccept}
            />
            <Authorized isVisible={showAuthorizedModal} text={`${status ? 'autorizado' : 'rejeitou'}`} />
        </LoginBackground>
    )
}

export default Login
