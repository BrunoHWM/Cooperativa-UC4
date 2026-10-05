"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Institution = void 0;
/**
 * Classe que representa uma instituição que recebe alimentos.
 */
class Institution {
    /**
     * Construtor da instituição.
     */
    constructor(name, address, peopleServed) {
        this.name = name;
        this.address = address;
        this.peopleServed = peopleServed;
        this.receivedQuantity = 0;
    }
    // Getters para consultar os dados da instituição.
    getName() {
        return this.name;
    }
    getAddress() {
        return this.address;
    }
    getPeopleServed() {
        return this.peopleServed;
    }
    /**
     * Registra a quantidade de alimentos recebida pela instituição.
     */
    registerReceipt(quantity) {
        if (quantity <= 0) {
            throw new Error("Received quantity must be greater than zero.");
        }
        this.receivedQuantity += quantity;
    }
    /**
     * Mostra os dados da instituição no terminal.
     */
    showInformation() {
        console.log(`
Institution: ${this.name}
Address: ${this.address}
People served: ${this.peopleServed}
Received quantity: ${this.receivedQuantity} kg
----------------------------------------`);
    }
}
exports.Institution = Institution;
