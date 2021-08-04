export default function Aside() {
  return (
    <aside className="learn">
      <header>
        <h3>@visma/react-openapi-client-generator</h3>
        <h5>Example</h5>
        <a href="https://github.com/Visma-AS/visma/tree/main/packages/react-openapi-client-generator/examples/todoapp">
          Source
        </a>
      </header>
      <hr />
      <h4>Official Resources</h4>
      <ul>
        {[
          {
            url: 'https://github.com/Visma-AS/visma/tree/main/packages/react-openapi-client-generator',
            text: '@visma/react-openapi-client-generator',
          },
          {
            url: 'https://github.com/Visma-AS/visma/tree/main/packages/msw-openapi-backend-integration',
            text: '@visma/msw-openapi-backend-integration',
          },
          {
            url: 'https://github.com/ArnoSaine/postinumero/tree/main/packages/use-async',
            text: '@postinumero/use-async',
          },
          {
            url: 'https://mswjs.io',
            text: 'msw',
          },
          {
            url: 'https://github.com/anttiviljami/openapi-backend',
            text: 'openapi-backend',
          },
          {
            url: 'https://github.com/anttiviljami/openapi-client-axios',
            text: 'openapi-client-axios',
          },
        ].map(({ text, url }) => (
          <li key={url}>
            <a href={url}>{text}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
