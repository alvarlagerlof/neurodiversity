import CollapsibleList from "../components/CollapsibleList";
import Quote from "../components/Quote";
import ExternalLink from "../components/ExternalLink";

export default function Content() {
  const isNot = [
    {
      summary: "A joke/meme",
      details: "Nulla excepteur aute exercitation officia qui quis.",
    },
    {
      summary: "Being annoyed",
      details: "Ea ex nostrud in mollit labore sint irure eiusmod dolor in.",
    },
    {
      summary: "A choice",
      details:
        "Aliquip aliquip exercitation do aliqua ut magna et Lorem velit.",
    },
  ];

  const is = [
    {
      summary: "Hard",
      details:
        "Ut quis cillum voluptate anim enim sunt labore ullamco sunt ea et non do est.",
    },
    {
      summary: "Time-consuming",
      details:
        "Dolor voluptate ullamco sit adipisicing duis laborum eu laborum.",
    },
    {
      summary: "Unwanted",
      details: "Irure esse non ut enim labore.",
    },
  ];

  const defenition = [
    {
      summary: "Obesessions",
      details: (
        <ol className="list-decimal	ml-4 space-y-2 mb-4">
          <li>
            Recurrent and persistent thoughts, urges or images that are
            experienced, at some time during the disturbance, as intrusive,
            unwanted, and that in most individuals cause marked anxiety or
            distress.
          </li>
          <li>
            The individual attempts to ignore or suppress such thoughts, urges,
            or images, or to neutralize them with some thought or action (i.e.,
            by performing a compulsion).
          </li>
        </ol>
      ),
    },
    {
      summary: "Compulsions",
      details: (
        <ol className="list-decimal	ml-4 space-y-2">
          <li>
            Repetitive behaviors (e.g., hand washing, ordering checking) or
            mental acts (e.g., praying, counting, repeating words silently) that
            the person feels driven to perform in response to an obsession, or
            according to the rules that must be applied rigidly.
          </li>
          <li>
            The behaviors or mental acts are aimed at preventing or reducing
            distress or preventing some dreaded event or situation. However,
            these behaviors or mental acts either are not connected in a
            realistic way with what they are designed to neutralize or prevent
            or are clearly excessive.
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
              <h2 className="font-display font-semibold leading-snug text-3xl sm:text-4xl md:text-5xl max-w-[18ch] mb-4">
                Hey there! That's probably not OCD
              </h2>
              <p className="mb-2">
                Most likely, you’ve heard the term OCD being used. Howerver,{" "}
                <strong>
                  most people don't know actually know what it is.
                </strong>
                . No worries! We’ll clear it up here.
              </p>

              <p className="mb-4">
                OCD stands for <strong>obsessive-compulsive disorder</strong>.
                But what does that mean? The{" "}
                <ExternalLink href="https://en.wikipedia.org/wiki/DSM-5">
                  DSM-5
                </ExternalLink>{" "}
                <ExternalLink href="https://www.ncbi.nlm.nih.gov/books/NBK519704/table/ch3.t13">
                  defines
                </ExternalLink>{" "}
                it as a presence of:
              </p>
              <CollapsibleList content={defenition} />
            </header>

            <section className="rounded-xl bg-secondary-light p-4 -m-4 border-4 border-secondary-dark">
              <div className="flex flex-row space-x-2">
                <img src="/cross.svg" />
                <h3 className="font-display text-xl md:text-2xl">
                  OCD is NOT:
                </h3>
              </div>
              <CollapsibleList content={isNot} />

              <div className="flex flex-row space-x-2 mt-8">
                <img src="/check.svg" />
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
                <strong>spreads an incorrect defenition</strong>. This is bad
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
                <li>It is disrespectful for people with OCD.</li>
              </ul>
            </section>

            <section>
              <h3 className="font-display text-xl md:text-2xl mb-2">
                What can I do?
              </h3>
              <ol className="list-decimal	ml-4 space-y-2 mb-8">
                <li>
                  <p className="mb-2">
                    Avoid using the word OCD for things that aren't. Phrases
                    that should be avoided look like this:
                  </p>

                  <ul className="mb-4 flex flex-row flex-wrap gap-2">
                    <li>
                      <Quote>I'm so OCD</Quote>
                    </li>
                    <li>
                      <Quote>That is triggering my OCD</Quote>
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
                  mayority of them are disrespectful to people suffering.
                </li>

                <li>
                  Spread awareness! The next time you hear a joke or incorrect
                  use, speak up and link them this website or other excellent{" "}
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
          </article>
        </main>
      </div>

      <footer className="flex flex-col items-center py-8 px-4 bg-gray-200">
        <div className="w-full max-w-3xl flex flex-row space-x-2">
          <p>Made by</p>
          <ExternalLink href="https://twitter.com/alvarlagerlof">
            @alvarlagerlof
          </ExternalLink>
        </div>
      </footer>
    </div>
  );
}
