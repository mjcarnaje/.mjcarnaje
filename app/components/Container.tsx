import clsx from "clsx";
import { forwardRef } from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const OuterContainer = forwardRef<HTMLDivElement, ContainerProps>(
  function OuterContainer({ className, children, ...props }, ref) {
    return (
      <div ref={ref} className={clsx("sm:px-8", className)} {...props}>
        <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
      </div>
    );
  }
);

const InnerContainer = forwardRef<HTMLDivElement, ContainerProps>(
  function InnerContainer({ className, children, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={clsx("relative px-4 sm:px-8 lg:px-12", className)}
        {...props}
      >
        <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
      </div>
    );
  }
);

interface ContainerComponent
  extends React.ForwardRefExoticComponent<
    ContainerProps & React.RefAttributes<HTMLDivElement>
  > {
  Outer: React.ForwardRefExoticComponent<
    ContainerProps & React.RefAttributes<HTMLDivElement>
  >;
  Inner: React.ForwardRefExoticComponent<
    ContainerProps & React.RefAttributes<HTMLDivElement>
  >;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  function Container({ children, ...props }, ref) {
    return (
      <OuterContainer ref={ref} {...props}>
        <InnerContainer>{children}</InnerContainer>
      </OuterContainer>
    );
  }
) as ContainerComponent;

Container.Outer = OuterContainer;
Container.Inner = InnerContainer;
