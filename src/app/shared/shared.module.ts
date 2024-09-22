import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { CalendarModule } from 'primeng/calendar';
import { MessageModule } from 'primeng/message';
import { FieldsetModule } from 'primeng/fieldset';
import { ToastModule } from 'primeng/toast';
import { ListboxModule } from 'primeng/listbox';
import { TableModule } from 'primeng/table';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AvatarModule } from 'primeng/avatar';
import { StyleClassModule } from 'primeng/styleclass';
import { Sidebar } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { MultiSelectModule } from 'primeng/multiselect';
import { PanelMenuModule } from 'primeng/panelmenu';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { InputTextModule } from 'primeng/inputtext';
import { Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ScrollPanelModule } from 'primeng/scrollpanel';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsetModule,
    PasswordModule,
    CalendarModule,
    MessageModule,
    ToastModule,
    ListboxModule,
    TableModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    RadioButtonModule,
    MultiSelectModule,
    PanelMenuModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ToolbarModule,
    SplitButtonModule,
    MenubarModule,
    PanelModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    FieldsetModule,
    PasswordModule,
    CalendarModule,
    MessageModule,
    ToastModule,
    ListboxModule,
    TableModule,
    SidebarModule,
    ButtonModule,
    RippleModule,
    AvatarModule,
    StyleClassModule,
    Sidebar,
    RadioButtonModule,
    MultiSelectModule,
    PanelMenuModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    ToolbarModule,
    SplitButtonModule,
    MenubarModule,
    PanelModule,
    ScrollPanelModule
  ]
})
export class SharedModule {

  sidebarVisible: boolean = false;
 }

