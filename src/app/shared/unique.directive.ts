import { Validator, AbstractControl, NG_VALIDATORS } from  '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appUniqueValidator]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: UniqueValidatorDirective,
    multi: true
  }]
})

export class UniqueValidatorDirective implements Validator {
  @Input('appUniqueValidator') submittedName: string;

  validate(control: AbstractControl): {[key: string]: any; } {
    // let matches = this.list.some(x => x.toString() === control.value);
    return control.value === this.submittedName  ? { 'isNotUnique': true} : null;
  }
}
