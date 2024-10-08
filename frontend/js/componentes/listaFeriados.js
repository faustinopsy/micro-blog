export const ListaFeriados = {
    template: `
        <section>
            <h2>Feriados</h2>
            <ul>
                <li v-for="feriado in feriadosFuturos" :key="feriado.data">
                    {{ feriado.data }} - {{ feriado.feriado }}
                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            feriados: [],
            dataAtual: new Date().toISOString().split('T')[0]
        };
    },
    computed: {
        feriadosFuturos() {
            return this.feriados.filter(feriado => feriado.data >= this.dataAtual);
        }
    },
    created() {
        fetch(`${this.$parent.urlBase}feriados`)
            .then(response => response.json())
            .then(data => this.feriados = data);
    }
};
