# Novo sistema Serveloja

Este projeto foi criado com [Angular CLI](https://github.com/angular/angular-cli) version 1.1.3.

## Servidor de desenvolvimento

No prompt de comando digite `ng serve` para iniciar o servidor de desenvolvimento. Acesse o link `http://localhost:4200/`. O app irá recarregar automaticamente quando houver mudanças em algum dos arquivos, no caso do servidor estar "rodando". Caso não esteja, as alterações serão visualizados quando o servidor for inicializado.

# Sobre o sistema

Abaixo, descrevemos a hierarquia dos diretórios e arquivos organizados na estrutura do novo sistema.

![Alt text](images_readme/raiz-principal.jpg?raw=true "Estrutura principal do sistema")

Figura 1: Estrutura principal do novo sistema no diretório /app da aplicação – Angular 4

## Arquivos module.ts dos components

Cada componente tem seu arquivo module.ts, que é importado em outros arquivos module.ts, dependendo da hierarquia do diretório, e que terminam importados em app.module.ts, que é o arquivo module principal.

Lembramos que os arquivos component.ts são carregados diretamente eu seu respectivo module.ts dentro de seus diretórios, como exemplificado na imagem abaixo.

![Alt text](images_readme/hierarquia.jpg?raw=true "Modelo de estrutura e hierarquia dos arquivos module")

Figura 2: Modelo de hierarquia dos arquivos module.ts em relação ao app.module.ts

## Arquivo Globals.ts

Este arquivo irá conter todos as contantes que serão utilizadas no sistema.

## Diretório /components

Esse diretório irá conter os componentes gerais do sistema, tipo: login, modal, navbar, qrcode, form, error etc. 

![Alt text](images_readme/raiz-component.jpg?raw=true "Estrutura do diretório components")

Figura 3: Estrutura do diretório components

## Diretório /guards

Contém os arquivos que tratam as rotas do sistema, direcionando o usuário mediante as permissões que ele tenha de acesso ao sistema. No caso dessas permissões, elas são listadas no momento do login, quando o sistema recebe essas informações via api, com todos esses dados.

## Diretório /models

Contém os arquivos que listam os modelos de dados que serão usados pelos componentes do sistema. 
  
## Diretório /services

Contém arquivos com ações que serão realizadas pelo sistema, durante a sua utilização. Por exemplo: efeitos nas barras laterais (collpase), login etc.

## Diretório /modules

Contém os componentes que serão carregados mediante as permissões do usuário. Esses diretórios são gerados manualmente, caso não existam, de devem seguir a hierarquia exibida no arquivo json, gerado pela api no momento do login. 

![Alt text](images_readme/modelo-json.jpg?raw=true "Modelo Json retornado pela API no momento do login")

Figura 4: Modelo Json retornado pela API no momento do login com dados para montar o menu

Mediante informações acima, a hierarquia dos diretórios devem ser organizados da seguinte forma:

![Alt text](images_readme/diretorios.jpg?raw=true "Hierarquia no diretório modules")

Figura 5: Organização dos diretórios e arquivos em /modules

Os links no componente Sidebar são gerados automaticamente. A criação dos diretórios, como informado será manual, bem como seus componentes internos, e devem seguir as regras:

1) Todos os componentes listados no arquivo json, proveniente da API, devem ser criados dentro do diretório /modules;

2) Novos diretórios apenas devem ser criados se já não existirem;

3) Todos os diretórios devem ser criados em fonte "caixa baixa", sem espaços e sem acentos ou caracteres especiais;

4) A organização dos arquivos components.ts e modules.ts de cada componente, devem seguir o modelo anteriormente informado

Para entender o funcionamento dos componentes, acesse os arquivos README.md, dentro dos respectivos diretórios.

# Sobre a publicação

No terminal utilize o comando `ng build` para realizar o deploy e gerar os arquivos que serão adicionados ao servidor. Após finalizar o processo, na raiz principal, irá perceber que foi criado um diretório chamado `\dist`, e o que estiver dentro deste diretório são os arquivos que devem ser adicionados ao servidor.

![Alt text](images_readme/dist.jpg?raw=true "Diretório \dist criado")

Figura 6: Diretório \dist criado com os arquivos para publicação no servidor

## Importante

Após a geração dos arquivos, é necessário mudar manualmente o `href` da tag `base`, que serve como base para carregamento de componentes e imagens dentro do sistema. Após modificação, deve ficar assim:

```html
<base href="./">
```

Esta tag encontrar-se no arquivo `index.html`, no diretório `\dist`.

![Alt text](images_readme/base-href.jpg?raw=true "Valor da tag já modificado")

Figura 7: Após a publicação dos arquivos, a tag `base` deve ser modificado conforme acima. Arquivo está em `\dist\index.html`.

# Servidor IIS

Por padrão, a `Serveloja` utliza servidores da Microsoft, e por isso, utiliza o programa IIS para administração do conteúdo dos mesmos. Portanto, cambem aqui algumas informação sobre as padronizações que devem ser seguidas para a publicação dos arquivos. Vale lembrar que não mostraremos como configurar o servidor, pois partimos do princípio que no momento da publicação, o mesmo deverá estar pronto. Seguem:

## 1) Diretório principal

Todos os novos projetos devem ser adicionados no diretório `c:\intepub\wwwroot` do servidor, ou outro que seja inidicado pela configuração.

## 2) Ative alguns recursos do Windows

Alguns recursos devem ser ativados, caso ainda não estejam para que os arquivos gerados pelo Angular sejam lidos pelo servidor

![Alt text](images_readme/recursos.jpg?raw=true "Recursos do Windows")

Figura 8: Os recursos marcados acima devem estar habilitados, conforme imagens.