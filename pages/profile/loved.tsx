import ProductList from "@components/product-list";
import type { NextPage } from "next";
import Item from "../../components/item";
import Layout from "../../components/layout";

const Loved: NextPage = () => {
  return (
    <Layout title="판매내역" canGoBack>
      <div className="flex flex-col space-y-5 divide-y  pb-10">
        <ProductList kind="favs" />
      </div>
    </Layout>
  );
};

export default Loved;
