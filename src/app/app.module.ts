import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { IconBlockComponent } from './shared/icon-block/icon-block.component';
import { PastCuroselComponent } from './shared/past-curosel/past-curosel.component';
import { OurTeamComponent } from './shared/our-team/our-team.component';
import { DesignSystemComponent } from './shared/design-system/design-system.component';
import { CompanyInfoCardsComponent } from './shared/company-info-cards/company-info-cards.component';
import { EventCardsComponent } from './shared/event-cards/event-cards.component';
import { IraTabsComponent } from './shared/ira-tabs/ira-tabs.component';
import { ConferencesComponent } from './conferences/conferences.component';
import { IraGalleryComponent } from './ira-gallery/ira-gallery.component';
import { DynamicpagecomponentComponent } from './shared/dynamicpagecomponent/dynamicpagecomponent.component';
import { EventAboutComponent } from './shared/event-about/event-about.component';
import { EventNavbarComponent } from './shared/event-navbar/event-navbar.component';
import { ScientificTabsComponent } from './shared/scientific-tabs/scientific-tabs.component';
import { HalfMoonComponent } from './shared/half-moon/half-moon.component';
import { ScheduleComponent } from './shared/schedule/schedule.component';
import { AbstractSubmissionComponent } from './shared/abstract-submission/abstract-submission.component';
import { DynamicLandingComponent } from './shared/dynamic-landing/dynamic-landing.component';
import { EventMembersComponent } from './shared/event-members/event-members.component';
import { EventRegistrationComponent } from './shared/event-registration/event-registration.component';
import { RegistrationFormComponent } from './shared/registration-form/registration-form.component';
import { EventPopupComponent } from './shared/event-popup/event-popup.component';
import { AdminModule } from 'src/admin/admin.module';
import { AdminNavComponent } from './shared/admin-nav/admin-nav.component';
import { SponsorAndExhibitorsComponent } from './shared/sponsor-and-exhibitors/sponsor-and-exhibitors.component';
import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { ScheduleItemComponent } from './shared/schedule-item/schedule-item.component';
import { EventSectionComponent } from './shared/event-section/event-section.component';
import { EventSectionDetailsComponent } from './shared/event-section-details/event-section-details.component';
import { CustomerService } from './services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client/core';
import { NgxPayPalModule } from 'ngx-paypal';
import { PaymentComponent } from './shared/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    IconBlockComponent,
    PastCuroselComponent,
    OurTeamComponent,
    DesignSystemComponent,
    CompanyInfoCardsComponent,
    EventCardsComponent,
    IraTabsComponent,
    ConferencesComponent,
    IraGalleryComponent,
    DynamicpagecomponentComponent,
    EventAboutComponent,
    EventNavbarComponent,
    ScientificTabsComponent,
    HalfMoonComponent,
    ScheduleComponent,
    AbstractSubmissionComponent,
    DynamicLandingComponent,
    EventMembersComponent,
    EventRegistrationComponent,
    RegistrationFormComponent,
    EventPopupComponent,
    AdminNavComponent,
    SponsorAndExhibitorsComponent,
    ContactUsComponent,
    ScheduleItemComponent,
    EventSectionComponent,
    EventSectionDetailsComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule, 
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    AdminModule,
    NgxPayPalModule,
    ApolloModule
  ],
  providers: [CustomerService,     {
    provide: APOLLO_OPTIONS,
    useFactory: () => {
      return {
        cache: new InMemoryCache(),
        link: new HttpLink({
          uri: 'https://nxtkzkayyvkhmfvtucvb.supabase.co/graphql/v1',
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dGt6a2F5eXZraG1mdnR1Y3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NTkxMjYsImV4cCI6MjA1NDQzNTEyNn0.kSQNmFBB2lKzoqEHadAA4DGABOaMmzw0CZHQa0Cqmz8`, // ✅ Add your Supabase API Key here
            apikey: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54dGt6a2F5eXZraG1mdnR1Y3ZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NTkxMjYsImV4cCI6MjA1NDQzNTEyNn0.kSQNmFBB2lKzoqEHadAA4DGABOaMmzw0CZHQa0Cqmz8`, // ✅ Required for authentication
          },
        }),
      };
    },
  },],
  bootstrap: [AppComponent]
})
export class AppModule { }
