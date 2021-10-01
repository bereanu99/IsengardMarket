import { NgModule } from "@angular/core";
import { NFTCardComponent } from "./nftcard/nftcard.component";
import { SearchNavbarComponent } from './search-navbar/search-navbar.component';
import { InfoFooterComponent } from './info-footer/info-footer.component';
import { MagicCardCaruselComponent } from './magic-card-carusel/magic-card-carusel.component';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [
    NFTCardComponent,
    SearchNavbarComponent,
    InfoFooterComponent,
    MagicCardCaruselComponent
  ],
  imports: [CommonModule, RouterModule,],
  exports: [
    NFTCardComponent,
    SearchNavbarComponent,
    InfoFooterComponent,
    MagicCardCaruselComponent
  ]
})

export class SharedClassicModule { }
