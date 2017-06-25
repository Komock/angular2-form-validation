import { Directive, ElementRef, HostListener,  } from '@angular/core';

@Directive({
  selector: '[inputWraperState]',
  exportAs: 'inputState'
})
export class InputWraperStateDirective {

	public wrapperClasses: {[key: string]: boolean} = {
		dirty: false,
		active: false
	};

	@HostListener('focus')
	public onFocus(): void{
		this.wrapperClasses.active = true;
	}

	@HostListener('focusout')
	public onFocusOut(): void{
		this.wrapperClasses.active = false;
	}

	@HostListener('change')
	public onChange(): void{
		if (this._elementRef.nativeElement.value !== '') {
			this.wrapperClasses.dirty = true;
			return;
		}
		this.wrapperClasses.dirty = false;
	}

	constructor(
		private _elementRef: ElementRef
	) { }

}
