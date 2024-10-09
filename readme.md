# modelo de micro-blog criado em Vue para consumir ma api simples em PHP
o ituito é explanar a facilidade de usar o vue em detrimento do javascript puro

## estrutura de uma aplicação vue simples 
```
const app = Vue.createApp({
    // 1. PROPS
    // "props" é usado para definir quais propriedades o componente espera receber de componentes pai.
    props: {
        mensagem: String, // Exemplo: Espera receber uma string do componente pai
        contador: {
            type: Number,  // Define o tipo da prop como Número
            required: true // Define que essa prop é obrigatória
        }
    },

    // 2. COMPONENTES
    // Aqui você registra componentes filhos que o componente atual pode usar.
    components: { 
        MeuComponenteFilho // Exemplo de componente filho registrado localmente
    },

    // 3. TEMPLATE
    // O template define a estrutura HTML do componente. É onde você constrói a interface de usuário.
    template: `
        <div>
            <h1>{{ titulo }}</h1>
            <p>{{ mensagem }}</p>
            <MeuComponenteFilho :contador="contador"></MeuComponenteFilho> <!-- Usando o componente filho -->
            <button @click="incrementar">Incrementar</button>
            <p>Contador: {{ contador }}</p>
        </div>
    `,

    // 4. DATA
    // O objeto `data` retorna os valores reativos do componente, ou seja, o estado que pode ser modificado.
    data() {
        return {
            titulo: 'Minha Aplicação Vue',
            contadorInterno: 0  // Contador local que pode ser usado
        };
    },

    // 5. WATCH
    // O `watch` permite observar e reagir a mudanças em variáveis específicas do estado.
    watch: {
        contador(newVal, oldVal) {
            console.log(`O contador mudou de ${oldVal} para ${newVal}`);
        }
    },

    // 6. COMPUTED
    // Computed são propriedades derivadas que são recalculadas automaticamente quando suas dependências mudam.
    computed: {
        contadorDobrado() {
            return this.contador * 2;  // Retorna o valor do contador dobrado
        }
    },

    // 7. METHODS
    // Aqui você define métodos que podem ser usados para manipular o estado e responder a eventos.
    methods: {
        incrementar() {
            this.contadorInterno++;  // Incrementa o contador interno
            this.$emit('atualizar-contador', this.contadorInterno); // Emitindo um evento personalizado
        }
    },

    // 8. CICLO DE VIDA - CREATED
    // Executado quando o componente é criado. Você pode inicializar dados ou fazer requisições aqui.
    created() { 
        console.log('Componente foi criado');
    },

    // 9. CICLO DE VIDA - BEFOREMOUNT
    // Executado antes do DOM ser montado. Útil para fazer verificações ou preparar algo antes da renderização.
    beforeMount() {
        console.log('Componente será montado em breve');
    },

    // 10. CICLO DE VIDA - SETUP - É uma alternativa mais direta ao uso do data e methods.
    // No Vue 3, o `setup` é a parte central da API de Composição, onde você define a lógica do componente.
    // Aqui, você pode usar `ref`, `reactive`, e outras funcionalidades da API de composição.
    setup() {
        const nome = Vue.ref('Vue 3 App');  // Exemplo de variável reativa com API de Composição
        return {
            nome  // Retornando `nome` para estar disponível no template
        };
    },

    // 11. PROVIDE
    // `provide` permite compartilhar dados com componentes filhos sem precisar passar props diretamente.
    provide() { 
        return {
            contadorGlobal: this.contadorInterno  // Compartilhando contador globalmente com componentes filhos
        };
    }
});

// 12. MONTANDO A APLICAÇÃO
// Aqui você monta a aplicação Vue em um elemento DOM especificado (neste caso, um elemento com id 'app').
app.mount('#app');
