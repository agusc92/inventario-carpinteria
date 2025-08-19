
const botonAutorizacion = document.getElementById('btn-login');
const botonLogOut = document.getElementById('btn-logout');
const CLIENT_ID = '';
const API_KEY = '';

// Discovery doc URL for APIs used by the quickstart
const DISCOVERY_DOC = 'https://sheets.googleapis.com/$discovery/rest?version=v4';

// Authorization scopes required by the API; multiple scopes can be
// included, separated by spaces.
const SCOPES = 'https://www.googleapis.com/auth/spreadsheets.readonly';

let tokenClient;
let gapiInited = false;
let gisInited = false;



/**
 * Callback after api.js is loaded.
 */
window.onload = () => {
    gapiLoaded();
    gisLoaded();
};

//document.getElementById('gapi').addEventListener('load', gapiLoaded);
function gapiLoaded() {
    gapi.load('client', initializeGapiClient);
}

/**
 * Callback after the API client is loaded. Loads the
 * discovery doc to initialize the API.
 */
async function initializeGapiClient() {
    await gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: [DISCOVERY_DOC],
    });
    gapiInited = true;
    maybeEnableButtons();
}

/**
 * Callback after Google Identity Services are loaded.
 */
//document.getElementById('gis').addEventListener('load', gisLoaded);

function gisLoaded() {
    /*
    tokenClient = google.accounts.oauth2.initTokenClient({
        client_id: CLIENT_ID,
        scope: SCOPES,
        callback: '', // defined later
    });
    */
    gisInited = true;
    maybeEnableButtons();
    
}

/**
 * Enables user interaction after all libraries are loaded.
 */
function maybeEnableButtons() {
    if (gapiInited && gisInited) {
        botonAutorizacion.classList.toggle("oculto")
    }
}

/**
 *  Sign in the user upon button click.
 */
botonAutorizacion.addEventListener('click', handleAuthClick);
function handleAuthClick() {
    tokenClient.callback = async (resp) => {
        if (resp.error !== undefined) {
            throw (resp);
        }

        botonLogOut.classList.toggle("oculto");
    botonAutorizacion.innerText = 'Refresh';
    escribirInicio()
    };

    if (gapi.client.getToken() === null) {
        // Prompt the user to select a Google Account and ask for consent to share their data
        // when establishing a new session.
        tokenClient.requestAccessToken({ prompt: 'consent' });
    } else {
        // Skip display of account chooser and consent dialog for an existing session.
        tokenClient.requestAccessToken({ prompt: '' });
    }
}



/**
 *  Sign out the user upon button click.
 */
botonLogOut.addEventListener('click', handleSignoutClick);
function handleSignoutClick() {
    const token = gapi.client.getToken();
    if (token !== null) {
        google.accounts.oauth2.revoke(token.access_token);
        gapi.client.setToken('');
        
        botonAutorizacion.innerText = 'Iniciar secion';
        botonLogOut.classList.toggle("oculto");
        
    }
}

/**
 * Print the names and majors of students in a sample spreadsheet:
 * https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
 */
async function listMajors() {
    let response;
    try {
        // Fetch first 10 files
        response = await gapi.client.sheets.spreadsheets.values.get({
            spreadsheetId: '1Mo4XDhv-_opwREVn4mFoztxL9OnOyvSZ81x_JbU0JLY',
            range: 'pruebas!A2:I',
        });
    } catch (err) {
        console.warn(err);
    }
    const range = response.result;
    if (!range || !range.values || range.values.length == 0) {
        document.getElementById('content').innerText = 'No values found.';
        return;
    }

    console.log(convertirEnObjetos(range))
}

function convertirEnObjetos(valores) {
    var objetos = []
    valores.values.forEach(element => {
        placa = {
            'ID': element[0],
            'color': element[1],
            'cantidad': element[2],
            'material': element[3],
            'fabricante': element[4],
            'alto': element[5],
            'ancho': element[6],
            'sector': element[7]
        }
        objetos.push(placa);
    });
    return objetos
}
escribirInicio()