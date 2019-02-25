const eventbrite = new EventBrite();
const ui  = new Interfaz();
addEventListeners();

function addEventListeners() {
    document.getElementById('buscarBtn').addEventListener('click', e => {
        e.preventDefault();
        if(document.getElementById('evento').value == '') {
            ui.cleanEvents();
            window.alert('Complete los campos');
        } else {
            eventos = eventbrite.obtenerEventos(document.getElementById('evento').value, document.getElementById('listado-categorias').value)
            .then( response => {
                ui.cleanEvents();
                ui.showEvents(response);
            })
        }
    });
};
