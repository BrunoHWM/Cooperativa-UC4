/**
 * Classe que representa uma instituição que recebe alimentos.
 */
export class Institution {
    private name: string;
    private address: string;
    private peopleServed: number;
    private receivedQuantity: number;

    /**
     * Construtor da instituição.
     */
    constructor(name: string, address: string, peopleServed: number) {
        this.name = name;
        this.address = address;
        this.peopleServed = peopleServed;
        this.receivedQuantity = 0;
    }

    // Getters para consultar os dados da instituição.
    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }

    public getPeopleServed(): number {
        return this.peopleServed;
    }

    /**
     * Registra a quantidade de alimentos recebida pela instituição.
     */
    public registerReceipt(quantity: number): void {
        if (quantity <= 0) {
            throw new Error("Received quantity must be greater than zero.");
        }

        this.receivedQuantity += quantity;
    }

    /**
     * Mostra os dados da instituição no terminal.
     */
    public showInformation(): void {
        console.log(`
Institution: ${this.name}
Address: ${this.address}
People served: ${this.peopleServed}
Received quantity: ${this.receivedQuantity} kg
----------------------------------------`);
    }
}
