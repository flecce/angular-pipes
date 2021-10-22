import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'select'
})
export class SelectPipe implements PipeTransform {
    transform(object: any, key: string) {
        return object[key];
    }
}
