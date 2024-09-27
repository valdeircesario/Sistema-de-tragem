import { Component } from '@angular/core';
import { TriagemService } from './service/triagem.service';
import { NgForm } from "@angular/forms";
import {AppMessageService} from "../../../shared/message-service/message.service";

interface FormuTriagem {
  especialidade: string;
  hipertensao: 'sim' | 'nao';
  diabetico: 'sim' | 'nao';
  febre: 'sim' | 'nao';
  dor: 'sim' | 'nao';
  intensidade?: 'fraca' | 'media' | 'intensa';
  peso: number;
}

@Component({
  selector: 'app-triagem',
  templateUrl: './app-triagem.component.html',
  styleUrls: ['./app-triagem.component.scss']
})
export class AppTriagemComponent {
  especialidade: string = '';
  hipertensao: 'sim' | 'nao' = 'nao';
  diabetico: 'sim' | 'nao' = 'nao';
  febre: 'sim' | 'nao' = 'nao';
  dor: 'sim' | 'nao' = 'nao';
  intensidade?: 'fraca' | 'media' | 'intensa';
  peso: number = 0;


  exibirIntensidade: boolean = false;

  constructor(private triagemService: TriagemService,  private messageService : AppMessageService) {}


    // esse toggleIntensidadeDisplay tem a função de deixar visivel o campo da intensidade no formulario
    // so aparecer o campo no formulario se o usuario digitar que esta com dor
  toggleIntensidadeDisplay(): void {
    this.exibirIntensidade = this.dor === 'sim';
  }

  // valore e nodas definidos pelo sistema pra calcular a media ponderada

  valores = {
    hipertensao: { sim: { valor: 2.6, peso: 1 }, nao: { valor: 1.7, peso: 2 } },
    diabetico: { sim: { valor: 2.6, peso: 1 }, nao: { valor: 1.7, peso: 2 } },
    febre: { sim: { valor: 2.6, peso: 1 }, nao: { valor: 1.7, peso: 2 } },
    dor: {
      sim: {
        fraca: { valor: 1.7, peso: 2 },
        media: { valor: 3.8, peso: 2 },
        intensa: { valor: 5.8, peso: 2 }
      },
      nao: { valor: 1, peso: 2 }
    },
    peso: {
      maior100: { valor: 4.6, peso: 2 },
      menor15: { valor: 4.2, peso: 2 },
      padrao: { valor: 1.5, peso: 2 }
    }
  };

  onSubmit(formuTriagem: NgForm) {
    if (formuTriagem.valid) {
      const dadosFormulario: FormuTriagem = {
        especialidade: formuTriagem.value.especialidade || '',
        hipertensao: formuTriagem.value.hipertensao || 'nao',
        diabetico: formuTriagem.value.diabetico || 'nao',
        febre: formuTriagem.value.febre || 'nao',
        dor: formuTriagem.value.dor || 'nao',
        intensidade: formuTriagem.value.dor === 'sim' ? formuTriagem.value.intensidade : undefined,
        peso: parseFloat(formuTriagem.value.peso) || 0
      };


      // Calcula a média ponderada
      const mediaPonderada = this.calcularMediaPonderada(dadosFormulario);
      console.log('Média Ponderada:', mediaPonderada);
      console.log(dadosFormulario);



      // Cria o objeto que será enviado para o servico
      const dadosTriagem = { ...dadosFormulario, mediaPonderada };

      // Chama o serviço com os dados
      // @ts-ignore

      this.triagemService.salvarTriagem(dadosTriagem).subscribe(
        (response: any) => {
          this.messageService.showSuccess("Triagem efetuada com sucesso!")
        },
        (error: any) => {
          this.messageService.showError("Erro ao salvar triagem!")
        }
      );
      this.resetForm(); //  função Resetar o formulário após o envio
    } else {
      this.messageService.showInfo("Formulário invalido")
    }
  }
// função de calcular a media não pode alterar ou mecher
  calcularMediaPonderada(dados: FormuTriagem): number {
    let valorDor = 0;
    let pesoDor = 0;

    if (dados.dor === 'sim' && dados.intensidade) {
      valorDor = this.valores.dor.sim[dados.intensidade].valor;
      pesoDor = this.valores.dor.sim[dados.intensidade].peso;
    } else {
      valorDor = this.valores.dor.nao.valor;
      pesoDor = this.valores.dor.nao.peso;
    }

    const mediaPonderada =
      (this.valores.hipertensao[dados.hipertensao].valor * this.valores.hipertensao[dados.hipertensao].peso +
        this.valores.diabetico[dados.diabetico].valor * this.valores.diabetico[dados.diabetico].peso +
        this.valores.febre[dados.febre].valor * this.valores.febre[dados.febre].peso +
        valorDor * pesoDor +
        (dados.peso > 100 ? this.valores.peso.maior100 : dados.peso < 15 ? this.valores.peso.menor15 : this.valores.peso.padrao).valor *
        (dados.peso > 100 ? this.valores.peso.maior100 : dados.peso < 15 ? this.valores.peso.menor15 : this.valores.peso.padrao).peso)
      / 5;

    return mediaPonderada;
  }

  resetForm(): void {
    this.especialidade = '';
    this.hipertensao = 'nao';
    this.diabetico = 'nao';
    this.febre = 'nao';
    this.dor = 'nao';
    this.intensidade = undefined;
    this.peso = 0;
  }
}
