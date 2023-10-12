import { Component, EventEmitter, Input, Output, forwardRef } from "@angular/core";
import { ControlValueAccessor, FormBuilder, FormControl, FormGroup } from "@angular/forms";

const noop = () => {
};

@Component({
    selector: 'pokemon-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'], 
})
export class InputComponent {
    @Input()
    inputValue: string = '';

    @Output()
    inputValueChange: EventEmitter<string> = new EventEmitter<string>();
}