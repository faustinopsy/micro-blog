export const Card = {
    template: `
        <div :class="['card', tipo]">
            <img :src="dados.imagem" alt="Imagem do card">
            <h3>{{ dados.titulo }}</h3>
            <p>{{ dados.descricao_breve }}</p>
        </div>
    `,
    props: {
        dados: {
            type: Object,
            required: true
        },
        tipo: {
            type: String,
            required: false,
            default: 'postagem'
        }
    }
};
