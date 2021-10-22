import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'take'
})
export class TakePipe implements PipeTransform {
    transform(items: any[], n: number) {
        return items.slice(0, n);
    }
}
