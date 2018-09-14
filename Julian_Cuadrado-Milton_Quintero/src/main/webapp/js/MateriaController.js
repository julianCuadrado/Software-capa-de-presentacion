'use strict';

var listaMaterias=[{id:1,nombre:'software I', creditos:2, profesor:{id:1,nombres:'Julian'}, carrera:{nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}},
        horario: [{dia:1, horaInicio:5, horaFin:6}]}];
var listaDiasSemana= [1, 2, 3, 4, 5, 6];

module.controller('MateriaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
        $scope.lista = listaMaterias;
        $scope.listaDias = listaDiasSemana;
        $scope.horarioActual = [];
        $scope.datosFormulario = {};
        $scope.datosFormularioHorario = {};
        $scope.estado = true;
        $scope.panelEditar = false;
        $scope.panelEditarHorario = false;
        $scope.li = [];
    
        $scope.listaProfesor = listaProfesores;
        $scope.listaCarrera = listaCarreras;
    
        $scope.nuevo = function () {
            $scope.panelEditar = true;
            $scope.estado = true;
            $scope.li = [];
            $scope.datosFormulario = {};
            $scope.datosFormularioHorario = {};
        };
        
        $scope.guardar = function () {
            $scope.errores = {};
            var error = false;
            var editar = false;
            if (error)
                return;
            for(var i=0; i < $scope.lista.length; i++){
                if($scope.lista[i].nombre == $scope.datosFormulario.nombre){
                    editar = true;
                    break;
                }
            }
            if(!editar){
                $scope.datosFormulario.horario = $scope.horarioActual;
                $scope.lista.push($scope.datosFormulario);
                $scope.datosFormularioHorario = {};
                $scope.horarioActual = [];
//                $scope.li = [];
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
            $scope.estado = false;
            $scope.datosFormulario = data;
            $scope.horarioActual = data.horario;
            $scope.li = data.horario;
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
        
        $scope.agregarHorario = function () {
            $scope.errores = {};
            var error = false;
        
            if (error)
                return;
            $scope.horarioActual.push($scope.datosFormularioHorario);
            $scope.li = $scope.horarioActual;
            $scope.datosFormularioHorario = {};
            $scope.panelEditarHorario = false;
        };
        
        $scope.mostrarHorario = function (data) {
            $scope.li = data.horario;
            $scope.estado = false;
        };
        
        $scope.editarHorario = function(data) {
            $scope.panelEditarHorario = true;
            $scope.datosFormularioHorario = data;
        };
        
        $scope.cancelarHorario = function(){
           $scope.panelEditarHorario = false; 
        };
        
        $scope.eliminarHorario = function(data) {
            if (confirm('\xbfDesea elminar este registro?')) {  
                if(!$scope.estado){
                    for(var i=0; i < $scope.lista.length; i++){
                        for (var max = 0; max < $scope.lista[i].horario.length; max++) {
                            if($scope.lista[i].horario[max] == data){
                                $scope.lista[i].horario.splice(max,1);
                                break;
                            }
                        }
                    }
                }else{
                    for (max = 0; max < $scope.horarioActual.length; max++) {
                        if($scope.horarioActual[max] === data){
                                $scope.horarioActual.splice(max,1);
                                break;
                        }
                    }
                }
            }
        };
    }]);