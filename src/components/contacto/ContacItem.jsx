export const ContactItem = ({ item }) => {
  return (
    <a
      href={item.href}
      referrerpolicy="no-referrer"
      className="group lg:w-3/4 h-1/2 flex flex-col justify-center items-center hover:cursor-pointer transition-all duration-300"
    >
      <span
        className={`${item.icon} text-2xl md:text-4xl lg:text-5xl text-secondary group-hover:scale-110`}
      >
        {/* Icon will be displayed here */}
      </span>
      <p className="flex justify-center items-center text-secondary_dark font-light">
        <span className="icon-[pajamas--dash] text-sm md:text-base lg:text-lg text-primary"></span>
        {item.title}
      </p>
      <p className="text-base md:text-lg  text-secondary_dark font-semibold tracking-wide">
        {item.description}
      </p>
    </a>
  );
};
