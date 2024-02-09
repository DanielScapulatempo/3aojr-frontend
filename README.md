# FIAP Blog

### Objetivo
Criação de um blog em React com finalidade acadêmica para o curso Front-End Engineering e UX da turma AOJR 3.

### Funcionalidades
- Integração com o Contentful como CMS do blog
- Página inicial com os últimos posts
- Filtro por categoria
- Listagem completa dos posts
- Paginação das publicações

### Biliotecas e serviços utilizados
- [React](http://reactjs.org)
- [Contentful](http://contentful.com)

### Dependências de pacotes utilizados
- [Bootstrap](http://bootstrap.com)
- [React Router](http://reactrouter.com)
- [Vite](http://vitejs.dev)

### Como rodar o projeto localmente
- Clone o projeto
- Acesse a pasta onde salvou o projeto
- Crie um arquivo .env na raíz do projeto, com as variáveis de ambiente referente à autenticação ```VITE_API_SPACE_ID``` e ```VITE_API_ACCESS_TOKEN```, sendo:
    - `VITE_API_SPACE_ID` - ID do espaço do Contentful
    - `VITE_API_ACCESS_TOKEN` - Token de acesso do Contentful
- Execute o comando ```npm install``` para instalar as dependências
- Execute o comando ```npm run dev``` para iniciar o projeto

### Gerar o build para produção
- Acesse a pasta do projeto
- Execute o comando ```npm run build``` para gerar o build do projeto
- Publique a pasta ```dist```  gerada pelo compilador, em sua hospedagem de preferência

### Estrutura
- ```src/components``` - Armazenamento de todos os components compartilhados. Local odo arquivo de Layout geral.
- ```src/components/partials``` - Micro partes isoladas dos componentes compartilhados, permitindo a fácil manutenção, reutilização e adição de recursos
- ```src/lib``` - Arquivos de integração com pacotes externos
- ```src/services``` - Serviços de integração da API, de forma isolado do restante do sistema
- ```src/pages``` - Views/Páginas do sistema
- ```src/pages/partials``` - Micro partes isoladas dos arquivos das Páginas, permitindo a fácil manutenção e adição de recursos