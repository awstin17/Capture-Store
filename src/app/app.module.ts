import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
// import { Keyboard } from '@ionic-native/keyboard';
import { Camera } from '@ionic-native/camera';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
// import {LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';
// import { RegistrationPage } from '../pages/registration/registration';
import { RegistrationPageModule } from '../pages/registration/registration.module';
// import { EditPage } from '../pages/edit/edit';
import { EditPageModule } from '../pages/edit/edit.module';
import { PopupPageModule } from '../pages/popup/popup.module';

// import { CameraComponent } from '../components/camera/camera';
import { ComponentsModule} from '../components/components.module';

// import { StatusBar } from '@ionic-native/status-bar';
// import { SplashScreen } from '@ionic-native/splash-screen';
import { UserProvider } from '../providers/user/user';

import { HttpClientModule } from '@angular/common/http';
import { ImageProvider } from '../providers/image/image';

import { File } from '@ionic-native/file';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FilePath } from '@ionic-native/file-path';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    // LoginPage,
    // RegistrationPage
    // EditPage
    // CameraComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    EditPageModule,
    LoginPageModule,
    RegistrationPageModule,
    PopupPageModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp, {
      scrollAssist: false, 
        autoFocusAssist: false
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage
    // LoginPage,
    // RegistrationPage
    // EditPage
  ],
  providers: [
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    ImageProvider,
    File,
    FileTransfer,
    FilePath
  ]
})
export class AppModule {}
