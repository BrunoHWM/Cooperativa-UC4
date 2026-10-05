"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Producer = void 0;
/**
 * Classe abstrata que representa um produtor.
 *
 * Ela possui os dados que são comuns aos diferentes tipos de produtores.
 * Como é abstrata, não criamos um Producer diretamente.
 */
class Producer {
    /**
     * Construtor responsável por receber e validar os dados do produtor.
     */
    constructor(name, cpf, producedQuantity) {
        this.name = name;
        this.cpf = cpf;
        this.producedQuantity = producedQuantity;
    }
    // Getters usados para consultar os atributos privados.
    getName() {
        return this.name;
    }
    getCpf() {
        return this.cpf;
    }
    getProducedQuantity() {
        return this.producedQuantity;
    }
}
exports.Producer = Producer;
