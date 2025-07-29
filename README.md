# HIMEL TEX BACK-END

A brief description of what this project does and who it's for

## API Reference

#### Create Buyer API

```bash
  POST /api/v1/users/buyer
```

```http

  {
  "fullName": "himel",
  "address": "borobag",
  "phoneNumber": "01516097115",
  "roles": [
    "buyer"
  ]
}
```

#### Create Buyer API

```bash
  POST /api/v1/users/seller
```

```http
  {
  "fullName": "himel",
  "address": "borobag",
  "phoneNumber": "01516097150",
  "roles": [
    "seller"
  ],
  "sellerType": [
    "mainyarn"
  ]
}
```

## Tech Stack

**Client:** React, Redux, TailwindCSS

**Server:** Nest, Typeorm, Postgress
