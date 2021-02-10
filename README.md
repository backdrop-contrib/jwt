# JWT for Backdrop

This module adds the ability to create and authenticate JSON Web Tokens through global PHP functions. It is intended to facilitate developers wishing to integrate JSON Web Tokens into their projects.

## Installation

- Install this module using the official [Backdrop CMS instructions](https://backdropcms.org/guide/modules).
- (optional) Visit the configuration page under Configuration > Administration > Administer JWT Tokens.

## Usage

This module provides global functions that create and verify Jason Web Tokens.

* `encode_jwt($payload_data, $expiration_in_seconds (optional))` -- Returns encoded JWT. Default expiration time is set on the settings page or can be specified with a second argument.

* `validate_jwt($jwt)` -- Returns false if JWT is invalid or expired, otherwise returns the decoded payload.

* `decode_jwt($jwt)` -- Returns false if JWT is invalid or expired, otherwise returns the decoded payload.

## Documentation

Additional documentation is located in the Wiki:
https://github.com/jsitter/jwt/wiki

## Issues

Bug and feature requests can be reported in the Issue Queue at https://github.com/jsitter/jwt/issues.

## Credits

- Created by Justin Sitter

- Sponsored by [Saint Anthony's Seminary Alumni Association](https://www.sasalumni.org)

## License

This project is released under the GPL v2 license.
