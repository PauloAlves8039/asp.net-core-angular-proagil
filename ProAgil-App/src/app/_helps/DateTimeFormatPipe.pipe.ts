/**
 * @file DateTimeFormatPipe.ts
 * @author: Paulo Alves
 * @description: pipe responsável pelo filtro de formatação do campo data.
 * @version 1.0.1 (29/10/2020)
 */

import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Constants } from './../util/Constants';

/**
 * Classe responsável pela atribuição de pipe para filtragem do campo data.
 */
@Pipe({
  name: 'DateTimeFormatPipe',
})
export class DateTimeFormatPipePipe extends DatePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return super.transform(value, Constants.DATE_TIME_FMT);
  }
}
