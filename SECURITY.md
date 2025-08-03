# Security Policy

## Supported Versions

We currently support the following versions with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 2.x.x   | :white_check_mark: |
| 1.x.x   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability, please follow these steps:

1. **DO NOT** open a public issue or pull request
2. Email security details to: akshay.baiplawat@example.com
3. Include the following information:
   - Type of issue (e.g., buffer overflow, SQL injection, cross-site scripting)
   - Full paths of source file(s) related to the manifestation of the issue
   - Location of the affected source code (tag/branch/commit)
   - Special configuration required to reproduce the issue
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the issue

## Security Measures

This project implements the following security measures:

### Development Security
- **ESLint Security Plugin**: Scans for common security anti-patterns
- **Dependency Scanning**: Regular `npm audit` checks for known vulnerabilities
- **TypeScript**: Strict type checking prevents many runtime errors
- **Content Security Policy**: Implemented to prevent XSS attacks

### Build Security
- **Automated Vulnerability Scanning**: Trivy scans during CI/CD
- **Dependency Pinning**: Exact version pinning for reproducible builds
- **Secure Secrets Management**: No hardcoded secrets in repository

### Runtime Security
- **HTTPS Only**: Force secure connections in production
- **Security Headers**: Implement security headers via web server configuration
- **Input Validation**: All user inputs are validated and sanitized
- **Output Encoding**: Proper encoding to prevent injection attacks

## Security Headers

When deploying, ensure the following security headers are configured:

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://cdn.jsdelivr.net https://unpkg.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdn.jsdelivr.net; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self'
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
```

## Vulnerability Response

We take security seriously and will respond to reported vulnerabilities as follows:

- **Critical**: Response within 24 hours, patch within 72 hours
- **High**: Response within 48 hours, patch within 1 week
- **Medium**: Response within 1 week, patch within 2 weeks
- **Low**: Response within 2 weeks, patch in next release

## Security Best Practices for Contributors

1. Keep dependencies up to date
2. Use `npm audit` before submitting PRs
3. Follow secure coding practices
4. Never commit secrets or sensitive data
5. Use environment variables for configuration
6. Validate all inputs
7. Encode all outputs
8. Use HTTPS for all external resources

Thank you for helping keep our project secure!