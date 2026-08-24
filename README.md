# Travio - Travel Experience Application

Travio is a modern travel experience application built with Next.js that showcases breathtaking destinations and cultural experiences around the world.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Key Features

- **Hero Slider**: Beautiful full-screen image carousel showcasing travel destinations
- **Featured Destinations**: Bento grid layout highlighting popular travel locations
- **Cultural Hook**: Engaging section about cultural experiences and nature
- **Packages & Bookings**: Trip packages by category with a booking flow and confirmation page
- **Optimized Images**: AVIF/WebP delivery via `next/image` with responsive sizes
- **Motion Animations**: Smooth animations using Framer Motion
- **Responsive Design**: Works on all device sizes

## Project Structure

```
app/
├── layout.tsx          # Root layout (fonts, metadata)
├── page.tsx            # Home page
├── about/              # About Us
├── blog/               # Blog listing
├── bookings/           # Booking flow + confirmation
├── components/         # Shared components (Navbar, Footer, sliders...)
├── contact/            # Contact form
├── destinations/       # Destinations hub (+ section components)
├── faq/                # FAQ accordion
├── gallery/            # Photo gallery
├── packages/           # Trip packages by category
├── testimonials/       # Testimonials carousel
└── api/                # Route handlers (news, restaurants)
```

## Technologies Used

- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion 12
- react-icons
- Swiper / react-slick

## Environment Variables

Create a `.env.local` file (or configure them in your Vercel project settings):

```
NEXT_PUBLIC_TRIPADVISOR_KEY=<your RapidAPI key>
NEXT_PUBLIC_NEWSAPI_KEY=<your NewsAPI key>
```

> Note: these keys are read inside server-side API routes (`app/api/*/route.ts`), so they are not exposed to the browser bundle despite the `NEXT_PUBLIC_` prefix.

## Deploy on Vercel

1. Push this repository to GitHub.
2. Import it in Vercel — Next.js is auto-detected from the repository **root** (no extra configuration needed).
3. Add the two environment variables above in **Project → Settings → Environment Variables**.
4. Redeploy.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

Check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
