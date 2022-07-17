import styles from "../../styles/pages/Project.module.css";
import NudeLayout from "../../components/layouts/NudeLayout";

export default function ShoppingCart() {
  return (
    <>
      <div className={styles.title}>
        <h1>Shopping Cart</h1>
      </div>
    </>
  );
}

ShoppingCart.getLayout = function getLayout(ShoppingCart) {
  return <NudeLayout>{ShoppingCart}</NudeLayout>;
};
