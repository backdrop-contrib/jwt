# JWT
## JSON Web Tokens for Backdrop CMS

This module adds the ability to create and authenticate JSON Web Tokens through global PHP functions. It is intended to facilitate developers wishing to integrate JSON Web Tokens into their projects.

While this project allows for a global secret as a default functionality you may also manage and use your own secrets for encoding and verifying the tokens.

## Installation

- Install this module using the official [Backdrop CMS instructions](https://backdropcms.org/guide/modules).
- (optional) Visit the configuration page under Configuration > Administration > Administer JWT Tokens.

## Usage

This module provides global functions that create and verify JSON Web Tokens.

* `encode_jwt($payload_data (associative array), $expiration_in_seconds (string -- Optional), $secret (string -- Optional))` -- Accepts associative array of key, value pairs ($payload_data) and returns encoded JWT as a string. Default expiration time is set on the settings page or can be specified with a second argument. Example: encode_jwt(['user'=>'1234', 'role'=>'admin']). A secret key can optionally be specified if you wish to manage your own keys.

* `validate_jwt($jwt (string), $secret (string -- Optional))` -- Returns false if JWT string is invalid or expired, otherwise returns the decoded payload as an object. Specify any optional secret keys with a second parameter.

* `decode_jwt($jwt (string), $validate (boolean -- Optional), $secret (string -- Optional))` -- Returns false if JWT is invalid or expired, otherwise returns the decoded payload object. Defaults to validating JWT tokens but optionally can bypass validation by passing in 'false' as the second parameter. If the JWT uses a managed secret pass it in as the third parameter and set the second parameter to true. PHP 7 doesn't allow for named parameters so in this case the second parameter is required.

* `decode_jwt_header($jwt (string), $verify_header (boolean -- Optional), $secret (string -- Optional))` -- Returns decoded JWT header object. Optionally pass in `true` for the second parameter to also validate authenticity of token. To verify headers encoded with managed secrets, pass in the secret as the third parameter.

## Documentation

Additional documentation is located in the Wiki:
https://github.com/jsitter/jwt/wiki

## Issues

Bug and feature requests can be reported in the Issue Queue at https://github.com/backdrop-contrib/jwt/issues.

## Current Maintainers

- [Justin Sitter](https://github.com/jsitter)

## Credits

- Created by Justin Sitter

- Sponsored by [Saint Anthony's Seminary Alumni Association](https://www.sasalumni.org)

## License

This project is released under the GPL v2 license.
