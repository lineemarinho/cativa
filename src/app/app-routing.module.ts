import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddFramesComponent } from './pages/home/add-frames/add-frames.component';
import { FrameAddedSuccessfullyComponent } from './pages/home/frame-added-successfully/frame-added-successfully.component';
import { SendFrameComponent } from './pages/home/send-frame/send-frame.component';
import { AboutComponent } from './pages/about/about.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { ManifestComponent } from './pages/manifest/manifest.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { HomeCollectionsComponent } from './pages/home-collections/home-collections.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AddFrameComponent } from './pages/add-frame/add-frame.component';
import { ActiveFrameComponent } from './pages/add-frame/active-frame/active-frame.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  { path: 'frame', component: AddFramesComponent },
  { path: 'sucess-frame', component: FrameAddedSuccessfullyComponent },
  { path: 'send-frame', component: SendFrameComponent },
  { path: 'manifest', component: ManifestComponent },
  { path: 'about', component: AboutComponent },
  { path: 'privacy-policy', component: PrivacyPolicyComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'home-collections', component: HomeCollectionsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'add-frame', component: AddFrameComponent },
  { path: 'active-frame', component: ActiveFrameComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
