import axios from 'axios'

export const api = axios.create({
    // baseURL: `https://api-openinsurance.mapfre.com.br/open-insurance/consents/v1/`,
    baseURL: `https://65pwcy7ng5.execute-api.us-east-1.amazonaws.com/v1/open-insurance/consents/v1/`,
})

export const apiBFF = axios.create({
    // baseURL: `https://api-openinsurance.mapfre.com.br/open-insurance/consents/v1/`,
    baseURL: `https://65pwcy7ng5.execute-api.us-east-1.amazonaws.com/v1/bff/consent/`,
})
