import { Component } from '@angular/core';
import { Drawer } from "./components/drawer/drawer/drawer";
import { Footer } from "./components/footer/footer";
import { Codigo } from "./components/codigo/codigo";
import { Table } from "./components/table/table";
import { Responsividad } from "./components/responsividad/responsividad";
import { Card3D } from './components/card3D/card3D';


import { Card } from "./components/card/card";
import { Rainting } from "./components/rainting/rainting";

@Component({
  selector: 'app-daisyui-page',
  imports: [Codigo, Table, Responsividad, Card, Card3D, Rainting],
  templateUrl: './daisyui-page.html',
})
export class DaisyuiPage {

}
