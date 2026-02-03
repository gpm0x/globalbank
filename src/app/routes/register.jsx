import PageLayout from '@components/layout/page-layout';
import AuthSection from '@features/auth/components/auth-section';

function RegisterPage() {
  return (
    <PageLayout title="GlobalBank">
      <AuthSection type="register" />
    </PageLayout>
  );
}

export default RegisterPage;