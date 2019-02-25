class Interfaz {
    constructor() {
        this.onStart();      
        this.listado = document.getElementById('resultado-eventos');  
    }

    onStart() {
        this.populateSelectCategorias();
    }

    populateSelectCategorias() {
        const selectCategories = document.getElementById('listado-categorias');
        const categorias = eventbrite.obtenerCategorias()
            .then(response => {
                response.map( categoria => {
                    const option = document.createElement('option');
                    option.value = categoria.id;
                    option.appendChild(document.createTextNode(categoria.name));
                    selectCategories.appendChild(option);
                })
            })
    }

    //clears the list of eventos
    cleanEvents(){
        this.listado.innerHTML = '';
    }

    //recibe un arreglo de eventos y devuelve un arreglo de elementos asignado a cada evento.
    showEvents(eventos) {
        if(eventos.length == 0 ) {
            this.listado.innerHTML += `There are no related events.`
        } else {
            eventos.forEach(evento => {
                this.listado.innerHTML += `
                    <div class="col-md-4 mb-4">
                        <div class="card">
                            <img class="img-fluid mb-2" src="${evento.logo !== null ? evento.logo.url : ''}"> 
                            <div class="card-body">
                                    <div class="card-text">
                                        <h2 class="text-center">${evento.name.text}</h2>
                                        <p class="lead text-info">Información del evento</p>
                                        

                                        <span class="badge badge-primary">Capacidad: ${evento.capacity}</span>
                                        <span class="badge badge-secondary">Fecha y hora: ${evento.start.local}</span>

                                        <a href="${evento.url}" target="_blank" class="btn btn-primary btn-block mt-4">Comprar Boletos</a>  
                                    </div>
                            </div>

                        </div>
                    </div>
                `;
            })
        }
    }
}


