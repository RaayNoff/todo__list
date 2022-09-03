import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { MaxWidthContainer } from "../../../types/enums/MaxWidthContainer";
import Switcher from "./additional/switcher";
import s from "./homeContent.module.scss";

const HomeContent = () => {
  const { status: isSidebarEnabled } = useTypedSelector(
    (state) => state.sidebar
  );
  return (
    <main className={s.homeContent}>
      <div
        className={
          isSidebarEnabled
            ? `${MaxWidthContainer.HOME_CONTENT} ${MaxWidthContainer.HOME_CONTENT}__se`
            : `${MaxWidthContainer.HOME_CONTENT}`
        }
      >
        <section className={s.homeContent__content}>
          <Switcher />
        </section>
      </div>
    </main>
  );
};

export default HomeContent;
