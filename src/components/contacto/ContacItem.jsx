export const ContactItem = ({ item }) => {
  return (
    <a
      href={item.href}
      rel="noopener noreferrer"
      className="group flex flex-col justify-center items-center gap-2 p-5 bg-white rounded-2xl border border-primary_light hover:border-primary_brand hover:shadow-sm transition-all duration-300 text-center"
    >
      <span className={`${item.icon} text-3xl text-secondary_brand group-hover:scale-110 transition-transform duration-300`}></span>
      <p className="text-xs font-semibold tracking-wide uppercase text-secondary_dark/50">{item.title}</p>
      <p className="text-sm font-medium text-secondary_dark leading-tight">{item.description}</p>
    </a>
  );
};
