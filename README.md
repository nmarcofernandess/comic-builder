# Comic Builder

## Visão Geral

O Comic Builder é uma aplicação web que ajuda criadores de conteúdo a organizarem suas histórias em quadrinhos, especialmente quando utilizadas em conjunto com ferramentas de geração de imagem por IA. O principal problema que este sistema resolve é a falta de consistência visual entre imagens geradas por IA, pois cada prompt de geração é tratado isoladamente.

Esta aplicação permite estruturar personagens, suas características e variações de idade, além de definir cenas com precisão para manter a consistência visual ao longo de toda a história em quadrinhos.

![Comic Builder](./screenshot.png)

## Funcionalidades Principais

### 1. Gerenciamento de Estilo Visual
- Defina o estilo visual geral dos quadrinhos
- Aplique automaticamente a todas as cenas
- Mantenha consistência de traço, cores e referências visuais

### 2. Gerenciamento de Personagens
- Crie e gerencie múltiplos personagens
- Defina o protagonista da história
- Adicione diferentes fases (idades) para cada personagem
- Descreva detalhes específicos como cabelo, roupas, expressões, etc.

### 3. Organização de Cenas
- Crie cenas sequenciais com identificadores (A, B, C...)
- Configure painéis superior e inferior para cada cena
- Selecione quais personagens aparecem em cada cena
- Escolha a fase específica de cada personagem por cena

### 4. Geração de Prompts para IA
- Gere prompts estruturados para ferramentas de IA
- Mantenha consistência visual entre quadros
- Inclua automaticamente os detalhes relevantes de personagens e cena

### 5. Persistência de Dados
- Salve e exporte projetos como arquivos JSON
- Importe projetos salvos anteriormente
- Auto-salvamento no armazenamento local do navegador

## Estrutura da Aplicação

### Header Principal
- Logo e título "Comic Builder"
- Botões de ação:
  - **Importar**: Carregue um projeto salvo (.json)
  - **Salvar**: Exporte o projeto atual como arquivo JSON
  - **Copiar Prompt Geral**: Copie para a área de transferência um JSON contendo o estilo geral e todos os personagens

### Sistema de Navegação
A aplicação possui três abas principais:

#### Início
- Visão geral do sistema
- Instruções passo a passo
- Links rápidos para as principais funcionalidades

#### Configurações Gerais
Esta aba é dividida em duas seções principais:

##### 1. Estilo dos Quadrinhos
- Campo de texto multilinha para definir o estilo visual geral
- Este estilo será aplicado automaticamente a todas as cenas
- Exemplos: estilo de traço, paleta de cores, referências visuais

##### 2. Personagens
- Começa com um personagem padrão marcado como "Protagonista"
- Cada card de personagem possui:
  - Campo de nome
  - Indicador de tipo (Protagonista ou Personagem)
  - Botão para expandir/retrair
  - Botão para excluir (exceto o protagonista)

##### Fases de Personagem
Dentro de cada personagem, existem "fases" que representam diferentes idades ou momentos:
- Campo para idade
- Campo para título da fase (ex: "Adolescência", "Adulto", etc.)
- Campo de descrição detalhada
- Três botões de ação por fase:
  - **Ajuda na Descrição**: Modal com campos específicos para cabelo, roupa, expressão, etc.
  - **Duplicar**: Cria uma cópia da fase atual
  - **Excluir**: Remove a fase (exceto a primeira)
- Botão "Adicionar Nova Fase"
- Botão "Adicionar Novo Personagem"

#### Cenas
Esta aba gerencia as cenas da história:

- Quando não há cenas: Exibe mensagem de estado vazio com botão para criar a primeira cena
- Para cada cena:
  - Card com identificador de letra (A, B, C...)
  - Botão para expandir/retrair
  - Dois painéis por cena (Superior e Inferior)
    - Campo para descrição da cena
    - Campo para legenda
  - Seção "Personagens na Cena":
    - Dropdown para selecionar o personagem
    - Dropdown para selecionar qual idade/fase do personagem aparece
    - Botão para remover
    - Botão para adicionar mais personagens à cena
  - Botões de ação:
    - **Copiar Prompt**: Gera um JSON estruturado para IA
    - **Excluir Cena**: Remove a cena
  - Botão "Adicionar Nova Cena"

## Fluxo de Uso

1. Defina o estilo geral da HQ na aba "Configurações Gerais"
2. Personalize os dados do protagonista e adicione personagens secundários
3. Para cada personagem, defina suas variações de idade/fases e características
4. Na aba "Cenas", crie cenas sequenciais da história
5. Para cada cena, defina o conteúdo dos painéis superior e inferior
6. Selecione quais personagens aparecem em cada cena e em qual idade/fase
7. Utilize o botão "Copiar Prompt" para gerar prompts estruturados para ferramentas de IA
8. Salve o projeto para edições futuras ou compartilhamento

## Funcionalidades Adicionais

- Auto-salvamento no armazenamento local do navegador
- Toast notifications para feedback de ações (importação, salvamento, cópia de prompts)
- Interface de ajuda para construção de descrições padronizadas
- Gerenciamento de múltiplos personagens com diversas variações
- Geração de prompts específicos para cada cena, mantendo consistência visual

## Tecnologias Utilizadas

- React + TypeScript
- Vite
- HeroUI (componentes de interface)
- Tailwind CSS
- React Context API para gerenciamento de estado
- Local Storage para persistência de dados

## Instalação e Execução

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/comic-builder.git

# Entre no diretório do projeto
cd comic-builder

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
npm run dev
```

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença MIT.
