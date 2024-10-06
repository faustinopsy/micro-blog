export const Evento = {
    template: `
        <div>
            <h1>Eventos</h1>
            <ul>
                <li v-for="evento in eventos" :key="evento.id">
                    <router-link :to="'/evento/' + evento.id">{{ evento.titulo }}</router-link>
                </li>
            </ul>
        </div>
    `,
    data() {
        return {
            eventos: []
        };
    },
    inject: ['urlBase'],
    created() {
        fetch(`${this.urlBase}eventos`)
            .then(response => response.json())
            .then(data => this.eventos = data);
    }
};
