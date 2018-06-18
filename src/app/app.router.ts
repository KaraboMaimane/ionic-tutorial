import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateComponent } from './create/create.component';
import { InstallComponent } from './install/install.component';
import { RunComponent } from './run/run.component';
import { CheckVersionComponent } from './check-version/check-version.component';
import { MoreInfoComponent } from './more-info/more-info.component';

export const router: Routes = [
    {path: 'install', component: InstallComponent},
    {path: 'create', component: CreateComponent},
    {path: 'run', component: RunComponent},
    {path: 'check', component: CheckVersionComponent},
    {path: 'more', component: MoreInfoComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);

