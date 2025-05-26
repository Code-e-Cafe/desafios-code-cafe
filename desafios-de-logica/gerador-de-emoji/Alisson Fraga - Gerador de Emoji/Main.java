import java.util.Random;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {

        //Variáveis
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();
        String gerar;

        //emojis a serem escolhidos
        String[] emojis = {"😀", "😂", "😍", "🥺", "🤔", "😎", "😢", "😡", "👍", "🎉"};

        System.out.println("👋 Bem-vindo ao gerador de emojis!");

        //laço de repetição enquanto o break do "nao" não for acionado
        while (true){
            System.out.print("deseja gerar um emoji? (sim/nao): ");
            gerar = scanner.nextLine().toLowerCase();

            if (gerar.equals("sim")) {

                //gera um número aleatório e imprime o emoji no índice do número aleatório gerado
                int numeroRandom = random.nextInt(emojis.length);
                String emojiAleatorio = emojis[numeroRandom];

                //emoji gerado
                System.out.println("\uD83C\uDFB2 Seu emoji da vez é: " + emojiAleatorio);
            }
            else if (gerar.equals("nao")) {
                System.out.println("\uD83D\uDC4B Até mais!");
                break;
            }
            else {
                System.out.println("❌ Resposta inválida! digite apenas 'sim' ou 'nao' ");
            }
        }
        scanner.close();
    }
}
