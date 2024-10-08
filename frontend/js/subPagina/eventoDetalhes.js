export const EventoDetalhes = {
    template: `
        <section v-if="evento">
            <h1>{{ evento.titulo }}</h1>
            <p>{{ evento.descricao_breve }}</p>
            <div>{{ evento.conteudo }}</div>
        </section>
    `,
    data() {
        return {
            evento: null
        };
    },
    inject: ['urlBase'],
    created() {
        const id = this.$route.params.id;
        fetch(`${this.urlBase}eventos`)
            .then(response => response.json())
            .then(data => {
                this.evento = data.find(evento => evento.id == id);
            });
    }
};
