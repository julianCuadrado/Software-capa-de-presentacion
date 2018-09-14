'use strict';

//var listaMatricula=[{anio:2018,semestre:1, estudiante: {
//        nombres:'some',apellidos:'Tunja', codigo:'2012', documento:'2222', fechaNacimiento:'', carrera: {nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}}, municipio: {id:1,nombre:'Tunja'}}, 
//        materias: [{id:1,nombre:'software I', creditos:2, profesor:{id:1,nombres:'Julian'}, carrera:{nombre:'Ingenieria de sistemas', facultad:{id:1,nombre:'ingenieria'}},
//         horario: [{dia:1, horaInicio:'08:00 a.m.', horaFin:'12:00 a.m.'}]}]}];
         
var listaMatricula =[];         
         
module.controller('MatriculaCtrl', ['$scope', '$filter', '$http', function ($scope, $filter, $http) {
    $scope.lista = listaMatricula;
    $scope.datosFormulario = {};
    $scope.panelEditar = false;
    
    $scope.listaEstudiante = listaEstudiantes;
    $scope.listaMateria = listaMaterias;
    $scope.filtro = [];
    
    $scope.datosMateria = {};
    $scope.materiasActuales = [];
    $scope.li = [];
    
    $scope.filtroMateria= function(estudiante) {
        $scope.filtro = [];
        for(var i = 0; i < $scope.listaMateria.length; i++) {
            if (estudiante.carrera.nombre === $scope.listaMateria[i].carrera.nombre) {
                $scope.filtro.push($scope.listaMateria[i]);
            }
        }
    };
    
    $scope.nuevo = function () {
        $scope.panelEditar = true;
        $scope.datosFormulario = {};
        $scope.datosMateria = {};
    };
    
    $scope.cancelar = function () {
        $scope.panelEditar = false;
        $scope.datosFormulario = {};
    };

    //editar
    $scope.editar = function (data) {
        $scope.panelEditar = true;
        $scope.datosFormulario = data;
        $scope.materiasActuales = data.materias;
    };
    
    //eliminar
    $scope.eliminar = function (data) {
        if (confirm('\xbfDesea elminar este registro?')) {    
            for(var i=0; i<$scope.lista.length; i++){
                if($scope.lista[i]==data){
                    $scope.lista.splice(i,1);
                    break;
                }
            }
        }
    };
      
      $scope.agregarMateria = function() {
          $scope.errores = {};
        var error = false;
        
        if (error)
            return;
            
//        if (!$scope.datosFormularioHorario.id){
//            $scope.datosFormulario.id = $scope.id++;
//              console.log($scope.datosFormularioHorario);
//    console.log($scope.datosMateria)
            $scope.materiasActuales.push($scope.datosMateria);
            $scope.li = $scope.materiasActuales;
            $scope.datosMateria = {};
            console.log($scope.li);
//        }
//        $scope.panelEditar = false;
      };
      
      $scope.guardar = function () {
       $scope.errores = {};
        var error = false;
        
        if (error)
            return;
            
//        if (!$scope.datosFormularioHorario.id){
//            $scope.datosFormulario.id = $scope.id++;
//              console.log($scope.datosFormularioHorario); 
            $scope.datosFormulario.materias = $scope.materiasActuales;
            $scope.lista.push($scope.datosFormulario);
        $scope.panelEditar = false;
         $scope.datosMateria = {};
         $scope.materiasActuales = [];
         $scope.li = [];
         console.log($scope.lista);
    };        
    
    $scope.mostrarMaterias = function (data) {
        console.log(data)
        $scope.li = data.materias;
    };
}]);


