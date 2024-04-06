import React, { useEffect } from "react";

const RefundPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4 text-[#051b35]">
      <h1 className="text-3xl font-bold mb-4">Refund Policy</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Refund Eligibility</h2>
          <p className="text-lg mb-4">
            To be eligible for a refund, the product must be unused and in the
            same condition as when it was received, with all original packaging
            intact.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Refund Process</h2>
          <p className="text-lg mb-4">
            To request a refund, please contact our customer support team at
            <a href="mailto:support@yourcompany.com" className="underline">
              support@yourcompany.com
            </a>
            with your order number and reason for the refund. Our team will
            review your request and provide instructions for returning the
            product. Once we receive the product and verify its condition, we
            will process the refund to your original payment method.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <h2 className="text-xl font-bold mb-2">Refund Exceptions</h2>
          <p className="text-lg mb-4">
            There are certain situations where a refund may not be granted, such
            as:
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li>The product has been used or damaged in any way</li>
            <li>The product is not in its original condition or packaging</li>
            <li>
              The product has been returned more than 30 days after purchase
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-2">Exchanges</h2>
          <p className="text-lg mb-4">
            If you would like to exchange your product for a different item,
            please contact our customer support team at
            <a href="mailto:support@yourcompany.com" className="underline">
              support@yourcompany.com
            </a>
            with your order number and the item you would like to exchange for.
            We will review your request and provide instructions for returning
            the original product and placing a new order for the desired item.
          </p>
        </div>
      </div>
      <p className="text-lg mb-4">
        If you have any questions or concerns about our refund policy, please
        contact our customer support team at
        <a href="mailto:support@yourcompany.com" className="underline">
          support@yourcompany.com
        </a>
        or call us at 1-800-123-4567.
      </p>
    </div>
  );
};

export default RefundPage;
