import 'react-notion-x/src/styles.css';

export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className="container min-h-screen space-y-6 py-20">
      {children}
    </article>
  );
}
