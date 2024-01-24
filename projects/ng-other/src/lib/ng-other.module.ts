import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgOtherComponent } from './ng-other.component';
import { StoreModule } from '@ngrx/store';
import * as fromOther from './store/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        StoreModule.forFeature(fromOther.otherFeatureKey, fromOther.reducers),
        NgOtherComponent,
    ],
    exports: [NgOtherComponent],
})
export class NgOtherModule {

  static forRoot(): ModuleWithProviders<NgOtherModule> {
		return {
			ngModule: NgOtherModule
		};
	}

}
