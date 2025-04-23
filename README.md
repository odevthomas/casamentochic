# CasamentoChic

![Next.js](https://img.shields.io/badge/Next.js-13.0-blue) ![React](https://img.shields.io/badge/React-18.0-blue) ![Node.js](https://img.shields.io/badge/Node.js-16.0-green) ![Vercel](https://img.shields.io/badge/Vercel-Hosting-purple)

Site voltado para ajudar casais a planejarem um casamento dos sonhos com orçamento reduzido, oferecendo soluções criativas, práticas e econômicas sem comprometer a elegância do evento.

![mockup](https://github.com/user-attachments/assets/25bce53d-dc55-4743-8326-bf5e9dc620f2)

---

## 📚 Tecnologias

| Camada             | Tecnologias                                  |
| ------------------ | -------------------------------------------- |
| **Frontend**       | HTML5 · CSS3 · JavaScript · React · Next.js  |
| **Backend**        | Node.js · Express (opcional)                 |
| **Banco de Dados** | MongoDB (opcional)                           |
| **Hospedagem**     | Vercel (ou plataforma de sua escolha)        |

---

## 🚀 Funcionalidades Principais

- **Home**: Visão geral e introdução ao conceito de casamento econômico.  
- **Consultoria Personalizada**: Formulário e agendamento de orientação com especialistas.  
- **Calculadora de Orçamento**: Estimativa interativa de custos para manter o orçamento sob controle.  
- **Lista de Fornecedores**: Galeria com filtros para encontrar serviços acessíveis.  
- **Blog**: Artigos com dicas, tutoriais e inspirações visuais.

---

## 📄 Estrutura de Páginas (HTML)

Os principais arquivos HTML (gerados pelo Next.js em `/pages`) e suas descrições:

| Arquivo               | Rota             | Descrição                                                      |
| --------------------- | ---------------- | -------------------------------------------------------------- |
| `index.html`          | `/`              | Página inicial: apresentação do site e chamada para ação       |
| `consultoria.html`    | `/consultoria`   | Formulário de consultoria personalizada                        |
| `calculadora.html`    | `/calculadora`   | Interface da calculadora de orçamento                          |
| `fornecedores.html`   | `/fornecedores`  | Listagem e filtros de fornecedores                              |
| `blog/index.html`     | `/blog`          | Página de listagem de artigos                                  |
| `blog/[slug].html`    | `/blog/:slug`    | Página de detalhe de cada artigo                               |

---

## ⚙️ Como Executar Localmente

1. **Clone o repositório**  
   ```bash
   git clone https://github.com/seu-usuario/casamentochic.git
   cd casamentochic
   ```
2. **Instale dependências**  
   ```bash
   npm install
   ```
3. **Configure variáveis de ambiente**  
   Crie um arquivo `.env.local` com as chaves necessárias (ex.: `MONGODB_URI`, `NEXT_PUBLIC_API_URL`).  
4. **Inicie o servidor**  
   ```bash
   npm run dev
   ```  
   Acesse em: `http://localhost:3000`

---

## 🤝 Como Contribuir

1. Faça **fork** do repositório.  
2. Crie uma branch de trabalho:  
   ```bash
   git checkout -b feature/nome-da-feature
   ```
3. Implemente sua feature e faça commit:  
   ```bash
   git add .
   git commit -m "Descrição das alterações"
   ```
4. Envie para o repositório remoto:  
   ```bash
   git push origin feature/nome-da-feature
   ```
5. Abra um Pull Request detalhando as modificações.

---

## 🎨 Sobre o Projeto

**CasamentoChic** nasceu para tornar o planejamento de casamentos acessível e sem complicações.  
Combinamos criatividade, economia e praticidade para que cada casal viva uma experiência única e elegante, sem estourar o orçamento.

---

**Desenvolvido com carinho por [Thomas Eduardo | odevthomas]**  
