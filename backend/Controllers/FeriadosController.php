<?php
namespace Backend\Api\Controllers;

class FeriadosController {

    public function getAllFeriados() {
        $feriados = [
            ['data' => '2024-10-05', 'feriado' => 'zzzz'],
            ['data' => '2024-10-08', 'feriado' => 'xxxx'],
            ['data' => '2024-12-25', 'feriado' => 'Natal'],
            ['data' => '2024-01-01', 'feriado' => 'Ano Novo'],
        ];

        header('Content-Type: application/json');
        echo json_encode($feriados);

    }
}