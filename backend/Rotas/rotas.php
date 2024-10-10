<?php
namespace Backend\Api\Rotas;

use Backend\Api\Controllers\PostagensController;
use Backend\Api\Controllers\FeriadosController;
use Backend\Api\Controllers\EventosController;
use Backend\Api\Controllers\PortfoliosController;
use Backend\Api\Controllers\TabelasController;

class Rotas {
    public static function fastRotas(){
        return [
            'GET' => [
                '/postagens' => [PostagensController::class, 'getAllPostagens'],
                '/feriados' => [FeriadosController::class, 'getAllFeriados'],
                '/eventos' => [EventosController::class, 'getAllEventos'],
                '/portfolios' => [PortfoliosController::class, 'getAllPortfolios'],
                '/contaarquivos' => [SlidesController::class, 'contaAquivos'],
                '/tabelas' => [TabelasController::class, 'getAllTabelas'],
            ],
            'POST' => [
                
            ],
            'PUT' => [
               
            ],
            'DELETE' => [
                
            ],
        ];
    }
}

