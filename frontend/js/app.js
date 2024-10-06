import { Home } from './paginas/home.js';
import { Portfolio } from './paginas/portfolio.js';
import { Evento } from './paginas/evento.js';
import { Postagem } from './subPagina/postagem.js';
import { PortfolioDetalhes } from './subPagina/portfolioDetalhes.js';
import { EventoDetalhes } from './subPagina/eventoDetalhes.js';

const routes = [
    { path: '/', component: Home },
    { path: '/postagem/:slug', component: Postagem }, 
    { path: '/portfolio', component: Portfolio }, 
    { path: '/portfolio/:slug', component: PortfolioDetalhes }, 
    { path: '/eventos', component: Evento },
    { path: '/evento/:id', component: EventoDetalhes }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
});

const App = {
    template: `
        <div>
            <h1>Meu Microblog</h1>
            <nav>
                <router-link to="/">Home</router-link> |
                <router-link to="/portfolio">Portfólio</router-link> |
                <router-link to="/eventos">Eventos</router-link>
            </nav>
            <router-view></router-view>
        </div>
    `,
    setup() {
        const urlBase = 'http://localhost:8080/'; 
        return {
            urlBase
        };
    },
    provide() {
        return {
            urlBase: this.urlBase 
        };
    }
};

const app = Vue.createApp(App);
app.use(router);
app.mount('#app');
