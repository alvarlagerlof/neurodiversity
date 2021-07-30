import Heading from "../components/blocks/Heading";
import Text from "../components/blocks/Text";
import ContentInset from "../components/ContentInset";
import Wrapper from "../components/Wrapper";

export default function Page404() {
  return (
    <Wrapper>
      <ContentInset size="normal">
        <Heading.H1>404</Heading.H1>
        <Text>Page not found</Text>
      </ContentInset>
    </Wrapper>
  );
}
