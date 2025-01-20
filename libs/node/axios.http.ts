import axios from 'axios'

interface HttpRequest {
    status?:'success'  | 'error' | 'warning' | 'info'
    message:string
    data?:any
    error?:any 
}

/**
 * Realiza una solicitud POST a la URL especificada con el payload y el token de autorización.
 *
 * @param {string} url - La URL a la que se enviará la solicitud POST.
 * @param {any} payload - Los datos que se enviarán en el cuerpo de la solicitud.
 * @param {string} [token='token-maxpoint'] - El token de autorización que se incluirá en los encabezados de la solicitud. Por defecto es 'token-maxpoint'.
 * @returns {Promise<HttpRequest>} - Una promesa que se resuelve con la respuesta de la solicitud HTTP.
 */
export async function postHealthcheck(url: string, payload: any, token: string = 'token-maxpoint'): Promise<HttpRequest> {
    return await axios.post(url || 'http://127.0.0.1:3200', payload, {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        return response.data;
    }).catch(error => {
        return error?.response?.data || { status: 'error', message: 'Error desconocido, consulte a Soporte IT HTTP_500' ,  error: error.message }
    });
}


export async function getHealthcheck(url: string, token: string = 'token-maxpoint'): Promise<HttpRequest> {
    return await axios.get(url || 'http://127.0.0.1:3200', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => {
        return response.data;
    }).catch(error => {
        return error?.response?.data || { status: 'error', message: 'Error desconocido, consulte a Soporte IT HTTP_500' ,  error: error.message }
    });
}