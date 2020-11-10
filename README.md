Generator nodejs project
========================
> Project to start typescript Node.js project

# Usage
- creating new basic project
''' node-gen myapp '''

# Types of projects
Templates created to nodejs projects.
- Basic project
- Dockerized project
- Serveless project

## Basic project
### Folder structure
    .
    ├── bin                     # Executable files
    ├── config                  # Configuration files
    ├── dist                    # Compiled files
    ├── docs                    # Documentation files
    ├── src                     # Source files
    │   ├── handlers            # Handler Files
    │   ├── routes              # Routes Files
    │   ├── middlewares         # Middleware files
    │   └── app.ts              # Server configuration file
    ├── test                    # Automated tests
    ├── tsconfig.json          # Typescript configuration file
    └── README.md

### Feature and facilities
- Logs middlewares improved powered by morgan
- Health check endpoint
- Version information endpoint
- Eslint setup

## Dockerized project
## Serveless project

# References
- [ How to Setup a TypeScript + Node.js Project. ](https://khalilstemmler.com/blogs/typescript/node-starter-project/)
- [ Error Handling ](https://expressjs.com/en/guide/error-handling.html)
