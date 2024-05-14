import { Component } from "@angular/core";
import { WelcomeComponent } from "./ui/welcome.component";
import { ReversePipe } from "./ui/reverse.pipe";

@Component({
    standalone:true,
    selector: 'app-home',
    template: `
    <app-welcome />
    <p>Hello, i'm gyro</p>
    <p>Time for a little {{magic | reverse}}</p>`,
    imports:[WelcomeComponent, ReversePipe]
})

export class HomeComponent{
    magic = 'reverse me';
}