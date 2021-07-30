import Typography from "components/Typography";
import Text from "components/Text";
import ContentInset from "components/ContentInset";
import Wrapper from "components/Wrapper";

export default function Error500() {
  return (
    <Wrapper>
      <ContentInset size="normal">
        <Typography.Title>500</Typography.Title>
        <Text>Internal Server Error</Text>
      </ContentInset>
    </Wrapper>
  );
}
