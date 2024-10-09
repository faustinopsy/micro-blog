export const Carousel = {
    template: `
        <div v-if="imagens.length > 0" class="carousel-container">
            <div class="carousel-slide">
                <img :src="imagens[slideAtual]" alt="Slide imagem" />
            </div>
            <div class="carousel-indicators">
                <button v-for="(imagem, index) in imagens" 
                        :key="index"
                        @click="mudarSlide(index)"
                        :class="{'active': index === slideAtual}">
                </button>
            </div>
        </div>
    `,
    data() {
        return {
            imagens: [],
            slideAtual: 1,
            totalImagens: 0
        };
    },
    beforeMount(){
        this.contaArquivos();
    },
    created() {
        this.iniciarTimer();
    },
    inject: ['urlBase'],
    methods: {
        contaArquivos() {
            fetch(`../../img/conta.php`)
            .then(response => response.json())
            .then(data => {
                this.totalImagens = data.total; 
                this.carregarImagens(); 
            })
            .catch(error => console.error('Erro ao contar imagens:', error));
        },
        carregarImagens() {
            for (let i = 1; i <= this.totalImagens; i++) {
                const imgPath = `./img/slide/slide${i}.webp`;
                this.verificarImagemExiste(imgPath, (existe) => {
                    if (existe) {
                        this.imagens.push(imgPath); 
                    }
                });
            }
        },
        verificarImagemExiste(url, callback) {
            const img = new Image();
            img.onload = () => callback(true);
            img.onerror = () => callback(false); 
            img.src = url;
        },
        mudarSlide(index) {
            this.slideAtual = index;
        },
        iniciarTimer() {
            setInterval(() => {
                this.slideAtual = (this.slideAtual + 1) % this.imagens.length;  
            }, 6000); 
        }
    }
};
