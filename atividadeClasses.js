const funcionario = () => {
    const btn = document.querySelector('button')
    const nome = document.getElementById('nome').value
    const idade = document.getElementById('idade').value
    const cargo = document.getElementById('cargo').value
    const departamento = document.getElementById('departamento').value
    const linguagem = document.getElementById('linguagem').value
    const apresentacao = document.getElementById('apresentacao')
    const seTrabalha = document.getElementById('seTrabalha')
    const sePrograma = document.getElementById('sePrograma')
    const gerencia = document.getElementById('gerencia')

    if (nome === ' ' & nome === Number) {
        alert('Digite o seu nome!')
    }

    class Funcionario {
        constructor(nome, idade, cargo) {
            this.nome = nome
            this.idade = idade
            this.cargo = cargo
        }

        seApresentar() {
            apresentacao.innerHTML = `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos, e estou no cargo de ${this.cargo}.`
        }

        trabalhar() {
            seTrabalha.innerHTML = `Eu, ${this.nome}, estou trabalhado!`
        }
    }

    class Gerente extends Funcionario {
        constructor(nome, idade, cargo, departamento) {
            super(nome, idade, cargo)
            this.departamento = departamento
        }

        gerenciar() {  
            gerencia.innerHTML = `Eu gerencio o departamento de ${this.departamento}.`
        }
    }

    class Desenvolvedor extends Funcionario {
        constructor(nome, idade, cargo, linguagem) {
            super(nome, idade, cargo)
            this.linguagem = linguagem
        }

        programar() {
            sePrograma.innerHTML = `Eu utlizo a linguagem ${this.linguagem}.`
        }
    }

    if (cargo === 'Desenvolvedor') {
        dev = new Desenvolvedor(nome, idade, cargo, linguagem)
        dev.seApresentar()
        dev.trabalhar()
        dev.programar()
    } else if (cargo === 'Gerente') {
        ger = new Gerente(nome, idade, cargo, departamento)
        ger.seApresentar()
        ger.trabalhar()
        ger.gerenciar()
    }
}

