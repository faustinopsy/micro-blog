import { Card } from '../componentes/card.js';
export const Portfolio = {
    components: {
        Card 
    },
    template: `
        <div>
            <h1>Portfólio</h1>
            <div v-for="portfolio in portfolios" :key="portfolio.id">
                <router-link :to="'/portfolio/' + gerarSlug(portfolio.titulo)">
                    <Card :dados="portfolio" tipo="portfolio" />
                </router-link>
            </div>
        </div>
    `,
    data() {
        return {
            portfolios: []
        };
    },
    inject: ['urlBase'],
    methods: {
        gerarSlug(titulo) {
            return titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        }
    },
    created() {
        fetch(`${this.urlBase}portfolios`)
            .then(response => response.json())
            .then(data => this.portfolios = data);
    }
};
