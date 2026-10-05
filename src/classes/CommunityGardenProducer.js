"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityGardenProducer = void 0;
const Producer_1 = require("./Producer");
/**
 * Classe que representa um produtor de horta comunitária.
 *
 * Também herda da classe Producer.
 */
class CommunityGardenProducer extends Producer_1.Producer {
    /**
     * Construtor do produtor de horta comunitária.
     */
    constructor(name, cpf, producedQuantity, volunteerCount) {
        // Aproveita a validação e os atributos da classe pai.
        super(name, cpf, producedQuantity);
        if (volunteerCount < 0) {
            throw new Error("Volunteer count cannot be negative.");
        }
        this.volunteerCount = volunteerCount;
    }
    // Getter para consultar a quantidade de voluntários.
    getVolunteerCount() {
        return this.volunteerCount;
    }
    /**
     * Mostra os dados da horta comunitária.
     *
     * Esta implementação é diferente da classe FamilyFarmer,
     * demonstrando o polimorfismo.
     */
    present() {
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
exports.CommunityGardenProducer = CommunityGardenProducer;
