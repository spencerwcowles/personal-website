import { cn } from "../../lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-6 md:grid-cols-2",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  technologies,
  links,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  technologies?: string;
  links?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento flex flex-col justify-between space-y-4 rounded-2xl border border-neutral-200/50 bg-neutral-50/50 p-6 transition duration-200 hover:bg-neutral-100/80 hover:border-neutral-300 dark:border-gray-700 dark:bg-neutral-900/50 dark:hover:bg-neutral-900/80 dark:hover:border-gray-500",
        className
      )}
    >
      <div className="space-y-4">
        {header && (
          <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
            {header}
          </div>
        )}
        <div>
          <h3 className="mb-3 font-sans text-xl font-semibold text-neutral-900 dark:text-neutral-200">
            {title}
          </h3>
          <p className="mb-4 font-sans text-sm font-normal text-neutral-600 dark:text-neutral-400 line-clamp-3">
            {description}
          </p>
          {technologies && (
            <div className="flex flex-wrap gap-2">
              {technologies.split(" · ").map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-2.5 py-1 text-xs text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
      {links && <div className="flex gap-4 pt-2">{links}</div>}
    </div>
  );
};
