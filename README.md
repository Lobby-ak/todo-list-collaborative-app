# todo-list-collaborative-app

````markdown
# 📋 Application To-Do List Collaborative

Une application web simple et collaborative qui permet à des utilisateurs de :
- Créer des tâches
- Les organiser par projets
- Suivre l’avancement de leur travail via une interface web claire et intuitive

---

## 🛠️ Technologies utilisées

| Côté | Stack |
|------|-------|
| Frontend | React `18.2.0` |
| Backend | Spring Boot `3.3.11`, Java `17` |
| Base de données | MySQL via WampServer `3.3.5 - 64bit` |

---

## ⚙️ Configuration requise

### 📦 Backend

Fichier `application.properties` utilisé :

```properties
spring.application.name=backend

spring.datasource.url=jdbc:mysql://localhost:3308/todolist
spring.datasource.username=root
spring.datasource.password=

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQL8Dialect

spring.security.user.name=admin
spring.security.user.password=admin
spring.security.user.roles=USER

server.port=8080
````

> 🔸 Assurez-vous que la base de données `todolist` est créée dans **phpMyAdmin** (WampServer).
> 🔸 Le port MySQL ici est `3308`, assurez-vous qu’il est bien activé dans Wamp.
> 🔸 Ensuite, créez les deux tables suivantes dans la base de données todolist :
🔹 Table user

CREATE TABLE user (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);

🔹 Table projet

CREATE TABLE projet (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  user_id INT,
  FOREIGN KEY (user_id) REFERENCES user(id)
);


---

## 🚀 Lancer l'application

### ✅ 1. Démarrer le backend

```bash
cd backend
mvn spring-boot:run
```

📍 Accès API : [http://localhost:8080](http://localhost:8080)

### ✅ 2. Démarrer le frontend

```bash
cd frontend
npm install
npm start
```

📍 Interface web : [http://localhost:3000](http://localhost:3000)

> ℹ️ Le frontend communique avec le backend sur le port 8080. Assurez-vous que CORS est bien configuré dans Spring Boot.

---

## 🧪 Accès par défaut

| Identifiant       | Valeur  |
| ----------------- | ------- |
| Nom d'utilisateur | `admin` |
| Mot de passe      | `admin` |

> Vous pouvez modifier cela dans `application.properties`.

---

## 📂 Arborescence du projet

```
projet-java-2/
├── backend/              # Backend Spring Boot
│   ├── src/
│   └── pom.xml
├── frontend/             # Frontend React
│   ├── public/
│   ├── src/
│   └── package.json
└── README.md
```

---

## ✅ Fonctionnalités principales

* 🔐 Authentification utilisateur (Spring Security)
* ✅ Gestion des projets
* ✅ Création de tâches
* 🕐 Suivi de l’état des tâches (en cours, terminé, etc.)
* 💡 Interface simple et intuitive

