"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const readline_sync_1 = __importDefault(require("readline-sync"));
const FamilyFarmer_1 = require("./classes/FamilyFarmer");
const CommunityGardenProducer_1 = require("./classes/CommunityGardenProducer");
const Food_1 = require("./classes/Food");
const Institution_1 = require("./classes/Institution");
const Registry_1 = require("./classes/Registry");
/**
 * Registros utilizados para armazenar os dados do sistema.
 */
const producerRegistry = new Registry_1.Registry();
const foodRegistry = new Registry_1.Registry();
const institutionRegistry = new Registry_1.Registry();
/**
 * Exibe o menu principal do sistema.
 */
function menu() {
    console.log(`
==============================
       RAIZES DA TERRA
==============================
1 - Register producer
2 - Register food
3 - Register institution
4 - List producers
5 - List food
6 - List institutions
7 - Make donation
0 - Exit
==============================
`);
}
/**
 * Cadastra um novo produtor.
 * O usuário pode escolher entre agricultor familiar
 * ou produtor de horta comunitária.
 */
function registerProducer() {
    const type = readline_sync_1.default.questionInt("1 - Family Farmer\n2 - Community Garden Producer\nChoose: ");
    const name = readline_sync_1.default.question("Name: ");
    const cpf = readline_sync_1.default.question("CPF: ");
    const quantity = readline_sync_1.default.questionFloat("Produced quantity (kg): ");
    let producer;
    if (type === 1) {
        const propertySize = readline_sync_1.default.questionFloat("Property size (hectares): ");
        producer = new FamilyFarmer_1.FamilyFarmer(name, cpf, quantity, propertySize);
    }
    else if (type === 2) {
        const volunteers = readline_sync_1.default.questionInt("Number of volunteers: ");
        producer = new CommunityGardenProducer_1.CommunityGardenProducer(name, cpf, quantity, volunteers);
    }
    else {
        console.log("Invalid producer type.");
        return;
    }
    producerRegistry.add(producer);
    console.log("Producer registered successfully!");
}
/**
 * Cadastra um novo alimento.
 * O alimento precisa estar relacionado a um produtor cadastrado.
 */
function registerFood() {
    const producers = producerRegistry.list();
    if (producers.length === 0) {
        console.log("Register a producer first.");
        return;
    }
    const name = readline_sync_1.default.question("Food name: ");
    const category = readline_sync_1.default.question("Category: ");
    const quantity = readline_sync_1.default.questionFloat("Available quantity (kg): ");
    console.log("\nProducers:");
    producers.forEach((producer, index) => {
        console.log(`${index + 1} - ${producer.getName()}`);
    });
    const choice = readline_sync_1.default.questionInt("Choose the producer: ") - 1;
    if (choice < 0 || choice >= producers.length) {
        console.log("Invalid producer.");
        return;
    }
    const food = new Food_1.Food(name, category, quantity, producers[choice]);
    foodRegistry.add(food);
    console.log("Food registered successfully!");
}
/**
 * Cadastra uma nova instituição.
 */
function registerInstitution() {
    const name = readline_sync_1.default.question("Institution name: ");
    const address = readline_sync_1.default.question("Address: ");
    const peopleServed = readline_sync_1.default.questionInt("Number of people served: ");
    const institution = new Institution_1.Institution(name, address, peopleServed);
    institutionRegistry.add(institution);
    console.log("Institution registered successfully!");
}
/**
 * Lista todos os produtores cadastrados.
 * O método present() demonstra o polimorfismo.
 */
function listProducers() {
    const producers = producerRegistry.list();
    if (producers.length === 0) {
        console.log("No producers registered.");
        return;
    }
    producers.forEach(producer => {
        producer.present();
    });
}
/**
 * Lista todos os alimentos cadastrados.
 */
function listFood() {
    const foods = foodRegistry.list();
    if (foods.length === 0) {
        console.log("No food registered.");
        return;
    }
    foods.forEach(food => {
        food.showInformation();
    });
}
/**
 * Lista todas as instituições cadastradas.
 */
function listInstitutions() {
    const institutions = institutionRegistry.list();
    if (institutions.length === 0) {
        console.log("No institutions registered.");
        return;
    }
    institutions.forEach(institution => {
        institution.showInformation();
    });
}
/**
 * Realiza uma doação de alimento para uma instituição.
 * A quantidade doada é retirada do estoque do alimento.
 */
function makeDonation() {
    const foods = foodRegistry.list();
    const institutions = institutionRegistry.list();
    if (foods.length === 0) {
        console.log("No food registered.");
        return;
    }
    if (institutions.length === 0) {
        console.log("No institutions registered.");
        return;
    }
    console.log("\nFood:");
    foods.forEach((food, index) => {
        console.log(`${index + 1} - ${food.getName()} (${food.getQuantity()} kg)`);
    });
    const foodChoice = readline_sync_1.default.questionInt("Choose the food: ") - 1;
    if (foodChoice < 0 ||
        foodChoice >= foods.length) {
        console.log("Invalid food.");
        return;
    }
    const food = foods[foodChoice];
    const quantity = readline_sync_1.default.questionFloat("Quantity to donate (kg): ");
    console.log("\nInstitutions:");
    institutions.forEach((institution, index) => {
        console.log(`${index + 1} - ${institution.getName()}`);
    });
    const institutionChoice = readline_sync_1.default.questionInt("Choose the institution: ") - 1;
    if (institutionChoice < 0 ||
        institutionChoice >= institutions.length) {
        console.log("Invalid institution.");
        return;
    }
    const institution = institutions[institutionChoice];
    try {
        food.donate(quantity);
        institution.registerReceipt(quantity);
        console.log("\nDonation completed successfully!");
        console.log(`Food: ${food.getName()}`);
        console.log(`Quantity: ${quantity} kg`);
        console.log(`Institution: ${institution.getName()}`);
    }
    catch (error) {
        if (error instanceof Error) {
            console.log("Error:", error.message);
        }
    }
}
/**
 * Inicia o menu principal.
 * O programa continua funcionando até o usuário escolher a opção 0.
 */
function start() {
    let option = -1;
    while (option !== 0) {
        menu();
        option = readline_sync_1.default.questionInt("Choose an option: ");
        switch (option) {
            case 1:
                registerProducer();
                break;
            case 2:
                registerFood();
                break;
            case 3:
                registerInstitution();
                break;
            case 4:
                listProducers();
                break;
            case 5:
                listFood();
                break;
            case 6:
                listInstitutions();
                break;
            case 7:
                makeDonation();
                break;
            case 0:
                console.log("Program finished.");
                break;
            default:
                console.log("Invalid option.");
        }
        if (option !== 0) {
            readline_sync_1.default.question("\nPress ENTER to continue...");
        }
    }
}
// Inicia o programa.
start();
