import UserInfo from "@/components/User";
import Container from "@/layouts/Container";

const DashboardPage: React.FC = () => {
  return (
    <>
      <Container place="Dashboard">
        <UserInfo />
      </Container>
    </>
  );
};

export default DashboardPage;
