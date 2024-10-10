<?php
namespace Backend\Api\Controllers;

class TabelasController {

    public function getAllTabelas() {
        $tabelas = [
            [
                'titulos' => ["Company", "Contact", "Country"],
                'dados' => [
                    ['pessoa' => "Maria Anders", 'contato' => "Alfreds Futterkiste", 'pais' => "Germany"],
                    ['pessoa' => "Francisco Chang", 'contato' => "Centro comercial Moctezuma", 'pais' => "Mexico"]
                ]
            ],
            [
                'titulos' => ["Nome", "Idade", "Cidade"],
                'dados' => [
                    ['pessoa' => "João Silva", 'contato' => "35", 'pais' => "São Paulo"],
                    ['pessoa' => "Ana Costa", 'contato' => "28", 'pais' => "Rio de Janeiro"]
                ]
            ]
        ];

        header('Content-Type: application/json');
        echo json_encode($tabelas);
    }
}
