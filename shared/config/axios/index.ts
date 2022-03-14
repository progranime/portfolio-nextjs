import axios from 'axios'
import https from 'https'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL

axios.defaults.baseURL = baseUrl
// to fix the 500 error
// Error: unable to verify the first certificate
axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false
})

export const AXIOS_CONFIG = {
    baseUrl
}
