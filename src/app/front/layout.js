import { getCategories } from '@/api-service/categories';
import Footer from '@/components/front/Footer';
import Header from '@/components/front/Header';

export default async function FrontLayout({ children }) {
  const categories = await getCategories();
  return (
    <>
      <Header categories={categories} />
      {children}
      <Footer />
    </>
  );
}
