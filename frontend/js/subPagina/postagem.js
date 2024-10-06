export const Postagem = {
    template: `
        <section v-if="postagem">
            <h1>{{ postagem.titulo }}</h1>
            <img :src="postagem.imagem" alt="Imagem da postagem">
            <p>{{ postagem.descricao_breve }}</p>
            <div>{{ postagem.conteudo }}</div>
        </section>
    `,
    data() {
        return {
            postagem: null
        };
    },
    inject: ['urlBase'],
    created() {
        const slug = this.$route.params.slug;
        fetch(`${this.urlBase}postagens`)
            .then(response => response.json())
            .then(data => {
                this.postagem = data.find(postagem => this.gerarSlug(postagem.titulo) === slug);
            });
    },
    methods: {
        gerarSlug(titulo) {
            return titulo.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\s+/g, '-');
        }
    }
};
