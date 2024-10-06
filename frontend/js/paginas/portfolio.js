export const Portfolio = {
    template: `
        <div>
            <h1>Portfólio</h1>
            <div v-for="portfolio in portfolios" :key="portfolio.id" class="card">
                <router-link :to="'/portfolio/' + gerarSlug(portfolio.titulo)">
                    <h3>{{ portfolio.titulo }}</h3>
                    <img :src="portfolio.imagem" alt="Imagem do portfólio">
                    <p>{{ portfolio.descricao_breve }}</p>
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
