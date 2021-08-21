import Text from "components/Text";
import ContentInset from "components/ContentInset";
import Wrapper from "components/Wrapper";
import Typography from "components/Typography";

export default function Error404() {
  return (
    <Wrapper>
      <ContentInset size="normal">
        <Typography.Title>404</Typography.Title>
        <Text>Page not found</Text>
      </ContentInset>
    </Wrapper>
  );
}
