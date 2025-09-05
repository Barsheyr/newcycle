import React from "react";

const SingleProduct = () => {
  return (
    <div className="flex items-center justify-center h-[100vh] px-4">
      <div className="text-center rounded-2xl space-y-10">
        <h1 className="md:text-6xl text-3xl font-bold text-gray-800 mb-4">
          🚧 Page Under Construction
        </h1>
        <p className="text-gray-600 mb-6">
          This page is currently being built and will soon display detailed
          product information including images, pricing, descriptions, and
          customer reviews.
          <br />
          <br />
          We are actively working on this section to ensure a smooth and
          user-friendly shopping experience. Thank you for your patience while
          we improve and finalize this page.
        </p>
        <div className="text-sm text-gray-500">
          Last updated: {new Date().toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
