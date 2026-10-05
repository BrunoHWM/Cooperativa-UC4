import { Producer } from "./Producer";

/**
 * Classe que representa um produtor de horta comunitária.
 *
 * Também herda da classe Producer.
 */
export class CommunityGardenProducer extends Producer {
    private volunteerCount: number;

    /**
     * Construtor do produtor de horta comunitária.
     */
    constructor(
        name: string,
        cpf: string,
        producedQuantity: number,
        volunteerCount: number
    ) {
        // Aproveita a validação e os atributos da classe pai.
        super(name, cpf, producedQuantity);

        if (volunteerCount < 0) {
            throw new Error("Volunteer count cannot be negative.");
        }

        this.volunteerCount = volunteerCount;
    }

    // Getter para consultar a quantidade de voluntários.
    public getVolunteerCount(): number {
        return this.volunteerCount;
    }

    /**
     * Esta implementação é diferente da classe FamilyFarmer,
     * demonstrando o polimorfismo.
     */
    public present(): void {
        console.log(`
========================================
Producer: ${this.getName()}
Type: Community Garden Producer
CPF: ${this.getCpf()}
Produced quantity: ${this.getProducedQuantity()} kg
Volunteers: ${this.volunteerCount}
========================================`);
    }
}
