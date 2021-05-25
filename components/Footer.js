import ExternalLink from "../components/ExternalLink";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center md:justify-between bg-gray-200 p-4 lg:-mx-4 rounded-lg">
      <p className="text-center md:text-left mb-4 md:mb-0">
        Made with <span>❤</span> by{" "}
        <ExternalLink href="https://alvar.dev?utm_source=notocd.com">
          Alvar Lagerlöf
        </ExternalLink>{" "}
        in hopes of better understanding of conditions.
      </p>
      <ul className="flex flew-row space-x-4">
        <li>
          <a href="https://github.com/alvarlagerlof/not-ocd">
            <img src="/github.svg" alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/alvarlagerlof">
            <img src="/twitter.svg" alt="Twitter logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
