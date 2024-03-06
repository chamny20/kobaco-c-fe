export default function ModalBody({
  style,
  children,
}: {
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        // backgroundColor: '#f8fafb',
        width: '100%',
        ...style,
        maxHeight: `calc(100vh/1.4)`,
        overflowY: 'auto',
      }}
    >
      {children}
    </div>
  );
}
