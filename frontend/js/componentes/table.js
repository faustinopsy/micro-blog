export const Tabela = {
    props: {
        titulos: Array, 
        dados: Array
    },
    template: `
        <table>
            <caption>Tabela Teste</caption>
            <thead>
                <tr>
                    <th v-for="titulo in titulos" :key="titulo">{{ titulo }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="pess in dados" :key="pess.pessoa">
                    <td>{{ pess.pessoa }}</td>
                    <td>{{ pess.contato }}</td>
                    <td>{{ pess.pais }}</td>
                </tr>
            </tbody>
        </table>
    `
};
