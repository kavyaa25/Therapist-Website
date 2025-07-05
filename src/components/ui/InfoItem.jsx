const InfoItem = ({ title, children, icon = "dot" }) => (
  <div className="flex items-start space-x-3">
    <div className={`${icon === "dot" ? "w-2 h-2 mt-2" : "w-5 h-5 mt-0.5"} bg-primary rounded-full flex-shrink-0`} />
    <div>
      {title && <h3 className="font-semibold text-foreground">{title}</h3>}
      <div className="text-muted-foreground">{children}</div>
    </div>
  </div>
);

export default InfoItem;