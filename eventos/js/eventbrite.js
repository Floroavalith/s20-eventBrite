class EventBrite {
    constructor() {
        //token from api
        this.token_auth = 'JAU2GR3JXXPMAHTRCQAU';
    }

    //devuelve array con categorias
    async obtenerCategorias() {
        const responseCategories = await fetch(`https://www.eventbriteapi.com/v3/categories/?token=${this.token_auth}`)
        
        const categories = await responseCategories.json();
        
        return categories.categories;
    }

    async obtenerEventos(evento, categoria) {
        const responeEventos = await fetch(`https://www.eventbriteapi.com/v3/events/search/?q=${evento}&sort_by=date&categories=${categoria}&token=${this.token_auth}`);
        
        const eventos = await responeEventos.json();

        return eventos.events;
    }
}