import { useContext } from "react";
import { useParams } from "react-router-dom";
import { BlogsContext } from "../../../context/BlogsContext";
import { SiteLayout } from "../../common/SiteLayout";
import useTheme from '../../../constants/useTheme';

const BlogDetail = () => {
  const { dataBlogId } = useParams();
  const dataBlogs = useContext(BlogsContext);
  const blogSelected = dataBlogs.find((blog) => blog.id === Number(dataBlogId));
  const { theme } = useTheme();

  if (!blogSelected) {
    return <div>Blog no encontrado</div>;
  }

  
  return (
    <SiteLayout>
      <div style={{ background: theme.background, color:theme.textPrimary }} className="h-auto pt-24 flex flex-col xl:px-0">
        <div className="flex flex-col items-center xl:justify-evenly xl:flex xl:flex-row">
          <img src={blogSelected.img} alt={blogSelected.title} />
          <h1 className=" px-6 pt-6 leading-none drop-shadow-xl max-w-[600px] font-abc2 font-black text-center text-blue xl:text-end text-[50px] items-center justify-center">
            {blogSelected.title}
          </h1>
        </div>

        <div className=" px-6 text-[20px] text-center leading-tight flex flex-col items-center justify-center py-6 space-y-5 xl:px-[200px]">
          <p>{blogSelected.content1}</p>
          <p>{blogSelected.content2}</p>
          <p>{blogSelected.content3}</p>
          <p>{blogSelected.content4}</p>
          <div className="self-stretch">
            <p className=" px-6 font-black text-[15px] text-right">
              {blogSelected.author}
            </p>
            <p className="px-6 font-ligth text-[15px] text-right">
              {blogSelected.date}
            </p>
          </div>
        </div>

      </div>
    </SiteLayout>
  );
};

export default BlogDetail;
