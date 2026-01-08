
# React Business Landing Page (Template)

A reusable, open-source-ready landing page built with React and Vite.

## Features

- Responsive sections (hero, about, services, features, contact)
- Animated UI with Framer Motion
- Contact form via Web3Forms (configurable)
- Configurable branding and links via environment variables

## Tech Stack

- React
- Vite
- Tailwind CSS
- Framer Motion

## Setup

1. Install dependencies:

	 ```bash
	 npm install
	 ```

2. Create your local env file:

	 ```bash
	 copy .env.example .env
	 ```

3. Update values in `.env` (required at minimum):

- `VITE_COMPANY_NAME`
- `VITE_CONTACT_EMAIL`
- `VITE_WEB3FORMS_ACCESS_KEY`

## Run

- Dev server:

	```bash
	npm run dev
	```

- Production build:

	```bash
	npm run build
	npm run preview
	```

## Example

Input (in `.env`):

- `VITE_COMPANY_NAME="Acme Services"`
- `VITE_CONTACT_EMAIL="hello@acme.example"`

Output:

- The hero heading and footer brand show “Acme Services”.
- The contact section email link points to `hello@acme.example`.

## License

MIT (add a LICENSE file if you plan to publish).

