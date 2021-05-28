import ExternalLink from "../components/ExternalLink";

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row items-center md:justify-between bg-gray-200 p-4 lg:-mx-4 rounded-xl">
      <p className="text-center md:text-left mb-4 md:mb-0">
        Made with <span>❤</span> by{" "}
        <ExternalLink href="https://alvar.dev?utm_source=neurodiversity.wiki">
          Alvar Lagerlöf
        </ExternalLink>{" "}
        in hopes of better understanding of mental disabilities.
      </p>
      <ul className="flex flew-row space-x-4">
        <li>
          <a href="https://github.com/alvarlagerlof/neurodiversity">
            <img src="/logos/github.svg" alt="Github logo" />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/alvarlagerlof">
            <img src="/logos/twitter.svg" alt="Twitter logo" />
          </a>
        </li>
      </ul>
    </footer>
  );
}
