"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyFarmer = void 0;
const Producer_1 = require("./Producer");
/**
 * Classe que representa um agricultor familiar.
 *
 * Herda os dados e comportamentos da classe Producer.
 */
class FamilyFarmer extends Producer_1.Producer {
    /**
     * Construtor do agricultor familiar.
     */
    constructor(name, cpf, producedQuantity, propertySize) {
        // Chama o construtor da classe pai.
        super(name, cpf, producedQuantity);
        if (propertySize <= 0) {
            throw new Error("Property size must be greater than zero.");
        }
        this.propertySize = propertySize;
    }
    // Getter para consultar o tamanho da propriedade.
    getPropertySize() {
        return this.propertySize;
    }
    /**
     * Mostra os dados do agricultor familiar.
     *
     * Esta é uma implementação do método abstrato present().
     */
    present() {
        console.log(`
========================================
Producer: ${this.getName()}
Type: Family Farmer
CPF: ${this.getCpf()}
Produced quantity: ${this.getProducedQuantity()} kg
Property size: ${this.propertySize} hectares
========================================`);
    }
}
exports.FamilyFarmer = FamilyFarmer;
