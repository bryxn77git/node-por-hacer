//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');
const colors = require('colors');
//console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('Crear por hacer');
        let tarea = porHacer.crear(argv.descripcion);

        console.log(tarea);
        break;
    case 'listar':
        // console.log('Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();

        console.log('=======Por hacer======='.green);
        for (let tarea of listado) {
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('----------------------');
        }
        console.log('======================='.green);

        break;
    case 'actualizar':
        // console.log('Actualizar una tarea por hacer');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('El comando no es reconocido');
        break;
}