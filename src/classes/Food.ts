import { Donatable } from "../interfaces/Donatable";
import { Producer } from "./Producer";

/**
 * Classe que representa um alimento disponível no estoque.
 *
 * A classe implementa a interface Donatable porque um alimento
 * pode ser utilizado em uma doação.
 */
export class Food implements Donatable {
    private name: string;
    private category: string;
    private availableQuantity: number;
    private producer: Producer;

    /**
     * Construtor responsável por criar um alimento.
     */
    constructor(
        name: string,
        category: string,
        availableQuantity: number,
        producer: Producer
    ) {

        this.name = name;
        this.category = category;
        this.availableQuantity = availableQuantity;
        this.producer = producer;
    }

    // Getters para consultar os dados privados.
    public getName(): string {
        return this.name;
    }

    public getCategory(): string {
        return this.category;
    }

    public getQuantity(): number {
        return this.availableQuantity;
    }

    public getProducer(): Producer {
        return this.producer;
    }

    /**
     * Adiciona uma quantidade ao estoque.
     */
    public addQuantity(quantity: number): void {
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
    public removeQuantity(quantity: number): void {
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
    public donate(quantity: number): void {
        this.removeQuantity(quantity);
    }

    /**
     * Mostra as informações do alimento no terminal.
     */
    public showInformation(): void {
        console.log(`
Food: ${this.name}
Category: ${this.category}
Available quantity: ${this.availableQuantity} kg
Producer: ${this.producer.getName()}
----------------------------------------`);
    }
}
