export const PortfolioDetalhes = {
    template: `
        <section v-if="portfolio">
            <h1>{{ portfolio.titulo }}</h1>
            <img :src="portfolio.imagem" alt="Imagem do portfólio">
            <p>{{ portfolio.descricao_breve }}</p>
            <div>{{ portfolio.conteudo }}</div>
        </section>
    `,
    data() {
        return {
            portfolio: null
        };
    },
    created() {
        const slug = this.$route.params.slug;
        fetch(`${this.urlBase}portfolios`)
            .then(response => response.json())
            .then(data => {
                this.portfolio = data.find(portfolio => this.gerarSlug(portfolio.titulo) === slug);
            });
    },
    inject: ['urlBase'],
    methods: {
        gerarSlug(titulo) {
            return titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        }
    }
};
