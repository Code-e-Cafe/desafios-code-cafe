import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("Digite o seu nome: ");
        String nome = scan.next();

        System.out.print("Digite a sua altura: ");
        double altura = scan.nextDouble();

        System.out.print("Digite o seu peso: ");
        double peso = scan.nextDouble();

        System.out.println("=-=-=-=-=-=-=-=-=-=-=-=-=-CÁLCULO DO IMC =-=-=-=-=-=-=-=-=-=-=-=-=-");
        System.out.println(calcularImc(nome, altura, peso));
        System.out.println("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
    }

    public static String calcularImc(String nome, double altura, double peso) {
        String imcCondicao = "";
        double imc = peso / (altura * altura);

        System.out.println("Nome: " + nome);
        System.out.printf("IMC: %.2f\n", imc);

        if (imc < 18.5) {
            imcCondicao = "Você está abaixo do peso!";
        } else if (imc >= 18.5 && imc < 25){
            imcCondicao = "Você está no peso ideal!";
        } else {
            imcCondicao = "Você está acima do peso!";
        }

        return imcCondicao;
    }
}