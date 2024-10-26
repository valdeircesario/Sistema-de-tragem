
# Sistema de Triagem de Pacientes

**Junho de 2024 - até o momento**

**Associado(s) ao Instituto Federal de Goiás (IFG)**

Este sistema web foi desenvolvido para otimizar o agendamento de consultas em unidades de saúde. Ao preencher um formulário simples, os pacientes são classificados por prioridade, garantindo que os casos mais urgentes sejam atendidos rapidamente.

## Principais Funcionalidades

- **Cadastro de Pacientes:** Criação de perfis e histórico de atendimento.
- **Classificação por Prioridade:** Algoritmo inteligente para definir a ordem de atendimento.
- **Agendamento Automático:** Criação de agendas personalizadas para cada médico.
- **Notificações:** Lembretes de consultas para pacientes e profissionais.

## Tecnologias Utilizadas

- Angular
- Quarkus
- Java
- PostgreSQL
- Docker

## Resultados

- Redução significativa do tempo de espera para atendimento.
- Aumento da satisfação dos pacientes.
- Otimização da gestão de agendas médicas.

  ## Demonstração

Veja abaixo algumas capturas de tela do Sistema de Triagem:

<div style="display: flex; align-items: center;justify-content: center;">
    <div style="margin-bottom: 20px;">
        <img src="https://github.com/user-attachments/assets/97313dbc-0f36-4588-b57b-d072c704ad64" alt="Página Inicial" width="1000" height="400" >
        <p><em>Figura 1: Pagina inicial.</em></p>
    </div>
    <div style="margin-bottom: 20px;">
        <img src="https://github.com/user-attachments/assets/898f4d31-4a5d-4b8a-952e-7296052a5d1b" alt="tela inicial" width="1000"height="400" >
        <p><em>Figura 2:Página de Cadastro. .</em></p>
    </div>
    <div style="margin-bottom: 20px;">
        <img src="https://github.com/user-attachments/assets/8aef9721-7925-453e-961d-f5ffcce08a94 " alt="Seção de Projetos" width="1000" height="400" >
        <p><em>Figura 3: Login.</em></p>
    </div>
    <div style="margin-bottom: 20px;">
        <img src="https://github.com/user-attachments/assets/ad918d83-10c9-4281-ba88-67a69deefa03" alt="Seção de Contatos" width="1000" height="400" >
        <p><em>Figura 4: Pagina Usuario.</em></p>
    </div>
  <div style="margin-bottom: 20px;">
        <img src="https://github.com/user-attachments/assets/a6f33fb0-281e-42a9-8765-9c6bd7583a0c" alt="Seção de Contatos" width="1000" height="400" >
        <p><em>Figura 5: Pagina  Administrador</em></p>
    </div>
  <div style="margin-bottom: 20px;">
        <img src="https://github.com/user-attachments/assets/fbc99dd2-781d-43c7-86fd-f1d06dbe3215" alt="Seção de Contatos" width="1000" height="400" >
        <p><em>Figura 6: Pagina Admin .</em></p>
    </div>

</div>

## Habilidades Desenvolvidas

- Desenvolvimento full-stack
- Design de interfaces
- Banco de dados relacional
- Docker e práticas de DevOps

## Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:
<div style="display: inline_block"><br>
  <img align="center" alt="HTML" height="25" width="95" src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img align="center" alt="CSS" height="25" width="95" src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
  <img align="center" alt="Angular" height="25" width="95" src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white">
 <img align="center" alt="Node.js" height="25" width="95" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
<img align="center" alt="Postgresql" height="25" width="95" src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white">
<img align="center" alt="Quarkus" height="25" width="95" src="https://img.shields.io/badge/Quarkus-%23000000.svg?style=for-the-badge&logo=quarkus&logoColor=white">

<img align="center" alt="Git" height="25" width="95" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img align="center" alt="Docker" height="25" width="95" src="https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white">
  <img align="center" alt="Intellij" height="25" width="95" src="https://img.shields.io/badge/IntelliJ-%23000000.svg?style=for-the-badge&logo=intellijidea&logoColor=white"">
 <img align="center" alt="Java" height="25" width="95" src="https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white">
  
</div>

- **HTML:** Estrutura do site.
- **CSS:** Estilização visual e Responsividade.
- **intellij idea:** Editor de código utilizado durante o desenvolvimento.
- **Angular:** Biblioteca moderna para construção de interfaces.
- **Node.js:** Ambiente de execução para JavaScript no servidor, permitindo a construção de aplicações web escaláveis e eficientes.
-  **Quarkus:** um framework Java nativo do Kubernetes de stack completo que foi desenvolvido para máquinas virtuais Java (JVMs) e compilação nativa. 
# software-triagem

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: <https://quarkus.io/>.

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:

```shell script
./mvnw compile quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at <http://localhost:8080/q/dev/>.

## Packaging and running the application

The application can be packaged using:

```shell script
./mvnw package
```

It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:

```shell script
./mvnw package -Dquarkus.package.jar.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

## Creating a native executable

You can create a native executable using:

```shell script
./mvnw package -Dnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using:

```shell script
./mvnw package -Dnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/software-triagem-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult <https://quarkus.io/guides/maven-tooling>.

## Related Guides

- REST ([guide](https://quarkus.io/guides/rest)): A Jakarta REST implementation utilizing build time processing and Vert.x. This extension is not compatible with the quarkus-resteasy extension, or any of the extensions that depend on it.
- JSON-B ([guide](https://quarkus.io/guides/rest-json)): JSON Binding support
- REST JSON-B ([guide](https://quarkus.io/guides/rest#json-serialisation)): JSON-B serialization support for Quarkus REST. This extension is not compatible with the quarkus-resteasy extension, or any of the extensions that depend on it.
- REST Qute ([guide](https://quarkus.io/guides/qute-reference#rest_integration)): Qute integration for Quarkus REST. This extension is not compatible with the quarkus-resteasy extension, or any of the extensions that depend on it.
- Liquibase ([guide](https://quarkus.io/guides/liquibase)): Handle your database schema migrations with Liquibase
- JDBC Driver - PostgreSQL ([guide](https://quarkus.io/guides/datasource)): Connect to the PostgreSQL database via JDBC

## Provided Code

### REST

Easily start your REST Web Services

[Related guide section...](https://quarkus.io/guides/getting-started-reactive#reactive-jax-rs-resources)

### REST Qute

Create your web page using Quarkus REST and Qute

[Related guide section...](https://quarkus.io/guides/qute#type-safe-templates)

