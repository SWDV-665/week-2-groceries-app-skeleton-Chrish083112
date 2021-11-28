import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
import {GroceryServiceProvider} from '../providers/grocery/grocery';

platformBrowserDynamic().bootstrapModule(AppModule);
