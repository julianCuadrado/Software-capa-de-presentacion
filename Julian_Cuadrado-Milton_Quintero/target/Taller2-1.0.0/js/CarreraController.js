'use strict';

var listaCarreras=[{nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}]

module.controller('CarreraCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    //listar
    $scope.lista = listaCarreras;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    
    $scope.listaFacultad=listaFacultades;
    
    //guardar
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
    };
    
    $scope.guardar = function () {
        $scope.errores = {};
        var error = false;
        var editar = false;
        if (error)
            return;
        for(var i=0; i < $scope.lista.length; i++){
            if($scope.lista[i] == $scope.datosFormulario){
                editar = true;
                break;
            }
        }
        if (!editar){
            $scope.lista.push($scope.datosFormulario);
        }
        $scope.panelEditar = false;
    };
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
    };
    //eliminar
    $scope.eliminar = function (data){
        if (confirm('\xbfDesea elminar este registro?')) {    
            for(var i=0; i<$scope.lista.length; i++){
                if($scope.lista[i]==data){
                    $scope.lista.splice(i,1);
                    break;
                }
            }
        }
    };
}]);
