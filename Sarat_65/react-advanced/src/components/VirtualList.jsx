export default function VirtualList() {
  const items = Array.from({ length: 1000 }, (_, i) => i);
  return (
    <div style={{ height: 200, overflow: "auto" }}>
      {items.map(i => (
        <div key={i}>{i}</div>
      ))}
    </div>
  );
}
