/**
 * Classe abstrata que representa um produtor.
 *
 * Ela possui os dados que são comuns aos diferentes tipos de produtores.
 * Como é abstrata, não criamos um Producer diretamente.
 */
export abstract class Producer {

    private name: string;
    private cpf: string;
    private producedQuantity: number;

    /**
     * Construtor responsável por receber e validar os dados do produtor.
     */
    constructor(name: string, cpf: string, producedQuantity: number) {
        this.name = name;
        this.cpf = cpf;
        this.producedQuantity = producedQuantity;
    }

    // Getters usados para consultar os atributos privados.
    public getName(): string {
        return this.name;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public getProducedQuantity(): number {
        return this.producedQuantity;
    }

    /**
     * Método abstrato.
     *
     * Cada classe filha deve criar sua própria versão deste método.
     * Isso permite demonstrar o polimorfismo.
     */
    public abstract present(): void;
}
