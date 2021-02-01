import { NgModule } from '@angular/core';
import { SafePipe } from './safe/safe';
import { AlertsPipe } from './alerts/alerts';
import { NotificationsPipe } from './notifications/notifications';
@NgModule({
	declarations: [SafePipe,
    AlertsPipe,
    NotificationsPipe],
	imports: [],
	exports: [SafePipe,
    AlertsPipe,
    NotificationsPipe]
})
export class PipesModule {}
