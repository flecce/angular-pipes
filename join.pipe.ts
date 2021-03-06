import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'join'
})
export class JoinPipe implements PipeTransform {
    transform(items: string[], separator: string) {
        return items?.join(separator) ?? "";
    }
}
