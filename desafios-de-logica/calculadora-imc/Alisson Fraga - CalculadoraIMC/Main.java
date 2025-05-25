import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        //Variáveis
        double peso;
        double altura;
        double imc;

        //Dados de entrada
        System.out.print("Digite seu peso (Kg): ");
        peso = scanner.nextDouble();
        System.out.print("Digite sua altura(m,cm): ");
        altura = scanner.nextDouble();

        //Cálculo do IMC
        imc = peso / (Math.pow(altura, 2));

        //Saída de dados
        System.out.printf("Seu IMC é de: %.2f\n", imc);

        //Classificação do IMC
        if (imc < 18.5) {
            System.out.println("Classificação do IMC: Abaixo do peso");
        } else if (imc < 25) {
            System.out.println("Classificação do IMC: Peso normal");
        } else if (imc < 30) {
            System.out.println("Classificação do IMC: Sobrepeso");
        } else if (imc < 35) {
            System.out.println("Classificação do IMC: Obesidade grau I");
        } else if (imc < 40) {
            System.out.println("Classificação do IMC: Obesidade grau II");
        } else {
            System.out.println("Classificação do IMC: Obesidade grau III");
        }
        scanner.close();
    }
}
