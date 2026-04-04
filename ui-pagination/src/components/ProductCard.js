export default function ProductCard({ title, img }) {
  return (
    // Wrapper for individual product
    <div className="product-card">
      {/* Product image */}
      <img
        className="product-img"
        src={img} // Image URL
        alt={title} // Improves accessibility (screen readers)
      />

      {/* Product title */}
      <span>{title}</span>
    </div>
  );
}
