import { Injectable } from '@angular/core';
import { AuthConfig, OAuthService } from 'angular-oauth2-oidc';

const oAuthConfig: AuthConfig = {
  issuer: 'https://accounts.google.com',
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId:
    '551875752318-cilvt74ecqd9k9get4j0tst1buhai967.apps.googleusercontent.com',
  scope: 'openid profile email',
};
@Injectable({ providedIn: 'root' })
export class GoogleApiService {
  constructor(private readonly oAuthService: OAuthService) {
    console.log('constructor');
    oAuthService.configure(oAuthConfig);
    oAuthService.loadDiscoveryDocument().then(() => {
      oAuthService.tryLoginImplicitFlow().then(() => {
        if (!oAuthService.hasValidAccessToken) {
          oAuthService.initLoginFlow();
        } else {
          oAuthService.loadUserProfile().then((userProfile) => {
            console.log(JSON.stringify(userProfile));
          });
        }
      });
    });
  }
}
