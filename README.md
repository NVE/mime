# Dette prosjektet er utdatert og vil ganske snart forsvinne
Her finner du oppdatert info om NVE sitt designsystem:
- https://designsystem.nve.no
- https://github.com/NVE/Designsystem

## Utdatert info

### Info

Pakken «[mime](https://github.com/NVE/mime/packages/1591505)» inneholder designverdier som skal brukes i NVE prosjekter. Verdiene er satt av designansvarlig for NVE Designsystem i [Figma](figma.com).

---

### Importering

#### JavaScript/Typescript

```js
import {tokens} from '@nve/mime';
```

#### SCSS / LESS
```scss
@import "@nve/mime/scss/tokens.scss";
@import "@nve/mime/less/tokens.less";
```

<sup>Noe konfigurasjon kan være nødvendig avhengig av oppsettet du bruker.</sup>

---

### Installasjon

#### 1. Legg ved .npmrc i prosjektet ditt

```npmrc
@nve:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=<personal-access-token>
```
<sup>Kontakt [mimenve](https://github.com/mimenve) for utstedelse av «personal-access-token».</sup>

#### 2. Installer med npm

```shell
npm install @nve/mime
```

---

### Bakgrunn

![alt text](https://github.com/nve/mime/blob/main/img/mime.png?raw=true)
