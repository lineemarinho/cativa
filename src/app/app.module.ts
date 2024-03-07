import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './components/category/category.component';
import { AddFramesComponent } from './pages/home/add-frames/add-frames.component';
import { HeaderCategoryComponent } from './components/header-category/header-category.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    CategoryComponent,
    AddFramesComponent,
    HeaderCategoryComponent,
    FrameAddedSuccessfullyComponent,
    SendFrameComponent,
    AboutComponent,
    PrivacyPolicyComponent,
    ManifestComponent,
    CollectionsComponent,
    HomeCollectionsComponent,
    ContactComponent,
    AddFrameComponent,
    ActiveFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
