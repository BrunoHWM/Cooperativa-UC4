"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Food = void 0;
/**
 * Classe que representa um alimento disponível no estoque.
 *
 * A classe implementa a interface Donatable porque um alimento
 * pode ser utilizado em uma doação.
 */
class Food {
    /**
     * Construtor responsável por criar um alimento.
     */
    constructor(name, category, availableQuantity, producer) {
        this.name = name;
        this.category = category;
        this.availableQuantity = availableQuantity;
        this.producer = producer;
    }
    // Getters para consultar os dados privados.
    getName() {
        return this.name;
    }
    getCategory() {
        return this.category;
    }
    getQuantity() {
        return this.availableQuantity;
    }
    getProducer() {
        return this.producer;
    }
    /**
     * Adiciona uma quantidade ao estoque.
     */
    addQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        this.availableQuantity += quantity;
    }
    /**
     * Retira uma quantidade do estoque.
     *
     * Também verifica se existe quantidade suficiente.
     */
    removeQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("Quantity must be greater than zero.");
        }
        if (quantity > this.availableQuantity) {
            throw new Error("There is not enough food in stock.");
        }
        this.availableQuantity -= quantity;
    }
    /**
     * Realiza uma doação.
     *
     * Como Food implementa Donatable, este método é obrigatório.
     */
    donate(quantity) {
        this.removeQuantity(quantity);
    }
    /**
     * Mostra as informações do alimento no terminal.
     */
    showInformation() {
        console.log(`
Food: ${this.name}
Category: ${this.category}
Available quantity: ${this.availableQuantity} kg
Producer: ${this.producer.getName()}
----------------------------------------`);
    }
}
exports.Food = Food;
