import * as ReactDOMServer from "react-dom/server";

export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "image/svg+xml");
  res.setHeader(
    "Cache-Control",
    "no-cache, no-store, private, must-revalidate"
  );
  res.setHeader("Vary", "image/Accept-Encoding+xml");
  res.write(ReactDOMServer.renderToStaticMarkup(<SVG />));
  res.end();
  return { props: {} };
}

const columns = [
  "Core Team",
  "Availability",
  "Timezones",
  "App Store",
  "Teams",
  "Booking Page",
  "Turbo Repo",
  "E2E testing",
  "Webhooks",
  "Event-Types",
  "Prisma",
  "Billing (Stripe)",
  "Authentication",
  "Stripe App",
  "Google Cal",
  "tRPC",
  "SSO / SAML",
  "CalDAV",
  "Outlook App",
  "Slack App",
  "Public API",
  "Recurring Event",
  "Seats",
  "Zapier",
  "Embeds",
  "Admin Console",
  "Workflows",
];

// prettier-ignore
const data =[
  ["@PeerRich", " ", " ", " ", " ", "👀", "👀", " ", " ", "✅", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["@baileypumfleet", " ", " ", "✅", " ", "✅", "👀", " ", " ", " ", " ", " ", " ", " ", "✅", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["@zomars", " ", " ", "🥇 ✅", " ", "✅", "✅", "✅", " ", "✅", "✅", "✅", "✅", "✅", " ", "✅", "👀", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["@emrysal", "🥇 ✅", "🥇 ✅", " ", "✅", "✅", "✅", "✅", "✅", "✅", "✅", " ", " ", " ", "✅", "✅", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["@alannnc", "✅", "🥇 ✅", " ", " ", "✅", "👀", "✅", " ", "✅", "✅", "🥇 ✅", "✅", "✅", "👀", "✅", "✅", " ", " ", " ", " ", " ", " ", " ", " ", " ", " "],
  ["@agustif", " ", " ", "👀", " ", "✅", "✅", "👀", " ", "👀", "✅", "✅", "🥇 ✅", "👀", " ", "✅", "🥇 ✅", " ", " ", " ", "🥇 ✅", " ", " ", " ", " ", " ", " "],
  ["@leog", "👀", " ", "✅", "👀", " ", "👀", " ", "👀", "✅", " ", " ", " ", "👀", " ", "👀", " ", " ", "👀", " ", " ", "✅ ⚠️", " ", " ", " ", " ", " "],
  ["@joeauyeung", " ", " ", "✅", "👀", " ", " ", " ", " ", "✅ 👀", "✅ 👀", "✅ 👀", " ", " ", " ", " ", "👀", " ", "✅", " ", " ", " ", "✅ ⚠️", " ", " ", " ", " "],
  ["@alishaz-polymath", "✅", "✅", "👀", "✅", "✅", " ", "✅", "✅", "✅", "✅ 👀", " ", "✅ 👀", "👀", "👀", "✅", " ", "👀", "👀", " ", "✅", " ", " ", " ", " ", " ", " "],
  ["@hariombalhara", " ", " ", " ", " ", " ", " ", "✅", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "✅ ⚠️", " ", " "],
  ["@CarinaWolli", " ", " ", " ", " ", " ", " ", " ", "✅", "✅", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", "✅ ⚠️", " ", " ", "✅ ⚠️"],
  ["@sean-brydon", " ", " ", "✅", " ", " ", "👀", "✅", "👀", " ", "✅", " ", "👀", " ", " ", "✅", "👀", "👀", " ", "🥇 ✅ ⚠️", " ", " ", " ", " ", " ", " ", " "]
]

function Table() {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={column} className={index > 0 ? "rotate" : ""}>
              <div>
                <span>{column}</span>
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={`${rowIndex}`}>
            {row.map((cell, cellIndex) => (
              <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function SVG() {
  return (
    <svg fill="none" viewBox="0 0 1415 830" xmlns="http://www.w3.org/2000/svg">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <style>{`
            * {
              box-sizing: border-box;
            }
            :root {
              font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
                sans-serif;
              --color-border-default: #d0d7de;
            }
            table {
              border-spacing: 0;
              border-collapse: collapse;
              display: block;
              width: 100%;
              width: max-content;
              max-width: 100%;
              overflow: auto;
              border: 1px solid var(--color-border-default);
            }
            td:first-child {
              text-align: left;
              white-space: nowrap;
              font-weight: 600;
            }
            td:not(:first-child) {
              text-align: center;
              width: 32px;
              line-break: anywhere;
            }
            table th {
              vertical-align: bottom;
              padding: 13px 6px;
            }
            table td {
              padding: 6px 13px;
              border: 1px solid var(--color-border-default);
            }
            th.rotate {
              vertical-align: middle;
              height: 180px;
              white-space: nowrap;
              border: 1px solid transparent;
              border-bottom: 1px solid var(--color-border-default);
            }
            th.rotate > div {
              transform: translate(0, 75px) rotate(270deg);
              width: 30px;
            }
            th.rotate > div > span {
              padding: 5px 10px;
            }
          `}</style>
          <div id="wrapper">
            <Table />
          </div>
        </div>
      </foreignObject>
    </svg>
  );
}

export default function noop() {
  return null;
}

export const config = {
  unstable_runtimeJS: false,
};
