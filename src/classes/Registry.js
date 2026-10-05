"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registry = void 0;
/**
 * Classe genérica utilizada para armazenar diferentes tipos de objetos.
 *
 * O <T> permite que a mesma classe seja usada com Producer, Food,
 * Institution ou qualquer outro tipo.
 */
class Registry {
    constructor() {
        // Array que armazena os objetos cadastrados.
        this.items = [];
    }
    /**
     * Adiciona um objeto ao registro.
     */
    add(item) {
        this.items.push(item);
    }
    /**
     * Retorna uma cópia dos objetos cadastrados.
     *
     * A cópia evita que o array original seja alterado diretamente.
     */
    list() {
        return [...this.items];
    }
    /**
     * Procura um objeto utilizando uma condição.
     *
     * Retorna o objeto encontrado ou undefined se não encontrar.
     */
    find(predicate) {
        return this.items.find(predicate);
    }
}
exports.Registry = Registry;
