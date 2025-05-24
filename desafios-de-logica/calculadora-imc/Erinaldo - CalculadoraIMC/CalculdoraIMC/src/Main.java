import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Digite o seu nome: ");
        String nome = scan.next();

        System.out.print("Digite a sua altura (m): ");
        double altura = scan.nextDouble();

        System.out.print("Digite o seu peso (kg): ");
        double peso = scan.nextDouble();

        System.out.println("=-=-=-=-=-=-=-=-=-=-=-=-=-CÁLCULO DO IMC =-=-=-=-=-=-=-=-=-=-=-=-=-");
        calcularImc(nome, altura, peso);
        System.out.println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }

    public static void calcularImc(String nome, double altura, double peso) {
        String imcCondicao = "";
        double imc = peso / (altura * altura);

        System.out.println("Nome: " + nome.toUpperCase());
        System.out.printf("IMC: %.2f\n", imc);

        if (imc < 18.5) {
            System.out.println("Você está abaixo do peso!");
        } else if (imc >= 18.5 && imc < 25){
            System.out.println( "Você está no peso ideal!");
        } else if (imc >= 25 && imc < 30 ) {
            System.out.println("Você está com sobrepeso!");
        } else if (imc >= 30 && imc < 35){
            System.out.println("Cuidado!! Vc está com obesidade!");
            System.out.println("GRAU I - Risco moderado de diabetes tipo 2.");
        } else if (imc >=35 && imc < 40){
            System.out.println("Cuidado!! Vc está com obesidade!");
            System.out.println("GRAU II - Aumenta complicações cardíacas.");
        } else {
            System.out.println("Cuidado!! Vc está com obesidade!");
            System.out.println("GRAU III - Elevado risco de comorbidades graves.");
        }
    }
}