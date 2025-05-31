import CategorySkeleton from "../../feedback/skeletons/CategorySkeleton/CategorySkeleton";
import ProductSkeleton from "../../feedback/skeletons/ProductSkeleton/ProductSkeleton";
import CartSkeleton from "../../feedback/skeletons/CartSkeleton/CartSkeleton";
import LottieHandler from "../../feedback/LottieHandler/LottieHandler";

import { TLoading } from "../../../types";
import TableSkeleton from "../TableSkeleton/TableSkeleton";

const skeletonsTypes = {
  category: CategorySkeleton,
  product: ProductSkeleton,
  cart: CartSkeleton,
  table:TableSkeleton
};

type LoadingProps = {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
  type?: keyof typeof skeletonsTypes;
};

const Loading = ({
  status,
  error,
  children,
  type = "category",
}: LoadingProps) => {
  const Component = skeletonsTypes[type];

  if (status === "pending") {
    return <Component />;
  }
  if (status === "failed") {
    return (
      <div>
        <LottieHandler type="error" message={error as string} />
      </div>
    );
  }
  return <div>{children}</div>;
};

export default Loading;