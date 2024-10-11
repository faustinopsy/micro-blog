import { Card } from '../componentes/card.js';
import { ListaFeriados } from '../componentes/listaFeriados.js'; 
import { Tabela } from '../componentes/table.js';
export const Home = {
    components: {
        Card,
        ListaFeriados,
        Tabela
    },
    template: `
        <div>
            <h1>Home</h1>
            <div class="card-container">
                <div v-for="postagem in postagens" :key="postagem.id" class="card-wrapper">
                    <router-link :to="'/postagem/' + gerarSlug(postagem.titulo)">
                        <Card :dados="postagem" tipo="postagem" />
                    </router-link>
                </div>
            </div>
            <ListaFeriados />
            <div v-for="(tabela, index) in tabelas" :key="index">
                <Tabela :titulos="tabela.titulos" :dados="tabela.dados" />
            </div>
        </div>
    `,
    data() {
        return {
            postagens: [],
            tabelas: []
        };
    },
    inject: ['urlBase'],
    methods: {
        gerarSlug(titulo) {
            return titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        }
    },
    created() {
        Promise.all([
            fetch(`${this.urlBase}postagens`).then(response => response.json()),
            fetch(`${this.urlBase}tabelas`).then(response => response.json())
        ])
        .then(([postagensData, tabelasData]) => {
            this.postagens = postagensData;
            this.tabelas = tabelasData;
        })
        .catch(error => {
            console.error("Erro ao buscar os dados:", error);
        });
    }
    
};
