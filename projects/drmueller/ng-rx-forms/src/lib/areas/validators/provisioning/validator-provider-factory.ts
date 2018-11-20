import { InjectionToken, ClassProvider } from '@angular/core';

import { MinLengthValidator } from '../services/validator-implementations/min-length.validator';

export class ValidatorProviderFactory {
  public static APP_VALIDATOR_TOKEN = new InjectionToken('app_validator');

  // https://github.com/rangle/angular-2-aot-sandbox#aot-dos-and-donts
  public static ValidatorProviders: ClassProvider[] = [
    {
      provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
      multi: true,
      useClass: MinLengthValidator
    }
    // {
    //   provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
    //   multi: true,
    //   useClass: v.StringMatchValidator
    // },
    // {
    //   provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
    //   multi: true,
    //   useClass: v.PatternValidator
    // },
    // {
    //   provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
    //   multi: true,
    //   useClass: v.RequiredValidator
    // },
    // {
    //   provide: ValidatorProviderFactory.APP_VALIDATOR_TOKEN,
    //   multi: true,
    //   useClass: v.NumericValidator
    // }
  ];
}
