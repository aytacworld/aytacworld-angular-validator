# aytacworld-angular-validator

Extensions for @angular/form validators and a wrapper around validator.js

## Install

`npm install --save aytacworld-angular-validator`

## Usage

app.component.ts
```typescript
import { email, url } from 'aytacworld-angular-validator';
@Component({
  selector: 'my-app',
  template: `html here`,
})
export class App {
  public myForm: FormGroup = this.fb.group({
    email: ['', email()],
    website: ['', url(true)],
    message: ['', Validators.required],
    name: ['', Validators.required]
  });
}
```

## Api

you can pass a boolean to every validator as indication if it's an optional validation or mandatory.

`email() = is mandatory` and `email(true) = optional(can be null/undefined/empty string or an email)`

|validations       |  Description   |  Status  |
|------------|----------------|--------|
|email    |  Email validation  | done |
|url    |  Url validation  | done |
|other | Create a pull request | todo |

## Test

`npm test`

## Examples

[http://embed.plnkr.co/](http://embed.plnkr.co/)

## MIT License

Copyright (c) 2017 Adem Aytaç

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
