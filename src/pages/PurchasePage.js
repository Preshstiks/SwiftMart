import React, { useEffect } from "react";

const PurchasePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="flex flex-col items-center justify-center p-4 text-[#051b35]">
      <h1 className="text-3xl font-bold mb-4">How to Purchase</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Step 1: Browse Products</h2>
          <p className="text-lg mb-4">
            Start by browsing our wide selection of products. Click on the
            product categories to explore different options available.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Step 2: Add to Cart</h2>
          <p className="text-lg mb-4">
            Once you find a product you like, click on the "Add to Cart" button
            to add it to your shopping cart. You can continue shopping or
            proceed to checkout.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Step 3: Review Cart</h2>
          <p className="text-lg mb-4">
            Review the items in your cart to make sure everything is correct.
            You can update quantities, remove items, or apply any discount
            codes.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Step 4: Checkout</h2>
          <p className="text-lg mb-4">
            Proceed to checkout by entering your shipping and payment
            information. Review your order one last time before confirming the
            purchase.
          </p>
        </div>
      </div>
      <p className="text-lg mb-4">
        If you encounter any issues or have questions during the purchasing
        process, feel free to contact our customer support team at
        <a href="mailto:support@yourcompany.com" className="underline">
          support@yourcompany.com
        </a>
        for assistance.
      </p>
    </div>
  );
};

export default PurchasePage;
