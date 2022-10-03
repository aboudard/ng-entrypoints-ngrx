import { NgModule } from '@angular/core';
import { NgCoreComponent } from './ng-core.component';
import { StoreModule } from '@ngrx/store';
import * as fromCore from './store/core.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CoreEffects } from './store/core.effects';



@NgModule({
  declarations: [
    NgCoreComponent
  ],
  imports: [
  StoreModule.forFeature(fromCore.coreFeatureKey, fromCore.reducer),
  EffectsModule.forFeature([CoreEffects])],
  exports: [
    NgCoreComponent
  ]
})
export class NgCoreModule { }
