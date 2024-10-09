<?php
function contaAquivos(){
        $fi = new FilesystemIterator('./slide');
        $total = iterator_count($fi) ;
        echo json_encode(['total' => $total]);
}
contaAquivos();
