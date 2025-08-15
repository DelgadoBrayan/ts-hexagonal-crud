# 🚀 Hexagonal Architecture API – TypeScript + Node.js + MongoDB

![Arquitectura Hexagonal](./assets/banner.png)

Una **API REST** desarrollada con **Arquitectura Hexagonal (Ports & Adapters)**, usando **TypeScript**, **Node.js** y **MongoDB** para lograr un código **limpio, desacoplado y escalable**.

## 🎯 Objetivo
Este proyecto es un ejemplo práctico de cómo implementar **Clean Architecture / Hexagonal Architecture** en Node.js, con capas bien separadas y tipadas para facilitar el mantenimiento y la escalabilidad.

## 🛠 Tecnologías usadas
- **Node.js** – entorno de ejecución
- **TypeScript** – tipado estático y robustez
- **Express** – framework web
- **MongoDB + Mongoose** – base de datos NoSQL
- **ESLint + Prettier** – calidad y formato de código
- **ts-node-dev** – recarga en caliente para desarrollo

## 🏗 Estructura del proyecto
```bash
src/
├── application/     # DTOs y lógica de aplicación
├── domain/          # Modelos y puertos (interfaces)
├── infrastructure/  # Adaptadores, controladores, DB
├── config/          # Inyección de dependencias

