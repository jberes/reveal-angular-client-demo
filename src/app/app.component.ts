import { AfterViewInit, Component, ViewChild, ElementRef } from '@angular/core';

declare let $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'reveal-angular-client-demo';

  @ViewChild('revealView') el!: ElementRef;
  private revealView: any;

ngAfterViewInit(): void {
    $.ig.RevealSdkSettings.setBaseUrl('https://samples.revealbi.io/upmedia-backend/reveal-api/');
    $.ig.RevealSdkSettings.ensureFontsLoadedAsync().then(() => {
        $.ig.RVDashboard.loadDashboard('Sales', (dashboard: any) => {
        this.revealView = new $.ig.RevealView(this.el.nativeElement);
        this.revealView.dashboard = dashboard;
    });
  });
}


}
