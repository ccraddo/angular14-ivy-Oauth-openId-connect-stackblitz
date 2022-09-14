import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable()
export class GoogleApiService {
  constructor(private readonly oAuthService: OAuthService) {}
}
