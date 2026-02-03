# Checklist para Criar Novo Projeto

<img width="284" height="498" alt="image" src="https://github.com/user-attachments/assets/485a46f1-2053-44d4-bd1c-fc50ecede49e" />

Ao criar um novo projeto a partir deste template, siga estes passos:

## ✅ Passos Iniciais

- [ ] Renomear o projeto no `package.json`
- [ ] Atualizar o nome do repositório no README.md
- [ ] Remover `yarn.lock` se usar apenas npm (ou vice-versa)
- [ ] Limpar histórico do Git: `rm -rf .git && git init`
- [ ] Configurar novo repositório remoto

## 🔧 Configurações

- [ ] Personalizar cores do tema em `app/globals.css`
- [ ] Configurar variáveis de ambiente (criar `.env.local` se necessário)
- [ ] Atualizar `favicon.ico` em `app/`
- [ ] Configurar domínio e deploy (Vercel, etc)

## 📦 Dependências

- [ ] Revisar dependências no `package.json`
- [ ] Adicionar dependências específicas do projeto
- [ ] Executar `npm install` para instalar tudo

## 🎨 Personalização

- [ ] Criar componentes específicos em `components/common/`
- [ ] Adicionar rotas/páginas em `app/`
- [ ] Configurar autenticação (se necessário)
- [ ] Configurar API routes (se necessário)

## 📝 Documentação

- [ ] Atualizar README.md com informações do projeto
- [ ] Adicionar documentação de APIs (se houver)
- [ ] Configurar CI/CD (GitHub Actions, etc)

## 🚀 Deploy

- [ ] Testar build local: `npm run build`
- [ ] Configurar ambiente de produção
- [ ] Fazer deploy inicial
- [ ] Testar em produção

---

**Boa sorte com seu novo projeto! 🎉**
