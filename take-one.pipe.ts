import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'takeOne'
})
export class TakeOnePipe implements PipeTransform {
    transform(items: any[]) {
        return items[0];
    }
}
