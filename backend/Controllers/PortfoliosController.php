<?php
namespace Backend\Api\Controllers;

class PortfoliosController {

    public function getAllPortfolios() {
        $portfolios = [
            [
                'id' => 1,
                'titulo' => 'Projeto xxxx',
                'imagem' => 'portfolio1.jpg',
                'descricao_breve' => 'Breve descrição do Projeto 1',
                'conteudo' => 'Conteúdo completo do Projeto 1'
            ],
            [
                'id' => 2,
                'titulo' => 'Projeto zzz dddd',
                'imagem' => 'portfolio2.jpg',
                'descricao_breve' => 'Breve descrição do Projeto 2',
                'conteudo' => 'Conteúdo completo do Projeto 2'
            ]
        ];

        header('Content-Type: application/json');
        echo json_encode($portfolios);
    }
}
