## Sabari Marine Enterprise
Sabari Marine Enterprise is a shipbuilding company based in India. It was founded in 1995

src/
├── app/                             # Next.js 13+ App Router (optional if using /pages)
├── components/
│   ├── common/                      # Reusable UI components (Button, Input, Loader)
│   ├── layout/                      # Header, Footer, Layout wrappers
│   └── forms/                       # Form components like ContactForm.jsx
├── hooks/                           # Custom hooks
│   └── useSubmitForm.js
├── pages/                           # Route-based pages
│   ├── index.js
│   ├── about.js
│   ├── contact.js
│   └── services.js
├── styles/
│   ├── globals.scss
│   └── components/
│       └── contactForm.scss
├── context/                         # React context files
│   └── ThemeContext.js
├── utils/                           # Helpers and constants
│   └── constants.js
├── lib/
│   └── react-hook-form/
│       └── queryClient.js              # React Query Client 
│   └── tansack-query/
│       └── queryClient.js              # React Query Client 
│   └── redux/                           # Store config
│       └── store.js
│       └──features/                        # Redux feature 
│          └──slices
│             └── user/
│                 └── userSlice.js


## This is a [Next.js]

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
