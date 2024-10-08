import { Card } from '../componentes/card.js';
import { ListaFeriados } from '../componentes/listaFeriados.js'; 

export const Home = {
    components: {
        Card,
        ListaFeriados
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
            <ListaFeriados />
        </div>
    `,
    data() {
        return {
            postagens: []
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
    }
};
