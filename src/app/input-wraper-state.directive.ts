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

	constructor(
		private _elementRef: ElementRef
	) { }

}
