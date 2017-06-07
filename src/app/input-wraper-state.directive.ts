import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[inputWraperState]'
})
export class InputWraperStateDirective {

	@HostListener('focus')
	public onFocus(): void{
		this._elementRef.nativeElement.parentNode.classList.add('active');
	}

	@HostListener('focusout')
	public onFocusOut(): void{
		this._elementRef.nativeElement.parentNode.classList.remove('active');
	}

	@HostListener('change')
	public onChange(): void{
		if (this._elementRef.nativeElement.value !== '') {
			this._elementRef.nativeElement.parentNode.classList.add('dirty');
		} else {
			this._elementRef.nativeElement.parentNode.classList.remove('dirty');
		}
	}

	constructor(
		private _elementRef: ElementRef
	) { }

}
