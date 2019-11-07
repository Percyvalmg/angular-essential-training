import { Directive, HostBinding, Input, HostListener } from '@angular/core';

@Directive({
    selector: '[ecFavourite]'
})

export class FavouriteDirective {
    @Input() set ecFavourite(value) {
        this.isFavourite = value;
    }
    @HostBinding('class.is-favourite') isFavourite = true;
    @HostBinding('class.is-favourite-hovering') hovering = false;
    @HostListener('mouseenter') onMouseEnter(){
        this.hovering = true;
    }
    @HostListener('mouseleave') onMouseLeave(){
        this.hovering = false;
    }
}