/**
 * Interface que define a regra para um objeto que pode realizar uma doação.
 *
 * A interface exige que a classe tenha o método donate().
 */
export interface Donatable {
    donate(quantity: number): void;
}
