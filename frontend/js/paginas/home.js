import { Card } from '../componentes/card.js';
export const Home = {
    components: {
        Card 
    },
    template: `
        <div>
            <h1>Home</h1>
            <section>
                <h2>Postagens</h2>
                <div v-for="postagem in postagens" :key="postagem.id">
                    <router-link :to="'/postagem/' + gerarSlug(postagem.titulo)">
                       <Card :dados="postagem" tipo="postagem" />
                    </router-link>
                </div>
            </section>
            <section>
                <h2>Feriados</h2>
                <ul>
                    <li v-for="feriado in feriados" :key="feriado.data">{{ feriado.data }} - {{ feriado.feriado }}</li>
                </ul>
            </section>
        </div>
    `,
    data() {
        return {
            postagens: [],
            feriados: []
        };
    },
    inject: ['urlBase'],
    methods: {
        gerarSlug(titulo) {
            return titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        }
    },
    created() {
        fetch(`${this.urlBase}postagens`)
            .then(response => response.json())
            .then(data => this.postagens = data);

        fetch(`${this.urlBase}feriados`)
            .then(response => response.json())
            .then(data => this.feriados = data);
    }
};
