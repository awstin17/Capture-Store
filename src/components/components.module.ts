import { NgModule } from '@angular/core';
import { CameraComponent } from './camera/camera';
import { IonicModule } from 'ionic-angular';

@NgModule({
	declarations: [CameraComponent],
	imports: [IonicModule.forRoot(CameraComponent)],
	exports: [CameraComponent]
})
export class ComponentsModule {}
