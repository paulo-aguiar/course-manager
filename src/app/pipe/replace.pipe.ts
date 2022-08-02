import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'
})
export class ReplacePipe implements PipeTransform {
  /**
  o 1º parâm refere-se ao valor da propriedade em que será utilizado o pipe,
  o 2º parâm  é o caracter que será passado,
  e o 3º parâm é o valor que substituirá o 2º parâm
   */
  transform(value: string, char: string, valueToRpelace: string) {
    return value.replace(char, valueToRpelace);
  }
}