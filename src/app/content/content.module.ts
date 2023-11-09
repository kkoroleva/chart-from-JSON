import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenerateChartComponent } from './components/generate-chart/generate-chart.component';
import { GenerateTableComponent } from './components/generate-table/generate-table.component';
import { PageComponent } from './pages/page/page.component';
import { UploadFileComponent } from './components/upload-file/upload-file.component';
import { JsonHandlerService } from './services/json-handler.service';
import { ContentRoutingModule } from './content-routing.module';

const exports = [
  PageComponent,
  UploadFileComponent,
  GenerateChartComponent,
  GenerateTableComponent,
];

@NgModule({
  declarations: [...exports],
  imports: [CommonModule, ContentRoutingModule],
  exports: [...exports],
  providers: [JsonHandlerService],
})
export class ContentModule {}
