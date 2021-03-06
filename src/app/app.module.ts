import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { HTTP } from '@ionic-native/http';
import { HttpClientModule} from "@angular/common/http";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ReservationRoomListPage } from '../pages/reservation-room-list/reservation-room-list';
import { ReservationRoomDetailPage } from '../pages/reservation-room-detail/reservation-room-detail';
import { FavPage } from '../pages/fav/fav';
import { MycalComponent } from '../components/mycal/mycal';
import { MonthNamePipe } from '../pipes/month-name/month-name';
import { AlarmListPage } from '../pages/alarm-list/alarm-list';
import { SettingListPage } from '../pages/setting-list/setting-list';
import { OpenApiServiceProvider } from '../providers/open-api-service/open-api-service';
import { Device } from '@ionic-native/device';

import { FCM } from '@ionic-native/fcm';
import { IonicStorageModule } from '@ionic/storage';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { LongPressModule } from 'ionic-long-press';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ReservationRoomListPage,
    ReservationRoomDetailPage,
    FavPage,
    MycalComponent,
    MonthNamePipe,
    AlarmListPage,
    SettingListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    LongPressModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ReservationRoomListPage,
    ReservationRoomDetailPage,
    FavPage,
    MycalComponent,
    AlarmListPage,
    SettingListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    OpenApiServiceProvider,
    Device,
    HTTP,
    FCM,
    AndroidPermissions
    
  ]
})
export class AppModule {}
