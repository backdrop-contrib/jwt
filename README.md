# JWT for Backdrop

This module gives the ability to create and authenticate Jason Web Tokens through global PHP functions.

## Usage
This module provides global functions that create and verify Jason Web Tokens.

* `encode_jwt($payload_data, $expiration_in_seconds (optional))` -- Returns encoded JWT. Default expiration time is set on the settings page or can be specified with a second argument.

* `validate_jwt($jwt)` -- Returns false if JWT is invalid or expired, otherwise returns the decoded payload.

* `decode_jwt($jwt)` -- Returns false if JWT is invalid or expired, otherwise returns the decoded payload.

## License
Released under MIT License 
Copyright (c) 2021 Justin Sitter

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.