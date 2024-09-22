
//------------- 1. Consumo de Datos desde una API --------------------
const usersUrl= 'https://jsonplaceholder.typicode.com/users';

async function obtenerUsuarios() {
    try {
        const response = await fetch(usersUrl);
        if (!response.ok) {
            throw new Error('Error al obtener los usuarios');
        }
        const usuarios = await response.json();
        //console.log('Lista de usuarios:', usuarios); 
        return usuarios
    } catch (error) {
        console.error('Hubo un problema con la petición fetch:', error);
    }
}

//------------ 2. Procesamiento de Datos de una API ---------------------
async function imprimirNombresDeUsuarios() {
    try {
        const usuarios = await obtenerUsuarios();
        if (usuarios && usuarios.length > 0) {
            const nombres = usuarios.map(usuario => usuario.name);
            nombres.forEach(nombre => {
                console.log(nombre);
            });
        } else {
            console.log('No hay usuarios para mostrar');
        }
    } catch (error) {
        console.error('Hubo un problema al imprimir los nombres de usuarios:', error);
    }
}

//imprimirNombresDeUsuarios();

//------------------ 3. Autenticación Simulada ----------------------------------

async function autenticarUsuario(credenciales) {
    try {
        const response = await fetch(usersUrl);
        if (!response.ok) {
            throw new Error('Error al obtener los usuarios. Status: ' + response.status);
        }
        const usuarios = await response.json();
        
        const usuarioEncontrado = usuarios.find(usuario => 
            usuario.username === credenciales.user && usuario.email === credenciales.password
        );
        if (!usuarioEncontrado) {
            return false;
        } else {
            return true;
        }
    } catch (error) {
        console.error('Hubo un problema con la petición fetch:', error);
    }
}

const credenciales= {
        user: 'admin',  // si probamos con 'Bret' y 'Sincere@april.biz' devuelve true
        password: '1234'
};

autenticarUsuario(credenciales).then(esAutenticado => {
    //console.log('Autenticado:', esAutenticado);
})

// --------------------- 4. Transformacion de datos --------------

async function imprimirNombresYEmailsDeUsuarios() {
    try {
        const usuarios = await obtenerUsuarios();
        if (usuarios && usuarios.length > 0) {
            const nombres = usuarios.map(usuario => usuario.name);
            const emails = usuarios.map(usuario => usuario.email);
            nombres.forEach((nombre, index) => {
                console.log(`Nombre: ${nombre}, Email: ${emails[index]}`);
            });
        } else {
            console.log('No hay usuarios para mostrar');
        }
    } catch (error) {
        console.error('Hubo un problema al imprimir los nombres de usuarios:', error);
    }
}

//imprimirNombresYEmailsDeUsuarios();

// ------------------ 5. Validacion de formularios ------------------------

function validarFormulario(formulario) {
    try {
        if (
            formulario.nombre && formulario.nombre.trim() !== '' &&
            formulario.email && formulario.email.trim() !== '' &&
            formulario.password && formulario.password.trim() !== ''
        ) {
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error('Hubo un problema al validar el formulario:', error);
    }
}

// Ejemplo de uso:
const formularioValido = {
    nombre: 'Bret',
    email: 'Sincere@april.biz',
    password: '1234'
};

//console.log('Formulario válido:', validarFormulario(formularioValido));

// ---------------------- 6. Paginacion de datos -----------------------------

function obtenerPagina(datos, numeroPagina) {
    const elementosPorPagina = 5;
    const inicio = (numeroPagina - 1) * elementosPorPagina;
    const fin = inicio + elementosPorPagina;

    return datos.slice(inicio, fin);
}

const datos = [
    'Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5',
    'Elemento 6', 'Elemento 7', 'Elemento 8', 'Elemento 9', 'Elemento 10',
    'Elemento 11', 'Elemento 12'
];

//console.log(obtenerPagina(datos, 1)); // ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4', 'Elemento 5']
//console.log(obtenerPagina(datos, 2)); // ['Elemento 6', 'Elemento 7', 'Elemento 8', 'Elemento 9', 'Elemento 10']
//console.log(obtenerPagina(datos, 3)); // ['Elemento 11', 'Elemento 12']

// ----------------------- 7. Envio de datos de una API -----------------------------

async function enviarDatos(datos) {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        });

        const respuestaJson = await response.json();
        console.log('Respuesta de la API:', respuestaJson);
    } catch (error) {
        console.error('Hubo un problema con la petición fetch:', error);
    }
}

const datosEnvio = {
    title: 'Título de la publicación',
    body: 'Cuerpo de la publicación',
    userId: 1
};

//enviarDatos(datosEnvio);

//------------- 8. Busqueda de usuarios --------------------

async function busquedaDeUsuario(email) {
    try {
        const response = await fetch(usersUrl);
        
        const usuarios = await response.json();
        
        const usuariosEncontrados = usuarios.find(usuario => usuario.email === email);
        
        if (usuariosEncontrados) {
            return usuariosEncontrados;
        } else {
            console.log('No hay usuarios para mostrar');
        }
    } catch (error) {
        console.error('Hubo un problema al imprimir los nombres de usuarios:', error);
    }
}

const emailBuscado = 'Sincere@april.biz';

/*busquedaDeUsuario(emailBuscado)
    .then(usuario => {
        if (usuario) {
            console.log('Usuario encontrado:', usuario);
        }
    }); */


//------------- 9. Generacion de token de autenticacion --------------------

function generarToken(usuario) {
        const header = {
            alg: 'HS256',
            typ: 'JWT'
        };
        const headerBase64 = btoa(JSON.stringify(header));
        const payload = btoa(JSON.stringify(usuario));

        const signature = 'simulated signature';

        const token = (`${headerBase64}.${payload}.${signature}`);
        return token;
}

const usuario = {
    id: 1,
    username: 'admin',
    email: 'Sincere@april.biz'
};

const token = generarToken(usuario);

//console.log('Token de autenticación:', token);

//------------------- 10. Actualizacion de informacion de usuario --------------------

function actualizarInformacionUsuario(usuario, cambios) {
    const usuarioActualizado = { ...usuario, ...cambios };
    return usuarioActualizado;
}   

const usuario123 = {
    id: 1,
    username: 'admin',
    email: 'Sincere@april.biz'
};

const cambios = {
    email: 'Sinperez@abril.com'
};

const usuarioActualizado = actualizarInformacionUsuario(usuario123, cambios);
//console.log('Usuario actualizado:', usuarioActualizado);

