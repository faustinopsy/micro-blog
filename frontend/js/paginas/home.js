export const Home = {
    template: `
        <div>
            <h1>Home</h1>
            <section>
                <h2>Postagens</h2>
                <div v-for="postagem in postagens" :key="postagem.id" class="card">
                    <router-link :to="'/postagem/' + gerarSlug(postagem.titulo)">
                        <h3>{{ postagem.titulo }}</h3>
                        <img :src="postagem.imagem" alt="Imagem da postagem">
                        <p>{{ postagem.descricao_breve }}</p>
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
