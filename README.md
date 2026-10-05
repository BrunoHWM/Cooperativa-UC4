# 🌱 Cooperativa

## 📌 Sobre o projeto

Este projeto foi desenvolvido como trabalho final da UC4 – Programação Orientada a Objetos, utilizando **TypeScript**.

O sistema tem como objetivo representar e gerenciar uma cooperativa voltada para a produção e distribuição de alimentos, permitindo o cadastro e controle de produtores, alimentos, instituições e doações.

A aplicação foi desenvolvida utilizando os principais conceitos de **Programação Orientada a Objetos (POO)**, buscando manter o código organizado, reutilizável e de fácil manutenção.

## 🎯 Objetivo

O principal objetivo do projeto é colocar em prática os conhecimentos adquiridos durante a UC4, desenvolvendo um sistema funcional através da criação de classes, interfaces, herança, encapsulamento e polimorfismo.

## ⚙️ Funcionalidades

O sistema possui estruturas para:

- 👨‍🌾 Cadastro e gerenciamento de produtores;
- 🏡 Representação de produtores de agricultura familiar;
- 🌳 Representação de produtores de hortas comunitárias;
- 🥕 Cadastro e gerenciamento de alimentos;
- 🏢 Cadastro de instituições;
- 🤝 Sistema de doações;
- 📋 Registro e gerenciamento das informações da cooperativa.

## 🧠 Conceitos de Programação Orientada a Objetos

Durante o desenvolvimento foram utilizados diversos conceitos de POO, entre eles:

- **Classes e objetos**
- **Encapsulamento**
- **Herança**
- **Polimorfismo**
- **Interfaces**
- **Abstração**
- **Métodos e atributos**
- **Tipagem do TypeScript**
- **Organização de responsabilidades entre classes**

Esses conceitos foram utilizados para representar os diferentes elementos da cooperativa de forma estruturada.

## 📁 Estrutura do projeto

O código está organizado principalmente dentro da pasta `src`, separando as classes e interfaces do sistema.

```text
src/
├── classes/
│   ├── CommunityGardenProducer.ts
│   ├── FamilyFarmer.ts
│   ├── Food.ts
│   ├── Institution.ts
│   ├── Producer.ts
│   └── Registry.ts
│
├── interfaces/
│   └── Donatable.ts
│
└── main.ts
