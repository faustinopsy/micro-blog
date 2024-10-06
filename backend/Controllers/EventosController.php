<?php
namespace Backend\Api\Controllers;

class EventosController {

    public function getAllEventos() {
        $eventos = [
            [
                'id' => 1,
                'titulo' => 'Evento 1',
                'descricao_breve' => 'Descrição do Evento 1',
                'conteudo' => 'Detalhes completos do Evento 1'
            ],
            [
                'id' => 2,
                'titulo' => 'Evento 2',
                'descricao_breve' => 'Descrição do Evento 2',
                'conteudo' => 'Detalhes completos do Evento 2'
            ]
        ];
        
        header('Content-Type: application/json');
        echo json_encode($eventos);
    }
}
