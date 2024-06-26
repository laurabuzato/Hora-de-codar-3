<script>
      /* Escreva um algoritmo para ler 2 valores informados pelo usuário e se o segundo valor informado for igual ou menor que ZERO,
        deve ser lido um novo valor. Ou seja, para o segundo valor não pode ser aceito o valor zero, nem um valor negativo.
        O seu programa deve imprimir o resultado da divisão do primeiro valor lido pelo segundo valor.

      //valores informados:
      let valor1 = prompt("Escreva o primero valor: ");
      let valor2 = prompt("Escreva o segundo valor: ");

      //Conversão;
      valor1 = parseInt(valor1);
      valor2 = parseInt(valor2);

      //Enquanto o segundo valor ir de acordo com a condição, ele repetirá a estrutura:
      while (valor2 <= 0) {
        valor2 = prompt("Insira o segundo valor novamente: ");
      }

      //O código só fará o cálculo quando sair do loop acima:
      let resultado = valor1 / valor2;
      alert("Resultado da divisão: " + resultado);

      /* Crie uma bomba relógio (usando somente código - para deixar claro!) cuja contagem regressiva vá de 30 a 0.
        Utilize "document.write" para escrever em tela e no final da repetição escreva "EXPLOSÃO".

      let relogio = 30;

      while (relogio >= 0) {
        document.write("<p>Contagem:</p>" + relogio + "s");
        relogio--;
      }

      document.write("<h1>EXPLOSION!!!!</h1>");

      /* Escreva um algoritmo para imprimir os números de 1 (inclusive) a 10 (inclusive) em ordem decrescente.
        Exemplo: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 *

      let numeros = 10;

      document.write("Números impressos: ");

      while (numeros > 0) {
        document.write(numeros + ", ");
        numeros--;
      }

      /* Faça um algoritmo que calcule e escreva a média aritmética dos números inteiros entre 15 (inclusive) e 100 (inclusive). *
      Variável com valor inicial 15 para entrar na condição:
      let numero = 15;
      let soma = 0;
      let qntNumero = 0;

      //Enquanto numero for maior que 15 e menor que 100, ele vai somar os números entre 15 e 100 a cada repetição, assim obtendo o resultado final
      while (numero >= 15 && numero <= 100) {
        //Faz a soma:
        soma = soma + numero;
        //qntNumero vai somar + 1 a cada repetição, para obter a quantidade:
        qntNumero++;
        //E "numero" vai obter mais 1 a cada repetição para quebrar o loop:
        numero++;
      }

      let resultado = soma / qntNumero;
      alert("Valor final: " + resultado);

      /* Faça um algoritmo que calcule e escreva a média aritmética dos dois números inteiros informados pelo usuário
        e todos os números inteiros entre eles. Considere que o primeiro sempre será menor que o segundo. *

      let valor1 = prompt("Escreva o primeiro valor: ");
      let valor2 = prompt("Escreva o segundo valor: ");
      let soma = 0;
      let qntdNumero = 0;

      valor1 = parseInt(valor1);
      valor2 = parseInt(valor2);

      //Enquanto esse laço for verdadeiro, ele vai fazer a soma dos números entre o valor1 e valor2;
      while (valor1 < valor2) {
        //Soma receberá o "valor1" a cada rep.
        soma = soma + valor1;
        //qntdNumero++ nos dá a possibilidade de obter a quantidade de números entre "valor1" e "valor2".
        qntdNumero++;
        //valo1++ Add +1 á variável soma a cada repetição.
        valor1++;
      }

      //pega o resulta final de soma e divide pela quantidade final obtida pela variável "qntdNumero".
      let resultado = soma / qntdNumero;
      alert("Resultado: " + resultado);

      //Pega os valores das duas notas:
      let nota1 = parseFloat(prompt("Escreva a primeira nota: "));
      let nota2 = parseFloat(prompt("Escreva a segunda nota: "));
      let aluno = 0;
      //Faz o Cálculo da nota:
      let resultado = (nota1 + nota2) / 2;

      //Se a nota for maior ou igual a 9.5, ele dispara um alert e atribui +1 ao números de alunos aprovados:
      if (resultado >= 9.5) {
        alert("aprovado");
        aluno++;
      } else {
        alert("reprovado");
      }

      //Faz a pergunta para o User, caso seja sim(S), a condição do while será válida.
      let pergunta = prompt("Deseja calcular a média de uma nota? S/N: ");

      //A cada resposta sim do usuário, o while se repetirá:
      while (pergunta == "s") {
        let nota1 = parseFloat(prompt("Escreva a primeira nota: "));
        let nota2 = parseFloat(prompt("Escreva a segunda nota: "));
        resultado = (nota1 + nota2) / 2;

        //Verifica novamente a nota:
        if (resultado >= 9.5) {
          alert("aprovado");
          aluno++;
        } else {
          alert("reprovado");
        }

        //Faz novamente a pergunta para validar a condição do while:
        pergunta = prompt("Deseja avaliar outro aluno? S/N");
      }

      alert("Número de alunos aprovados: " + aluno);
      document.write("Número de alunos aprovados: " + aluno);

      /* Escreva um algoritmo para ler as notas de avaliações de um aluno, calcule e imprima a média (simples) desse aluno.
        Só devem ser aceitos valores válidos durante a leitura (0 a 10) para cada nota. São 6 notas ao total.
        Caso o valor informado para qualquer uma das notas esteja fora do limite estabelecido,
        deve ser solicitado um novo valor ao usuário. *

      let valor = 0;
      let sequencia = 1;
      let qntdNota = 0;
      let soma = 0;

      //Enquanto valor for menor que 6 ela vai se repetir para que o User informe todas as notas:
      while (valor < 6) {
        nota = parseFloat(prompt("Insira a " + sequencia + "° nota"));

        /* Agora, se alguma nota ultrapassar o valor de 10, o If irá zerar os valores para que se repita o loop do início
            caso contrário, continuará com o calculo: *
        if (nota > 10) {
          alert("ERRO, insira as notas novamente!");
          valor = 0;
          sequencia = 1;
        } else {
          soma = soma + nota;
          sequencia++;
          qntdNota++;
          valor++;
        }
      }

      alert("nota final do aluno: " + nota);

      /* Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive).
        Considere que o N será sempre maior que ZERO. N  é um valor informado pelo usuário *

      let numero = prompt("Escreva um numero: ");
      let valor = 1;

      while (valor <= numero) {
        document.write("número: " + valor + "</p>");
        valor++;
      }

      /* Escreva um algoritmo para imprimir os 10 primeiros números inteiros maiores que 100. *
      document.write("<h3>10 primeiros números maiores que 100: </h3>");
      let numeros = 101;
      while (numeros <= 110) {
        document.write("<p>" + numeros + "</p>");
        numeros++;
      }

      /* Escreva um programa para imprimir todas as tabuadas de 1 a N. N será informado pelo usuário. *
      let qntdTabuadas = prompt("Escreva o número para o total de tabuadas: ");
      let loop = 1;

      qntdTabuadas = parseInt(qntdTabuadas);

      while (loop <= qntdTabuadas) {
        document.write("<p>-------------------------------------------</p>");
        document.write("<p>Tabuada do " + loop + "</p>");
        let tab1 = loop * 1;
        document.write("<p>" + loop + " x 1 = " + tab1 + "</p>");
        let tab2 = loop * 2;
        document.write("<p>" + loop + " x 2 = " + tab2 + "</p>");
        let tab3 = loop * 3;
        document.write("<p>" + loop + " x 3 = " + tab3 + "</p>");
        let tab4 = loop * 4;
        document.write("<p>" + loop + " x 4 = " + tab4 + "</p>");
        let tab5 = loop * 5;
        document.write("<p>" + loop + " x 5 = " + tab5 + "</p>");
        let tab6 = loop * 6;
        document.write("<p>" + loop + " x 6 = " + tab6 + "</p>");
        let tab7 = loop * 7;
        document.write("<p>" + loop + " x 7 = " + tab7 + "</p>");
        let tab8 = loop * 8;
        document.write("<p>" + loop + " x 8 = " + tab8 + "</p>");
        let tab9 = loop * 9;
        document.write("<p>" + loop + " x 9 = " + tab9 + "</p>");
        let tab10 = loop * 10;
        document.write("<p>" + loop + " x 10 = " + tab10 + "</p>");
        loop++;
      }


        /* Escreva um programa em que o usuário informe 10 valores e escreva quantos desses valores lidos estão entre os números 24 e 42
        (incluindo os valores 24 e 42) e quantos deles estão fora deste intervalo. *

        let loop = 1;
        let qntdNumeroFora = 0;
        let qntdNumeroDentro = 0;

        while(loop <= 10){
            let numero = parseInt(prompt("Escreva o " + loop + "° número"));

            if(numero >= 24 &&  numero <= 42){
                qntdNumeroDentro++;
            }else if(numero < 24 || numero > 42){
                qntdNumeroFora++;
            }

            loop++;

        }

        alert("Quantidade de números dentro da condição: " + qntdNumeroDentro);
        alert("Quantidade de números fora da condição: " + qntdNumeroFora);

        document.write("<h3>Quantidade de números dentro da condição: " + qntdNumeroDentro + "</h3>");
        document.write("<h3>Quantidade de números fora da condição: " + qntdNumeroFora + "</h3>");
    </script>
