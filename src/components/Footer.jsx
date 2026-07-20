export const Footer = () => {
  return (
    <footer className="py-8 sm:py-12 px-4 bg-card relative border-t border-border mt-12">
      <div className="container mx-auto max-w-5xl">
        <p className="text-sm text-muted-foreground text-center">
          &copy; {new Date().getFullYear()} Tanmay Sharma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
