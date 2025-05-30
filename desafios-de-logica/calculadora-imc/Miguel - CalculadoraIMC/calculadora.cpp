#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

string categoriaIMC(double imc, double limites[], string tipos[], int indice, int tamanho)
{
    if (indice == tamanho - 1 || imc < limites[indice])
    {
        return tipos[indice];
    }

    return categoriaIMC(imc, limites, tipos, indice + 1, tamanho);
}

int main()
{
    double limites[4] = {18.5, 25.0, 30.0, 1000.0};
    string tipos[4] = {"Abaixo do peso", "Na média", "Sobrepeso", "Obesidade"};
    double peso;
    double altura;

    cout << "Digite seu peso: ";
    cin >> peso;
    cout << "Digite sua altura: ";
    cin >> altura;

    double imc = peso / pow(altura, 2);
    cout << fixed << setprecision(2);
    cout << "O seu IMC é: " << imc << endl;

    string Categoria = categoriaIMC(imc, limites, tipos, 0, 4);

    cout << "A sua Categoria é: " << Categoria << endl;

    return 0;
}