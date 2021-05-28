import Head from "next/head";

export function PlausibleProvider({ children }) {
  const enabled = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        {enabled && (
          <script
            defer
            data-domain="neurodiversity.wiki"
            src="/js/script.js"
          ></script>
        )}
      </Head>
      {children}
    </>
  );
}

export function usePlausible() {
  return function (eventName, ...rest) {
    return window.plausible?.(eventName, rest[0]);
  };
}
