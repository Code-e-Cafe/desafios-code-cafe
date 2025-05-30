#include <iostream>
#include <string>
#include <random>
#include <vector>
#include <utility>
#include <chrono>

using namespace std;

string Senha(int tamanho, bool Maiscula = true, bool Minuscula = true, bool Numeros = true,
             bool Simbolos = true)
{
    vector<pair<string, bool>> grupos;
    grupos.push_back(make_pair("ABCDEFGHIJKLMNOPQRSTUVWXYZ", Maiscula));
    grupos.push_back(make_pair("abcdefghijklmnopqrstuvwxyz", Minuscula));
    grupos.push_back(make_pair("0123456789", Numeros));
    grupos.push_back(make_pair("!@#$%^&*()", Simbolos));

    string caracteres;
    for (const auto &grupo : grupos)
    {
        if (grupo.second)
            caracteres += grupo.first;
    }

    if (caracteres.empty())
    {
        throw runtime_error("Nenhum tipo de conjunto selecionado.");
    }

    random_device rd;
    mt19937 gen(rd());
    uniform_int_distribution<> distrib(0, caracteres.size() - 1);

    string senha;
    for (int i = 0; i < tamanho; i++)
    {
        senha += caracteres[distrib(gen)];
    }
    return senha;
}

int main()
{

    try
    {
        auto inicio = chrono::high_resolution_clock::now();
        string senha = Senha(100000, true, true, true, true); //<------ Pra mudar o tamanho, a estrutura, só mudar aqui qm quiser mexe ;)
        auto fim = chrono::high_resolution_clock::now();

        auto duracao = chrono::duration_cast<chrono::milliseconds>(fim - inicio);

        cout << "Senha gerada: " << senha << endl;
        cout << "Tempo de execucao: " << duracao.count() << "ms" << endl;
         // 100000 caracteres em, Tempo de execucao: 5ms KKKKKKKKK 
    }
    catch (const exception &e)
    {
        cout << "Erro:  " << e.what() << endl;
    }
 //g++ -std=c++11 gerador.cpp -o gerador.exe 
 //Comando pra compilar o código e testar no terminal
 //ele vira um arquivo executavel entao aqui na pasta da um ./gerador.exe q ele vai gerar!
    return 0;
}