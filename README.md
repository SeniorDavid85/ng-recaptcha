# Angular 2 + TypeScript component for Google reCAPTCHA

# Installation

```
npm i ng2-recaptcha --save
```

# Usage

```typescript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component } from '@angular/core';
import { RecaptchaComponent } from 'ng2-recaptcha/ng2-recaptcha';

@Component({
    selector: 'my-app',
    template: `
        <recaptcha (resolved)="resolved($event)" siteKey="YOUR_SITE_KEY"></recaptcha>
    `,
    directives: [RecaptchaComponent],
}) export class MyApp {
    resolved(captchaResponse: string) {
        console.log(`Resolved captcha with response ${captchaResponse}:`);
    }
}

bootstrap(MyApp);
```

# Options

The component supports this options:

* `siteKey`
* `theme`
* `type`
* `size`
* `tabIndex`

They are all pretty well described in the [reCAPTCHA docs](https://developers.google.com/recaptcha/docs/display),
so I won't duplicate it here.

# Events

* `resolved(response: string)`. Occurs when the captcha resolution value changed. 
  When user resolves captcha, use `response` parameter to send to the server for verification.
  This parameter is equivalent to calling [`grecaptcha.getResponse`](https://developers.google.com/recaptcha/docs/display#js_api).

  If the captcha has expired prior to submitting its value to the server, the component
  will reset the captcha, and trigger the `resolved` event with `response === null`.

# Methods

* `reset`. Performs a manual captcha reset. This method might be useful if your form
validation failed, and you need the user to re-enter the captcha.

# Specifying a different language

`<recaptcha>` supports various languages. But this settings is global, and cannot be set
on a per-captcha basis. An example below shows you how can the default behavior be overridden.

```typescript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Component, provide } from '@angular/core';
import { RecaptchaLoaderService } from 'ng2-recaptcha/ng2-recaptcha';

@Component({
    selector: 'my-app',
    templateUrl: 'my-app.html',
}) export class MyApp {}

bootstrap(MyApp, [
    provide(RecaptchaLoaderService, {
        useValue: new RecaptchaLoaderService("fr"),
    })
]);

``` 

# Loading the reCAPTCHA API by yourself

`TBD`
