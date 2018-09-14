'use strict';

var listaEstudiantes=[{
        nombres:'JJ',apellidos:'Tunja', codigo:'2012', documento:'2222', fechaNacimiento:'', carrera: {nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}, municipio: {id:1,nombre:'Tunja'}}];

module.controller('EstudianteCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    $scope.lista = listaEstudiantes;
    $scope.listaCarrera = listaCarreras;
    $scope.listaMunicipio = listaMunicipios;
    $scope.id=3;
    
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    
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
            if(!editar){
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
    //eliminardata
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

