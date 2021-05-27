# Api de um ambiente de feira de ciencias

## Inicialiazação

- yarn i ou npm i

## Banco de Dados
- Criar um baco dados postgres, configurações no arquivo ormconfig.json

## Migrações

- typeorm migration:run (executar as migrações)

OBS: Caso ocorra algum erro, delete a migração que estar em src/database/migrations e siga os passos seguintes:

1- typeorm migration:generate para gerar uma migração.
2- typeorm migration:run para executar a migração criada e montar

