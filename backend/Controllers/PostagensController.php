<?php
namespace Backend\Api\Controllers;

class PostagensController {

    public function getAllPostagens() {
        $postagens = [
            [
                'id' => 1,
                'titulo' => 'O Futuro do JavaScript: ES2024',
                'imagem' => 'es2024.jpg',
                'descricao_breve' => 'Descubra as novas funcionalidades da versão ES2024 do JavaScript.',
                'conteudo' => 'O ECMAScript 2024 (ES2024) está trazendo diversas melhorias e novas funcionalidades para o JavaScript, como o pattern matching, que permite escrever código mais expressivo e claro. Além disso, o suporte a tipos estáticos está sendo discutido para melhorar a verificação em tempo de compilação, reduzindo erros em grandes aplicações. Essas novas features estão moldando o futuro do JavaScript, tornando-o ainda mais poderoso e eficiente.'
            ],
            [
                'id' => 2,
                'titulo' => 'Melhores Práticas para Manipulação de Arrays em JavaScript',
                'imagem' => 'manipulacao-arrays.jpg',
                'descricao_breve' => 'Aprenda como otimizar o uso de arrays no seu código JavaScript.',
                'conteudo' => 'A manipulação de arrays é uma habilidade fundamental para qualquer desenvolvedor JavaScript. Métodos como `map()`, `filter()`, e `reduce()` permitem transformar e processar dados de maneira eficiente. Por exemplo, `reduce()` pode ser usado para calcular a soma de um array de números, enquanto `filter()` permite selecionar elementos com base em uma condição. Saber como e quando usar cada método pode melhorar significativamente a performance e legibilidade do seu código.'
            ],
            [
                'id' => 3,
                'titulo' => 'Promessas e Async/Await: A Maneira Moderna de Trabalhar com Assincronismo',
                'imagem' => 'promessas-async-await.jpg',
                'descricao_breve' => 'Entenda como o uso de Promises e async/await pode simplificar seu código assíncrono.',
                'conteudo' => 'Antes do ES6, o gerenciamento de operações assíncronas em JavaScript era feito com callbacks, o que resultava no famoso "callback hell". Com a introdução das Promises, esse problema foi mitigado, permitindo um controle mais claro sobre a execução assíncrona. A chegada do async/await no ES2017 trouxe ainda mais simplicidade, permitindo escrever código assíncrono que parece síncrono. Usar `await` para esperar uma Promise resolve o código de forma mais legível e fácil de entender, sem precisar de `.then()` ou `.catch()` em cadeias longas.'
            ],
            [
                'id' => 4,
                'titulo' => 'O Poder dos Módulos ES6 no JavaScript',
                'imagem' => 'modulos-es6.jpg',
                'descricao_breve' => 'Saiba como os módulos ES6 estão revolucionando a forma de organizar código JavaScript.',
                'conteudo' => 'Os módulos ES6 introduzidos no ECMAScript 2015 (ES6) permitiram uma nova maneira de organizar e reutilizar código em JavaScript. Eles oferecem uma maneira clara de exportar e importar funcionalidades entre arquivos, melhorando a modularidade e a manutenção do código. Antes disso, bibliotecas como RequireJS eram necessárias para dividir o código em partes menores. Agora, com a sintaxe `import/export`, o JavaScript moderno ficou mais organizado e escalável.'
            ]
        ];

        header('Content-Type: application/json');
        echo json_encode($postagens);
    }
}
