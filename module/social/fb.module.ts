import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import {SocialApiPaginationService} from "./api/social-api-pagination.service";
import {SocialApiService} from "./api/social-api.service";
import {CommonModule} from "../common/common.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule
  ],
  declarations: [
  ],
  entryComponents: [
  ],
  providers: [
    SocialApiPaginationService,
    SocialApiService
  ],
  exports: [
  ]
})
export class FbModule {}
