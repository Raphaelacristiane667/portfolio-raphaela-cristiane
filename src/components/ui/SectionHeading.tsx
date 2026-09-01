interface SectionHeadingProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  align?: "center" | "left";
  id?: string;
}

export default function SectionHeading({
  title,
  highlight,
  subtitle,
  align = "center",
  id,
}: SectionHeadingProps): React.ReactElement {
  return (
    <header
      className={`section-heading section-heading--${align}`}
      id={id}
    >
      <h2 className="section-heading__title">
        {highlight ? (
          <>
            <span className="theme-heading-muted">{title}</span>
            <span className="text-gradient">{highlight}</span>
          </>
        ) : (
          <span className="text-gradient">{title}</span>
        )}
      </h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
    </header>
  );
}
