import CollapsibleList from "../components/CollapsibleList";
import Quote from "../components/Quote";
import ExternalLink from "../components/ExternalLink";

export default function Content() {
  const isNot = [
    {
      summary: "Something to joke about",
      details:
        "OCD is a mental illness. It's not respectful to joke or spread memes about it.",
    },
    {
      summary: "Being upset at asymmetrical things",
      details:
        "Feeling upset when something is not aligned correctly is human, not having OCD.",
    },
    {
      summary: "A personality type",
      details:
        "People can't be \"OCD\". It's a mental illness, you either have it or you don't",
    },
    {
      summary: "A choice",
      details:
        'We all have things we choose to obsess over. We might rewrite a message to make it just right or replay a moment in our heads multiple times. But someone with OCD has no ability to "snap out of it". They feel like there is nothing they can do but continue thinking about it. The brain is stuck and driven by anxiety.',
    },
  ];

  const is = [
    {
      summary: "Taxing",
      details:
        "Having OCD means that you feel like you have no option but to do something that you do not find logical or have any pleasure doing.",
    },
    {
      summary: "Time-consuming",
      details:
        "Dealing with OCD means that time you would rather spend on other things must instead be spend managing you symptoms. The criteria for being diagnosed with OCD includes a requirement that it takes up at least 1 hour of your day.",
    },
    {
      summary: "Unwanted",
      details:
        "OCD is not something to be jealous of. Everyone with OCD wishes that they didn't have it",
    },
  ];

  const definition = [
    {
      summary: "Obsessions",
      details: (
        <ol className="list-decimal	ml-4 space-y-2 mb-4">
          <li>
            “Recurrent and persistent thoughts, urges or images that are
            experienced, at some time during the disturbance, as intrusive,
            unwanted, and that in most individuals cause marked anxiety or
            distress.”
          </li>
          <li>
            “The individual attempts to ignore or suppress such thoughts, urges,
            or images, or to neutralize them with some thought or action (i.e.,
            by performing a compulsion).”
          </li>
        </ol>
      ),
    },
    {
      summary: "Compulsions",
      details: (
        <ol className="list-decimal	ml-4 space-y-2">
          <li>
            “Repetitive behaviors (e.g., hand washing, ordering checking) or
            mental acts (e.g., praying, counting, repeating words silently) that
            the person feels driven to perform in response to an obsession, or
            according to the rules that must be applied rigidly.”
          </li>
          <li>
            “The behaviors or mental acts are aimed at preventing or reducing
            distress or preventing some dreaded event or situation. However,
            these behaviors or mental acts either are not connected in a
            realistic way with what they are designed to neutralize or prevent
            or are clearly excessive.”
          </li>
        </ol>
      ),
    },
  ];

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 flex flex-col items-center py-8 px-4">
        <nav className="flex flex-row space-x-4 items-center max-w-3xl mb-16 md:mb-24 w-full">
          <img
            className="w-8 md:w-10"
            src="/logo.svg"
            alt="Logo showing head on purple background"
          />
          <h1 className="font-display font-semibold text-xl md:text-2xl">
            notocd.com
          </h1>
        </nav>

        <main className="max-w-3xl">
          <article className="space-y-12">
            <header>
              <h2 className="font-display font-semibold leading-snug text-3xl sm:text-4xl md:text-5xl max-w-[14ch] mb-4">
                Hey, that's probably not OCD
              </h2>
              <p className="mb-2">
                You've most likely heard of OCD. However,{" "}
                <strong>most people don't actually know what it is</strong>. No
                worries! We’ll clear that up here.
              </p>

              <p className="mb-4">
                OCD stands for <strong>obsessive-compulsive disorder</strong>.
                But what does that mean? OCD is{" "}
                <ExternalLink href="https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t13">
                  defined
                </ExternalLink>{" "}
                by the{" "}
                <ExternalLink href="https://en.wikipedia.org/wiki/DSM-5">
                  DSM-5
                </ExternalLink>{" "}
                as a presence of:
              </p>
              <CollapsibleList content={definition} />
            </header>

            <section className="rounded-xl bg-secondary-light p-4 lg:-m-4 border-4 border-secondary-dark">
              <div className="flex flex-row space-x-2">
                <img src="/cross.svg" alt="Cross icon" />
                <h3 className="font-display text-xl md:text-2xl">
                  OCD is NOT:
                </h3>
              </div>
              <CollapsibleList content={isNot} />

              <div className="flex flex-row space-x-2 mt-8">
                <img src="/check.svg" alt="Check icon" />
                <h3 className="font-display text-xl md:text-2xl">OCD is:</h3>
              </div>
              <CollapsibleList content={is} />
            </section>

            <section>
              <h3 className="font-display text-xl md:text-2xl mb-2">
                Why should I care?
              </h3>
              <p className="mb-4">
                Talking about or mentioning OCD as the reason for you being
                annoyed about something{" "}
                <strong>spreads an incorrect definition</strong>. This is bad
                for multiple reasons:
              </p>
              <ul className="list-disc ml-4 space-y-1">
                <li>
                  It trivializes the condition by making it seem less painful
                  than it is, <strong>invalidating</strong> the experience for
                  people suffering from it.
                </li>
                <li>
                  It makes it harder for people suffering to{" "}
                  <strong>get diagnosed</strong>.
                </li>
                <li>It's disrespectful for people with OCD.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-display text-xl md:text-2xl mb-2">
                What can I do?
              </h3>
              <ol className="list-decimal	ml-4 space-y-2 mb-8">
                <li>
                  <p className="mb-2">
                    Avoid using the word OCD for things that aren't. Here are
                    some examples of phrases that should be avoided:
                  </p>

                  <ul className="mb-4 flex flex-row flex-wrap gap-2">
                    <li>
                      <Quote>I'm so OCD</Quote>
                    </li>
                    <li>
                      <Quote>___ is triggering my OCD</Quote>
                    </li>
                    <li>
                      <Quote>My OCD can't handle ___</Quote>
                    </li>
                    <li>
                      <Quote>___ is giving me an OCD attack</Quote>
                    </li>
                    <li>
                      <Quote>I'm so OCD about ___</Quote>
                    </li>
                  </ul>
                </li>
                <li>
                  Stop spreading and endorsing jokes/memes about OCD. The vast
                  majority of them are disrespectful to people suffering.
                </li>

                <li>
                  Spread awareness! The next time you hear a joke or incorrect
                  use, speak up and link them to this website or other excellent{" "}
                  <ExternalLink href="https://www.youtube.com/watch?v=EXx20g2Poe8">
                    videos
                  </ExternalLink>{" "}
                  and{" "}
                  <ExternalLink href="https://iocdf.org/blog/2013/03/01/5-things-ocd-is-not/">
                    articles
                  </ExternalLink>
                  .
                </li>
              </ol>

              <strong className="block mb-16">Thank you for reading!</strong>
            </section>

            <footer className="flex flex-col md:flex-row items-center md:justify-between  bg-gray-200 p-4 lg:-m-4 rounded-lg">
              <p className="text-center md:text-left mb-4 md:mb-0">
                Made with <span>❤</span> by{" "}
                <ExternalLink href="https://alvar.dev">
                  Alvar Lagerlöf
                </ExternalLink>{" "}
                in hopes of clearing up OCD.
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
          </article>
        </main>
      </div>
    </div>
  );
}
