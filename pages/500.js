import Heading from "components/Heading";
import Text from "components/Text";
import ContentInset from "components/ContentInset";
import Wrapper from "components/Wrapper";

export default function Page500() {
  return (
    <Wrapper>
      <ContentInset size="normal">
        <Heading.H1>500</Heading.H1>
        <Text>Internal Server Error</Text>
      </ContentInset>
    </Wrapper>
  );
}
