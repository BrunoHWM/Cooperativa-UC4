import { Producer } from "./Producer";

/**
 * Classe que representa um agricultor familiar.
 *
 * Herda os dados e comportamentos da classe Producer.
 */
export class FamilyFarmer extends Producer {
    // Informação específica do agricultor familiar.
    private propertySize: number;

    /**
     * Construtor do agricultor familiar.
     */
    constructor(
        name: string,
        cpf: string,
        producedQuantity: number,
        propertySize: number
    ) {
        // Chama o construtor da classe pai.
        super(name, cpf, producedQuantity);

        if (propertySize <= 0) {
            throw new Error("Property size must be greater than zero.");
        }

        this.propertySize = propertySize;
    }

    // Getter para consultar o tamanho da propriedade.
    public getPropertySize(): number {
        return this.propertySize;
    }

    /**
     * Mostra os dados do agricultor familiar.
     *
     * Esta é uma implementação do método abstrato present().
     */
    public present(): void {
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
