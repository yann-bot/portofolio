"use client";

const NestedSquares = ({
  size = 100,
  strokeColor = "#A78BFA",
  strokeWidth = 3,
  levels = 5, // Nombre de carrés imbriqués
  spacing = 20 // Espacement entre les carrés
}) => {
  // Génère les carrés imbriqués
  const squares = Array.from({ length: levels }).map((_, i) => {
    const offset = i * spacing;
    const colorIntensity = 180 - i * 20; // Variation légère de couleur
    const color = `rgb(${colorIntensity}, ${colorIntensity / 2}, 250)`;

    return (
      <rect
        key={i}
        x={offset}
        y={offset}
        width={size - 2 * offset}
        height={size - 2 * offset}
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
      />
    );
  });

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className="bg-gray-900"
    >
      {squares}
    </svg>
  );
};

export default NestedSquares;
