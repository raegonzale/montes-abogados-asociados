import PropTypes from "prop-types";
import useTheme from "../../constants/useTheme";

const sizes = {
  standard: { back: "text-[60px] xl:text-[100px]", front: "text-[50px] xl:text-[70px]" },
  solutions: { back: "text-[60px] xl:text-[100px]", front: "text-[40px] xl:text-[70px]" },
  contact: { back: "text-[50px] xl:text-[100px]", front: "text-[40px] xl:text-[70px]" },
};

export const PageTitle = ({ title, size = "standard" }) => {
  const { theme } = useTheme();
  const textSize = sizes[size];

  return (
    <div className="h-[180px] xl:h-[250px]" style={{ background: theme.background }}>
      <div className="mx-auto flex w-auto justify-items-start px-6 pt-14 xl:h-[120px] xl:items-center xl:justify-left xl:pl-[100px] xl:pt-0">
        <div className="relative">
          <div
            aria-hidden="true"
            style={{ color: theme.primary, opacity: 0.2 }}
            className={`absolute pl-8 pt-5 font-abc2 font-black xl:pl-10 ${textSize.back}`}
          >
            {title}
          </div>
          <h1
            style={{ color: theme.primary }}
            className={`absolute pt-14 font-abc2 font-black xl:pt-20 ${textSize.front}`}
          >
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

PageTitle.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Object.keys(sizes)),
};
