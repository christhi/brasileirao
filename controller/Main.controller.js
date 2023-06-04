sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel) {
        "use strict";

        return Controller.extend("campeonatobrasileiro.controller.Main", {
            onInit: function () {
                //vamos criar um modelo
                //antes, as variaveis que vão no modelo
                var dadosGerais = {
                    rodada : '89a',
                    campeonato : "Brasileirão 2023 do Canal FioriNET"
                };

                // agora sim vamos criar o modelo
                var dadosModel = new JSONModel();
                dadosModel.setData(dadosGerais);
                var view = this.getView();
                view.setModel(dadosModel, "ModeloDadosGerais");

                


            }
        });
    });
