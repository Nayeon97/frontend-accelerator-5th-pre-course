import { ListRow } from 'tosslib';
import { ProductInfoTexts } from 'components/ProductInfoTexts';
import { SavingsProduct } from 'type';

interface RecommendedProductListProps {
  products: SavingsProduct[];
}

export function RecommendedProductList({ products }: RecommendedProductListProps) {
  const byHighestRate = (a: SavingsProduct, b: SavingsProduct) => b.annualRate - a.annualRate;

  const recommendedProducts = [...products].sort(byHighestRate).slice(0, 2);

  return (
    <>
      {recommendedProducts.map(product => (
        <ListRow key={product.id} contents={<ProductInfoTexts product={product} />} />
      ))}
    </>
  );
}
