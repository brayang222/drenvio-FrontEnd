export const StoreIcon = ({ classes }: { classes: string }) => {
  return (
    <div className="flex items-center">
      <div className={classes}>
        <i
          className="icon-[tdesign--store] h-6 w-6"
          role="img"
          aria-hidden="true"
        />
      </div>
      <span className="text-xl font-bold text-secondary">STORE</span>
    </div>
  );
};
