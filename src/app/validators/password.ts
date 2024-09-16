import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function criarSenhaForte(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    const temCaracteresMaiusculos = /[A-Z]+/.test(value);
    const temCaracteresMinusculos = /[a-z]+/.test(value);
    const temValoresNumericos = /[0-9]+/.test(value);
    const temCaracterEspecial = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(value);
    const temMinimoOitoCaracteres = value.length >= 8;

    const senhaValida = temCaracteresMaiusculos && temCaracteresMinusculos && temValoresNumericos && temCaracterEspecial && temMinimoOitoCaracteres;

    return !senhaValida ? { senhaForte: true } : null;
  };
}
