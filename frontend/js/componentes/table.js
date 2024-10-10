export const Tabela = {
    data(){
        return{
            titulos: ["Company", "Contact", "Country" ],
            dados: [
                {pessoa:"Maria Anders", contato:"Alfreds Futterkiste", pais: "Germany"},
                {pessoa:"rancisco Chang", contato:"Centro comercial Moctezuma", pais: "Mexico" }
            ],
            empresas: ["Alfreds Futterkiste","Centro comercial Moctezuma"],
            contatos: ["Maria Anders","Francisco Chang"],
            paises: ["Germany", "Mexico"],
        }
    },
    template: `
        <table>
        <caption>Teste</caption>
        <tbody>
            <tr>
                <th v-for="titulo in titulos">{{titulo}}</th>
            </tr>
            <tr v-for="pess in dados"><td>{{pess.pessoa}}</td><td>{{pess.contato}}</td><td>{{pess.pais}}</td></tr>
           
        </tbody>
        </table>
    `
};
