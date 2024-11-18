import { Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ContactComponent } from './Contact/contact/contact.component';
import { ErreurComponent } from './Erreur/erreur/erreur.component';
import { RingComponent } from './Product/ring/ring.component';
import { NecklaceComponent } from './Product/necklace/necklace.component';
import { NeclaceSelectedComponent } from './Product/neclace-selected/neclace-selected.component';
import { PanierComponent } from './panier/panier.component';

export const routes: Routes = [
    {path:'home' , title:' Home', component:AcceuilComponent},
    {path:'ring' , title:' Ring', component:RingComponent},
    {path:'necklace' , title:' Neckklace', component:NecklaceComponent},
    {path:'necklace/:idn' , title:' Neckklace', component:NeclaceSelectedComponent},
    {path:'contact' , title:' Contact', component:ContactComponent},
    {path:'panier' , title:' Panier', component:PanierComponent},
    {path:'', redirectTo:'home',pathMatch:'full'},
    {path:'**' ,title:" Error" , component:ErreurComponent}


];
