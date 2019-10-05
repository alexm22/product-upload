// enables typescript to understand the html import referance //

declare module '*.html' {
  const content: string;
  export default content;
}
