import { Carousel } from '../componentes/carousel.js';
import { Tabela } from '../componentes/table.js';
export const Evento = {
    components: {
        Carousel,
        Tabela
    },
    template: `
        <section>
            <h1>Eventos</h1>
            <Carousel />
            <ul>
                <li v-for="evento in eventos" :key="evento.id">
                    <router-link :to="'/evento/' + evento.id">{{ evento.titulo }}</router-link>
                </li>
            </ul>
            <Tabela />
        </section>
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
