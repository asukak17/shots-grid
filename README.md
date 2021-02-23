# Shots Grid

## Getting Started

This application is deployed here

https://shots-grid.vercel.app/

### to run locally

1. Clone the repository

```
git clone https://github.com/asukak17/shots-grid.git
```

2. CD into the folder and install dependencies

```
cd shots-grid
yarn install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Tech Stack

- Next.js
- React
- prettier

## Things I wanted to work

- align font
- upload svg file and change svg color to match the mock
- hover effect on card

## Note

I chose to use React since this is something I am comfortable with and can showcase within the time constraints, however, since this is a marketing position and we have to be conscious about SEO, I used NextJS instead of create-react-app to improve the SEO. This was my first time using NextJS, but reading the documentation and learnt about using getStaticProps to use a static pre-rendering method. I chose getStaticProps over server side rendering because the page was not something updated very often. I divided the component into Card and home, and while I could splitted into more components, e.g. CardImage, Badge, Icon, I could not implement due to the time constraints.
I missed one feature, showing the title of each card on hover. I would have implemented using SCSS :hover method and added transition value to animate it.

## Questions I would have asked

- Number of comments could not be found so I used savesCount, but I would have asked if that was the correct data to take
- How did you want to display the author name when the name is longer than the space? (elipsis, make it into two rows)
- Is there any hover effect on the bottom of the card? (author info, likes, comments)
