/**
 * Classe genérica utilizada para armazenar diferentes tipos de objetos.
 *
 * O <T> permite que a mesma classe seja usada com Producer, Food,
 * Institution ou qualquer outro tipo.
 */
export class Registry<T> {
    // Array que armazena os objetos cadastrados.
    private items: T[] = [];

    /**
     * Adiciona um objeto ao registro.
     */
    public add(item: T): void {
        this.items.push(item);
    }

    /**
     * Retorna uma cópia dos objetos cadastrados.
     *
     * A cópia evita que o array original seja alterado diretamente.
     */
    public list(): T[] {
        return [...this.items];
    }

    /**
     * Procura um objeto utilizando uma condição.
     *
     * Retorna o objeto encontrado ou undefined se não encontrar.
     */
    public find(predicate: (item: T) => boolean): T | undefined {
        return this.items.find(predicate);
    }
}
