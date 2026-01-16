import PageLayout from '@components/layout/page-layout';
import PricingSection from '@features/pricing/components/pricing-section';
import FAQSection from '@features/pricing/components/faq-section';

function PricingPage() {
  return (
    <PageLayout title="Preços - Global Bank">
      <PricingSection />
      <FAQSection />
    </PageLayout>
  );
}

export default PricingPage;